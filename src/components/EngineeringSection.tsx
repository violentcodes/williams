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

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 z-10 relative"
            >
                <span className="text-williams-blue text-xs tracking-[0.4em] uppercase block mb-4 font-mono">
                    // CORE_DNA_SEQUENCE
                </span>
                <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">
                    Principles
                </h2>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 container mx-auto z-10 w-full"
            >
                {PRINCIPLES.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                        }}
                        className="group relative border border-williams-muted/10 bg-williams-blue/5 backdrop-blur-sm p-8 hover:bg-williams-blue/10 transition-colors duration-500 overflow-hidden"
                    >
                        {/* Tech Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-williams-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-williams-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-williams-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-williams-blue opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-mono text-williams-muted/50 group-hover:text-williams-blue transition-colors">
                                0{i + 1}
                            </span>
                            <div className="w-8 h-[1px] bg-williams-blue/30 group-hover:w-16 transition-all duration-500" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold uppercase text-white group-hover:translate-x-2 transition-transform duration-300">
                            {item}
                        </h3>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-williams-blue/0 via-williams-blue/5 to-williams-blue/0 opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 pointer-events-none" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Decorative Car Outline / Render Placeholder */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 mix-blend-screen">
                <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border border-williams-blue/20 rounded-full blur-[80px]" />
            </div>

        </section>
    );
}
