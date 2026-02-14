'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import HeroOverlay from './HeroOverlay';

const FRAME_COUNT = 194;
const IMAGES_DIR = '/assets/';
const IMAGE_NAME_PREFIX = 'ezgif-frame-';

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress for the entire hero section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress for animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress to frame index
    const frameIndex = useTransform(smoothProgress, [0, 1], [1, FRAME_COUNT]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, '0');
                img.src = `${IMAGES_DIR}${IMAGE_NAME_PREFIX}${paddedIndex}.jpg`;

                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === FRAME_COUNT) {
                        setIsLoaded(true);
                    }
                };
                imgArray[i] = img;
            }
            setImages(imgArray);
        };

        loadImages();
    }, []);

    // Render loop
    useEffect(() => {
        if (!isLoaded || !canvasRef.current) return;

        const context = canvasRef.current.getContext('2d');
        if (!context) return;

        const render = () => {
            const index = Math.min(
                FRAME_COUNT,
                Math.max(1, Math.round(frameIndex.get()))
            );

            const img = images[index];

            if (img) {
                const canvas = canvasRef.current!;
                const cw = canvas.width;
                const ch = canvas.height;
                const iw = img.width;
                const ih = img.height;

                const scale = Math.max(cw / iw, ch / ih);
                const nw = iw * scale;
                const nh = ih * scale;
                const ox = (cw - nw) / 2;
                const oy = (ch - nh) / 2;

                context.clearRect(0, 0, cw, ch);
                context.drawImage(img, ox, oy, nw, nh);
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationId);
    }, [isLoaded, frameIndex, images]);

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative bg-[var(--bg-primary)]">
            <div
                className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center"
                style={{ position: 'sticky', top: 0, height: '100vh' }}
            >
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]/80 pointer-events-none z-10" />

                {/* Pass the SMOOTH progress to overlay for better sync with frames */}
                <HeroOverlay scrollYProgress={smoothProgress} />

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)] text-[var(--accent-williams)] z-50">
                        <div className="text-xl tracking-widest animate-pulse font-sans">INITIALIZING SYSTEMS...</div>
                    </div>
                )}
            </div>
        </div>
    );
}
