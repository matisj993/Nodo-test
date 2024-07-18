"use client";
import styles from "./FooterComponent.module.scss";
import { motion, Variants } from "framer-motion";
const textAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 4,
      delay: 0,
    },
  },
};

export const FooterComponent = () => {
  const redes = [
    {
      src: "/img/INSTAGRAM.svg",
      alt: "ig",
      text: "@nodopaidmediasolutions",
      url: "https://www.instagram.com/nodopaidmediasolutions",
    },
    {
      src: "/img/LINKEDIN.svg",
      alt: "linkedin",
      text: "Nodo Paid Media Solutions",
      url: "https://www.linkedin.com/company/nodopaidmediasolution",
    },
    {
      src: "/img/FACEBOOK.svg",
      alt: "fb",
      text: "Nodo Paid Media Solutions",
      url: "https://www.facebook.com/NodoPaidMediaSolutions?_rdr",
    },
  ];
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      
      className={styles["hero"]}
    >
      <motion.div variants={textAnimation}className={styles["info-container"]}>
        <div className={styles["logo-container"]}>
          <img
            src="/img/nodoLogo.svg"
            alt="Nodo Logo"
            className={styles["logo"]}
          />
        </div>
        <div className={styles["text-container"]}>
          <h2 className={styles["title"]}>
            Nodo transforma objetivos en resultados.
          </h2>
        </div>
        <div className={styles["info-contacto"]}>
          <p className={styles["text"]}>
            Avenida Sagrada Familia 1488, Córdoba, Argentina.
          </p>
          <p className={styles["text"]}>+54 351 4422929</p>
          <p className={styles["text"]}>www.nodomedia.com.ar</p>
        </div>
        <div className={styles["socialmedia-container"]}>
          {redes.map((red, index) => (
            <a href={red.url} key={index} className={styles["red-container"]}>
              <div className={styles["icon-container"]}>
                <img className={styles["icon"]} src={red.src} alt={red.alt} />
              </div>
              <div className={styles["social-text-container"]}>
                <p className={styles["text"]}>{red.text}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
