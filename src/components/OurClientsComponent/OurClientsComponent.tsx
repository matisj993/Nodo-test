"use client";

import styles from "./OurClientsComponent.module.scss";
import { motion } from "framer-motion";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";
import { IconsBloop , IconsYouKnow , IconsNesta , IconAv , IconSuper, IconRentas, IconLaVoz, IconGranDiet, IconMutual, IconNina, IconGoldePack, IconsSpace} from "./IconsClients";
import Image from "next/image";
import { useState } from "react";

export const OurClientsComponent = () => {
    const { isMobile } = useBreakpoints();
    const [isPaused, setIsPaused] = useState(false)
    const clientCategories = [
        {
            category: "Agencias Partners",
            clients: [<IconsBloop />, <IconsYouKnow />, <IconsNesta />, <IconAv />, <Image src="/img/ClientsComponent/image781.png" alt="Madiba" width={85} height={20}/>, <IconSuper/>],
            duration: 5
        },
        {
            category: "Anunciantes",
            clients: [<IconRentas />, <IconLaVoz />, <IconGranDiet />, <IconMutual />, <IconNina />, <IconGoldePack />
            ],
            duration: 5
        }
    ];

    return (
        <section className={styles["section-clients"]} id="OurClientsComponent">
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
                <div className={styles["content-right-carousel"]}>
                    {clientCategories.map((categoryData, idx) => (
                        <div key={idx} className={styles["column-wrapper"]}>
                            <h3 className={styles["category-title"]}>{categoryData.category}</h3>

                            <div className={styles["viewport-vertical"]}>
                                <motion.div
                                    className={styles["track-vertical"]}
                                    animate={{ y: isPaused ? undefined : ["0%", "-50%"] }}
                                    transition={{
                                        ease: "linear",
                                        duration: 20, // Súbelo a 80 para probar
                                        repeat: Infinity
                                    }}
                                >
                                    {/* Lista duplicada para scroll infinito suave */}
                                    {[...categoryData.clients, ...categoryData.clients].map((client, i) => (
                                        <div key={i} className={styles["client-card"]}>
                                            {client}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};