export default function BrandIntroduction() {
  const telemetryBlocks = [
    {
      tag: "// CROWD SCALE",
      value: "PAN-INDIA",
      desc: "Production planning across key Indian regions.",
      color: "text-[#dfe0ff]",
      lineGradient: "from-[#68d3ff] to-transparent",
    },
    {
      tag: "// INFRASTRUCTURE",
      value: "MULTICULTURE",
      desc: "From intimate venues to large-scale festival stages.",
      color: "text-[#dfe0ff]",
      lineGradient: "from-[#4b8eff] to-transparent",
    },
    {
      tag: "// RELIABILITY",
      value: "END-TO-END",
      desc: "Creative direction through technical production and live execution.",
      color: "text-[#ff2d55]",
      lineGradient: "from-[#68d3ff] to-transparent",
    },
    {
      tag: "// ARTISTIC INTEGRITY",
      value: "SAFETY-LED",
      desc: "Structured technical planning and on-site coordination.",
      color: "text-[#dfe0ff]",
      lineGradient: "from-[#6a04f1] to-transparent",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0e112a] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="187:966"
      data-name="02 — BRAND INTRODUCTION"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header (Figma node 187:968) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          {/* Left Column: Headline (Figma node 187:977) */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="font-['Oswald',sans-serif] font-semibold text-[44px] sm:text-[54px] lg:text-[62px] leading-[1.05] tracking-tight uppercase">
              <span className="text-[#dfe0ff] block">MORE THAN AN</span>
              <span className="text-[#dfe0ff] block">EVENT</span>
              <span className="text-[#3fc7f5] block">A SHARED</span>
              <span className="text-[#3fc7f5] block">EXPERIENCE</span>
            </h2>
          </div>

          {/* Right Column: Two Editorial Paragraphs (Figma nodes 187:979 & 187:982) */}
          <div className="lg:col-span-7 flex flex-col gap-[20px] pt-1">
            <p className="font-['DM_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] text-white">
              At WAVE, we reject formulaic arena templates in pursuit of raw sensory synchronisation. We work where acoustic precision meets architectural scale—transforming venues across India into singular, living resonance chambers.
            </p>

            <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[15px] sm:text-[16px] leading-[24px]">
              From underground modular synth showcases in converted industrial spaces to headline festival stages across India, our production collective brings together stage engineering, intelligent DMX lighting arrays, and spatial multi-channel audio to create shared memories.
            </p>
          </div>
        </div>

        {/* Telemetry Strip: 4 Critical Metric Blocks (Figma node 206:1047) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2"
          data-node-id="206:1047"
          data-name="Telemetry Strip (4 Critical Metric Blocks)"
        >
          {telemetryBlocks.map((block) => (
            <div
              key={block.tag}
              className="bg-[#161933] p-[24px] rounded-[2px] relative flex flex-col justify-between min-h-[156px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] group hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${block.lineGradient} opacity-40 group-hover:opacity-100 transition-opacity`}
              />

              <div className="flex flex-col gap-[4px]">
                <span className="font-mono font-bold text-[#8b90a0] text-[10px] tracking-[1px] uppercase">
                  {block.tag}
                </span>
                <span
                  className={`font-['Oswald',sans-serif] font-bold text-[40px] sm:text-[48px] tracking-[-1.2px] leading-[52px] ${block.color}`}
                >
                  {block.value}
                </span>
              </div>

              <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[13px] leading-[18px] mt-2">
                {block.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
