import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowRight, 
  FileText, 
  Factory, 
  Settings, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2,
  PhoneCall,
  Search,
  Check,
  Compass
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function Consultancy({ onOpenEnquire, onOpenBrochure }) {
  const processSteps = [
    { step: 1, name: "Understand", desc: "Discuss your goals, challenges and requirements." },
    { step: 2, name: "Analyze", desc: "Assess your process, product and setup." },
    { step: 3, name: "Plan", desc: "Provide a practical and customized solution." },
    { step: 4, name: "Implement", desc: "Guide you through execution and training." },
    { step: 5, name: "Grow", desc: "Support for optimization, scale-up and new product development." },
  ];

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1024/305]">
          <picture>
            <source srcSet="/images/consultancy-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/consultancy-hero-banner.jpg"
              alt="Chocolate Panning Consultancy - Expert technical and production guidance"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>

          {/* Interactive Breadcrumb Hotspot for 'Home' link */}
          <Link
            to="/"
            className="absolute left-[5.8%] top-[12%] w-[5%] h-[16%] z-20 cursor-pointer"
            title="Return to Home"
            aria-label="Return to Home"
          >
            <span className="sr-only">Home</span>
          </Link>

          {/* Optional Action Button Overlays if user clicks on banner CTAs */}
          <button
            onClick={() => onOpenEnquire("Consultancy - Book a Consultation")}
            className="absolute left-[5.8%] bottom-[16%] w-[160px] h-[38px] opacity-0 cursor-pointer z-20"
            title="Book a Consultation"
          />
        </div>
      </section>

      {/* 2. FEATURE STRIP (6 items) */}
      <section className="bg-[#FAF6F0] border-b border-[#E3D1BC] py-4">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E3D1BC] text-center">
            
            <div className="pt-2 sm:pt-0">
              <Factory size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Set Up New Unit</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Settings size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Optimize Production</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Sparkles size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Product Development</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <ShieldCheck size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Quality & Compliance</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <TrendingUp size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Scale-up Operations</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Users size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Ongoing Tech Support</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CONSULTANCY SERVICES (Left Drum + Right 6 Cards) */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="mb-10">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B150D]">
            Our Consultancy Services
          </h2>
          <p className="text-xs sm:text-sm text-[#55271A] mt-1 max-w-xl">
            Practical, industry-proven solutions to improve product quality, production efficiency and business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tall Panning Drum */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden border border-[#E3D1BC] shadow-xl bg-[#180905] h-full min-h-[460px]">
            <img
              src="/images/consultancy-tall-drum.png"
              alt="Commercial Panning Drum Machine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right 6 Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteData.consultancyServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF6] rounded-2xl p-5 border border-[#E3D1BC] flex flex-col justify-between hover:border-[#D37B24] hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => onOpenEnquire(`Consultancy Service: ${srv.title}`)}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#B86216] flex items-center justify-center mb-3 group-hover:bg-[#D37B24] group-hover:text-white transition-colors">
                    <Factory size={18} />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2B150D] group-hover:text-[#D37B24] transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#B86216]">Request Advisory</span>
                  <div className="w-6 h-6 rounded-full border border-[#D8C7B5] group-hover:border-[#D37B24] flex items-center justify-center text-[#2B150D] group-hover:text-[#D37B24] transition-colors">
                    <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE OUR CONSULTANCY? (Dark Cocoa Section) */}
      <section className="bg-[#2B150D] text-white py-14">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-white">
                Why Choose Our <br /> Consultancy?
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#4B2418] text-center">
              <div className="pt-2 sm:pt-0">
                <Award size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">20+ Years</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Industry Expertise</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Users size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Hands-on &</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Practical Approach</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Factory size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">End-to-End</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Support</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <TrendingUp size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Proven</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Results</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <ShieldCheck size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Customized</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Solutions</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR CONSULTANCY PROCESS */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B86216]">
            OUR PROCESS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B150D] mt-1">
            Our Consultancy Process
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
          {processSteps.map((s, idx) => (
            <div key={s.step} className="bg-[#FCFAF6] rounded-2xl p-5 border border-[#E3D1BC] flex flex-col items-center text-center space-y-2 group hover:border-[#D37B24] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border-2 border-[#D37B24] text-[#D37B24] font-serif font-black text-sm flex items-center justify-center shadow">
                {s.step}
              </div>
              <h5 className="font-serif text-sm font-bold text-[#2B150D]">{s.name}</h5>
              <p className="text-[11px] text-[#623020] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER: READY TO IMPROVE YOUR CHOCOLATE PANNING BUSINESS */}
      <section className="pb-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="bg-[#2B150D] rounded-3xl overflow-hidden border border-[#4B2418] shadow-2xl flex flex-col md:flex-row items-center">
          
          <div className="md:w-5/12 h-56 md:h-64 w-full bg-[#180905]">
            <img
              src="/images/about-bottom-chocolates.png"
              alt="Consultancy Chocolate Dragées"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-7/12 p-8 sm:p-10 space-y-4 text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Ready to Improve Your Chocolate Panning Business?
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BC] max-w-md">
              Let's discuss your requirements and create a customized consultancy plan for your business.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenEnquire("Consultancy Bottom CTA - Consultation")}
                className="px-6 py-2.5 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] font-semibold text-xs rounded-xl shadow transition-all cursor-pointer"
              >
                Book a Consultation →
              </button>

              <button
                onClick={() => onOpenBrochure("Aadhya Chocolate Consultancy Overview")}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#FCFAF6] border border-[#E3D1BC]/30 rounded-xl font-semibold text-xs flex items-center gap-2 cursor-pointer transition-all"
              >
                <FileText size={14} className="text-[#E69138]" />
                <span>Download Consultancy Brochure</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
