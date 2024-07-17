'use client'

import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PartnersComponent.module.scss"
import { motion, Variants } from "framer-motion";


const images = [
    { src: '/img/av.svg', alt: 'Image 1' },
    { src: '/img/BLOP.svg', alt: 'Image 2' },
    { src: '/img/DM.svg', alt: 'Image 3' },
    { src: '/img/hesta.svg', alt: 'Image 4' },
    { src: '/img/MADI.png', alt: 'Image 5' },
    { src: '/img/PML.svg', alt: 'Image 5' },
    { src: '/img/SUPER.svg', alt: 'Image 5' },
    { src: '/img/VIB.png', alt: 'Image 5' },

  ];

  const textAnimation: Variants = {
    offscreen: {
      opacity: 0,
      y: 80,
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


export const PartnersComponent = () => {
    return(
        <motion.div initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}className={styles['container-section']}>
            <motion.h2 variants={textAnimation}className={styles['title']}>PARTNERS</motion.h2>
            <SliderComponent images={images}/>
        </motion.div>
    )
}