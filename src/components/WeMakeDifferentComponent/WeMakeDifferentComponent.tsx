"use client";

import styles from "./WeMakeDifferent.module.scss";
import { motion } from "framer-motion";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";

export const WeMakeDifferentComponent = () => {
  const { isMobile } = useBreakpoints();

  return (
    <section className={styles["section-different"]}>
      <div className={styles["container-different"]}>
        {/* Left Side - Circles */}
        <div className={styles["circles-container"]}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className={`${styles["circle"]} ${styles["circle-top"]}`}
          >
           <div className={styles["circle-content"]}>
              <h3 className={styles["circle-title"]}>Integramos</h3>
              <p className={styles["circle-text"]}>
                tecnología, análisis humano y pensamiento estratégico.
              </p>
           </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
            className={`${styles["circle"]} ${styles["circle-middle"]}`}
          >
           <div className={styles["circle-content"]}>
              <h3 className={styles["circle-title"]}>Medimos</h3>
              <p className={styles["circle-text"]}>
                porque los algoritmos no entienden de contexto, nosotros sí.
              </p>
           </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.6 }}
            className={`${styles["circle"]} ${styles["circle-bottom"]}`}
          >
           <div className={styles["circle-content"]}>
              <h3 className={styles["circle-title"]}>Planificamos</h3>
              <p className={styles["circle-text"]}>
                con una estructura flexible, transparente y diseñada para escalar.
              </p>
           </div>
          </motion.div>
        </div>

        {/* Right Side - Text */}
        <div className={styles["text-content"]}>
          <div
          >
            <h2 className={styles["main-title"]}>
              Lo hacemos <br />
              <span className={styles["highlight"]}>diferente</span>
            </h2>
          </div>

          <div
            className={styles["description-block"]}
          >
            <p className={styles["description"]}>
              El paid media tradicional se limita a activar plataformas y{" "}
              <span className={styles["bold-blue"]}>
                nosotros las orquestamos.
              </span>
            </p>
            <p className={styles["description"]}>
              Cada decisión parte del dato, y tomamos las mejores decisiones
              para que la{" "}
              <span className={styles["bold-blue"]}>inversión crezca.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};