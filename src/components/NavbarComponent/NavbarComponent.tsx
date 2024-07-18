"use client";

import { useEffect, useState } from "react";
import styles from "./NavbarComponent.module.scss";
import MenuMobile from "../MenuMobileComponent/MenuMobileComponent";
export const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.logo} ${scrolled ? styles.logoVisible : ""}`}>
        <img src="/img/isoNegativo.svg" alt="Logo" />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#servicios">SERVICIOS</a>
        </li>
        <li className={styles.navItem}>
          <a href="#herramientas">HERRAMIENTAS</a>
        </li>
        <li className={styles.navItem}>
          <a href="#nosotros">NOSOTROS</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contacto">CONTACTO</a>
        </li>
      </ul>
      <div className={styles["header-menu"]}>
        <MenuMobile />
      </div>
    </nav>
  );
};
