import HeroCanvas from "@/components/HeroCanvas";
import EraSection from "@/components/EraSection";
import EngineeringSection from "@/components/EngineeringSection";
import Footer from "@/components/Footer";
import { williamsEras } from "@/data/eras";

export default function Home() {
  return (
    <main className="bg-williams-black text-white min-h-screen">

      {/* HERO SECTION */}
      <HeroCanvas />

      <div className="relative z-20 bg-williams-black">
        {/* ERA SECTIONS */}
        <div className="py-20">
          {williamsEras.map((era, index) => (
            <EraSection key={era.id} era={era} index={index} />
          ))}
        </div>

        {/* ENGINEERING PRINCIPLES */}
        <EngineeringSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
