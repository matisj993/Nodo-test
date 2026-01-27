"use client";

import styles from "./OurApproach.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useBreakpoints } from "@/app/hooks/useBreakpoints";
export const OurApproachComponent = () => {
    const { isMobile, isTablet, isDesktop } = useBreakpoints();
    const platforms = [
        ["Meta", "Google Ads", "YouTube", "LinkedIn", "TikTok", "Spotify", "Twitch", "Video", "Programmatic Display", "Apps", "Medios digitales"],
    ];

    return (
        <section className={styles["section-approach"]} id="OurApproachComponent">
            <div className={styles["container-approach"]}>
                {/* Left Side - Image with circular frame */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles["image-container"]}
                >
                    <div className={styles["image-wrapper"]}>
                        {/* Placeholder for image - replace with actual image */}
                        <Image src={isMobile ? "/img/OurApproachComponent/leftImgMobile.png" : "/img/OurApproachComponent/leftImg.png"} alt="Our Approach" width={700 } height={500} />
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles["content-container"]}
                >
                    <h2 className={styles["main-title"]}>
                        Nuestro<br />
                        <span className={styles["highlight"]}>enfoque</span>
                    </h2>

                    <p className={styles["subtitle"]}>
                        Combinamos <span className={styles["bold-blue"]}>datos, estrategia y creatividad</span> con un enfoque profundamente humano.
                    </p>

                    <p className={styles["description"]}>
                        Cada plataforma tiene su lógica, no se trata de estar en todas, sino de <span className={styles["bold-blue"]}>saber cuál conviene, cuándo y para qué</span>, transformando cada decisión de pauta en resultados reales.
                    </p>

                    {/* Platform badges */}
                    <div className={styles["platforms-container"]}>
                        {platforms.map((row, rowIndex) => (
                            <motion.div
                                key={rowIndex}
                                viewport={{ once: true }}
                                className={styles["platform-row"]}
                            >
                                {row.map((platform, index) => (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 1
                                        }}
                                        key={index}
                                        className={styles["platform-badge"]}
                                    >
                                        {platform}
                                    </motion.span>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};