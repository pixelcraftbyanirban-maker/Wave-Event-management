"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronDown, Loader2, ArrowRight } from "lucide-react";

export default function ContactEnquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    classification: "Artist / Label Touring Production",
    timeline: "",
    capacity: "Club / Intimate Venue (1,000–3,000 capacity)",
    scope: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.organisation.trim() || !formData.scope.trim()) {
      setError("Please fill in all mandatory fields marked with *");
      return;
    }
    setError("");
    setIsSubmitting(true);

    // Simulate smooth API dispatch with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  const ticketPartners = ["DICE.FM", "AXS TICKETING", "EVENTIM", "TICKET PIA"];

  return (
    <section
      id="contact"
      className="bg-[#090c25] py-[50px] lg:py-[70px] relative border-t border-[rgba(173,198,255,0.15)]"
      data-node-id="249:2603"
      data-name="08 — CONTACT & ENQUIRY"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Section Header (Figma node 249:2605) */}
        <div className="flex flex-col gap-[8px] mb-10 max-w-3xl" data-node-id="249:2605" data-name="Section Header">
          <div className="flex flex-col font-['Oswald',sans-serif] font-semibold text-[44px] sm:text-[54px] lg:text-[60px] leading-[1.02] tracking-[1.44px] uppercase" data-node-id="249:2607">
            <h2 className="text-[#dfe0ff]">HAVE AN IDEA?</h2>
            <h2 className="text-[#3fc7f5]">LET&apos;S MAKE IT HAPPEN</h2>
          </div>

          <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[15px] sm:text-[16px] leading-[24px] max-w-[768px] pt-1" data-node-id="249:2609">
            Whether you are launching a stadium tour, planning a large-scale Indian festival, or envisioning a custom spatial activation, our creative production teams are ready.
          </p>
        </div>

        {/* Dual Journey Architecture (Figma node 249:2611 / 264:2899) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          data-node-id="249:2611"
          data-name="Dual Journey Architecture"
        >
          {/* Journey A: Attendee & Ticket Inquiries (Figma node 249:2612, Left Column) */}
          <div
            className="lg:col-span-4 bg-[#161933] p-[24px] sm:p-[28px] rounded-[2px] flex flex-col justify-between min-h-[475px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[rgba(104,211,255,0.1)]"
            data-node-id="249:2612"
            data-name="Journey A: Attendee & Ticket Inquiries (Left Column)"
          >
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-['Oswald',sans-serif] font-medium text-[28px] sm:text-[32px] tracking-[0.4px] uppercase leading-[36px] sm:leading-[40px] text-[#dfe0ff]">
                LOOKING FOR EVENT <span className="text-[#ff2d55]">TICKETS?</span>
              </h3>

              <p className="font-['DM_Sans',sans-serif] font-normal text-[#c1c6d7] text-[14px] leading-[22px]">
                WAVE conceptualizes and manages stage production. Verified tickets for all affiliated tours and shows are distributed solely via our authorized primary ticketing partners.
              </p>

              {/* Authorized Ticket Partners */}
              <div className="pt-2 flex flex-col gap-[8px]">
                <span className="font-mono font-bold text-white text-[11px] tracking-[0.8px] uppercase">
                  AUTHORIZED TICKET PARTNERS:
                </span>
                <div className="flex flex-wrap gap-[8px]">
                  {ticketPartners.map((partner) => (
                    <span
                      key={partner}
                      className="bg-[#252842] hover:bg-[#2d3257] hover:text-white px-[10px] py-[5px] rounded-[2px] font-mono font-bold text-[#c1c6d7] text-[11px] tracking-[1px] uppercase transition-colors cursor-default"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Journey A Button (Figma node 249:2636) */}
            <div className="pt-6 sm:pt-8">
              <Link
                href="#experiences"
                className="bg-[#ff2d55] hover:bg-[#ff4d70] text-[#090c25] font-['DM_Sans',sans-serif] font-semibold text-[14px] tracking-wide uppercase h-[44px] px-[24px] rounded-[4px] w-fit inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(255,45,85,0.35)] hover:shadow-[0_0_28px_rgba(255,45,85,0.55)] group focus:outline-none focus:ring-2 focus:ring-white shrink-0"
                data-node-id="249:2636"
              >
                <span>EXPLORE EVENTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Journey B: Commercial Production Enquiry Form (Figma node 249:2637, Right Column) */}
          <div
            className="lg:col-span-8 bg-[#161933] p-[24px] sm:p-[40px] rounded-[2px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] border border-[rgba(104,211,255,0.1)] flex flex-col justify-between"
            data-node-id="249:2637"
            data-name="Journey B: B2B Commercial Collaboration Form (Right Column)"
          >
            {/* Top Subtitle (Figma node 249:2692 / 249:2693) */}
            <div className="mb-[24px]" data-node-id="249:2692">
              <span className="font-mono font-bold text-[#c1c6d7] text-[11px] sm:text-[12px] tracking-[1.2px] uppercase block">
                Coordination across Mumbai, Kolkata &amp; Bengaluru production teams
              </span>
            </div>

            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#3fc7f5]/15 border border-[#3fc7f5] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(63,199,245,0.3)]">
                  <CheckCircle2 className="w-10 h-10 text-[#3fc7f5]" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#3fc7f5] tracking-[2px] uppercase font-bold">
                    ENQUIRY LOGGED // #WV-2026-LIVE
                  </span>
                  <h4 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                    Enquiry Dispatched
                  </h4>
                </div>
                <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#c1c6d7] max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry regarding <span className="text-[#3fc7f5]">{formData.classification}</span> has been routed to our technical engineering desks.
                </p>
                <div className="inline-block bg-[#090c25] border border-[rgba(104,211,255,0.3)] px-4 py-2 rounded text-[12px] font-mono text-[#a7a9bc]">
                  ⚡ GUARANTEED DESK RESPONSE WITHIN 24 HOURS
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        organisation: "",
                        classification: "Artist / Label Touring Production",
                        timeline: "",
                        capacity: "Club / Intimate Venue (1,000–3,000 capacity)",
                        scope: "",
                      });
                    }}
                    className="h-[42px] px-[22px] bg-[#252842] hover:bg-[#34385a] border border-[#68d3ff] text-[#68d3ff] hover:text-white rounded-[2px] text-[13px] font-mono tracking-wider uppercase transition-colors inline-flex items-center justify-center w-fit focus:outline-none focus:ring-2 focus:ring-[#68d3ff]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]" data-node-id="249:2647">
                {error && (
                  <div className="bg-[#ff2d55]/15 border border-[#ff2d55] text-white px-4 py-2.5 rounded-[2px] text-xs font-mono flex items-center gap-2">
                    <span className="text-[#ff2d55] font-bold">!</span> {error}
                  </div>
                )}

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {/* Full Name (Figma node 249:2648) */}
                  <div className="flex flex-col gap-[6px]" data-node-id="249:2648">
                    <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] px-[16px] h-[44px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] placeholder-[#a7a9bc]/70"
                    />
                  </div>

                  {/* Corporate / Artist Email (Figma node 249:2654) */}
                  <div className="flex flex-col gap-[6px]" data-node-id="249:2654">
                    <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                      CORPORATE / ARTIST EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@soundrecordings.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] px-[16px] h-[44px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] placeholder-[#a7a9bc]/70"
                    />
                  </div>
                </div>

                {/* Row 2: Organisation & Classification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {/* Organisation / Artist / Label (Figma node 249:2660) */}
                  <div className="flex flex-col gap-[6px]" data-node-id="249:2660">
                    <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                      ORGANISATION / ARTIST / LABEL *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sub-Harmonics Global"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] px-[16px] h-[44px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] placeholder-[#a7a9bc]/70"
                    />
                  </div>

                  {/* Enquiry Classification (Figma node 249:2666) */}
                  <div className="flex flex-col gap-[6px]" data-node-id="249:2666">
                    <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                      ENQUIRY CLASSIFICATION *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.classification}
                        onChange={(e) => setFormData({ ...formData, classification: e.target.value })}
                        className="w-full bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] pl-[16px] pr-[40px] h-[44px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] cursor-pointer appearance-none"
                      >
                        <option>Artist / Label Touring Production</option>
                        <option>Festival Stage Production</option>
                        <option>Brand Activation / Experience</option>
                        <option>Technical Consultation &amp; Rigging</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#3fc7f5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Target City & Capacity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {/* Target City & Estimated Timeline (Figma node 249:2672) */}
                  <div className="flex flex-col gap-[6px]" data-node-id="249:2672">
                    <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                      TARGET CITY &amp; ESTIMATED TIMELINE
                    </label>
                    <input
                      type="text"
                      placeholder="Mumbai / Bengaluru • Q3 2026"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] px-[16px] h-[44px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] placeholder-[#a7a9bc]/70"
                    />
                  </div>

                  {/* Estimated Scale / Capacity (Figma node 249:2678) */}
                  <div className="flex flex-col gap-[6px]" data-node-id="249:2678">
                    <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                      ESTIMATED SCALE / CAPACITY
                    </label>
                    <div className="relative">
                      <select
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] pl-[16px] pr-[40px] h-[44px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] cursor-pointer appearance-none"
                      >
                        <option>Club / Intimate Venue (1,000–3,000 capacity)</option>
                        <option>Arena Tour (3,000–10,000 capacity)</option>
                        <option>Stadium / Major Festival (10,000+ capacity)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#3fc7f5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Project Scope & Creative Objectives (Figma node 249:2684) */}
                <div className="flex flex-col gap-[6px]" data-node-id="249:2684">
                  <label className="font-mono font-bold text-[#dfe0ff] text-[12px] sm:text-[13px] tracking-[0.8px] uppercase">
                    PROJECT SCOPE &amp; CREATIVE OBJECTIVES *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline the visual theme, touring schedule, or technical stage ambitions..."
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="bg-[#090c25] border border-[rgba(104,211,255,0.25)] focus:border-[#68d3ff] focus:ring-1 focus:ring-[#68d3ff] text-[#dfe0ff] text-[15px] px-[16px] py-[10px] rounded-[2px] outline-none transition-all font-['DM_Sans',sans-serif] placeholder-[#a7a9bc]/70 resize-none"
                  />
                </div>

                {/* Row 5: Centered Submit Button with Loading State (Figma node 264:2895 / 264:2896) */}
                <div className="pt-4 flex justify-center w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ff2d55] hover:bg-[#ff4d70] disabled:bg-[#ff2d55]/70 text-[#00285c] font-['DM_Sans',sans-serif] font-semibold text-[14px] tracking-[0.7px] uppercase h-[44px] px-[26px] rounded-[4px] transition-all duration-200 shadow-[0_0_20px_rgba(255,45,85,0.35)] hover:shadow-[0_0_30px_rgba(255,45,85,0.55)] cursor-pointer whitespace-nowrap w-full sm:w-fit sm:min-w-[220px] text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
                    data-node-id="264:2895"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#00285c]" />
                        <span>DISPATCHING ENQUIRY...</span>
                      </>
                    ) : (
                      <span>START A CONVERSATION</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
