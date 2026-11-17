import Preloader from "@/components/Preloader";
import SmoothScrollReveal from "@/components/SmoothScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntroduction from "@/components/BrandIntroduction";
import Capabilities from "@/components/Capabilities";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import ProductionMethod from "@/components/ProductionMethod";
import PartnersEcosystem from "@/components/PartnersEcosystem";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import OneCrowdSection from "@/components/OneCrowdSection";
import ContactEnquiry from "@/components/ContactEnquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Cinematic Full-Website Loading Experience */}
      <Preloader />

      {/* Smooth Scroll-Triggered Reveal Controller */}
      <SmoothScrollReveal />

      <main className="min-h-screen bg-[#090C25] text-[#C1C6D7] selection:bg-[#FF2D55] selection:text-white">
        {/* SECTION 01 — NAVIGATION (Sticky Header + Fullscreen Editorial Directory) */}
        <Navbar />

        {/* SECTION 02 — CINEMATIC HERO */}
        <Hero />

        {/* SECTION 03 — BRAND INTRODUCTION */}
        <BrandIntroduction />

        {/* SECTION 04 — WHAT WE DO / CAPABILITIES */}
        <Capabilities />

        {/* SECTION 05 — FEATURED EXPERIENCES */}
        <FeaturedExperiences />

        {/* SECTION 06 — PRODUCTION METHOD */}
        <ProductionMethod />

        {/* SECTION 07 — PARTNERS & ECOSYSTEM */}
        <PartnersEcosystem />

        {/* SECTION 08 — BRAND PHILOSOPHY */}
        <BrandPhilosophy />

        {/* SECTION 09 — ONE CROWD MANY SOUNDS SHOWCASE */}
        <OneCrowdSection />

        {/* SECTION 10 — CONTACT & ENQUIRY (Dual Journey Architecture) */}
        <ContactEnquiry />

        {/* SECTION 11 — FOOTER */}
        <Footer />
      </main>
    </>
  );
}
