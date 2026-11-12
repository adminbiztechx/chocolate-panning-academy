import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowRight, 
  Download, 
  Award, 
  FlaskConical, 
  Factory, 
  CheckCircle2, 
  FileCheck, 
  Users, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Layers
} from "lucide-react";

export default function AdvancedProgram({ onOpenEnquire, onOpenBrochure, onOpenWorkshop }) {
  const masterPoints = [
    "Advanced coating and layer-building techniques",
    "Process control (time, speed, temperature, airflow)",
    "Polishing, lustre and premium finishing (mirror shine)",
    "Product consistency and quality control standards",
    "Troubleshooting and defect resolution (blooming, cracking)",
    "Scale-up from pilot to commercial production lines",
    "Cost optimization and production efficiency calculations"
  ];

  const modules = [
    { title: "Almond", subtitle: "(Premium Coating)", img: "/images/program-almond.png" },
    { title: "Cashew", subtitle: "(Multi-layer Finishing)", img: "/images/program-cashew.png" },
    { title: "Raisins", subtitle: "(High Gloss Finish)", img: "/images/program-raisins.png" },
    { title: "Coffee Bean", subtitle: "(Intense Coating)", img: "/images/program-coffee.png" },
    { title: "Seeds", subtitle: "(Special Coating)", img: "/images/program-seeds.png" },
    { title: "Advanced Techniques", subtitle: "(Recipe, Finish & Scale-up)", img: "/images/program-advanced.png" },
  ];

  const whoShouldJoin = [
    "Existing chocolate manufacturers",
    "Entrepreneurs planning commercial production",
    "Professionals looking to upgrade their skills",
    "Food and confectionery industry professionals",
    "Businesses aiming for scale-up and new product lines"
  ];

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-r from-[#220F08] via-[#2D140D] to-[#3B1A10] text-[#FCFAF6] py-12 lg:py-16">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#E3D1BC]">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link to="/programs" className="hover:text-white transition-colors">Training Programs</Link>
                <span>›</span>
                <span className="text-[#E69138] font-semibold">Advanced Training Program</span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#E69138] text-[#180905] text-[11px] font-bold uppercase tracking-wider">
                ADVANCED PROGRAM
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Advanced Chocolate <br /> Panning Training
              </h1>

              <p className="text-sm sm:text-base text-[#E3D1BC] max-w-xl leading-relaxed">
                Master advanced coating techniques, process control and commercial-scale production of premium panned chocolates.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onOpenWorkshop("Advanced Chocolate Panning Training", "15–17 Mar 2025")}
                  className="px-6 py-3 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] font-semibold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>Register Now</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => onOpenBrochure("Advanced Chocolate Panning Training")}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-[#E3D1BC]/30 font-semibold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Download size={14} className="text-[#E69138]" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#55271A] shadow-xl bg-[#180905]">
                <img
                  src="/images/hero-colorful-bowl.png"
                  alt="Advanced Chocolate Panning Bowl"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURE STRIP (6 items) */}
      <section className="bg-[#FAF6F0] border-b border-[#E3D1BC] py-4">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E3D1BC] text-center">
            
            <div className="pt-2 sm:pt-0">
              <Award size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Advanced Techniques</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <FlaskConical size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Process Optimization</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Factory size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Commercial Production</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <ShieldCheck size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Quality & Consistency</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <FileCheck size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Certificate of Completion</span>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Users size={16} className="text-[#B86216] mx-auto mb-1" />
              <span className="text-xs font-bold text-[#2B150D] block">Expert Trainers (20+ Yrs)</span>
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
              alt="Advanced chocolate panning drum"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
              Program Overview
            </h2>

            <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed">
              A comprehensive, industry-focused training program for those who want to go beyond the basics and master advanced panning, finishing and production techniques for high-quality, market-ready products.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Duration</span>
                <strong className="text-sm font-bold text-[#2B150D]">3 Days</strong>
              </div>
              <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-center">
                <span className="text-[10px] text-[#623020] block font-medium">Level</span>
                <strong className="text-sm font-bold text-[#2B150D]">Advanced</strong>
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

      {/* 4. WHAT YOU WILL MASTER */}
      <section className="py-12 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#2B150D]">
                What You Will Master
              </h3>

              <div className="space-y-2.5 pt-1">
                {masterPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                    <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#2B150D] font-medium leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#E3D1BC] shadow-lg">
              <img
                src="/images/advanced-dragees-plate.png"
                alt="Glossy artisanal panned chocolate plate"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. HANDS-ON PRACTICAL MODULES */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <h3 className="font-serif text-2xl font-bold text-[#2B150D] mb-8">
          Hands-on Practical Modules
          <span className="block h-1 w-16 bg-[#D37B24] rounded-full mt-2" />
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-[#FCFAF6] rounded-xl p-3 border border-[#E3D1BC] text-center space-y-2 hover:shadow-md transition-shadow">
              <div className="w-full h-24 rounded-lg overflow-hidden bg-white">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
              </div>
              <h5 className="font-serif text-xs font-bold text-[#2B150D]">{m.title}</h5>
              <p className="text-[10px] text-[#623020]">{m.subtitle}</p>
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
                <Factory size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Industry-Ready</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Skills</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <TrendingUp size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Higher Product</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Quality</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Layers size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Production</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Scalability</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="font-serif text-lg font-bold text-[#E69138] block">₹</span>
                <span className="text-xs font-bold text-white block">Better Cost</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Control</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <Award size={18} className="text-[#E69138] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Business</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Growth Support</span>
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
                alt="Advanced panned dragées"
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
              15 – 17 Mar 2025
            </div>

            <div className="flex items-center gap-2 text-xs text-[#55271A]">
              <MapPin size={14} className="text-[#D37B24]" />
              <span>Mumbai, India</span>
            </div>

            <button
              onClick={() => onOpenWorkshop("Advanced Chocolate Panning Training", "15–17 Mar 2025")}
              className="w-full py-3 bg-[#B86216] hover:bg-[#934C0E] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow transition-all"
            >
              <span>Book Your Seat</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
