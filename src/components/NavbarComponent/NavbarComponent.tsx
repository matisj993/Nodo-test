
import styles from "./NavbarComponent.module.scss"
export const NavbarComponent = () => {
    return(
        <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#home">Herramientas</a></li>
          <li className={styles.navItem}><a href="#about">Qué hacemos</a></li>
          <li className={styles.navItem}><a href="#services">Publicidad</a></li>
          <li className={styles.navItem}><a href="#contact">Nosotros</a></li>
          <li className={styles.navItem}><a href="#contact">Partners</a></li>
          <li className={styles.navItem}><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    )
}