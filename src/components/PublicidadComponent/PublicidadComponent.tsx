import styles from "./PublicidadComponent.module.scss"

export const PublicidadComponent = () => {
   const icons = [
    {
      src: "/img/instagram.svg",
      alt: "icon1",
    },
    {
      src: "/img/Linkedin.svg",
      alt: "icon2",
    },
    {
      src: "/img/tiktok.svg",
      alt: "icon3",
    },
    {
      src: "/img/Face.svg",
      alt: "icon4",
    },
    {
      src: "/img/X.svg",
      alt: "icon5",
    },
    {
        src: "/img/Google.svg",
        alt: "icon6",
    },
  ];
  return (
    <div className={styles["container"]}>
   
      <div className={styles["half-white"]}>
        <div className={styles["icons-grid"]}>
          {icons.map((icon, index) => (
            <div className={styles["icon-container"]} key={index}>
              <img className={styles["icon"]} src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles["vertical-divider-container"]}>
        <div className={styles["vertical-divider"]} />
      </div>

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

      
    </div>
  );
}