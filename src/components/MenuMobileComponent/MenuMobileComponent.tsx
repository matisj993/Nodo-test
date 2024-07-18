import { useState, useEffect } from "react";
import styles from "./MenuMobileComponent.module.scss";
import Link from "next/link";
import Image from "next/image";

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
    <div>
      {openMenu && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}

      <div className={styles.iconMenuContainer} onClick={toggleMenu}>
        <Image src="/img/iconMenu.svg" alt="icon" loading="lazy" width={25} height={25}/>
      </div>
      <div className={`${styles.menu} ${openMenu ? styles.menuOpen : ""}`}>
        <div className={styles.menuHeader}>
          <div className={styles.closeIconContainer} onClick={closeMenu}>
            <Image width={15} height={15} src="/img/closeMenu.svg" alt="close" loading="lazy"/>
          </div>
        </div>
        <nav className={styles.navigationContainer}>
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
        </nav>

      </div>
    </div>
  );
}
