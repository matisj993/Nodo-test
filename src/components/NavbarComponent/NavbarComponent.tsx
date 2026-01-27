"use client";

import { useEffect, useState } from "react";
import styles from "./NavbarComponent.module.scss";
import MenuMobile from "../MenuMobileComponent/MenuMobileComponent";
import { LogoMobile, LogoNavbar } from "./iconsNavBar";
import CustomButton from "../reusableComponent/CustomButton/CustomButton";


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
      <div className={styles["navbar-content"]}>
        <div className={`${styles.logo} ${scrolled ? styles.logoVisible : ""}`}>
          <a href="#bannerHero">
          <LogoNavbar />
          </a>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "servicios" ? styles.navLinkActive : ""}`}
              href="#WhatWeDoComponent"
              onClick={() => setActiveSection("servicios")}
            >
              Servicios
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "herramientas" ? styles.navLinkActive : ""}`}
              href="#OurApproachComponent"
              onClick={() => setActiveSection("Enfoque")}
            >
              Enfoque
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "Clientes" ? styles.navLinkActive : ""}`}
              href="#OurClientsComponent"
              onClick={() => setActiveSection("Clientes")}
            >
              Clientes
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "Nosotros" ? styles.navLinkActive : ""}`}
              href="#WeMakeDifferentComponent"
              onClick={() => setActiveSection("Nosotros")}
            >
              Nosotros
            </a>
          </li>
        </ul>
        <div className={styles["navbar-button"]}>
          <CustomButton
            variant="principal"
            onClick={() => {
              setActiveSection("ContactComponent");
              window.location.href = "#ContactComponent";
            }}
          >
            Contactanos
          </CustomButton>
        </div>
        <div className={styles["header-menu"]}>
          <MenuMobile
           />
        </div>
      </div>
      
    </nav>
  );
};
