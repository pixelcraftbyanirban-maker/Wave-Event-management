import { Globe } from "lucide-react";

export default function BrandPhilosophy() {
  const desks = [
    {
      name: "Mumbai Production Network (West & National Tours)",
    },
    {
      name: "Kolkata Production Desk (East & Northeast)",
    },
    {
      name: "Bengaluru Technical Studio (South & Immersive R&D)",
    },
  ];

  return (
    <section
      id="philosophy"
      className="bg-[#090c25] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="189:3505"
      data-name="07 — BRAND PHILOSOPHY"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="mb-10">
          <h2 className="font-['Oswald',sans-serif] font-bold text-[40px] sm:text-[54px] lg:text-[62px] leading-[1.02] tracking-tight uppercase text-white">
            <span className="block">BUILT AROUND MUSIC</span>
            <span className="block text-[#ff2d55]">DRIVEN BY PEOPLE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Directive Quote & Narrative (Figma node 189:3509) */}
          <div className="lg:col-span-7 flex flex-col gap-[24px]">
            {/* Directive Quote Block (Figma node 189:3519) */}
            <div className="bg-[#161933] border-l-2 border-[#3fc7f5] pl-[26px] pr-[24px] py-[24px] rounded-[2px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[12px]">
              <blockquote className="font-['DM_Sans',sans-serif] italic text-[#dfe0ff] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px]">
                “We don&apos;t manufacture noise. We architect the emotional voltage that connects an artist to eighty thousand strangers in a solitary shared heartbeat.”
              </blockquote>
              <span className="font-mono font-bold text-[#8b90a0] text-[10px] tracking-[1px] uppercase">
                — WAVE PRODUCTION DIRECTIVE
              </span>
            </div>

            {/* Narrative Paragraph */}
            <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#c1c6d7] leading-[24px]">
              WAVE was founded by concert lighting designers, sound engineers, and touring stage professionals who wanted to solve disconnected show logistics. We believe technical mastery should be invisible—the audience should never think about the rigging truss or audio system; they should only feel the sound and light.
            </p>
          </div>

          {/* Right Column: Production Desks & ISO Certification (Figma node 189:3527) */}
          <div className="lg:col-span-5 flex flex-col gap-[16px]">
            {/* Production Desks Box */}
            <div className="bg-[#161933] p-[24px] rounded-[2px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[16px]">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(65,71,84,0.3)]">
                <h3 className="font-['Oswald',sans-serif] font-medium text-white text-[18px] sm:text-[20px] tracking-[0.4px] uppercase leading-tight">
                  PRODUCTION DESKS
                </h3>
                <Globe className="w-5 h-5 text-[#3fc7f5]" />
              </div>

              <div className="flex flex-col gap-[12px]">
                {desks.map((d, i) => (
                  <div
                    key={d.name}
                    className={`pb-[10px] ${
                      i < desks.length - 1 ? "border-b border-[rgba(65,71,84,0.2)]" : ""
                    }`}
                  >
                    <span className="font-['DM_Sans',sans-serif] font-medium text-[#dfe0ff] text-[13px] sm:text-[14px] leading-[20px]">
                      {d.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Certification Banner (Figma node 189:3551) */}
            <div className="bg-[#161933] px-[20px] py-[16px] rounded-[2px] flex items-center justify-between text-xs border border-[rgba(104,211,255,0.1)]">
              <span className="font-mono font-bold text-[#8b90a0] text-[10px] tracking-[1px] uppercase">
                COMPLIANCE CERTIFICATION
              </span>
              <span className="font-mono font-bold text-[#3fc7f5] text-[10px] tracking-[1px] uppercase">
                ISO 20121 SUSTAINABLE EVENTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
