'use client'
import styles from "./ComoLoHacemos.module.scss";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
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
      duration: 1.3,
      delay: 0,
    },
  },
};

const containerVariants: Variants = {
  offscreen: {},
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

export const ComoLoHacemosComponent = () => {
  const cards = [
    {
      src: "/img/estrategia (1).svg",
      alt: "Card 1",
      title: "Estrategia",
      text: "Creamos estrategias de Paid Media basadas en el análisis de datos y en la comprensión de la audiencia objetivo.",
    },
    {
      src: "/img/Campañas.svg",
      alt: "Card 2",
      title: "Creación de campañas",
      text: "Diseñamos e implementamos de manera integral campañas en las diferentes plataformas.",
    },
    {
      src: "/img/seguimiento y analisis.svg",
      alt: "Card 3",
      title: "Seguimiento y análisis",
      text: "Ajustes de segmentación, presupuesto y pujas para mejorar su rendimiento en tiempo real.",
    },
  ];
  return (
    <motion.div initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }} className={styles["container-section"]}>
      <div className={styles["header-section"]}>
        <motion.h2 variants={textVariants} className={styles["title"]}>¿Cómo lo hacemos?</motion.h2>
      </div>
      <motion.div variants={containerVariants} className={styles["grid-container"]}>
        {cards.map((card, index) => (
          <motion.div variants={iconVariants} key={index} className={styles["card-container"]}>
            <div className={styles["image-container"]}>
              <img className={styles["image"]} src={card.src} alt={card.alt} />
            </div>
            <div className={styles["info-container"]}>
              <h3 className={styles["title-card"]}>{card.title}</h3>
              <p className={styles["info-card"]}>{card.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
