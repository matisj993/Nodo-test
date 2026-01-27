'use client'

import Link from "next/link";
import styles from "./BannerComponent.module.scss";
import { motion } from "framer-motion";
import CustomButton from "../reusableComponent/CustomButton/CustomButton";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";


export const BannerComponent = () => {
  const {isMobile} = useBreakpoints();
  return (
    <div className={styles["hero-container"]} id="bannerHero">
      <div className={styles["hero"]}>
        <div className={styles["heroTop"]}>
        </div>
        <div className="heroMiddle">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={styles["text-container"]}
          >
            <motion.p
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className={styles["textBlue"]}
            >
              Hacemos que
            </motion.p>
            <motion.p
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className={styles["subtitle"]}
            >
              {isMobile ? "tu negocio" : "tu negocio crezca"}
            </motion.p>
            <motion.p
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className={styles["subtitleBefore"]}
            >
              {isMobile ? "crezca con estrategia" : "con estrategia"}
            </motion.p>
            <div className={styles["banner-button-container"]}>
              <CustomButton variant="principal">
                Contactanos
              </CustomButton>
              <CustomButton variant="secundary">
                Conocé los servicios
              </CustomButton>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className={styles["HeroContentBottom"]}
        >
          {
            isMobile ?
              <div className={styles["heroBottomMobile"]}>
                <div className={styles["heroTopContent"]}>
                  <p className={styles["heroBottomText"]}>Estrategia.</p>
                  <p className={styles["heroBottomText"]}>Creatividad.</p>
                </div>
                <div className={styles["heroBottomContent"]}>
                  <p className={styles["heroBottomText"]}>Investigación.</p>
                  <p className={styles["heroBottomText"]}>Datos.</p>
                  <p className={styles["heroBottomText"]}>Medición.</p>
                </div>
              </div>
              :
              <div className={styles["heroBottom"]}>
                <p className={styles["heroBottomText"]}>Estrategia.</p>
                <p className={styles["heroBottomText"]}>Creatividad.</p>
                <p className={styles["heroBottomText"]}>Investigación.</p>
                <p className={styles["heroBottomText"]}>Datos.</p>
                <p className={styles["heroBottomText"]}>Medición.</p>
              </div>
          }

        </motion.div>
      </div>
    </div>
  );
};
