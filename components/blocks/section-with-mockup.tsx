'use client';

import React from "react";
import { motion } from "framer-motion";

const SectionWithMockup = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    reverseLayout = false,
    ctaText,
    ctaHref,
    ctaVariant = "violet",
}) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";


    return (
        <section className="relative py-24 md:py-36 bg-[var(--background)] overflow-hidden">
            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                    className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`relative z-20 flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 md:ml-12 md:mr-12 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-tight md:leading-[53px]" style={{ fontFamily: 'var(--font-display)' }}>
                                {title}
                            </h2>
                        </div>

                        <p className="text-[var(--text-secondary)] text-sm md:text-[15px] leading-6">
                            {description}
                        </p>

                        {ctaText && (
                            <a
                                href={ctaHref || "#"}
                                className={ctaVariant === "teal" ? "btn-secondary mt-4" : "btn-primary mt-4"}
                                {...(ctaHref?.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                {ctaText}
                            </a>
                        )}
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
                        variants={itemVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                            className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-[#0A0A12] rounded-[32px] z-0 cursor-pointer shadow-2xl"
                            style={{
                                top: reverseLayout ? 'auto' : '10%',
                                bottom: reverseLayout ? '10%' : 'auto',
                                left: reverseLayout ? 'auto' : '-20%',
                                right: reverseLayout ? '-20%' : 'auto',
                                transform: reverseLayout ? 'translate(0, 0)' : 'translateY(10%)',
                            }}
                            initial={{ y: 0, filter: 'blur(2px)' }}
                            whileInView={{ y: reverseLayout ? -20 : -30, filter: 'blur(2px)' }}
                            whileHover={{ scale: 1.05, zIndex: 30, filter: 'blur(0px)', transition: { duration: 0.3, ease: "easeOut" } }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div
                                className="relative w-full h-full bg-cover bg-center rounded-[32px]"
                                style={{
                                    backgroundImage: `url(${secondaryImageSrc})`,
                                }}
                            />
                        </motion.div>

                        {/* Main Mockup Card */}
                        <motion.div
                            className="relative w-full h-[405px] md:h-[637px] bg-[#ffffff08] rounded-[32px] backdrop-blur-[15px] border border-[var(--border-subtle)] z-10 overflow-hidden cursor-pointer shadow-xl"
                            initial={{ y: 0 }}
                            whileInView={{ y: reverseLayout ? 20 : 30 }}
                            whileHover={{ scale: 1.02, zIndex: 30, transition: { duration: 0.3, ease: "easeOut" } }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="p-0 h-full">
                                <div className="h-full relative">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${primaryImageSrc})`,
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative bottom gradient */}
            <div
                className="absolute w-full h-px bottom-0 left-0 z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
                }}
            />
        </section>
    );
};


export default SectionWithMockup;
