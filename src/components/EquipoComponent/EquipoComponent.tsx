'use client'
import styles from "./EquipoComponent.module.scss";
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
        duration: 2,
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
        duration: 2,
        delay: 0,
      },
    },
  };

export const EquipoComponent = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      id="nosotros"
      className={styles["hero"]}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className={styles["text-container"]}
      >
        <motion.p variants={textVariants} className={styles["section-title"]}>
          NOSOTROS
        </motion.p>
        <motion.h2 variants={textVariants} className={styles["title"]}>
          Somos un equipo interdisciplinario a disposición de los objetivos.
        </motion.h2>
        <motion.p variants={infoAnimation} className={styles["subtitle"]}>
          Directores comerciales, ejecutivos de cuentas, Projects Manager, Paid
          Medias, Analistas de Datos.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
