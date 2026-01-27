"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./ContactComponent.module.scss";
import { motion, Variants } from "framer-motion";
import NotifyComponent from "../NotifyComponent/NotifyComponent";
import { useBreakpoints } from '@/app/hooks/useBreakpoints';

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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isButtonDisabled) {
      handleSubmit(e);
    }
  };

  return (
   <div className={styles["container-contact"]} id="contacto">
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
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
                    opacity="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.75 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{ originX: "325px", originY: "325px" }}
                  />
                  {/* Punto del círculo azul - aparece con el trazo */}
                  <motion.g
                    initial={{ rotate: 0, opacity: 0 }}
                    whileInView={{ rotate: 270, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{ originX: "325px", originY: "325px" }}
                  >
                    <circle cx="585" cy="310" r="25" fill="#00C2FF" />
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
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    style={{ originX: "325px", originY: "325px" }}
                  />
                  {/* Punto blanco en la punta del círculo - calculado correctamente */}
                  <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    cx="230"
                    cy="40"
                    r="5"
                    fill="white"
                  />
                </motion.g>
              </svg>
            </div>

            <motion.h2 variants={textVariants} className={styles["title"]}>
              Contacta con<br />
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

            <button
              disabled={isButtonDisabled}
              className={`${styles["button"]} ${isButtonDisabled ? styles["disabled"] : ""}`}
              type="submit"
            >
              Enviar mensaje
            </button>
          </motion.form>
          <NotifyComponent notification={notification} />
        </motion.div>
      </motion.section>
   </div>
  );
};
