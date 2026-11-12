import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowRight, 
  Download, 
  Award, 
  FlaskConical, 
  Users, 
  FileCheck, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ShoppingBag,
  HelpCircle
} from "lucide-react";

export default function BeginnerProgram({ onOpenEnquire, onOpenBrochure, onOpenWorkshop }) {
  const learningPoints = [
    "Introduction to chocolate panning",
    "Selection of raw materials (nuts, dry fruits, seeds, etc.)",
    "Chocolate types and properties (compound vs couverture)",
    "Coating techniques and layer building",
    "Polishing and finishing for a premium look",
    "Quality control and storage guidelines",
    "Basic troubleshooting and best practices"
  ];

  const handsOnNuts = [
    { title: "Almond Panning", img: "/images/program-almond.png" },
    { title: "Cashew Panning", img: "/images/program-cashew.png" },
    { title: "Raisins Panning", img: "/images/program-raisins.png" },
  ];

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1024/307]">
          <picture>
            <source srcSet="/images/beginner-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/beginner-hero-banner.jpg"
              alt="Chocolate Panning Training for Beginners"
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
            onClick={() => onOpenWorkshop("Beginner Chocolate Panning Training", "15–16 Mar 2025")}
            className="absolute left-[5.8%] bottom-[16%] w-[130px] h-[38px] opacity-0 cursor-pointer z-20"
            title="Register Now"
          />
          <button
            onClick={() => onOpenBrochure("Beginner Chocolate Panning Training")}
            className="absolute left-[20%] bottom-[16%] w-[160px] h-[38px] opacity-0 cursor-pointer z-20"
            title="Download Brochure"
          />
        </div>
      </section>

      {/* 2. FEATURE STRIP (5 items) */}
      <section className="bg-[#FAF6F0] border-b border-[#E3D1BC] py-4">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 divide-y md:divide-y-0 md:divide-x divide-[#E3D1BC] text-center">
            
            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0">
              <Award size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Beginner Friendly (No Prior Exp.)</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <FlaskConical size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">100% Hands-on Training</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <CheckCircle2 size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Learn the Complete Process</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <FileCheck size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Certificate of Completion</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <Users size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Expert Guidance (20+ Yrs Exp.)</span>
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
              alt="Hands-on revolving pan"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
              Program Overview
            </h2>

            <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed">
              This beginner-level training is designed for individuals who are new to chocolate panning and want to understand the process from the basics. You will learn key techniques, ingredient selection, coating, finishing and how to produce high-quality panned chocolates.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Duration</span>
                <strong className="text-sm font-bold text-[#2B150D]">2 Days</strong>
              </div>
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Level</span>
                <strong className="text-sm font-bold text-[#2B150D]">Beginner</strong>
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

      {/* 4. WHAT YOU WILL LEARN & HANDS-ON PRACTICE */}
      <section className="py-12 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: What You Will Learn */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#2B150D]">
                What You Will Learn
              </h3>

              <div className="space-y-2.5 pt-1">
                {learningPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-[#E3D1BC]/80">
                    <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#2B150D] font-medium leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hands-on Practice */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#2B150D]">
                Hands-on Practice
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {handsOnNuts.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-2.5 border border-[#E3D1BC] text-center space-y-2">
                    <div className="w-full h-20 rounded-lg overflow-hidden bg-stone-100">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-serif text-[11px] font-bold text-[#2B150D] block leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHO SHOULD JOIN (Dark Brown Section) */}
      <section className="bg-[#2B150D] text-white py-14">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#55271A]">
              <img
                src="/images/advanced-dragees-plate.png"
                alt="Who Should Join chocolate dragée"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Who Should Join?
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center space-y-1">
                  <h5 className="font-serif text-xs font-bold text-white">Home Bakers & Enthusiasts</h5>
                  <p className="text-[10px] text-[#E3D1BC]/70">Looking to expand beyond basic bonbons</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center space-y-1">
                  <h5 className="font-serif text-xs font-bold text-white">New Business Explorers</h5>
                  <p className="text-[10px] text-[#E3D1BC]/70">Testing market viability with small batches</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center space-y-1">
                  <h5 className="font-serif text-xs font-bold text-white">Confectionery Startups</h5>
                  <p className="text-[10px] text-[#E3D1BC]/70">Founders launching dragée product lines</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center space-y-1">
                  <h5 className="font-serif text-xs font-bold text-white">Industry Professionals</h5>
                  <p className="text-[10px] text-[#E3D1BC]/70">Pastry chefs upskilling in pan coating</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PROGRAM HIGHLIGHTS & NEXT BATCH */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2B150D]">
              Program Highlights
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC]">
                <h5 className="font-serif text-xs font-bold text-[#2B150D]">Practical & Industry-Oriented</h5>
                <p className="text-[11px] text-[#623020] mt-1">Real revolving pan equipment with actual batch runs.</p>
              </div>

              <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC]">
                <h5 className="font-serif text-xs font-bold text-[#2B150D]">Step-by-Step Learning</h5>
                <p className="text-[11px] text-[#623020] mt-1">Easy-to-follow curriculum broken down into intuitive phases.</p>
              </div>

              <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC]">
                <h5 className="font-serif text-xs font-bold text-[#2B150D]">Small Batch Production</h5>
                <p className="text-[11px] text-[#623020] mt-1">Hands-on time on table-top and pilot scale pans.</p>
              </div>

              <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC]">
                <h5 className="font-serif text-xs font-bold text-[#2B150D]">Business Insights (Basics)</h5>
                <p className="text-[11px] text-[#623020] mt-1">Costing, shelf-life sealing and commercial raw materials.</p>
              </div>
            </div>
          </div>

          {/* Next Batch Card */}
          <div className="lg:col-span-5 bg-[#FCFAF6] p-8 rounded-2xl border-2 border-[#D37B24]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B86216] uppercase tracking-wider">
              <Calendar size={14} />
              <span>Next Batch</span>
            </div>

            <div className="font-serif text-3xl font-black text-[#2B150D]">
              15 – 16 Mar 2025
            </div>

            <div className="flex items-center gap-2 text-xs text-[#55271A]">
              <MapPin size={14} className="text-[#D37B24]" />
              <span>Mumbai, India (Hands-on Training Facility)</span>
            </div>

            <button
              onClick={() => onOpenWorkshop("Beginner Chocolate Panning Training", "15–16 Mar 2025")}
              className="w-full py-3 bg-[#B86216] hover:bg-[#934C0E] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow transition-all"
            >
              <span>Register Now</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
