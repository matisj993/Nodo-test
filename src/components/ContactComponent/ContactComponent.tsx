"use client";

import styles from "./ContactComponent.module.scss";
import { motion, Variants } from "framer-motion";

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
    opacity: 0,
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

export const ContactComponent = () => {
  return (
    <motion.div initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}id="contacto" className={styles["container"]}>
      <motion.div initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className={styles["half-blue"]}>
        <motion.form variants={infoAnimation}className={styles["form-container"]}>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="nombre">
              Nombre:
            </label>
            <input
              placeholder="Escribir aqui..."
              className={styles["input"]}
              type="text"
              id="nombre"
              name="nombre"
            />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="apellido">
              Apellido:
            </label>
            <input
              placeholder="Escribir aqui..."
              className={styles["input"]}
              type="text"
              id="apellido"
              name="apellido"
            />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="email">
              Email:
            </label>
            <input
              placeholder="Escribir aqui..."
              className={styles["input"]}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="telefono">
              Teléfono:
            </label>
            <input
              placeholder="Escribir aqui..."
              className={styles["input"]}
              type="tel"
              id="telefono"
              name="telefono"
            />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="ciudad">
              Ciudad:
            </label>
            <input
              placeholder="Escribir aqui..."
              className={styles["input"]}
              type="text"
              id="ciudad"
              name="ciudad"
            />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="mensaje">
              Mensaje:
            </label>
            <textarea
              className={styles["input-text-area"]}
              id="mensaje"
              name="mensaje"
              rows={4}
            />
          </div>
          <button className={styles["button"]} type="submit">
            Enviar
          </button>
        </motion.form>
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
          <motion.p variants={infoAnimation} className={styles["subtitle"]}>
            Buscamos juntos la mejor estrategia para vos.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
