import Link from "next/link";
import styles from "./NotFoundComponent.module.scss"

export const NotFoundComponent = () => {
  return (
    <div className={styles["hero"]}>
        <div className={styles["text-container"]}>
            <img
            src="/img/nodoLogo.svg"
            alt="logo"
            className={styles["logo"]}
            />
          <p className={styles["subtitle"]}>
            ¡Sitio en construcción!
          </p>
          <div className={styles["button-container"]}>

          <Link className={styles["button"]} href="mailto:info@nodomedia.com.ar">
            Contactanos
          </Link>
          </div>
        </div>
    </div>
  );
};
