import styles from "./HeaderComponent.module.scss";

export const HeaderComponent = () => {
  return (
    <div className={styles["hero"]}>
        <div className={styles["text-container"]}>
            <img
            src="/img/nodoLogo.svg"
            alt="logo"
            className={styles["logo"]}
            />
          <p className={styles["subtitle"]}>
            Somos especialistas en conectar marcas con consumidores utilizando
            plataformas digitales pagas.
          </p>
        </div>
    </div>
  );
};
