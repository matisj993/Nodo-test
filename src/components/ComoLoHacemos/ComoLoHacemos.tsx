import styles from "./ComoLoHacemos.module.scss";

export const ComoLoHacemosComponent = () => {
  const cards = [
    {
      src: "/img/estrategia (1).svg",
      alt: "Card 1",
      title: "Estrategia",
      text: "Creamos estrategias de Paid Media basadas en el análisis de datos y en la comprensión de la audiencia objetivo.",
    },
    {
      src: "/img/Campañas.svg",
      alt: "Card 2",
      title: "Creación de campañas",
      text: "Diseñamos e implementamos de manera integral campañas en las diferentes plataformas.",
    },
    {
      src: "/img/seguimiento y analisis.svg",
      alt: "Card 3",
      title: "Seguimiento y análisis",
      text: "Ajustes de segmentación, presupuesto y pujas para mejorar su rendimiento en tiempo real.",
    },
  ];
  return (
    <div className={styles["container-section"]}>
      <div className={styles["header-section"]}>
        <h2 className={styles["title"]}>¿Cómo lo hacemos?</h2>
        <p className={styles["subtitle"]}>
          Con un proceso totalmente integral a medida.
        </p>
      </div>
      <div className={styles["grid-container"]}>
        {cards.map((card, index) => (
          <div key={index} className={styles["card-container"]}>
            <div className={styles["image-container"]}>
              <img className={styles["image"]} src={card.src} alt={card.alt} />
            </div>
            <div className={styles["info-container"]}>
              <h3 className={styles["title-card"]}>{card.title}</h3>
              <p className={styles["info-card"]}>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
