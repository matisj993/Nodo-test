"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import styles from "./ContactComponent.module.scss";
import { motion, Variants } from "framer-motion";
import NotifyComponent from "../NotifyComponent/NotifyComponent";
import { useBreakpoints } from '@/app/hooks/useBreakpoints';
import Script from "next/script";

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 200,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 5,
      delay: 0,
    },
  },
};

export const ContactComponent = ({
  handleSubmit,
  notification,
  btnSubmitClicked,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  btnSubmitClicked: boolean;
  notification: {
    content: string;
    isOpen: boolean;
  };
}) => {
  const { isDesktop } = useBreakpoints();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmittingRef = useRef(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneLength = (phone: string) => {
    return phone.length >= 10 && phone.length <= 15;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) ? '' : 'Email inválido. Por favor, ingrese un formato correcto.' });
    }
    if (name === 'phone') {
      setErrors({ ...errors, phone: validatePhoneLength(value) ? '' : 'Teléfono inválido. Por favor, ingrese un número de 10 a 15 dígitos' });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;

    if (name === 'name' || name === 'lastName') {
      if (!/^[a-zA-Z\s]*$/.test(e.key)) {
        e.preventDefault();
      }
    }

    if (name === 'phone') {
      if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    const areAllFieldsValid = 
    Object.values(formData).every(field => field.trim() !== '') &&
    Object.values(errors).every(error => error === '');
    setIsButtonDisabled(!areAllFieldsValid || btnSubmitClicked);
  }, [formData, errors, btnSubmitClicked]);

  useEffect(() => {
    // Function to initialize ReCAPTCHA
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        try {
            // Check if the element exists before rendering
            const container = document.getElementById("recaptcha-container");
            if (container) {
                window.grecaptcha.render("recaptcha-container", {
                  sitekey: "6LdjyjYqAAAAAIwshw1FCgP0hHkL5Xht2s_NiarV", // Test key
                    size: "invisible",
                    badge: "bottomright",
                    callback: (token: string) => {
                      setCaptchaToken(token);
                      if (isSubmittingRef.current && formRef.current) {
                         // Create a synthetic event or call handleSubmit directly if possible
                         // Since handleSubmit expects a FormEvent, we can try to invoke it
                         // But we need to ensure the token is in the DOM or state before this runs.
                         // setCaptchaToken is async, but we can pass the token directly if we modify the logic.
                         // However, the hidden input relies on state.
                         // We can manually set the hidden input value to ensure it's there.
                         const hiddenInput = formRef.current.querySelector('input[name="recaptchaToken"]') as HTMLInputElement;
                         if (hiddenInput) {
                             hiddenInput.value = token;
                         }
                         
                         // We need to call handleSubmit. Since we can't easily create a synthetic FormEvent that matches exactly what React expects and what handleSubmit uses (e.preventDefault),
                         // we can just call handleSubmit with a mock object.
                         handleSubmit({
                             preventDefault: () => {},
                             currentTarget: formRef.current
                         } as unknown as FormEvent<HTMLFormElement>);
                         
                         isSubmittingRef.current = false;
                         window.grecaptcha.reset();
                      }
                    },
                    "expired-callback": () => {
                      setCaptchaToken(null);
                      isSubmittingRef.current = false;
                    }
                  });
            }
        } catch (error) {
            console.error("Error rendering recaptcha", error);
        }
      }
    };

    // Check if grecaptcha is already loaded
    if (window.grecaptcha) {
      loadRecaptcha();
    } else {
      // If not, wait for it (handled by Script onLoad, but just in case)
      // The Script tag below handles the loading.
      // We can also poll or use the ready callback if needed, but Script onLoad is usually sufficient.
      // However, since the script is external, we might need to wait for 'grecaptcha' to be available.
      // We'll use a global callback for the script to call if needed, or just rely on the Script onLoad.
      // Actually, the Script onLoad might fire before the 'render' method is ready if we don't use the 'render=explicit' param properly or if we don't wait for 'grecaptcha.ready'.
      
      // Better approach: define the onload callback
      window.onloadCallback = () => {
        loadRecaptcha();
      }
    }
    
    return () => {
        // Cleanup if necessary
    }
  }, []);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isButtonDisabled) {
        isSubmittingRef.current = true;
        if (window.grecaptcha) {
            window.grecaptcha.execute();
        }
    }
  };

  const circleVariants: Variants = {
    offscreen: {
      pathLength: 0,
      opacity: 0,
    },
    onscreen: (custom: { duration: number; delay?: number }) => ({
      pathLength: 0.75,
      opacity: 1,
      transition: {
        duration: custom.duration,
        delay: custom.delay || 0,
        ease: "easeInOut",
      },
    }),
  };

  const dotVariants: Variants = {
    offscreen: {
      rotate: 0,
      opacity: 0,
    },
    onscreen: {
      rotate: 270,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className={styles["container-contact"]} id="ContactComponent" onViewportEnter={() => document.body.classList.add("show-recaptcha")}
      onViewportLeave={() => document.body.classList.remove("show-recaptcha")}>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        id="contacto"
        className={styles["SubContainer"]}
      >
        {/* Left Side - Animated Circle and Title */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className={styles["half-left"]}
        >
          <div className={styles["text-container-left"]}>
            <div className={styles["svg-container"]}>
              <svg
                width={isDesktop ? "650" : "400"}
                height={isDesktop ? "650" : "400"}
                viewBox="0 0 650 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: "100%", height: "auto" }}
              >
                {/* Círculo azul - carga inicial y luego oscilación lenta */}
                <motion.g
                  style={{ originX: "325px", originY: "325px" }}
                  initial={{ rotate: -90 }}
                  whileInView={{
                    rotate: [-90, -45, -135, -90],
                    transition: {
                      delay: 2,
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <motion.circle
                    cx="325"
                    cy="325"
                    r="260"
                    stroke="url(#paint0_linear_contact)"
                    strokeWidth="40"
                    strokeLinecap="round"
                    strokeDasharray="0 1"
                    variants={circleVariants}
                    custom={{ duration: 2 }}
                    style={{ originX: "325px", originY: "325px" }}
                  />
                  {/* Punto del círculo azul - aparece con el trazo */}
                  <motion.g
                    variants={dotVariants}
                    style={{ originX: "325px", originY: "325px" }}
                  >
                    <circle cx="585" cy="340" r="25" fill="#00C2FF" />
                  </motion.g>
                </motion.g>
                <defs>
                  <linearGradient
                    id="paint0_linear_contact"
                    x1="325"
                    y1="65"
                    x2="325"
                    y2="585"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00C2FF" />
                    <stop offset="1" stopColor="#00C2FF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Círculo blanco - oscilación lenta */}
                <motion.g
                  style={{ originX: "325px", originY: "325px" }}
                  initial={{ rotate: -90 }}
                  whileInView={{
                    rotate: [-90, -80, -100, -90],
                    transition: {
                      delay: 2.5,
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <motion.circle
                    cx="325"
                    cy="325"
                    r="300"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0 1"
                    variants={circleVariants}
                    custom={{ duration: 2.5 }}
                    style={{ originX: "325px", originY: "325px" }}
                  />
                  {/* Punto blanco en la punta del círculo - calculado correctamente */}
                  <motion.circle
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    cx="330"
                    cy="25"
                    r="5"
                    fill="white"
                  />
                </motion.g>
              </svg>
            </div>

            <motion.h2 variants={textVariants} className={styles["title"]}>
              Contactá con<br />
              <span className={styles["title-white"]}>nosotros</span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className={styles["half-right"]}
        >
          <motion.form
            ref={formRef}
            onSubmit={handleFormSubmit}
            encType="multipart/form-data"
            variants={textVariants}
            className={styles["form-container"]}
          >
            <div className={styles["input-row"]}>
              <div className={`${styles["input-container"]} ${styles["input-container-half"]}`}>
                <label className={styles["label"]} htmlFor="name">
                  Nombre*
                </label>
                <input
                  placeholder="Escribí tu nombre"
                  className={styles["input"]}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className={`${styles["input-container"]} ${styles["input-container-half"]}`}>
                <label className={styles["label"]} htmlFor="lastName">
                  Apellido*
                </label>
                <input
                  placeholder="Escribí tu apellido"
                  className={styles["input"]}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>

            <div className={styles["input-row"]}>
              <div className={`${styles["input-container"]} ${styles["input-container-half"]}`}>
                <label className={styles["label"]} htmlFor="email">
                  Correo electrónico*
                </label>
                <input
                  placeholder="Ej: ejemplo@gmail.com"
                  className={styles["input"]}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className={styles["error"]}>{errors.email}</span>}
              </div>
              <div className={`${styles["input-container"]} ${styles["input-container-half"]}`}>
                <label className={styles["label"]} htmlFor="phone">
                  Teléfono*
                </label>
                <input
                  placeholder="Ej: 3514329365"
                  className={styles["input"]}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.phone && <span className={styles["error"]}>{errors.phone}</span>}
              </div>
            </div>

            <div className={styles["input-container"]}>
              <label className={styles["label"]} htmlFor="message">
                Mensaje*
              </label>
              <textarea
                className={styles["input-text-area"]}
                id="message"
                name="message"
                rows={4}
                placeholder="Escribí acá por qué te interesa contactarnos."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

              <input type="hidden" name="recaptchaToken" value={captchaToken || ""} />
              <button
              disabled={isButtonDisabled}
              className={`${styles["button"]} ${isButtonDisabled ? styles["disabled"] : styles["active"]}`}
              type="submit"
            >
              Enviar mensaje
            </button>
          </motion.form>
          <NotifyComponent notification={notification} />
        </motion.div>
        
      </motion.section>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        strategy="lazyOnload"
      />
      <div id="recaptcha-container" className={styles["recaptcha-container"]}></div>
   </motion.div>
  );
};
