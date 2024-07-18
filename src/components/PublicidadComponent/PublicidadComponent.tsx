"use client";
import styles from "./PublicidadComponent.module.scss";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.8,
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
      duration: 2,
    },
  },
};

export const PublicidadComponent = () => {
  const icons = [
    {
      src: "/img/instagram.svg",
      alt: "icon1",
    },
    {
      src: "/img/Linkedin.svg",
      alt: "icon2",
    },
    {
      src: "/img/tiktok.svg",
      alt: "icon3",
    },
    {
      src: "/img/Face.svg",
      alt: "icon4",
    },
    {
      src: "/img/X.svg",
      alt: "icon5",
    },
    {
      src: "/img/Google.svg",
      alt: "icon6",
    },
  ];
  return (
    <div className={styles["container"]}>
      <div className={styles["half-white"]}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className={styles["icons-grid"]}
        >
          {icons.map((icon, index) => (
            <motion.div
              variants={iconVariants}
              className={styles["icon-container"]}
              key={index}
            >
              <img className={styles["icon"]} src={icon.src} alt={icon.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className={styles["vertical-divider-container"]}>
        <div className={styles["vertical-divider"]} />
      </div>

      <div className={styles["half-blue"]}>
        <div className={styles["text-container-left"]}>
          <h2 className={styles["title"]}>Análisis y seguimiento de datos</h2>
          <p className={styles["subtitle"]}>
            Desde redes sociales como Facebook, Instagram y Twitter, hasta
            plataformas de búsqueda como Google, así como espacios publicitarios
            en sitios web y aplicaciones móviles, nuestra cobertura abarca todos
            los rincones del mundo digital.
          </p>
        </div>
      </div>
    </div>
  );
};
