import styles from "./EquipoComponent.module.scss";

export const EquipoComponent = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["text-container"]}>
        <h2 className={styles["title"]}>
          Somos un equipo interdisciplinario a disposición de los objetivos.
        </h2>
        <p className={styles["subtitle"]}>
          Directores comerciales, ejecutivos de cuentas, Projects Manager, Paid
          Medias, Analistas de Datos.
        </p>
      </div>
    </div>
  );
};
