import styles from "./HerramientasComponent.module.scss";
export const HerramientasComponent = () => {
  const icons = [
    {
      src: "/img/GOOGLE TAG.png",
      alt: "Google Tag Manager",
    },
    {
      src: "/img/FACEBOOK.png",
      alt: "Facebook IQ",
    },
    {
      src: "/img/GOOGLE A.png",
      alt: "Google Analytics",
    },
    {
      src: "/img/CHAT.png",
      alt: "ChatGPT",
    },
  ];
  return (
    <div className={styles["container"]}>
      <div className={styles["half-blue"]}>
        <div className={styles["text-container-left"]}>
          <h2 className={styles["title"]}>
            Nos basamos en herramientas que eficientizan nuestra operación.
          </h2>
          <p className={styles["subtitle"]}>
            Desde plataformas de gestión de anuncios hasta herramientas de
            análisis y seguimiento de datos, apoyandonos en tecnología de
            vanguardia para optimizar el rendimiento de las campañas
            publicitarias.
          </p>
        </div>
      </div>
      <div className={styles["half-white"]}>
        <div className={styles["icons-grid"]}>
        {icons.map((icon, index) => (
          <div className={styles["icon-container"]} key={index}>
            <img className={styles["icon"]}src={icon.src} alt={icon.alt} />
          </div>
        ))}
            
        </div>
      </div>
    </div>
  );
};
