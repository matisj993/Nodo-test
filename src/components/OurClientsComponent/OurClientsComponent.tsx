"use client";

import styles from "./OurClientsComponent.module.scss";
import { motion } from "framer-motion";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";
import { IconsBloop , IconsYouKnow , IconsNesta , IconAv , IconSuper, IconRentas, IconLaVoz, IconGranDiet, IconMutual, IconNina, IconGoldePack, IconsSpace} from "./IconsClients";

export const OurClientsComponent = () => {
    const { isMobile } = useBreakpoints();
    const clientCategories = [
        {
            category: "Agencias Partners",
            clients: [<IconsBloop />, <IconsYouKnow />, <IconsNesta />,<IconAv />, "MADIBA", <IconSuper/>]
        },
        {
            category: "Anunciantes",
            clients: [<IconRentas />, <IconLaVoz />, <IconGranDiet />, <IconMutual />, <IconNina />, <IconGoldePack />]
        }
    ];

    return (
        <section className={styles["section-clients"]} id="Clientes">
            <div className={styles["container-clients"]}>
                {/* Left Side - Title and Description */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles["content-left"]}
                >
                    <h2 className={styles["main-title"]}>
                        Nuestros<br />
                        <span className={styles["highlight"]}>clientes</span>
                    </h2>
                    <div className={styles["description-container"]}>
                        <p className={styles["description"]}>
                            Apostamos a construir relaciones{" "}
                            <span className={styles["bold-blue"]}>sólidas y duraderas  basadas en la confianza, la transparencia y los resultados.</span>

                        </p>
                    </div>
                </motion.div>

                {/* Right Side - Client Logos */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles["content-right"]}
                >
                    {clientCategories.map((categoryData, categoryIndex) => (
                        <div key={categoryIndex} className={styles["category-section"]}>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (categoryIndex * 0.1) }}
                                className={styles["category-title"]}
                            >
                                {categoryData.category}
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + (categoryIndex * 0.1) }}
                                className={styles["clients-grid"]}
                            >
                                {categoryData.clients.map((client, index) => (
                                    <div key={index} className={styles["client-logo"]}>
                                        {client}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    ))}

                    {/* Golden Pack - Special logo at bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className={styles["golden-pack"]}
                    >
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};