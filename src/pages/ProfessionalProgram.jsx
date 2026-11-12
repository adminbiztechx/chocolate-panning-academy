import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowRight, 
  Download, 
  Award, 
  Factory, 
  CheckCircle2, 
  FileCheck, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  TrendingUp,
  Sparkles,
  Briefcase
} from "lucide-react";

export default function ProfessionalProgram({ onOpenEnquire, onOpenBrochure, onOpenWorkshop }) {
  const keyAreas = [
    { title: "Formulation & Recipe Development", desc: "Custom chocolates, natural colors, nut roasts." },
    { title: "Multi-layer Coating Techniques", desc: "Compound vs couverture layering control." },
    { title: "Polishing & Finishing", desc: "Shellac, gum arabic & carnauba wax mirror glazes." },
    { title: "Process Control & Optimization", desc: "Air temperature, humidity, and blower speed." },
    { title: "Quality, Shelf Life & Packaging", desc: "Blooming prevention, moisture barrier, seals." },
    { title: "Business Setup & Scale-up", desc: "Pan sizing, HVAC calculation & equipment vendor list." }
  ];

  const modules = [
    { title: "Advanced Coating & Layer Building", img: "/images/program-almond.png" },
    { title: "Product Development", img: "/images/program-raisins.png" },
    { title: "Finishing, Polishing & Glazing", img: "/images/program-seeds.png" },
    { title: "Process Control & Scale-up", img: "/images/overview-drum.png" },
    { title: "Quality, Testing & Shelf Life", img: "/images/program-advanced.png" },
    { title: "Commercial Production & Business", img: "/images/masterclass-side.png" },
  ];

  const whoShouldJoin = [
    "Serious entrepreneurs and business owners",
    "Existing confectionery and chocolate manufacturers",
    "Food tech professionals and product developers",
    "R&D and production teams",
    "Businesses planning a chocolate panning unit"
  ];

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1024/295]">
          <picture>
            <source srcSet="/images/professional-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/professional-hero-banner.jpg"
              alt="Professional Chocolate Panning Training"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>

          {/* Interactive Breadcrumb Hotspots */}
          <Link
            to="/"
            className="absolute left-[5.8%] top-[12%] w-[4.5%] h-[16%] z-20 cursor-pointer"
            title="Return to Home"
          >
            <span className="sr-only">Home</span>
          </Link>
          <Link
            to="/programs"
            className="absolute left-[11%] top-[12%] w-[9%] h-[16%] z-20 cursor-pointer"
            title="Training Programs"
          >
            <span className="sr-only">Programs</span>
          </Link>

          {/* Action Hotspots */}
          <button
            onClick={() => onOpenWorkshop("Professional Chocolate Panning Training", "15–19 Mar 2025")}
            className="absolute left-[5.8%] bottom-[16%] w-[130px] h-[38px] opacity-0 cursor-pointer z-20"
            title="Register Now"
          />
          <button
            onClick={() => onOpenBrochure("Professional Chocolate Panning Masterclass")}
            className="absolute left-[20%] bottom-[16%] w-[160px] h-[38px] opacity-0 cursor-pointer z-20"
            title="Download Brochure"
          />
        </div>
      </section>

      {/* 2. FEATURE STRIP (6 items) */}
      <section className="bg-[#FAF6F0] border-b border-[#E3D1BC] py-4">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E3D1BC] text-center">
            
            <div className="pt-2 sm:pt-0">
              <Award size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Complete Training</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Sparkles size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Product Development</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Factory size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Commercial Production</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <ShieldCheck size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Quality & Compliance</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <TrendingUp size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Business Setup</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Users size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Expert Mentorship</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROGRAM OVERVIEW */}
      <section className="py-14 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#E3D1BC] shadow-md h-64 lg:h-72 bg-[#180905]">
            <img
              src="/images/overview-drum.png"
              alt="Professional Panning Drum"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
              Program Overview
            </h2>

            <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed">
              An end-to-end professional program designed for serious learners, entrepreneurs and manufacturers who want to develop a complete range of panned chocolate products, set up a production line and build a scalable business.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Duration</span>
                <strong className="text-sm font-bold text-[#2B150D]">5 Days</strong>
              </div>
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Level</span>
                <strong className="text-sm font-bold text-[#2B150D]">Professional</strong>
              </div>
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Mode</span>
                <strong className="text-sm font-bold text-[#2B150D]">Offline (Hands-on)</strong>
              </div>
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Certificate</span>
                <strong className="text-sm font-bold text-[#2B150D]">Yes</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. KEY LEARNING AREAS */}
      <section className="py-14 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <h3 className="font-serif text-2xl font-bold text-[#2B150D] mb-8">
            Key Learning Areas
            <span className="block h-1 w-16 bg-[#D37B24] rounded-full mt-2" />
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {keyAreas.map((area, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E3D1BC] text-center flex flex-col justify-between space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#FAF6F0] text-[#D37B24] flex items-center justify-center font-bold text-xs mx-auto mb-1">
                  {idx + 1}
                </div>
                <h5 className="font-serif text-xs font-bold text-[#2B150D] leading-tight">{area.title}</h5>
                <p className="text-[10px] text-[#623020] leading-snug">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAM MODULES */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <h3 className="font-serif text-2xl font-bold text-[#2B150D] mb-8">
          Program Modules
          <span className="block h-1 w-16 bg-[#D37B24] rounded-full mt-2" />
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-[#FCFAF6] rounded-xl p-3 border border-[#E3D1BC] text-center space-y-2 hover:shadow-md transition-shadow">
              <div className="w-full h-24 rounded-lg overflow-hidden bg-white">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
              </div>
              <h5 className="font-serif text-xs font-bold text-[#2B150D] leading-tight">{m.title}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROGRAM BENEFITS (Dark Brown Banner) */}
      <section className="bg-[#2B150D] text-white py-12">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-white">
                Program <br /> Benefits
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#4B2418] text-center">
              <div className="pt-2 sm:pt-0">
                <Award size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Industry-Ready</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Expertise</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Sparkles size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Develop</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Your Own Products</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Factory size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Set Up or Improve</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Production</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="font-serif text-lg font-bold text-[#E69138] block">₹</span>
                <span className="text-xs font-bold text-white block">Reduce Cost &</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Increase Profit</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Users size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Ongoing Technical</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHO SHOULD JOIN & NEXT BATCH */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2B150D]">
              Who Should Join?
            </h3>

            <div className="space-y-2 text-xs text-[#55271A]">
              {whoShouldJoin.map((w, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                  <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#E3D1BC] shadow-xl bg-white">
              <img
                src="/images/dragees-leaves.png"
                alt="Chocolate dragées leaves"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FCFAF6] p-8 rounded-2xl border-2 border-[#D37B24]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B86216] uppercase tracking-wider">
              <Calendar size={14} />
              <span>Next Batch</span>
            </div>

            <div className="font-serif text-3xl font-black text-[#2B150D]">
              15 – 19 Mar 2025
            </div>

            <div className="flex items-center gap-2 text-xs text-[#55271A]">
              <MapPin size={14} className="text-[#D37B24]" />
              <span>Mumbai, India</span>
            </div>

            <button
              onClick={() => onOpenWorkshop("Professional Chocolate Panning Training", "15–19 Mar 2025")}
              className="w-full py-3 bg-[#B86216] hover:bg-[#934C0E] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow transition-all"
            >
              <span>Book Your Seat</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER: BUILD YOUR CHOCOLATE PANNING BUSINESS */}
      <section className="pb-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="bg-[#2B150D] rounded-3xl overflow-hidden border border-[#4B2418] shadow-2xl flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 text-white gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Build Your Chocolate Panning Business
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BC]">
              Gain complete knowledge, practical skills and industry guidance to create, produce and scale your own range of panned chocolate products.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenEnquire("Professional Program Bottom CTA")}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FCFAF6] border border-[#E3D1BC]/30 rounded-xl font-semibold text-xs flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Enquire Now</span>
              <ArrowRight size={14} className="text-[#E69138]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
