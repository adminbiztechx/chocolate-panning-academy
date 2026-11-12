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

      {/* 3. MEET THE FOUNDER SECTION */}
      <section className="py-14 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#E3D1BC] shadow-xl bg-[#F7F1E7]">
                  <img
                    src="/images/founder-deepak-kumar.png"
                    alt="Deepak Kumar - Founder of Aadhya International"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2B150D] text-white px-4 py-1 rounded-full text-[11px] font-semibold border border-[#E69138]/50 shadow whitespace-nowrap">
                  20+ Years Confectionery Mastery
                </div>
              </div>
            </div>

            {/* Founder Bio & Mission/Vision */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B86216]">
                  MEET THE FOUNDER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D] mt-0.5">
                  Deepak Kumar
                </h3>
                <p className="text-xs font-semibold text-[#8c3d10] uppercase tracking-wide">
                  Founder, Aadhya International
                </p>

                <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed mt-3">
                  A confectionery industry expert with 20+ years of hands-on experience in chocolate panning, product development and production consultancy. He has trained hundreds of professionals and helped many businesses set up successful panned chocolate operations across India and internationally.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E3D1BC] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#D37B24]">
                    <Target size={18} />
                    <h5 className="font-serif text-sm font-bold text-[#2B150D]">Our Mission</h5>
                  </div>
                  <p className="text-xs text-[#623020] leading-relaxed">
                    To empower individuals and businesses with practical knowledge, technical expertise and industry-relevant solutions in chocolate panning.
                  </p>
                </div>

                <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E3D1BC] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#D37B24]">
                    <Eye size={18} />
                    <h5 className="font-serif text-sm font-bold text-[#2B150D]">Our Vision</h5>
                  </div>
                  <p className="text-xs text-[#623020] leading-relaxed">
                    To be a leading global center for chocolate panning training, innovation and business consultancy.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR EXPERTISE IN NUMBERS (Dark Banner) */}
      <section className="bg-[#2B150D] text-white py-12 border-b border-[#4B2418]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-white">
                Our Expertise <br /> in Numbers
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y-0 sm:divide-x divide-[#4B2418]">
              
              <div className="text-center pt-2 sm:pt-0">
                <Calendar size={20} className="text-[#E69138] mx-auto mb-1" />
                <div className="font-serif text-xl sm:text-2xl font-bold text-white">Since 2005</div>
                <div className="text-[11px] text-[#E3D1BC]/80">Established Brand</div>
              </div>

              <div className="text-center pt-2 sm:pt-0">
                <Users size={20} className="text-[#E69138] mx-auto mb-1" />
                <div className="font-serif text-xl sm:text-2xl font-bold text-white">1000+</div>
                <div className="text-[11px] text-[#E3D1BC]/80">Professionals Trained</div>
              </div>

              <div className="text-center pt-2 sm:pt-0">
                <Award size={20} className="text-[#E69138] mx-auto mb-1" />
                <div className="font-serif text-xl sm:text-2xl font-bold text-white">20+</div>
                <div className="text-[11px] text-[#E3D1BC]/80">Years of Expertise</div>
              </div>

              <div className="text-center pt-2 sm:pt-0">
                <Factory size={20} className="text-[#E69138] mx-auto mb-1" />
                <div className="font-serif text-xl sm:text-2xl font-bold text-white">100+</div>
                <div className="text-[11px] text-[#E3D1BC]/80">Businesses Supported</div>
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
