import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[799px] lg:h-[799px] mt-[73px] bg-[#090C25] overflow-hidden flex items-center"
      data-node-id="183:1980"
      data-name="Cinematic Hero"
    >
      {/* Full-width Concert Video Background (Figma node 183:1980) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/neon-concert-crowd.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-75 scale-100"
        >
          <source src="/videos/hero-stage.mp4" type="video/mp4" />
        </video>

        {/* Precise High-Contrast Dark Overlay (Figma spec) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090C25] via-[rgba(9,12,37,0.55)] to-[rgba(9,12,37,0.7)]" />
      </div>

      {/* Main Content Container (Figma node 244:100 / 183:1756) */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-12 lg:px-16 py-16">
        <div className="max-w-[620px] w-full flex flex-col gap-[24px]">
          {/* Headline (Figma nodes 244:102 & 244:103) */}
          <div className="flex flex-col font-['Oswald',sans-serif] font-bold uppercase tracking-normal">
            <h1 className="text-white text-[56px] sm:text-[76px] lg:text-[92px] leading-[1.02] tracking-tight animate-fadeInUp [animation-delay:200ms]">
              ONE CROWD
            </h1>
            <h1 className="text-[#3fc7f5] text-[56px] sm:text-[76px] lg:text-[92px] leading-[1.02] tracking-tight animate-fadeInUp [animation-delay:400ms]">
              MANY SOUNDS
            </h1>
          </div>

          {/* Supporting Copy (Figma node 244:104) */}
          <p className="font-['DM_Sans',sans-serif] font-normal text-[#c9d1e3] text-[16px] sm:text-[18px] max-w-[560px] leading-relaxed animate-fadeInUp [animation-delay:600ms]">
            We create extraordinary live experiences through creative direction, technical production and seamless event management.
          </p>

          {/* CTAs (Figma nodes 244:115 & 244:119) */}
          <div className="flex flex-wrap items-center gap-[16px] sm:gap-[20px] pt-2 animate-fadeInUp [animation-delay:800ms]">
            {/* Primary CTA: Explore Experiences */}
            <Link
              href="#experiences"
              className="bg-[#ff2d55] hover:bg-[#ff4d70] text-[#00061f] font-['DM_Sans',sans-serif] font-bold text-[13px] h-[36px] px-[18px] rounded-[3px] flex items-center justify-center transition-all duration-200 shadow-[0_0_16px_rgba(255,45,85,0.35)] hover:shadow-[0_0_24px_rgba(255,45,85,0.55)] focus:outline-none focus:ring-2 focus:ring-white shrink-0 uppercase tracking-wide"
            >
              <span className="whitespace-nowrap">EXPLORE EXPERIENCES</span>
            </Link>

            {/* Secondary CTA: Plan Your Event */}
            <Link
              href="#contact"
              className="bg-[#06091f] hover:bg-[#0c123d] border border-[#3fc7f5] text-[#e3e5ff] font-['DM_Sans',sans-serif] font-bold text-[13px] h-[36px] px-[18px] rounded-[2px] flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3fc7f5] shrink-0 uppercase tracking-wide"
            >
              <span className="whitespace-nowrap">PLAN YOUR EVENT</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
