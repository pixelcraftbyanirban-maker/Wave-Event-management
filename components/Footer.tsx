import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin, Disc } from "lucide-react";

export default function Footer() {
  const indiaCoverage = [
    { region: "WEST INDIA", code: "LDN", city: "Mumbai, Maharashtra" },
    { region: "EAST & NORTHEAST INDIA", code: "BER", city: "Kolkata, West Bengal" },
    { region: "SOUTH INDIA", code: "TYO", city: "Bengaluru, Karnataka" },
  ];

  const whatWeDoLinks = [
    { label: "Stage Production", href: "#services" },
    { label: "Technical Production", href: "#services" },
    { label: "Artist Management", href: "#services" },
    { label: "Festival Production", href: "#services" },
    { label: "Tour & Live Experiences", href: "#services" },
  ];

  const exploreLinks = [
    { label: "About WAVE", href: "#about" },
    { label: "Experiences", href: "#experiences" },
    { label: "Our Work", href: "#experiences" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="footer"
      className="bg-[#080b24] border-t border-[rgba(255,255,255,0.1)] pt-[40px] pb-[32px] text-sm text-[#C1C6D7]"
      data-node-id="197:122"
      data-name="09 — FOOTER"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* 4-Column Desktop Grid (Figma node 204:639) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[rgba(255,255,255,0.1)]">
          {/* Column 01: Brand Identity (5 cols on lg) (Figma node 204:640) */}
          <div className="lg:col-span-5 flex flex-col gap-[16px]">
            <div className="relative w-[156px] h-[57px]">
              <Image
                src="/images/wave-logo.png"
                alt="WAVE"
                fill
                sizes="156px"
                className="object-contain object-left pointer-events-none brand-logo"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="font-['Oswald',sans-serif] font-bold text-[28px] sm:text-[32px] leading-[34px] tracking-[0.7px] uppercase">
                <span className="text-[#00c8ff]">ONE CROWD </span>
                <span className="text-[#ff2d55]">MANY SOUNDS</span>
              </div>

              <p className="text-[#a7a9bc] text-[14px] leading-[22.75px] max-w-[384px] font-['DM_Sans',sans-serif]">
                Next-generation touring audio, dynamic stadium lighting and technical precision for international live concerts and global festivals.
              </p>
            </div>

            {/* Social media profiles (Figma node 204:649) */}
            <div className="flex items-center gap-[6px] pt-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(255,255,255,0.12)] hover:border-[#68d3ff] size-[20px] rounded-[2px] flex items-center justify-center text-[#c1c6d7] hover:text-[#68d3ff] transition-colors touch-target-44"
                aria-label="WAVE on Instagram"
              >
                <Instagram className="w-2.5 h-2.5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(255,255,255,0.12)] hover:border-[#68d3ff] size-[20px] rounded-[2px] flex items-center justify-center text-[#c1c6d7] hover:text-[#68d3ff] transition-colors touch-target-44"
                aria-label="WAVE on YouTube"
              >
                <Youtube className="w-2.5 h-2.5" />
              </Link>
              <Link
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(255,255,255,0.12)] hover:border-[#68d3ff] size-[20px] rounded-[2px] flex items-center justify-center text-[#c1c6d7] hover:text-[#68d3ff] transition-colors touch-target-44"
                aria-label="WAVE on Spotify"
              >
                <Disc className="w-2.5 h-2.5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[rgba(255,255,255,0.12)] hover:border-[#68d3ff] size-[20px] rounded-[2px] flex items-center justify-center text-[#c1c6d7] hover:text-[#68d3ff] transition-colors touch-target-44"
                aria-label="WAVE on LinkedIn"
              >
                <Linkedin className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>

          {/* Column 02: Global Presence / India Coverage (3 cols on lg) (Figma node 204:667) */}
          <div className="lg:col-span-3 flex flex-col gap-[16px]">
            <h4 className="font-mono font-bold text-[14px] text-white tracking-[1.4px] uppercase border-b border-[rgba(255,255,255,0.1)] pb-[9px]">
              INDIA COVERAGE
            </h4>

            <div className="flex flex-col gap-[16px]">
              {indiaCoverage.map((item, idx) => (
                <div
                  key={item.region}
                  className={`flex flex-col gap-[4px] pb-[10px] ${
                    idx < indiaCoverage.length - 1 ? "border-b border-[rgba(255,255,255,0.05)]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between text-white font-mono font-bold text-[13px]">
                    <span>{item.region}</span>
                    <span className="text-[#00c8ff] text-[12px] tracking-[1.2px] font-normal">
                      {item.code}
                    </span>
                  </div>
                  <span className="text-[#a7a9bc] text-[12px] font-['DM_Sans',sans-serif]">
                    {item.city}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 03: What We Do (2 cols on lg) (Figma node 204:689) */}
          <div className="lg:col-span-2 flex flex-col gap-[16px]">
            <h4 className="font-['DM_Sans',sans-serif] font-bold text-[14px] text-white tracking-[1.4px] uppercase border-b border-[rgba(255,255,255,0.1)] pb-[9px]">
              WHAT WE DO
            </h4>

            <ul className="flex flex-col gap-[12px]">
              {whatWeDoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#a7a9bc] hover:text-[#68d3ff] text-[14px] font-['DM_Sans',sans-serif] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 04: Explore (2 cols on lg) (Figma node 204:723) */}
          <div className="lg:col-span-2 flex flex-col gap-[16px]">
            <h4 className="font-['DM_Sans',sans-serif] font-bold text-[14px] text-white tracking-[1.4px] uppercase border-b border-[rgba(255,255,255,0.1)] pb-[9px]">
              EXPLORE
            </h4>

            <ul className="flex flex-col gap-[12px]">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#a7a9bc] hover:text-[#68d3ff] text-[14px] font-['DM_Sans',sans-serif] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 4: Bottom Utility Bar (Figma node 204:757) */}
        <div className="pt-[24px] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#a7a9bc]">
          <p>© 2026 WAVE Event Management Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-[16px]">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">|</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">|</span>
            <div className="flex items-center gap-[6px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#00c8ff]" />
              <span className="font-mono text-[11px] text-[rgba(255,255,255,0.5)]">
                WCAG 2.2 AA COMPLIANT
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
