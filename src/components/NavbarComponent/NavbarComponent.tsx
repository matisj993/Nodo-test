"use client";

import { useEffect, useState } from "react";
import styles from "./NavbarComponent.module.scss";
import MenuMobile from "../MenuMobileComponent/MenuMobileComponent";

export const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.logo} ${scrolled ? styles.logoVisible : ""}`}>
        <img src="/img/isoNegativo.svg" alt="Logo" />
      </div>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${activeSection === "servicios" ? styles.active : ""}`}>
          <a href="#servicios">SERVICIOS</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === "herramientas" ? styles.active : ""}`}>
          <a href="#herramientas">HERRAMIENTAS</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === "nosotros" ? styles.active : ""}`}>
          <a href="#nosotros">NOSOTROS</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === "contacto" ? styles.active : ""}`}>
          <a href="#contacto">CONTACTO</a>
        </li>
      </ul>
      <div className={styles["header-menu"]}>
        <MenuMobile />
      </div>
    </nav>
  );
};
