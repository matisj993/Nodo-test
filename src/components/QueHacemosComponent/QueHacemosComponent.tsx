import styles from "./QueHacemosComponent.module.scss";

export const QueHacemosComponent = () => {
  const cards = [
    {
      src: "/img/queHacemos1.svg",
      alt: "Card 1",
      title: "Planificación Estratégica:",
      text: "Definición de objetivos, identificación del PO, selección de canales y elaboración de la estrategia de paid media.",
    },
    {
      src: "/img/queHacemos2.svg",
      alt: "Card 2",
      title: "Gestión de Campañas:",
      text: "Configuración, lanzamiento y seguimiento de las campañas publicitarias en plataformas.",
    },
    {
      src: "/img/queHacemos3.svg",
      alt: "Card 3",
      title: "Optimización de Campañas:",
      text: "Ajustes de segmentación, presupuesto y pujas para mejorar su rendimiento en tiempo real.",
    },
    {
      src: "/img/queHacemos4.svg",
      alt: "Card 4",
      title: "Análisis y Reporting:",
      text: "Evaluación del desempeño, elaboración de informes detallados con métricas clave (CTR, CPC, ROI, etc.) y recomendaciones para futuras campañas.",
    },
    {
      src: "/img/queHacemos5.svg",
      alt: "Card 5",
      title: "Testing y Experimentación:",
      text: "Realización de pruebas A/B, pruebas multivariables y pruebas de creatividades para optimizar resultados.",
    },
    {
      src: "/img/queHacemos6.svg",
      alt: "Card 5",
      title: "Remarketing y Retargeting:",
      text: "Estrategias para llegar nuevamente a usuarios que han interactuado o mostrado interés previamente con la marca.",
    },
  ];

  return (
    <div className={styles["section-container"]}>
      <div className={styles["title-container"]}>
        <p className={styles["title"]}>¿Qué hacemos?</p>
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
