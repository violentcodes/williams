'use client';

import { motion } from 'framer-motion';

const PRINCIPLES = [
    "Engineering First",
    "Independent Spirit",
    "Racing Integrity",
    "Long-Term Vision"
];

export default function EngineeringSection() {
    return (
        <section className="min-h-screen bg-williams-black py-32 relative flex flex-col items-center justify-center overflow-hidden">

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-20 z-10"
            >
                <span className="text-williams-blue text-sm tracking-[0.3em] uppercase block mb-4">
                    Core DNA
                </span>
                <h2 className="text-6xl md:text-8xl font-bold uppercase">
                    Principles
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 container mx-auto z-10 w-full">
                {PRINCIPLES.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group border border-williams-muted/20 p-8 hover:border-williams-blue/50 transition-colors duration-500 bg-williams-blue/5 backdrop-blur-sm"
                    >
                        <div className="w-12 h-1 bg-williams-blue mb-6 group-hover:w-full transition-all duration-500" />
                        <h3 className="text-2xl md:text-3xl font-bold uppercase text-white">
                            {item}
                        </h3>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Car Outline / Render Placeholder */}
            <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
                <div className="w-[80vw] h-[40vw] border-[1px] border-williams-blue rounded-full blur-[100px]" />
            </div>

        </section>
    );
}
