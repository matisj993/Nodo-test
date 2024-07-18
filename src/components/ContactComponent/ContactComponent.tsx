"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./ContactComponent.module.scss";
import { motion, Variants } from "framer-motion";
import NotifyComponent from "../NotifyComponent/NotifyComponent";

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.3,
      delay: 0,
    },
  },
};

const infoAnimation: Variants = {
  offscreen: {
    opacity: 1,
    y: -80,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.3,
      delay: 0.5,
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
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
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

    if (name === 'name' || name === 'lastName' || name === 'city') {
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      id="contacto"
      className={styles["container"]}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className={styles["half-blue"]}
      >
        <motion.form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          variants={infoAnimation}
          className={styles["form-container"]}
        >
          <p className={styles["required-text"]}>*Todos los campos son requeridos</p>
          
          <div className={styles["input-row"]}>
            <div className={`${styles["input-container"]} ${styles["input-container-half"]}`}>
              <label className={styles["label"]} htmlFor="name">
                Nombre:
              </label>
              <input
                placeholder="Ej: Marisa"
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
                Apellido:
              </label>
              <input
                placeholder="Ej: López"
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
                Email:
              </label>
              <input
                placeholder="Ej: ejemplo@ejemplo.com"
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
                Teléfono:
              </label>
              <input
                placeholder="Ej: 1158774678"
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
            <label className={styles["label"]} htmlFor="city">
              Ciudad:
            </label>
            <input
              placeholder="Ej: Córdoba"
              className={styles["input"]}
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="message">
              Mensaje:
            </label>
            <textarea
              className={styles["input-text-area"]}
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          
          <button disabled={isButtonDisabled} className={`${styles["button"]} ${isButtonDisabled ? styles["disabled"] : ""}`} type="submit">
            ENVIAR
          </button>
        </motion.form>
        <NotifyComponent notification={notification} />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className={styles["half-white"]}
      >
        <div className={styles["text-container-left"]}>
          <motion.p variants={textVariants} className={styles["section-title"]}>
            CONTACTO
          </motion.p>
          <motion.h2 variants={textVariants} className={styles["title"]}>
            ¡Contactate con nosotros!
          </motion.h2>
          <motion.p variants={textVariants} className={styles["subtitle"]}>
            Buscamos juntos la mejor estrategia para vos.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
