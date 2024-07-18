import { useState, useEffect } from "react";
import styles from "./MenuMobileComponent.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function MenuMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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
          <li className={styles.navItem}><a href="#servicios">SERVICIOS</a></li>
          <li className={styles.navItem}><a href="#herramientas">HERRAMIENTAS</a></li>
          <li className={styles.navItem}><a href="#nosotros">NOSOTROS</a></li>
          <li className={styles.navItem}><a href="#contacto">CONTACTO</a></li>
        </ul>
        </nav>

      </div>
    </div>
  );
}
