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

      const sections = document.querySelectorAll("section, div[id]");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = (sec as HTMLElement).offsetTop - 200;
        const height = (sec as HTMLElement).offsetHeight;
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
              className={`${styles.navLink} ${activeSection === "WhatWeDoComponent" ? styles.navLinkActive : ""}`}
              href="#WhatWeDoComponent"
              onClick={() => setActiveSection("WhatWeDoComponent")}
            >
              Servicios
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "OurApproachComponent" ? styles.navLinkActive : ""}`}
              href="#OurApproachComponent"
              onClick={() => setActiveSection("OurApproachComponent")}
            >
              Enfoque
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "OurClientsComponent" ? styles.navLinkActive : ""}`}
              href="#OurClientsComponent"
              onClick={() => setActiveSection("OurClientsComponent")}
            >
              Clientes
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${activeSection === "WeMakeDifferentComponent" ? styles.navLinkActive : ""}`}
              href="#WeMakeDifferentComponent"
              onClick={() => setActiveSection("WeMakeDifferentComponent")}
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
