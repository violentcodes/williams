'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WilliamsEra } from '@/data/eras';

export default function EraSection({ era, index }: { era: WilliamsEra; index: number }) {
    const isEven = index % 2 === 0;
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-24 border-b border-williams-muted/5 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className={`absolute w-[600px] h-[600px] bg-williams-blue/5 rounded-full blur-[150px] -z-10 ${isEven ? '-left-20' : '-right-20'}`} />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start">
                        <span className="text-williams-blue font-mono font-bold tracking-widest text-xs border border-williams-blue/30 px-4 py-2 bg-williams-blue/5 backdrop-blur-sm whitespace-nowrap">
                            ERA_{era.years}
                        </span>
                        <div className="h-[1px] w-12 bg-williams-blue/30 hidden sm:block" />
                        <span className="text-williams-muted/80 uppercase text-xs tracking-widest font-mono">
                            // {era.highlight}
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
                        {era.title}
                    </h2>

                    <p className="text-lg md:text-xl text-williams-silver/70 leading-relaxed max-w-md border-l-2 border-williams-blue/20 pl-6">
                        {era.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-mono text-williams-muted/40">
                        <span>SEC_ID: {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                        <span>//</span>
                        <span>STATUS: ARCHIVED</span>
                    </div>
                </motion.div>

                <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <motion.div
                        initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                        whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-[400px] md:h-[600px] w-full overflow-hidden border border-williams-muted/10 group"
                    >
                        <motion.img
                            style={{ y }}
                            src={era.image}
                            alt={era.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-williams-black via-transparent to-transparent opacity-60" />

                        {/* Tech Overlay */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-williams-blue/50" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-williams-blue/50" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-williams-blue/50" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-williams-blue/50" />

                        {/* Center Crosshair */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-[1px] h-12 bg-williams-blue/30" />
                            <div className="h-[1px] w-12 bg-williams-blue/30 absolute" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
