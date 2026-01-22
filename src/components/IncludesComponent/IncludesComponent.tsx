"use client";

import styles from "./IncludesComponent.module.scss";
import { motion, Variants } from "framer-motion";
import { useBreakpoints } from '@/app/hooks/useBreakpoints';

export const IncludesComponent = () => {
  const {isMobile, isTablet, isDesktop} = useBreakpoints();
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
        duration: 3,
        delay: 0,
      },
    },
  };

  return (
   <section className={styles["section-includes"]}>
      <div className={styles["container-includes"]}>
        <div className={styles["half-blue"]}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className={styles["text-container-left"]}
          >
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
                    stroke="url(#paint0_linear)"
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
                    id="paint0_linear"
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
                  
                  <motion.circle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }}  cx="230" cy="40" r="5" fill="white" />
                
                </motion.g>
              </svg>
            </div>
            <h2 className={styles["title-includes"]}>
              Cada proyecto
            </h2>
            <h2 className={styles["subtitle-includes"]}>
              incluye
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className={styles["right-text-includes"]}
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }}  className={styles["info-includes"]}>Estrategia de medios y <br /> objetivos de negocio</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }} className={styles["info-includes"]}>Análisis avanzado de <br /> métricas y reporting visual</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }} className={styles["info-includes"]}>Gestión y optimizaciónde <br /> campañas</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }}  className={styles["info-includes"]}>Testing continuo</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2.5 }} className={styles["info-includes"]}>Consultoría de performance <br /> y escalabilidad</motion.p>
        </motion.div>
      </div>
   </section>
  );
};
