import styles from "./ContactComponent.module.scss";

export const ContactComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["half-blue"]}>
        <form className={styles["form-container"]}>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="nombre">
              Nombre:
            </label>
            <input
            placeholder="Escribir aqui..."
              className={styles["input"]}
              type="text"
              id="nombre"
              name="nombre"
            />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="apellido">Apellido:</label>
            <input placeholder="Escribir aqui..." className={styles["input"]} type="text" id="apellido" name="apellido" />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="email">Email:</label>
            <input placeholder="Escribir aqui..." className={styles["input"]} type="email" id="email" name="email" />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="telefono">Teléfono:</label>
            <input placeholder="Escribir aqui..." className={styles["input"]} type="tel" id="telefono" name="telefono" />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="ciudad">Ciudad:</label>
            <input placeholder="Escribir aqui..." className={styles["input"]} type="text" id="ciudad" name="ciudad" />
          </div>
          <div className={styles["input-container"]}>
            <label className={styles["label"]} htmlFor="mensaje">Mensaje:</label>
            <textarea placeholder="Escribir aqui..." className={styles["input-text-area"]} id="mensaje" name="mensaje" rows={4} />
          </div>
          <button className={styles["button"]} type="submit">Enviar</button>
        </form>
      </div>

      <div className={styles["half-white"]}>
        <div className={styles["text-container-left"]}>
          <h2 className={styles["title"]}>¡Contactate con nosotros!</h2>
          <p className={styles["subtitle"]}>
            Buscamos juntos la mejor estrategia para vos.
          </p>
        </div>
      </div>
    </div>
  );
};
