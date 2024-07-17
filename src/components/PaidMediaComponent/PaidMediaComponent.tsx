"use client";

import styles from "./PaidMediaComponent.module.scss";
import { motion, Variants } from "framer-motion";

export const PaidMediaComponent = () => {
  const textVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 600,
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

  return (
    <div className={styles["container"]}>
      <div className={styles["half-blue"]}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className={styles["text-container-left"]}
        >
          <motion.p className={styles["section-title"]} variants={textVariants}>
            TE OFRECEMOS
          </motion.p>
          <motion.h2 variants={textVariants} className={styles["title"]}>
            Ofrecemos un servicio integral de paid media
          </motion.h2>
          <motion.p className={styles["subtitle"]} variants={textVariants}>
            que abarca desde la planificación estratégica hasta la ejecución y
            optimización de campañas publicitarias en plataformas digitales.
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className={styles["half-white"]}
      >
        <div className={styles["image-container"]}>
          <motion.img
            className={styles["image"]}
            src="/img/queOfrecemos.png"
            alt="Icon"
            variants={textVariants}
          />
        </div>
        <motion.div
          variants={textVariants}
          className={styles["text-container-right"]}
        >
          <motion.p variants={textVariants} className={styles["info"]}>
            Buscamos{" "}
            <span className={styles["bold-text"]}>
              maximizar el retorno de la inversión
            </span>{" "}
            a través de la gestión eficiente de medios pagos, utilizando
            análisis de datos y herramientas avanzadas para alcanzar resultados
            medibles y significativos.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};
