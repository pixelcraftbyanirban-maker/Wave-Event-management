import Link from "next/link";
import { Disc, Mic2, Tent, Sparkles } from "lucide-react";

export default function PartnersEcosystem() {
  const partners = [
    {
      title: "MUSIC LABELS",
      desc: "Full-scale label showcases, album launch environments, and immersive multi-artist residency tours engineered for maximum audio clarity.",
      cta: "→ LABEL FRAMEWORKS",
      icon: Disc,
    },
    {
      title: "ARTISTS & MANAGERS",
      desc: "Signature custom stage architecture, modular transportable touring sets, and synchronized audiovisual cues that honor the performer's vision.",
      cta: "→ ARTIST PARTNERSHIPS",
      icon: Mic2,
    },
    {
      title: "FESTIVAL ORGANISERS",
      desc: "Multi-stage architectural schematics, spatial noise pollution mitigation, crowd flow optimization, and headline act staging handoffs.",
      cta: "→ FESTIVAL INTEGRATION",
      icon: Tent,
    },
    {
      title: "BRAND SPONSORS",
      desc: "High-impact sensory brand pavilions, audio-reactive lounges, and audience experiential spaces that naturally enhance the concert atmosphere.",
      cta: "→ BRAND ACTIVATIONS",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="partners"
      className="bg-[#0e112a] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="189:3262"
      data-name="06 — PARTNERS & ECOSYSTEM"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header (Figma node 189:3266) */}
        <div className="flex flex-col gap-[14px] mb-12">
          <h2 className="font-['Oswald',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-tight uppercase text-white max-w-[800px]">
            GREAT EXPERIENCES ARE BUILT TOGETHER
          </h2>

          <p className="font-['DM_Sans',sans-serif] font-normal text-[#a7a9bc] text-[15px] sm:text-[16px] leading-[24px]">
            Bespoke activation frameworks for commercial, cultural, and independent live music stakeholders.
          </p>
        </div>

        {/* 4 Cards Grid (Figma node 189:3276) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.title}
                className="bg-[#161933] p-[24px] sm:p-[28px] rounded-[2px] flex flex-col justify-between shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] group hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[rgba(104,211,255,0.2)]"
              >
                <div className="flex flex-col gap-[16px]">
                  <div className="w-10 h-10 rounded-[2px] bg-[#252842] flex items-center justify-center text-[#68d3ff]">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-['Oswald',sans-serif] font-semibold text-white text-[20px] tracking-[0.4px] uppercase leading-[26px]">
                    {p.title}
                  </h3>

                  <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[13px] leading-[20px]">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(65,71,84,0.3)]">
                  <Link
                    href="#contact"
                    className="font-mono font-bold text-[#68d3ff] text-[10px] tracking-[1px] uppercase hover:text-white transition-colors"
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discuss a Collaboration CTA (Figma node 189:3332) */}
        <div className="flex justify-center pt-2">
          <Link
            href="#contact"
            className="border border-[#087bff]/80 hover:border-[#ff2d55] bg-[#090c25] hover:bg-[#161933] text-[#ff2d55] hover:text-[#ff4d70] font-['DM_Sans',sans-serif] font-semibold text-[13px] tracking-wider uppercase h-[40px] px-6 w-fit rounded-[3px] inline-flex items-center justify-center transition-all duration-200 shadow-[0_0_15px_rgba(8,123,255,0.2)] hover:shadow-[0_0_20px_rgba(255,45,85,0.3)] focus:outline-none focus:ring-1 focus:ring-[#087bff] touch-target-44"
          >
            DISCUSS A COLLABORATION
          </Link>
        </div>
      </div>
    </section>
  );
}
