import styles from "./PaidMediaComponent.module.scss";

export const PaidMediaComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["half-blue"]}>
        <div className={styles["text-container-left"]}>
          <h2 className={styles["title"]}>
            Ofrecemos un servicio integral de paid media
          </h2>
          <p className={styles["subtitle"]}>
            que abarca desde la planificación estratégica hasta la ejecución y
            optimización de campañas publicitarias en plataformas digitales.
          </p>
        </div>
      </div>
      <div className={styles["half-white"]}>
        <div className={styles["image-container"]}>
          <img className={styles["image"]} src="/img/queOfrecemos.png" alt="Icon" />
        </div>
        <div className={styles["text-container-right"]}>
          <p className={styles["info"]}>
          Buscamos <span className={styles["bold-text"]}>maximizar el retorno de la inversión</span> a través de la gestión eficiente de medios pagos, utilizando análisis de datos y herramientas avanzadas para alcanzar resultados medibles y significativos.
          </p>
        </div>
      </div>
    </div>
  );
};
