import styles from "./FooterComponent.module.scss";


export const FooterComponent = () => {

    const redes = [
        {
          src: "/img/INSTAGRAM.svg",
          alt: "ig",
          text: "@nodopaidmediasolutions"
        },
        {
          src: "/img/LINKEDIN.svg",
          alt: "linkedin",
          text: "Nodo Paid Media Solutions"
        },
        {
          src: "/img/FACEBOOK.svg",
          alt: "fb",
          text: "Nodo Paid Media Solutions"
        },
      ];
  return (
    <div className={styles["hero"]}>
      <div className={styles["info-container"]}>
        <div className={styles["text-container"]}>
          <h2 className={styles["title"]}>
            Nodo transforma objetivos en resultados.
          </h2>
        </div>
        <div className={styles["info-contacto"]}>
            <p className={styles["text"]}>Avenida Sagrada Familia 1488,
            Córdoba, Argentina.</p>
            <p className={styles["text"]}>+54 351 4422929</p>
            <p className={styles["text"]}>www.nodomedia.com.ar</p>
        </div>
        <div className={styles["socialmedia-container"]}>
        {redes.map((red, index) => (
          <div key={index} className={styles["red-container"]}>
            <div className={styles["icon-container"]}>
              <img className={styles["icon"]} src={red.src} alt={red.alt} />
            </div>
            <div className={styles["social-text-container"]}>
              <p className={styles["text"]}>{red.text}</p>
            </div>
          </div>
        ))}
            
        </div>
      </div>

      <div className={styles["logo-container"]}>
        <img
          src="/img/logotipo.svg"
          alt="Nodo Logo"
          className={styles["logo"]}
        />
      </div>
    </div>
  );
};
