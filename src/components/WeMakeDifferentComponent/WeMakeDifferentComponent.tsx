"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./WeMakeDifferent.module.scss";
import { motion, AnimatePresence, Variants, useInView } from "framer-motion";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";

const CIRCLES_DATA = [
  {
    id: "integramos",
    title: "Integramos",
    text: "tecnología, análisis humano y pensamiento estratégico.",
  },
  {
    id: "medimos",
    title: "Medimos",
    text: "porque los algoritmos no entienden de contexto, nosotros sí.",
  },
  {
    id: "planificamos",
    title: "Planificamos",
    text: "con una estructura flexible, transparente y diseñada para escalar.",
  },
];

export const WeMakeDifferentComponent = () => {
  const { isDesktop } = useBreakpoints();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CIRCLES_DATA.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView]);

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
        duration: 3,
        delay: 0,
      },
    },
  };

  const circleVariants: Variants = {
    offscreen: {
      pathLength: 0,
      opacity: 0,
    },
    onscreen: (custom: { duration: number; delay?: number }) => ({
      pathLength: 0.75,
      opacity: 1,
      transition: {
        duration: custom.duration,
        delay: custom.delay || 0,
        ease: "easeInOut",
      },
    }),
  };

  const dotVariants: Variants = {
    offscreen: {
      rotate: 0,
      opacity: 0,
    },
    onscreen: {
      rotate: 270,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className={styles["section-different"]} id="WeMakeDifferentComponent">
      <div className={styles["container-different"]}>
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={textVariants}
          className={styles["text-content"]}>
          <h2 className={styles["main-title"]}>
            Lo hacemos <br />
            <span className={styles["highlight"]}>diferente</span>
          </h2>

          <div className={styles["description-block"]}>
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
        </motion.div>

        {/* Right Side - Carousel */}
        <motion.div
           viewport={{ once: true, amount: 0.2 }}
           variants={textVariants}
        className={styles["carousel-container"]}>
          <div className={styles["svg-background"]}>
            <svg
              width={isDesktop ? "650" : "450"}
              height={isDesktop ? "650" : "450"}
              viewBox="0 0 650 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ maxWidth: "100%", height: "auto" }}
            >
              <motion.g
                style={{ originX: "325px", originY: "325px" }}
                initial={{ rotate: -90 }}
                whileInView={{
                  rotate: [-90, -45, -135, -90],
                  transition: {
                    delay: 0.5,
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: true }}
              >
              </motion.g>

              <motion.g
                style={{ originX: "325px", originY: "325px" }}
                initial={{ rotate: -90 }}
                whileInView={{
                  rotate: [-90, -80, -100, -90],
                  transition: {
                    delay: 1,
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
                  stroke="#01164F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="0 1"
                  variants={circleVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  custom={{ duration: 2.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                <motion.circle
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                  cx="325"
                  cy="25"
                  r="4"
                  fill="#01164F"
                  viewport={{ once: true }}
                />
              </motion.g>

              <defs>
                <linearGradient
                  id="paint0_linear_different"
                  x1="325"
                  y1="65"
                  x2="325"
                  y2="585"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#01164F" />
                  <stop offset="1" stopColor="#01164F" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={CIRCLES_DATA[activeIndex].id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={styles["circle-carousel"]}
            >
              <h3 className={styles["circle-title"]}>
                {CIRCLES_DATA[activeIndex].title}
              </h3>
              <p className={styles["circle-text"]}>
                {CIRCLES_DATA[activeIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className={styles["indicators"]}>
            {CIRCLES_DATA.map((_, index) => (
              <button
                key={index}
                className={`${styles["indicator"]} ${index === activeIndex ? styles["active"] : ""
                  }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};