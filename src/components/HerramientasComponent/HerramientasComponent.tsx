'use client'

import styles from "./HerramientasComponent.module.scss";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  offscreen: {
  },
  onscreen: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const iconVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

export const HerramientasComponent = () => {
  const icons = [
    {
      src: "/img/GOOGLE TAG.png",
      alt: "Google Tag Manager",
    },
    {
      src: "/img/FACEBOOK.png",
      alt: "Facebook IQ",
    },
    {
      src: "/img/GOOGLE A.png",
      alt: "Google Analytics",
    },
    {
      src: "/img/CHAT.png",
      alt: "ChatGPT",
    },
    {
      src: "/img/googletrends.png",
      alt: "Google Trends",
    },
  ];
  return (
    <div className={styles["container"]}>
      <div className={styles["half-blue"]}>
        <div className={styles["text-container-left"]}>
          <h2 className={styles["title"]}>
            Nos basamos en herramientas que eficientizan nuestra operación.
          </h2>
          <p className={styles["subtitle"]}>
            Desde plataformas de gestión de anuncios hasta herramientas de
            análisis y seguimiento de datos, apoyandonos en tecnología de
            vanguardia para optimizar el rendimiento de las campañas
            publicitarias.
          </p>
        </div>
      </div>
      <div className={styles["vertical-divider-container"]}>
        <div className={styles["vertical-divider"]} />
      </div>
      <div className={styles["half-white"]}>
        <motion.div initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants} className={styles["icons-grid"]}>
          {icons.map((icon, index) => (
            <motion.div variants={iconVariants} className={styles["icon-container"]} key={index}>
              <img className={styles["icon"]} src={icon.src} alt={icon.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
