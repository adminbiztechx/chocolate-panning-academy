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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-3 divide-y-0 sm:divide-x divide-[#E3D1BC] text-center">
            
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

      {/* 3. OUR CONSULTANCY SERVICES - EXACT 1:1 CLONE OF USER UPLOAD */}
      <section className="py-12 sm:py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%] bg-[#FAF6F0]">
        <div className="w-full max-w-[1240px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
            
            {/* Left Tall Panning Drum Machine (4 cols on Desktop) */}
            <div className="lg:col-span-4 hidden lg:block rounded-3xl overflow-hidden shadow-md border border-[#E8DACB] bg-[#180905]">
              <img
                src="/images/consultancy-drum-showcase-2x.png"
                alt="Stainless Steel Chocolate Panning Drum Machine"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Right Content Area (8 cols on Desktop / Full Width on Mobile) */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              
              {/* Header with Title & Amber Underline */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#200D07]">
                  Our Consultancy Services
                </h2>
                <div className="w-12 h-1 bg-[#D37B24] rounded-full mt-2 mb-2.5"></div>
                <p className="text-xs sm:text-sm text-[#55271A] max-w-2xl leading-relaxed">
                  Practical, industry-proven solutions to improve product quality, production efficiency and business performance.
                </p>
              </div>

              {/* 6 Services Cards Grid (3 cols on desktop, 2 cols on mobile) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                
                {/* Card 1: Plant Setup & Project Planning */}
                <button
                  type="button"
                  onClick={() => onOpenEnquire("Consultancy Service: Plant Setup & Project Planning")}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-[#EBDCCF]/80 text-left bg-[#FAF6F0] cursor-pointer group"
                >
                  <img
                    src="/images/consultancy-card-1-2x.png"
                    alt="Plant Setup & Project Planning - Guidance on machinery, layout, capacity and overall setup"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                  />
                </button>

                {/* Card 2: Product Development */}
                <button
                  type="button"
                  onClick={() => onOpenEnquire("Consultancy Service: Product Development")}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-[#EBDCCF]/80 text-left bg-[#FAF6F0] cursor-pointer group"
                >
                  <img
                    src="/images/consultancy-card-2-2x.png"
                    alt="Product Development - Recipes, formulations and customized product ranges as per your market"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                  />
                </button>

                {/* Card 3: Process Optimization */}
                <button
                  type="button"
                  onClick={() => onOpenEnquire("Consultancy Service: Process Optimization")}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-[#EBDCCF]/80 text-left bg-[#FAF6F0] cursor-pointer group"
                >
                  <img
                    src="/images/consultancy-card-3-2x.png"
                    alt="Process Optimization - Improve coating, finishing, cycle time and overall efficiency"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                  />
                </button>

                {/* Card 4: Quality & Compliance */}
                <button
                  type="button"
                  onClick={() => onOpenEnquire("Consultancy Service: Quality & Compliance")}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-[#EBDCCF]/80 text-left bg-[#FAF6F0] cursor-pointer group"
                >
                  <img
                    src="/images/consultancy-card-4-2x.png"
                    alt="Quality & Compliance - Quality standards, shelf life, testing and food safety guidance"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                  />
                </button>

                {/* Card 5: Costing & Profitability */}
                <button
                  type="button"
                  onClick={() => onOpenEnquire("Consultancy Service: Costing & Profitability")}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-[#EBDCCF]/80 text-left bg-[#FAF6F0] cursor-pointer group"
                >
                  <img
                    src="/images/consultancy-card-5-2x.png"
                    alt="Costing & Profitability - Raw material usage, process costing, and improving production margins"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                  />
                </button>

                {/* Card 6: Scale-up & Business Growth */}
                <button
                  type="button"
                  onClick={() => onOpenEnquire("Consultancy Service: Scale-up & Business Growth")}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-[#EBDCCF]/80 text-left bg-[#FAF6F0] cursor-pointer group"
                >
                  <img
                    src="/images/consultancy-card-6-2x.png"
                    alt="Scale-up & Business Growth - Expand product range, increase capacity and enter new markets"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform"
                  />
                </button>

              </div>

            </div>

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
