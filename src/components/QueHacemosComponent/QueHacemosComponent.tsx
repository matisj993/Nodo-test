'use client'

import styles from "./QueHacemosComponent.module.scss";
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

export const QueHacemosComponent = () => {
  const cards = [
    {
      src: "/img/queHacemos1.svg",
      alt: "Card 1",
      title: "Planificación Estratégica:",
      text: "Definición de objetivos, identificación del PO, selección de canales y elaboración de la estrategia de paid media.",
    },
    {
      src: "/img/queHacemos2.svg",
      alt: "Card 2",
      title: "Gestión de Campañas:",
      text: "Configuración, lanzamiento y seguimiento de las campañas publicitarias en plataformas.",
    },
    {
      src: "/img/queHacemos3.svg",
      alt: "Card 3",
      title: "Optimización de Campañas:",
      text: "Ajustes de segmentación, presupuesto y pujas para mejorar su rendimiento en tiempo real.",
    },
    {
      src: "/img/queHacemos4.svg",
      alt: "Card 4",
      title: "Análisis y Reporting:",
      text: "Evaluación del desempeño, elaboración de informes detallados con métricas clave (CTR, CPC, ROI, etc.) y recomendaciones para futuras campañas.",
    },
    {
      src: "/img/queHacemos5.svg",
      alt: "Card 5",
      title: "Testing y Experimentación:",
      text: "Realización de pruebas A/B, pruebas multivariables y pruebas de creatividades para optimizar resultados.",
    },
    {
      src: "/img/queHacemos6.svg",
      alt: "Card 5",
      title: "Remarketing y Retargeting:",
      text: "Estrategias para llegar nuevamente a usuarios que han interactuado o mostrado interés previamente con la marca.",
    },
  ];

  return (
    <motion.div initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }} className={styles["section-container"]}>
      <div className={styles["title-container"]}>
        <motion.p variants={textVariants} className={styles["title"]}>¿Qué hacemos?</motion.p>
      </div>
      <motion.div variants={containerVariants} className={styles["grid-container"]}>
        {cards.map((card, index) => (
          <motion.div variants={iconVariants}key={index} className={styles["card-container"]}>
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
