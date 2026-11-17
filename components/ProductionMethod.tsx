import Image from "next/image";

export default function ProductionMethod() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Deep dive into artist concept, listener demographic, venue acoustics, and performance energy. We define clear boundaries of light, space, and volume.",
    },
    {
      num: "02",
      title: "CONCEPTUALISE",
      desc: "Development of visual identity, 3D stage renders, lighting moodboards, and timecoded musical cue maps matching the performance setlist.",
    },
    {
      num: "03",
      title: "PLAN",
      desc: "Structural engineering assessments, electrical load calculations, spatial acoustic modelling, and vendor scheduling across Indian states and venues.",
    },
    {
      num: "04",
      title: "COORDINATE",
      desc: "Full stakeholder coordination: stage managers, artist representatives, FOH sound engineers, and local rigging teams aligned to a millisecond-accurate run of show.",
    },
    {
      num: "05",
      title: "DELIVER",
      desc: "Live execution supervision from load-in to post-show load-out. Technical oversight with live telemetry tracking ensuring flawless sensory impact.",
    },
  ];

  return (
    <section
      id="method"
      className="bg-[#080b24] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="189:3130"
      data-name="05 — PRODUCTION METHOD"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Headline, Narrative & Rig Visual Card (Figma node 189:3140) */}
          <div className="lg:col-span-5 flex flex-col gap-[28px] lg:sticky lg:top-[90px]">
            {/* Headline */}
            <div className="flex flex-col gap-[20px]">
              <h2 className="font-['Oswald',sans-serif] font-bold text-[48px] sm:text-[60px] tracking-tight uppercase leading-[0.98] text-white">
                <span className="block">FROM FIRST IDEA</span>
                <span className="block">
                  TO <span className="text-[#ff2d55]">FINAL MOMENT</span>
                </span>
              </h2>

              <p className="font-['DM_Sans',sans-serif] font-normal text-[#a7a9bc] text-[15px] sm:text-[16px] leading-[24px]">
                A live concert affords zero second takes. Our disciplined 5-stage coordination framework guarantees that high-concept artistic visions translate cleanly into physically sound arena rigs.
              </p>
            </div>

            {/* Rig Visual Card (Figma node 233:20 & 189:3146) */}
            <div className="flex flex-col rounded-[4px] overflow-hidden border border-[#1f265c] bg-[#0c0f2f] shadow-lg group">
              <div className="relative h-[240px] sm:h-[260px] w-full overflow-hidden">
                <Image
                  src="/images/purple-lit-stage-truss.jpg"
                  alt="Purple-Lit Concert Stage Truss"
                  fill
                  sizes="(max-width: 768px) 100vw, 466px"
                  className="object-cover grayscale contrast-[102%] group-hover:grayscale-0 hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Column: The 5 Exact Landing Page Steps (Figma node 189:3161) */}
          <div className="lg:col-span-7 flex flex-col gap-[16px]">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0e1233] border border-[#1c2256] rounded-[6px] p-[24px] sm:p-[28px] flex items-start gap-[20px] transition-all duration-200 hover:border-[#087bff]"
              >
                {/* Step Number */}
                <span className="font-['Oswald',sans-serif] font-bold text-[#087bff] text-[38px] leading-none shrink-0 w-[44px]">
                  {step.num}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-[10px] flex-1">
                  <h3 className="font-['Oswald',sans-serif] font-semibold text-[24px] sm:text-[28px] text-white tracking-[0.5px] uppercase leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[14px] sm:text-[15px] leading-[22px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
