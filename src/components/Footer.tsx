export default function Footer() {
    return (
        <footer className="bg-williams-black py-32 border-t border-williams-muted/10 text-center relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-8xl font-bold uppercase mb-8 tracking-tighter">
                    Williams Racing
                </h2>
                <p className="text-xl md:text-3xl text-williams-silver/60 max-w-4xl mx-auto leading-relaxed mb-16">
                    Legacy isn’t inherited.<br />
                    It’s built — <span className="text-white">lap by lap.</span>
                </p>

                <a href="#" className="inline-block text-williams-blue tracking-[0.2em] hover:text-white transition-colors uppercase text-sm border-b border-transparent hover:border-williams-blue pb-1">
                    Explore the journey
                </a>

                <div className="mt-32 text-williams-muted/20 text-xs uppercase tracking-widest">
                    © 2024 Williams Grand Prix Engineering Limited
                </div>
            </div>

            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-williams-blue/10 blur-[100px] rounded-full pointer-events-none" />
        </footer>
    );
}
