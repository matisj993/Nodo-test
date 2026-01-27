import { useState, useEffect } from "react";
import styles from "./MenuMobileComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { LogoMobile } from "../NavbarComponent/iconsNavBar";
import CustomButton from "../reusableComponent/CustomButton/CustomButton";
import { IconClose, IconHamburger } from "./IconsMenuMobile";

export default function MenuMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
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


  useEffect(() => {
    setOpenMenu(false);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className={`${styles["container-nav-mobile"]} ${openMenu && styles.active}`}>
      <div className={styles["menu-header"]}>
        <a href="#bannerHero" onClick={closeMenu}>
          <LogoMobile />
        </a>
        <div className={styles.iconMenuContainer} onClick={toggleMenu}>
          {openMenu ? <IconClose /> : <IconHamburger />}
        </div>

      </div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList} >
          <li className={`${styles.navItem} ${activeSection === "servicios" ? styles.active : ""}`}>
            <a href="#WhatWeDoComponent" onClick={closeMenu}>Servicios</a>
          </li>
          <li className={`${styles.navItem} ${activeSection === "herramientas" ? styles.active : ""}`}>
            <a href="#OurApproachComponent" onClick={closeMenu}>Enfoque</a>
          </li>
          <li className={`${styles.navItem} ${activeSection === "clientes" ? styles.active : ""}`}>
            <a href="#OurClientsComponent" onClick={closeMenu}>Clientes</a>
          </li>
          <li className={`${styles.navItem} ${activeSection === "nosotros" ? styles.active : ""}`}>
            <a href="#WeMakeDifferentComponent" onClick={closeMenu}>Nosotros</a>
          </li>
          <li className={`${styles.navItem} ${activeSection === "contacto" ? styles.active : ""}`}>
            <CustomButton className={styles.buttonContact} variant="principal" onClick={() => {
              closeMenu(); setActiveSection("ContactComponent");
              window.location.href = "#ContactComponent"; }}>
              Contactanos
            </CustomButton>
          </li>
        </ul>
      </nav>


    </div>
  );
}
