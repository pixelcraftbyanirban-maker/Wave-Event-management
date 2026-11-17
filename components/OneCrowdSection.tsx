import Image from "next/image";

export default function OneCrowdSection() {
  return (
    <section
      className="bg-[#090c25] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)] overflow-hidden"
      data-node-id="249:2590"
      data-name="One Crowd Many Sounds Showcase"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-[10px]" data-node-id="249:2591">
            <div className="flex flex-col font-['Oswald',sans-serif] font-bold uppercase tracking-[-1.8px]" data-node-id="249:2592">
              <h2 className="text-[#dfe0ff] text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-1.8px] mb-[-4px]" data-node-id="249:2593">
                ONE CROWD
              </h2>
              <div className="pt-2" data-node-id="249:2594">
                <h2 className="text-[#62c6f1] text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-1.8px]" data-node-id="249:2595">
                  MANY SOUNDS
                </h2>
              </div>
            </div>

            <div className="pt-[14px] max-w-[580px]" data-node-id="249:2596">
              <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[16px] sm:text-[18px] leading-[28px]" data-node-id="249:2598">
                We bring music, people, and experiences together through creative event production, ultra-low latency acoustic physics, and high-voltage visual scenography.
              </p>
            </div>
          </div>

          {/* Right Column: Stage Performance Image with Dual-Layer Seamless Color Reveal on Hover */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[576px] h-[280px] sm:h-[340px] md:h-[384px] rounded-[2px] overflow-hidden border border-[#68d3ff] bg-[#0c0f2f] shadow-[0_0_25px_rgba(104,211,255,0.18)] group transition-all duration-500 hover:shadow-[0_0_40px_rgba(104,211,255,0.45)] hover:border-[#3fc7f5] cursor-pointer"
              data-node-id="249:2601"
              data-name="Neon India City Network Map 1"
            >
              {/* Layer 1: Normal State (Crisp 100% Pure Black & White as in Figma) */}
              <Image
                src="/images/one-crowd-concert-bw.jpg"
                alt="One Crowd Many Sounds - Black & White Classical Performance"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 576px"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Layer 2: Hover State (Vibrant, Saturated Live Concert Lighting in Full Color) */}
              <Image
                src="/images/one-crowd-concert-color.jpg"
                alt="One Crowd Many Sounds - Live Concert Color Lighting"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 576px"
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out group-hover:scale-[1.03] pointer-events-none"
              />

              {/* Subtle hover vignette & stage lighting flare */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c25]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
