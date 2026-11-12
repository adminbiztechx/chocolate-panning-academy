import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Calendar, 
  Factory, 
  ArrowRight, 
  Target, 
  Eye, 
  CheckCircle2, 
  FlaskConical, 
  Settings, 
  FileCheck,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function About({ onOpenEnquire }) {
  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1024/209]">
          <picture>
            <source srcSet="/images/about-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/about-hero-banner.jpg"
              alt="About Us - A dedicated center of excellence for Chocolate Panning Training, Consultancy, and Business Development"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>

          {/* Interactive Breadcrumb Hotspot for 'Home' link */}
          <Link
            to="/"
            className="absolute left-[5.8%] top-[9.5%] w-[5%] h-[15%] z-20 cursor-pointer"
            title="Return to Home"
            aria-label="Return to Home"
          >
            <span className="sr-only">Home</span>
          </Link>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86216]">
              OUR STORY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B150D] leading-tight">
              The Chocolate Panning Academy by Aadhya International
            </h2>
            
            <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed pt-1">
              Chocolate Panning Academy is an initiative of <strong>Aadhya International</strong>, established in 2005, with a vision to promote professional chocolate panning and confectionery excellence in India and beyond.
            </p>

            <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed">
              With over two decades of industry experience, we provide hands-on training, technical consultancy and end-to-end business support to individuals, startups and established manufacturers.
            </p>

            <div className="pt-3">
              <button
                onClick={() => {
                  const elem = document.getElementById("milestones-section");
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2.5 bg-[#2B150D] hover:bg-[#4B2418] text-[#FCFAF6] rounded-xl font-semibold text-xs flex items-center gap-2 shadow transition-all cursor-pointer"
              >
                <span>Our Journey</span>
                <ArrowRight size={14} className="text-[#E69138]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-8 rounded-2xl overflow-hidden border border-[#E3D1BC] shadow-md">
                <img
                  src="/images/about-drum-machine.png"
                  alt="Aadhya Panning Drum Machine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 rounded-2xl overflow-hidden border border-[#E3D1BC] shadow-md">
                <img
                  src="/images/about-panned-nuts.png"
                  alt="Glossy panned chocolate dragées"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MEET THE FOUNDER SECTION - EXACT 1:1 CLONE OF USER UPLOAD */}
      <section className="py-12 sm:py-16 bg-[#FEF5EE] border-y border-[#E3D1BC]/80">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          
          {/* Desktop & Tablet (>= 768px): Exact Master 2x Graphic Banner */}
          <div className="hidden md:block w-full max-w-[1240px] mx-auto rounded-3xl overflow-hidden shadow-sm border border-[#E8DACB] select-none bg-white">
            <picture>
              <source srcSet="/images/founder-mission-vision-banner-2x.jpg" media="(min-width: 640px)" />
              <img
                src="/images/founder-mission-vision-banner.jpg"
                alt="Meet the Founder - Deepak Kumar, Founder, Aadhya International. Our Mission & Our Vision"
                className="w-full h-auto object-contain block"
              />
            </picture>
          </div>

          {/* Mobile Layout (< 768px): Exact same assets stacked cleanly & legibly */}
          <div className="md:hidden space-y-6">
            
            {/* Founder Card */}
            <div className="bg-[#FAF6F0] rounded-3xl p-5 border border-[#E8DACB] shadow-sm space-y-4">
              <div className="w-full max-w-[260px] mx-auto rounded-2xl overflow-hidden">
                <img
                  src="/images/founder-portrait-2x.png"
                  alt="Deepak Kumar - Founder"
                  className="w-full h-auto object-contain block mx-auto"
                />
              </div>

              <div className="text-center space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#984A1A]">
                  MEET THE FOUNDER
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#200D07]">
                  Deepak Kumar
                </h3>
                <p className="text-xs font-semibold text-[#8C3D10]">
                  Founder, Aadhya International
                </p>
                <p className="text-xs text-[#55271A] leading-relaxed pt-2 text-left">
                  A confectionery industry expert with 20+ years of hands-on experience in chocolate panning, product development and production consultancy. He has trained hundreds of professionals and helped many businesses set up successful panned chocolate operations.
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards (Exact 2x Master Slices) */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E8DACB]">
                <img
                  src="/images/founder-mission-card-2x.png"
                  alt="Our Mission - To empower individuals and businesses with practical knowledge, technical expertise and industry-relevant solutions in chocolate panning."
                  className="w-full h-auto object-contain block"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E8DACB]">
                <img
                  src="/images/founder-vision-card-2x.png"
                  alt="Our Vision - To be a leading global center for chocolate panning training, innovation and business consultancy."
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR EXPERTISE IN NUMBERS - EXACT 1:1 CLONE OF USER UPLOAD */}
      <section className="py-6 sm:py-10 bg-[#FAF6F0]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          
          {/* Desktop & Tablet (>= 640px): Exact Master 2x Graphic Card */}
          <div className="hidden sm:block w-full max-w-[1240px] mx-auto rounded-3xl overflow-hidden shadow-lg select-none">
            <picture>
              <source srcSet="/images/about-expertise-banner-2x.png" media="(min-width: 640px)" />
              <img
                src="/images/about-expertise-banner.png"
                alt="Our Expertise in Numbers - Since 2005, 1000+ Professionals Trained, 20+ Years of Expertise, 100+ Business Supported"
                className="w-full h-auto object-contain block"
              />
            </picture>
          </div>

          {/* Mobile View (< 640px): Dedicated Dark Chocolate Card with Crisp Typography */}
          <div className="sm:hidden w-full bg-[#421D12] text-white rounded-3xl p-5 border border-[#5A291A] shadow-md space-y-4">
            <div className="text-center pb-2 border-b border-[#5A291A]">
              <h3 className="font-serif text-xl font-bold text-white">
                Our Expertise in Numbers
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#31140B] p-3 rounded-2xl border border-[#4B1E12] flex flex-col items-center">
                <Calendar size={18} className="text-[#E69138] mb-1" />
                <span className="text-xs text-[#E3D1BC]">Since</span>
                <span className="text-base font-serif font-bold text-white">2005</span>
              </div>

              <div className="bg-[#31140B] p-3 rounded-2xl border border-[#4B1E12] flex flex-col items-center">
                <Users size={18} className="text-[#E69138] mb-1" />
                <span className="text-base font-serif font-bold text-white">1000+</span>
                <span className="text-[10px] text-[#E3D1BC]">Professionals Trained</span>
              </div>

              <div className="bg-[#31140B] p-3 rounded-2xl border border-[#4B1E12] flex flex-col items-center">
                <Settings size={18} className="text-[#E69138] mb-1" />
                <span className="text-base font-serif font-bold text-white">20+</span>
                <span className="text-[10px] text-[#E3D1BC]">Years of Expertise</span>
              </div>

              <div className="bg-[#31140B] p-3 rounded-2xl border border-[#4B1E12] flex flex-col items-center">
                <Factory size={18} className="text-[#E69138] mb-1" />
                <span className="text-base font-serif font-bold text-white">100+</span>
                <span className="text-[10px] text-[#E3D1BC]">Business Supported</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US: OUR STRENGTHS */}
      <section className="py-14 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B86216]">
            WHY CHOOSE US
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D] mt-1">
            Our Strengths
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC] text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B86216] shadow-sm">
              <Award size={18} />
            </div>
            <h5 className="font-serif text-xs font-bold text-[#2B150D]">
              Hands-on <br /> Practical Training
            </h5>
          </div>

          <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC] text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B86216] shadow-sm">
              <FlaskConical size={18} />
            </div>
            <h5 className="font-serif text-xs font-bold text-[#2B150D]">
              Industry <br /> Proven Techniques
            </h5>
          </div>

          <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC] text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B86216] shadow-sm">
              <Settings size={18} />
            </div>
            <h5 className="font-serif text-xs font-bold text-[#2B150D]">
              Production & <br /> Product Consultancy
            </h5>
          </div>

          <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC] text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B86216] shadow-sm">
              <Factory size={18} />
            </div>
            <h5 className="font-serif text-xs font-bold text-[#2B150D]">
              Business <br /> Setup Support
            </h5>
          </div>

          <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC] text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B86216] shadow-sm">
              <Users size={18} />
            </div>
            <h5 className="font-serif text-xs font-bold text-[#2B150D]">
              Personalised <br /> Guidance
            </h5>
          </div>

          <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#E3D1BC] text-center flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B86216] shadow-sm">
              <FileCheck size={18} />
            </div>
            <h5 className="font-serif text-xs font-bold text-[#2B150D]">
              Certificate <br /> of Completion
            </h5>
          </div>

        </div>
      </section>

      {/* 6. OUR JOURNEY MILESTONES */}
      <section id="milestones-section" className="py-16 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B86216]">
              OUR JOURNEY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B150D] mt-1">
              Milestones in Our Chocolate Panning Journey
            </h2>
          </div>

          {/* 6 Milestones Line */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
            {siteData.milestones.map((m, idx) => (
              <div key={m.year} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border-2 border-[#D37B24] flex items-center justify-center text-[#D37B24] font-bold text-xs shadow mb-3 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="font-serif text-lg font-bold text-[#2B150D]">{m.year}</div>
                <p className="text-xs font-semibold text-[#623020] mt-1">{m.title}</p>
                <p className="text-[11px] text-[#623020]/80 mt-1 leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER: BE A PART OF OUR JOURNEY */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="bg-[#2B150D] rounded-3xl overflow-hidden border border-[#4B2418] shadow-2xl flex flex-col md:flex-row items-center">
          
          <div className="md:w-5/12 h-56 md:h-64 w-full bg-[#180905]">
            <img
              src="/images/about-bottom-chocolates.png"
              alt="Artisanal chocolate dragées"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-7/12 p-8 sm:p-10 space-y-4 text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Be a Part of Our Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BC] max-w-md">
              Learn, create and grow in the world of chocolate panning with industry experts.
            </p>
            <div className="pt-2">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] font-semibold text-xs rounded-xl shadow transition-all cursor-pointer"
              >
                <span>Explore Training Programs</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
