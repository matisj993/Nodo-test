'use client'

import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./WhatWeDoComponent.module.scss"
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";




const textAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: 70,
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

export const WhatWeDoComponent = () => {
  const { isMobile } = useBreakpoints();
  return (
    <div className={styles['container-section-about']} id="WhatWeDoComponent">
      <div className={styles['left-text-about']}>
        <div className={styles['top-text-about-title']}>
          <h2 className={styles['text-blue']}>Qué</h2>
          <h2 className={styles['title']}>hacemos</h2>
          <p className={styles["subtite-about"]}><strong>Desarrollamos e implementamos campañas</strong> con inteligencia aplicada, optimizando en tiempo real y utilizando datos como brújula.
          </p>
        </div>
        <motion.div
          initial={{ translateY: 20, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className={styles["bottom-description-text"]}
        >
          <div className={styles['description-text']}>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <strong>Impacto medible</strong> <br />Cada acción tiene un objetivo claro y un resultado que se puede analizar y mejorar.
            </motion.p>
          </div>
          <motion.div
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
            className={styles['description-text']}>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              <strong>Optimización constante</strong> <br />Monitoreamos y ajustamos campañas de forma continua para maximizar resultados.
            </motion.p>
          </motion.div>
        </motion.div>

      </div>
      <motion.div
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className={styles['right-img-about']}>
        <Image
          src={isMobile ? "/img/WhatWeDoComponent/WhatWeDoMobile.png" : "/img/WhatWeDoComponent/WhatWeDo.png"}
          alt=""
          width={isMobile ? 609 : 700}
          height={isMobile ? 263 : 500}
        />
      </motion.div>
    </div>
  )
}