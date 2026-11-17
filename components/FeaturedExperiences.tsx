import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedExperiences() {
  const experiences = [
    {
      concept: "CONCEPT 01 // TOURING",
      location: "MUMBAI, IN",
      venue: "THE DOCKLANDS",
      title: "CHRONOS // MONOLITH TOUR",
      desc: "Industrial techno staged inside an 18 m motorised monolithic light tower, using real-time 3D laser mapping and sub-bass resonance chambers.",
      image: "/images/neon-concert-crowd.jpg",
      partnerBadge: "DICE [PREVIEW]",
    },
    {
      concept: "CONCEPT 02 // SPATIAL",
      location: "KOLKATA, IN",
      venue: "TEMPELHOF HANGAR",
      title: "SUB-ZERO FREQUENCIES",
      desc: "An all-night modular ambient exploration deploying a 64-channel spatial soundfield, cryogenic mist atmospheric control, and zero direct glare fixtures.",
      image: "/images/electric-blue-laser-stadium.jpg",
      partnerBadge: "EVENTIM [PREVIEW]",
    },
    {
      concept: "CONCEPT 03 // SYNTHESIS",
      location: "BENGALURU, IN",
      venue: "ODAIBA DOME",
      title: "SOLAR ECHOES LIVE",
      desc: "Real-time audio-visual synthesis rendered in a 360-degree geodesic dome. Algorithmic generative shaders reacting to live analog synthesizer telemetry.",
      image: "/images/neon-backstage-crew.jpg",
      partnerBadge: "PIA [PREVIEW]",
    },
  ];

  return (
    <section
      id="experiences"
      className="bg-[#0e112a] py-[60px] lg:py-[80px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="187:1956"
      data-name="04 — FEATURED EXPERIENCES"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header (Figma node 187:1958) */}
        <div className="mb-12">
          <h2 className="font-['Oswald',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-tight uppercase text-white">
            THE EXPERIENCES WE IMAGINE
          </h2>
        </div>

        {/* Experience Cards (3 Concepts) (Figma node 206:1049) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-node-id="206:1049"
          data-name="Experience Cards (3 Concepts)"
        >
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-[#161933] border border-[#087bff] rounded-[2px] overflow-hidden flex flex-col justify-between shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] group transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Top Badge */}
                <div className="relative h-[256px] w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale contrast-[102%] group-hover:grayscale-0 group-hover:contrast-100 hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161933] via-[rgba(22,25,51,0.2)] to-transparent pointer-events-none" />

                  {/* Concept Badge */}
                  <div className="absolute top-[12px] left-[12px] backdrop-blur-[12px] bg-[rgba(9,12,37,0.85)] px-[10px] py-[4px] rounded-[2px] z-10">
                    <span className="font-mono font-bold text-[#68d3ff] text-[10px] tracking-[1px] uppercase">
                      {exp.concept}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-[24px] flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    {/* Location Metadata */}
                    <div className="flex items-center gap-[8px] text-[#8b90a0] text-[11px] font-mono font-bold uppercase tracking-[1px]">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.venue}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Oswald',sans-serif] font-semibold text-white text-[24px] sm:text-[26px] tracking-[0.5px] uppercase leading-[30px] mt-1">
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[14px] leading-[22px] mt-2">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer (Border-t) */}
              <div className="px-[24px] pb-[24px] pt-[16px] border-t border-[rgba(65,71,84,0.3)] flex items-center justify-between">
                <Link
                  href="#contact"
                  className="flex items-center gap-[4px] font-['DM_Sans',sans-serif] font-bold text-[12px] text-[#ff2d55] tracking-[0.6px] uppercase hover:text-[#ff4d70] transition-colors"
                >
                  <span>CONCEPT DETAILS →</span>
                </Link>

                <div className="bg-[#252842] px-[14px] py-[4px] rounded-[2px]">
                  <span className="font-mono font-bold text-[#c1c6d7] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
                    {exp.partnerBadge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
