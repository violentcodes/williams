'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

interface HeroOverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function HeroOverlay({ scrollYProgress }: HeroOverlayProps) {
    // Mapped Opacities for 4 sections
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 1], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 text-center">

            {/* SECTION 1 */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute px-4">
                <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white mb-4 uppercase">
                    Williams Racing
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-williams-silver tracking-widest uppercase">
                    Built by belief. Driven by independence.
                </p>
            </motion.div>

            {/* SECTION 2 */}
            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute px-4">
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-williams-blue mb-4">
                    1977
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-2xl mx-auto leading-relaxed">
                    A privateer team with no guarantees — only conviction.
                </p>
            </motion.div>

            {/* SECTION 3 */}
            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute px-4">
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-2">
                    9 Constructors’ Titles
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl text-williams-silver mb-8">
                    7 Drivers’ Titles
                </h3>
                <p className="text-lg sm:text-xl text-williams-muted uppercase tracking-widest">
                    Engineering before everything
                </p>
            </motion.div>

            {/* SECTION 4 */}
            <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute px-4">
                <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold text-white mb-6">
                    Still Racing
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-williams-blue">
                    The future is being rebuilt.
                </p>
            </motion.div>

        </div>
    );
}
