import { Lightbulb, BarChart2, Users, Sparkles, SlidersHorizontal, Info } from "lucide-react";

export default function Capabilities() {
  const cards = [
    {
      num: "// CAPABILITY 01",
      title: "EVENT STRATEGY",
      desc: "Holistic event concept development, venue acoustic analysis, narrative arc design, and creative direction custom-tailored to artist identity.",
      tags: ["NARRATIVE CONCEPT", "FEASIBILITY"],
      icon: Lightbulb,
      colSpan: "lg:col-span-1",
    },
    {
      num: "// CAPABILITY 02",
      title: "LIVE CONCERT PRODUCTION",
      desc: "Exacting production planning, stage plots, line-array coverage maps, multi-tier DMX lighting design, and timecode synchronization for high-energy sets.",
      tags: ["DMX LIGHTING", "SPATIAL AUDIO"],
      icon: BarChart2,
      colSpan: "lg:col-span-1",
    },
    {
      num: "// CAPABILITY 03",
      title: "ARTIST & LABEL COORDINATION",
      desc: "Stakeholder coordination across Indian headline artists, management agencies, touring crews, and music labels.",
      tags: ["TALENT RIDERS", "LABEL SYNC"],
      icon: Users,
      colSpan: "lg:col-span-1",
    },
    {
      num: "// CAPABILITY 04",
      title: "CREATIVE EXPERIENCE DESIGN",
      desc: "Dynamic scenography, bespoke LED visual media playback, volumetric smoke choreography, and immersive stage environments that heighten audience connection.",
      tags: ["VOLUMETRIC LED", "SCENOGRAPHY"],
      icon: Sparkles,
      colSpan: "lg:col-span-1",
    },
    {
      num: "// CAPABILITY 05",
      title: "PRODUCTION MANAGEMENT & PARTNER ORCHESTRATION",
      desc: "End-to-end operational rigor: rig safety protocols, site operations, load-in timetables, and on-the-ground management collaborating seamlessly with licensed structural, lighting, and audio specialists.",
      tags: ["SITE MANAGEMENT", "SPECIALIST NETWORKS", "WCAG SAFETY COMPLIANT"],
      networkTag: "NETWORK: INDIA-WIDE VENDOR PARTNERS",
      icon: SlidersHorizontal,
      colSpan: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#090c25] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="187:1022"
      data-name="03 — WHAT WE DO / CAPABILITIES"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header (Figma node 187:1024) */}
        <div className="flex flex-col gap-[16px] mb-12">
          <h2 className="font-['Oswald',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-tight uppercase text-white max-w-[800px]">
            FROM THE FIRST IDEA TO THE FINAL MOMENT
          </h2>

          <p className="font-['DM_Sans',sans-serif] font-normal text-[#a7a9bc] text-[15px] sm:text-[16px] leading-[24px] max-w-[620px]">
            WAVE coordinates the full lifecycle of live execution, aligning visionaries, artists, and specialized technical production partners.
          </p>
        </div>

        {/* 5 Capability Cards Grid (Figma node 206:1048) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-node-id="206:1048"
          data-name="5 Capability Cards Grid"
        >
          {cards.map((c) => {
            const IconComponent = c.icon;
            return (
              <div
                key={c.title}
                className={`bg-[#161933] border border-[#ff2d55] rounded-[2px] p-[24px] sm:p-[28px] flex flex-col justify-between shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] group hover:-translate-y-1 transition-all duration-200 ${c.colSpan}`}
              >
                <div className="flex flex-col gap-[16px]">
                  {/* Card Header: Eyebrow + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[#68d3ff] text-[10px] tracking-[1px] uppercase">
                      {c.num}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#8b90a0] group-hover:text-[#68d3ff] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Oswald',sans-serif] font-semibold text-white text-[22px] sm:text-[24px] tracking-[0.5px] uppercase leading-[28px]">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[14px] leading-[22px]">
                    {c.desc}
                  </p>
                </div>

                {/* Card Tags / Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-4 border-t border-[rgba(65,71,84,0.3)]">
                  <div className="flex flex-wrap items-center gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#252842] px-[10px] py-[3px] rounded-[2px] font-mono text-[9px] font-bold text-[#c1c6d7] tracking-[0.8px] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {c.networkTag && (
                    <span className="font-mono text-[10px] font-bold text-[#68d3ff] tracking-[0.8px] uppercase whitespace-nowrap">
                      {c.networkTag}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Orchestration Notice (Figma node 187:1133) */}
        <div
          className="mt-6 bg-[#161933] border border-[rgba(104,211,255,0.2)] rounded-[2px] p-[16px] sm:p-[20px] flex items-start gap-[14px]"
          data-node-id="187:1133"
        >
          <Info className="w-5 h-5 text-[#68d3ff] shrink-0 mt-0.5" />
          <p className="font-['DM_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#c1c6d7] leading-[20px]">
            <strong className="text-white font-semibold">Orchestration Model:</strong>{" "}
            WAVE provides creative direction, overall project coordination, and production management. We collaborate with accredited, best-in-class local audio, staging, and lighting contractors in each jurisdiction rather than claiming proprietary fleet ownership.
          </p>
        </div>
      </div>
    </section>
  );
}
