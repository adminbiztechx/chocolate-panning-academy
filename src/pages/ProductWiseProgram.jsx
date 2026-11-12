import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowRight, 
  Award, 
  FlaskConical, 
  Settings, 
  FileCheck, 
  Users, 
  CheckCircle2, 
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function ProductWiseProgram({ onOpenEnquire, onOpenWorkshop }) {
  const products = [
    {
      title: "Almond Panning Training",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      img: "/images/program-almond.png",
      desc: "Perfect almond roasting curves, gum arabic priming, thick milk/dark coat & carnauba mirror wax."
    },
    {
      title: "Cashew Panning Training",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      img: "/images/program-cashew.png",
      desc: "Preventing kidney shape chipping, uniform layer balancing, flavored chocolate infusions."
    },
    {
      title: "Raisins Panning Training",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      img: "/images/program-raisins.png",
      desc: "Moisture-barrier seal, preventing surface sugar seepage, glossy chewable chocolate dragées."
    },
    {
      title: "Coffee Bean Panning Training",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      img: "/images/program-coffee.png",
      desc: "Preserving roasted espresso aroma, crisp dark chocolate crunch, cocoa powder dusting & polish."
    },
    {
      title: "Seeds Panning Training",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      img: "/images/program-seeds.png",
      desc: "High-speed panning of chia, pumpkin, and watermelon seeds with colorful natural glazes."
    },
    {
      title: "Advanced Panning Techniques",
      duration: "2 Days",
      level: "Intermediate to Advanced",
      img: "/images/program-advanced.png",
      desc: "Multi-colored marbling, metallic pearlescent powders, ruby chocolate and high humidity panning."
    }
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
                <span className="text-[#E69138] font-semibold">Product-wise Training</span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#E69138] text-[#180905] text-[11px] font-bold uppercase tracking-wider">
                PRODUCT-WISE TRAINING
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Product-wise Chocolate <br /> Panning Training
              </h1>

              <p className="text-sm sm:text-base text-[#E3D1BC] max-w-xl leading-relaxed">
                Specialized, hands-on training programs focused on specific products to master coating, finishing and commercial production.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onOpenEnquire("Product-wise Chocolate Panning Training")}
                  className="px-6 py-3 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] font-semibold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>Enrol Now</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => onOpenWorkshop("Product-wise Training Batch", "15–16 Mar 2025")}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-[#E3D1BC]/30 font-semibold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Calendar size={14} className="text-[#E69138]" />
                  <span>View Batch Schedule</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#55271A] shadow-xl bg-[#180905]">
                <img
                  src="/images/hero-colorful-bowl.png"
                  alt="Product-wise chocolate dragées"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURE STRIP (5 items) */}
      <section className="bg-[#FAF6F0] border-b border-[#E3D1BC] py-4">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 divide-y md:divide-y-0 md:divide-x divide-[#E3D1BC] text-center">
            
            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0">
              <Award size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Product-Specific Training</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <FlaskConical size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Industry Proven Techniques</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <Settings size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Process & Troubleshooting</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <FileCheck size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Certificate of Completion</span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0 pl-0 md:pl-2">
              <Users size={16} className="text-[#B86216]" />
              <span className="text-xs font-bold text-[#2B150D]">Expert Guidance (20+ Yrs)</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EXPLORE OUR PRODUCT-WISE TRAINING PROGRAMS */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B150D]">
              Explore Our Product-wise <br /> Training Programs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#55271A] max-w-md">
            Choose a focused training program based on the product you want to make. Each program covers raw material selection, coating process, polishing, quality control and production best practices.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] p-5 flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => onOpenEnquire(item.title)}
            >
              <div>
                <div className="w-full h-44 rounded-xl overflow-hidden bg-white mb-4 border border-[#E3D1BC]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#B86216] font-semibold mb-1">
                  <span>📅 {item.duration}</span>
                  <span className="bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E3D1BC]">{item.level}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] mt-1 group-hover:text-[#D37B24] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#623020] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D1BC] mt-5 flex items-center justify-between">
                <span className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1">
                  Enrol Course →
                </span>
                <div className="w-7 h-7 rounded-full bg-[#FAF6F0] group-hover:bg-[#D37B24] group-hover:text-white flex items-center justify-center text-[#2B150D] transition-colors">
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROGRAM HIGHLIGHTS (Dark Cocoa Section) */}
      <section className="bg-[#2B150D] text-white py-12">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-white">
                Program <br /> Highlights
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#4B2418] text-center">
              <div className="pt-2 sm:pt-0">
                <span className="text-xs font-bold text-white block">Focused</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Product Training</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-xs font-bold text-white block">Hands-on</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Practical Sessions</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-xs font-bold text-white block">Process</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Optimization</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-xs font-bold text-white block">Quality &</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Consistency</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-xs font-bold text-white block">Production &</span>
                <span className="text-[11px] text-[#E3D1BC]/80">Scaling Tips</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHAT YOU WILL LEARN & NEXT BATCH */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2B150D]">
              What You Will Learn
            </h3>

            <div className="space-y-2 text-xs text-[#55271A]">
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <span>Product-specific raw material selection</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <span>Coating techniques and layer building</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <span>Polishing and finishing for premium look</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <span>Quality control and shelf life</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <span>Troubleshooting common production issues</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E3D1BC]">
                <CheckCircle2 size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <span>Costing and basic production guidance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#E3D1BC] shadow-xl bg-white">
              <img
                src="/images/dragees-leaves.png"
                alt="Product dragées pile"
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
              15 – 16 Mar 2025
            </div>

            <div className="flex items-center gap-2 text-xs text-[#55271A]">
              <MapPin size={14} className="text-[#D37B24]" />
              <span>Mumbai, India</span>
            </div>

            <button
              onClick={() => onOpenWorkshop("Product-wise Training Batch", "15–16 Mar 2025")}
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
