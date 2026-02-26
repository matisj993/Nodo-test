"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import styles from "./ContactComponent.module.scss";
import { motion, Variants, AnimatePresence } from "framer-motion";
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
  successData,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  btnSubmitClicked: boolean;
  notification: {
    content: string;
    isOpen: boolean;
  };
  successData: {
      tier: string;
      redirectUrl: string;
  } | null;
}) => {
  const { isDesktop } = useBreakpoints();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    proyectoTipo: '',
    madurezDigital: '',
    presupuesto: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    web: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmittingRef = useRef(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneLength = (phone: string) => {
    return phone.length >= 10 && phone.length <= 15;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const isStepValid = () => {
    if (step === 1) return formData.proyectoTipo !== '';
    if (step === 2) return formData.madurezDigital !== '';
    if (step === 3) return formData.presupuesto !== '';
    if (step === 4) {
        return (
            formData.name.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            validateEmail(formData.email) &&
            validatePhoneLength(formData.phone)
        );
    }
    return true;
  };

  useEffect(() => {
    // Function to initialize ReCAPTCHA
    /* 
    const loadRecaptcha = () => {
      // ... reCAPTCHA logic ...
    };
    if (window.grecaptcha) {
      loadRecaptcha();
    } else {
      window.onloadCallback = () => {
        loadRecaptcha();
      }
    }
    */
  }, []);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 4) {
        setStep(step + 1);
    } else if (isStepValid() && !btnSubmitClicked) {
        // Bypass reCAPTCHA for staging/disconnected flow
        handleSubmit(e);
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
        setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
        setStep(step - 1);
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

  const formStepVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
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

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className={styles["half-right"]}
        >
          <AnimatePresence mode="wait">
            {btnSubmitClicked && !successData ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles["loader-container"]}
              >
                <div className={styles["spinner"]}></div>
                <p className={styles["loader-text"]}>Enviando tu solicitud...</p>
              </motion.div>
            ) : successData ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className={styles["success-inline-container"]}
              >
                <div className={styles["success-card-inline"]}>
                  <h2 className={styles["success-title"]}>¡Gracias por enviar!</h2>
                  
                  {successData.tier === "TIER_C" ? (
                      <p className={styles["success-text"]}>
                        Por el volumen de tu inversión, hoy la mejor forma de ayudarte es con <strong>NodoAI</strong>, nuestro experto en pauta.
                      </p>
                  ) : (
                      <p className={styles["success-text"]}>
                          Analizaremos tu caso. <strong>Agendá</strong> una llamada con nuestro equipo comercial para conocer tu ecosistema.
                      </p>
                  )}

                  <a 
                      href={successData.redirectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles["success-button"]}
                  >
                      {successData.tier === "TIER_C" ? "Hablar con NodoAI" : "Agendá ahora"}
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleFormSubmit}
                encType="multipart/form-data"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles["form-container"]}
              >
                <div className={styles["steps-indicator"]}>
                    Paso {step} de 4
                </div>

                {step === 1 && (
                    <motion.div 
                        key="step1"
                        variants={formStepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={styles["step-content"]}
                    >
                        <h3 className={styles["step-title"]}>¿Cuál es el objetivo principal de tu proyecto?</h3>
                        <div className={styles["radio-group"]}>
                            {[
                                { id: "p1-a", value: "E-commerce / Ventas Directas.", label: "E-commerce / Ventas Directas" },
                                { id: "p1-b", value: "Generación de Leads (Servicios, B2B, Real Estate).", label: "Generación de Leads (Servicios, B2B, Real Estate)" },
                                { id: "p1-c", value: "Branding / Posicionamiento de Marca.", label: "Branding / Posicionamiento de Marca" },
                                { id: "p1-d", value: "Marketing Político.", label: "Marketing Político" },
                            ].map((opt) => (
                                <div key={opt.id} className={styles["radio-option"]}>
                                    <input 
                                        type="radio" 
                                        id={opt.id} 
                                        name="proyectoTipo" 
                                        value={opt.value} 
                                        checked={formData.proyectoTipo === opt.value}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor={opt.id}>{opt.label}</label>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div 
                        key="step2"
                        variants={formStepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={styles["step-content"]}
                    >
                        <h3 className={styles["step-title"]}>¿Cuál es tu experiencia actual en pauta digital?</h3>
                        <div className={styles["radio-group"]}>
                            {[
                                { id: "p2-a", value: "Ya invierto en pauta y quiero escalar/optimizar.", label: "Ya invierto en pauta y quiero escalar/optimizar" },
                                { id: "p2-b", value: "Invertí antes pero no obtuve resultados.", label: "Invertí antes pero no obtuve resultados" },
                                { id: "p2-c", value: "Nunca he invertido en publicidad digital.", label: "Nunca he invertido en publicidad digital" },
                            ].map((opt) => (
                                <div key={opt.id} className={styles["radio-option"]}>
                                    <input 
                                        type="radio" 
                                        id={opt.id} 
                                        name="madurezDigital" 
                                        value={opt.value} 
                                        checked={formData.madurezDigital === opt.value}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor={opt.id}>{opt.label}</label>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div 
                        key="step3"
                        variants={formStepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={styles["step-content"]}
                    >
                        <h3 className={styles["step-title"]}>¿Qué presupuesto mensual estiman invertir (ARS)?</h3>
                        <div className={styles["radio-group"]}>
                            {[
                                { id: "p3-a", value: "Menos de $500.000.", label: "Menos de $500.000" },
                            { id: "p3-b", value: "Entre $500.000 y $1.500.000 aproximadamente", label: "Entre $500.000 y $1.500.000 aproximadamente" },
                            { id: "p3-c", value: "Entre $1.500.000 y $2.500.000 aproximadamente", label: "Entre $1.500.000 y $2.500.000 aproximadamente" },
                                { id: "p3-d", value: "Más de $2.500.000.", label: "Más de $2.500.000" },
                            ].map((opt) => (
                                <div key={opt.id} className={styles["radio-option"]}>
                                    <input 
                                        type="radio" 
                                        id={opt.id} 
                                        name="presupuesto" 
                                        value={opt.value} 
                                        checked={formData.presupuesto === opt.value}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor={opt.id}>{opt.label}</label>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div 
                        key="step4"
                        variants={formStepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={styles["step-content"]}
                    >
                        <h3 className={styles["step-title"]}>Por último, tus datos de contacto</h3>
                        <div className={styles["input-row"]}>
                        <div className={`${styles["input-container"]} ${styles["input-container-half"]}`}>
                            <label className={styles["label"]} htmlFor="name">Nombre*</label>
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
                            <label className={styles["label"]} htmlFor="lastName">Apellido*</label>
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
                            <label className={styles["label"]} htmlFor="email">Correo electrónico*</label>
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
                            <label className={styles["label"]} htmlFor="phone">Teléfono*</label>
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
                          <label className={styles["label"]} htmlFor="web">Sitio web</label>
                        <input
                            placeholder="Ej: www.tuempresa.com"
                            className={styles["input"]}
                            type="text"
                            id="web"
                            name="web"
                            value={formData.web}
                            onChange={handleInputChange}
                        />
                        </div>

                        <div className={styles["input-container"]}>
                        <label className={styles["label"]} htmlFor="message">Mensaje (Opcional)</label>
                        <textarea
                            className={styles["input-text-area"]}
                            id="message"
                            name="message"
                            rows={3}
                            placeholder="Escribí acá por qué te interesa contactarnos."
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        </div>
                        
                        <input type="hidden" name="proyectoTipo" value={formData.proyectoTipo} />
                        <input type="hidden" name="madurezDigital" value={formData.madurezDigital} />
                        <input type="hidden" name="presupuesto" value={formData.presupuesto} />
                    </motion.div>
                )}

                <div className={styles["button-container-multi"]}>
                    {step > 1 && (
                        <button 
                            type="button" 
                            onClick={prevStep} 
                            className={styles["button-back"]}
                            disabled={btnSubmitClicked}
                        >
                            Volver
                        </button>
                    )}
                    
                    {step < 4 ? (
                        <button 
                            type="button" 
                            onClick={nextStep} 
                            className={`${styles["button"]} ${!isStepValid() ? styles["disabled"] : styles["active"]}`}
                            disabled={!isStepValid()}
                        >
                            Siguiente
                        </button>
                    ) : (
                        <button
                            disabled={!isStepValid() || btnSubmitClicked}
                            className={`${styles["button"]} ${(!isStepValid() || btnSubmitClicked) ? styles["disabled"] : styles["active"]}`}
                            type="submit"
                        >
                            {btnSubmitClicked ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    )}
                </div>

                <input type="hidden" name="recaptchaToken" value={captchaToken || ""} />
              </motion.form>
            )}
          </AnimatePresence>
          <NotifyComponent notification={notification} />
        </motion.div>
        
      </motion.section>
      {/* ReCAPTCHA disabled for Staging */}
      {/* 
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        strategy="lazyOnload"
      />
      <div id="recaptcha-container" className={styles["recaptcha-container"]}></div>
      */}
   </motion.div>
  );
};
