'use client'

import Link from "next/link";
import styles from "./HeaderComponent.module.scss";
import { motion } from "framer-motion";

export const HeaderComponent = () => {
  return (
    <div className={styles["hero"]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles["text-container"]}
      >
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          src="/img/nodoLogo.svg"
          alt="logo"
          className={styles["logo"]}
        />
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles["subtitle"]}
        >
          Somos especialistas en conectar marcas con consumidores utilizando
          plataformas digitales pagas.
        </motion.p>
          <Link className={styles["button"]} href="#contacto">
            CONTACTA CON NOSOTROS
          </Link>
      </motion.div>
    </div>
  );
};
