'use client'

import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./ClientesComponent.module.scss"
import { motion, Variants } from "framer-motion";

const images = [
    { src: '/img/concepto.svg', alt: 'Image 1' },
    { src: '/img/ecomerce.svg', alt: 'Image 2' },
    { src: '/img/golden pack.svg', alt: 'Image 3' },
    { src: '/img/grandiet.svg', alt: 'Image 4' },
    { src: '/img/lomo.svg', alt: 'Image 5' },
    { src: '/img/mb.svg', alt: 'Image 5' },
    { src: '/img/moussa.svg', alt: 'Image 5' },
    { src: '/img/mutual medica.svg', alt: 'Image 5' },
    { src: '/img/nina.svg', alt: 'Image 5' },
    { src: '/img/tarjeta surcredito.svg', alt: 'Image 5' },
  ];

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
        duration: 1.8,
        delay: 0,
      },
    },
  };

export const ClientesComponent = () => {
    return(
        <motion.div initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}className={styles['container-section']}>
            <motion.h2 variants={textAnimation}className={styles['title']}>CONFÍAN EN NOSOTROS</motion.h2>
            <SliderComponent images={images}/>
        </motion.div>
    )
}