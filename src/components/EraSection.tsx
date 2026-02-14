'use client';

import { motion } from 'framer-motion';
import { WilliamsEra } from '@/data/eras';

export default function EraSection({ era, index }: { era: WilliamsEra; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <section className="min-h-screen flex items-center justify-center py-20 border-b border-williams-muted/10 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className={`absolute w-[500px] h-[500px] bg-williams-blue/5 rounded-full blur-[120px] -z-10 ${isEven ? '-left-40' : '-right-40'}`} />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start">
                        <span className="text-williams-blue font-bold tracking-widest text-sm border border-williams-blue/30 px-3 py-1 rounded-full whitespace-nowrap">
                            {era.years}
                        </span>
                        <span className="text-williams-muted uppercase text-sm tracking-wider">
                            {era.highlight}
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none">
                        {era.title}
                    </h2>

                    <p className="text-xl text-williams-silver/80 leading-relaxed max-w-md">
                        {era.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`relative h-[300px] md:h-[500px] w-full rounded-none overflow-hidden border border-williams-muted/10 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                >
                    <img
                        src={era.image}
                        alt={era.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />
                </motion.div>
            </div>
        </section>
    );
}
