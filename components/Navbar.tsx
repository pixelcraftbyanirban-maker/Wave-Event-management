"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close directory on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDirectoryOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCES", href: "#experiences" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  const directoryItems = [
    { num: "01", label: "HERO", href: "#home" },
    { num: "02", label: "BRAND INTRODUCTION", href: "#about" },
    { num: "03", label: "WHAT WE DO / CAPABILITIES", href: "#services" },
    { num: "04", label: "FEATURED EXPERIENCES", href: "#experiences" },
    { num: "05", label: "PRODUCTION METHOD", href: "#method" },
    { num: "06", label: "PARTNERS & ECOSYSTEM", href: "#partners" },
    { num: "07", label: "BRAND PHILOSOPHY", href: "#philosophy" },
    { num: "08", label: "CONTACT & ENQUIRY", href: "#contact" },
    { num: "09", label: "FOOTER", href: "#footer" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[73px] backdrop-blur-[24px] bg-[rgba(9,12,37,0.85)] border-b border-[rgba(173,198,255,0.2)] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)] transition-all duration-300"
      >
        <div className="max-w-[1280px] h-full mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left: WAVE Logo (Replaced with user-provided brand mark) */}
          <Link href="#home" className="flex items-center group focus:outline-none focus:ring-1 focus:ring-[#3FC7F5] rounded">
            <div className="relative w-[125px] sm:w-[140px] h-[44px] shrink-0">
              <Image
                src="/images/wave-nav-logo.png"
                alt="WAVE Event Management"
                fill
                sizes="(max-width: 640px) 125px, 140px"
                className="object-contain object-left pointer-events-none brand-logo drop-shadow-[0_0_15px_rgba(63,199,245,0.25)]"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Figma node 206:891) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-1 text-[14px] font-['DM_Sans',sans-serif] font-bold tracking-[0.7px] uppercase text-[#c1c6d7] hover:text-white transition-colors rounded-[2px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA & Mobile Controls (Figma node 206:1003) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="#experiences"
              className="bg-[#ff2d55] hover:bg-[#ff4d70] text-[#00061f] font-['DM_Sans',sans-serif] font-bold text-[11px] sm:text-[12px] tracking-[0.6px] uppercase h-[32px] px-3.5 sm:px-4 rounded-[3px] flex items-center justify-center transition-all duration-200 shadow-[0_0_12px_rgba(255,45,85,0.3)] hover:shadow-[0_0_18px_rgba(255,45,85,0.5)] focus:outline-none focus:ring-2 focus:ring-white shrink-0"
            >
              <span className="whitespace-nowrap">Explore EXPERIENCES</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 rounded text-[#c1c6d7] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#3fc7f5]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] z-40 bg-[#090C25]/98 border-b border-[rgba(173,198,255,0.2)] p-6 lg:hidden backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-['DM_Sans',sans-serif] font-bold tracking-[0.7px] uppercase text-[#c1c6d7] hover:text-[#3fc7f5] py-2 border-b border-[rgba(255,255,255,0.06)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDirectoryOpen(true);
                }}
                className="w-full py-3 text-center border border-[rgba(104,211,255,0.3)] bg-[#161933] text-[#3fc7f5] font-mono text-xs font-bold tracking-widest uppercase rounded-[2px]"
              >
                // VIEW FULL ARCHITECTURE DIRECTORY
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Fullscreen Editorial Directory Modal (Figma node 208:1052 "SIDE MENU 1") */}
      {isDirectoryOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#090C25] flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-y-auto animate-fadeIn"
          data-node-id="208:1052"
          data-name="SIDE MENU 1"
        >
          {/* Header - TOP BAR (Figma node 209:1396 / 209:1480) */}
          <div className="max-w-[1208px] mx-auto w-full flex items-center justify-between pb-6 border-b border-[rgba(173,198,255,0.15)] shrink-0">
            {/* Logo */}
            <div className="relative w-[140px] sm:w-[160px] h-[50px]">
              <Image
                src="/images/wave-nav-logo.png"
                alt="WAVE Event Management"
                fill
                sizes="(max-width: 640px) 140px, 160px"
                className="object-contain object-left pointer-events-none brand-logo drop-shadow-[0_0_15px_rgba(63,199,245,0.25)]"
                priority
              />
            </div>

            {/* Coral CLOSE × button (Figma node 209:1473) */}
            <button
              onClick={() => setIsDirectoryOpen(false)}
              className="bg-[#FF2D55] hover:bg-[#FF4D70] text-[#00061F] font-['DM_Sans',sans-serif] font-bold text-[11px] tracking-[0.8px] uppercase px-3 py-1.5 rounded-[2px] flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(255,45,85,0.3)] focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              <span>CLOSE</span>
              <X className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Main Editorial Directory List (Figma node 209:1408) */}
          <div className="max-w-[1200px] mx-auto w-full py-8 lg:py-12 flex flex-col gap-2 sm:gap-3 flex-1 justify-center">
            {directoryItems.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                onClick={() => setIsDirectoryOpen(false)}
                className="group flex items-baseline gap-4 sm:gap-8 py-2 sm:py-2.5 transition-colors"
              >
                {/* Number */}
                <span className="font-['Oswald',sans-serif] font-medium text-[20px] sm:text-[26px] lg:text-[30px] text-[#8B90A0] group-hover:text-[#3FC7F5] transition-colors shrink-0 w-8 sm:w-12 text-left">
                  {item.num}
                </span>

                {/* Title */}
                <span className="font-['Oswald',sans-serif] font-bold text-[34px] sm:text-[50px] md:text-[60px] lg:text-[70px] uppercase leading-none tracking-normal text-[#DFE0FF] group-hover:text-[#3FC7F5] transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Telemetry Bar (Figma node 209:1462) */}
          <div className="max-w-[1208px] mx-auto w-full pt-6 border-t border-[rgba(173,198,255,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B90A0] shrink-0">
            <span className="tracking-wider uppercase">WAVE • STADIUM TOURING LOGISTICS &amp; ENGINEERING</span>
            <span className="tracking-wider">© 2025 WAVE LIVE CONCERT SYSTEMS. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      )}
    </>
  );
}
