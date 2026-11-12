import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  ArrowRight, 
  Users, 
  Award, 
  TrendingUp, 
  Star, 
  FlaskConical, 
  Factory, 
  FileCheck, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  GraduationCap,
  Cog
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function Home({ onOpenEnquire, onOpenWorkshop }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = siteData.testimonials;

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D] m-0 p-0 overflow-x-hidden">
      
      {/* 1. HERO SECTION - 100% EDGE-TO-EDGE FULL-WIDTH (2172x724 PRISTINE HD BANNER) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60">
        <div className="w-full relative aspect-[2172/724] select-none">
          <picture>
            <source srcSet="/images/home-hero-banner.png" media="(min-width: 640px)" />
            <img
              src="/images/home-hero-banner.jpg"
              alt="Chocolate Panning Academy - Learn, Create & Build a Panned Chocolate Business"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>

          {/* Interactive Hotspot 1: Explore Training Programs Button */}
          <Link
            to="/programs"
            className="absolute left-[5.52%] top-[74.58%] w-[20.49%] h-[13.12%] rounded-full z-20 cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[#E69138] hover:shadow-[0_0_25px_rgba(230,145,56,0.5)]"
            title="Explore Training Programs"
            aria-label="Explore Training Programs"
          >
            <span className="sr-only">Explore Training Programs</span>
          </Link>

          {/* Interactive Hotspot 2: Book a Consultation Button */}
          <button
            onClick={() => onOpenEnquire("Hero Banner - Book a Consultation")}
            className="absolute left-[26.70%] top-[74.58%] w-[18.42%] h-[13.12%] rounded-full z-20 cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[#E3D1BC] hover:bg-white/10"
            title="Book a Consultation"
            aria-label="Book a Consultation"
          >
            <span className="sr-only">Book a Consultation</span>
          </button>
        </div>
      </section>

      {/* 2. STATS BAR / TRUST BAR - PERFECTLY ALIGNED AT 5.5% GUTTER */}
      <section className="w-full bg-[#FAF6F0] border-b border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%] py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E3D1BC]">
            
            <div className="flex items-center gap-4 pt-2 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F1E7] border border-[#E3D1BC] flex items-center justify-center text-[#B86216] shrink-0 shadow-sm">
                <Calendar size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-lg sm:text-xl text-[#2B150D]">Since 2005</div>
                <div className="text-xs text-[#623020]">Industry Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-0 md:pl-8 pt-2 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F1E7] border border-[#E3D1BC] flex items-center justify-center text-[#B86216] shrink-0 shadow-sm">
                <Users size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-lg sm:text-xl text-[#2B150D]">1000+</div>
                <div className="text-xs text-[#623020]">Professionals Trained</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-0 md:pl-8 pt-2 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F1E7] border border-[#E3D1BC] flex items-center justify-center text-[#B86216] shrink-0 shadow-sm">
                <Award size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-lg sm:text-xl text-[#2B150D]">Expert-Led</div>
                <div className="text-xs text-[#623020]">Practical Training</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-0 md:pl-8 pt-2 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F1E7] border border-[#E3D1BC] flex items-center justify-center text-[#B86216] shrink-0 shadow-sm">
                <TrendingUp size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-lg sm:text-xl text-[#2B150D]">End-to-End</div>
                <div className="text-xs text-[#623020]">Business Support</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR OFFERINGS SECTION - EXACT 1:1 CLONE OF DESIGN */}
      <section className="w-full py-14 sm:py-20 bg-[#FAF6F0]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          
          {/* Header Block: Exactly matches uploaded mockup */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <div className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#984A1A] mb-1.5">
                OUR OFFERINGS
              </div>
              <h2 className="font-serif text-3xl sm:text-[38px] lg:text-[42px] font-bold text-[#200D07] leading-[1.15] tracking-tight">
                Complete Support for <br />
                Chocolate Panning
              </h2>
              {/* Exact clean flat underline bar */}
              <div className="w-10 h-[2.5px] bg-[#984A1A] mt-3"></div>
            </div>

            <p className="text-[13px] sm:text-[14px] text-[#4A3528] leading-[1.65] max-w-[400px] md:pt-4 font-normal">
              Whether you want to learn the art of chocolate panning, start a new business or improve your existing production, we provide expert training and end-to-end consultancy.
            </p>
          </div>

          {/* 3 Offerings Cards: Exact 1:1 Match from user upload media_1794471726442_f7251523.jpg */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            
            {/* Card 1: Training Programs */}
            <Link
              to="/programs"
              className="group block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-[#E8DACB]/60 hover:border-[#D37B24] cursor-pointer"
              title="Training Programs - Explore Courses"
            >
              <picture>
                <source srcSet="/images/offering-card-1-2x.png" media="(min-width: 640px)" />
                <img
                  src="/images/offering-card-1.png"
                  alt="Training Programs - Hands-on, practical training in chocolate panning for beginners to professionals. Explore Courses"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                />
              </picture>
              <span className="sr-only">Training Programs - Explore Courses</span>
            </Link>

            {/* Card 2: Consultancy Services */}
            <Link
              to="/consultancy"
              className="group block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-[#E8DACB]/60 hover:border-[#D37B24] cursor-pointer"
              title="Consultancy Services - View Consultancy"
            >
              <picture>
                <source srcSet="/images/offering-card-2-2x.png" media="(min-width: 640px)" />
                <img
                  src="/images/offering-card-2.png"
                  alt="Consultancy Services - Technical, production and product development support for businesses. View Consultancy"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                />
              </picture>
              <span className="sr-only">Consultancy Services - View Consultancy</span>
            </Link>

            {/* Card 3: Business Opportunities */}
            <Link
              to="/programs/professional"
              className="group block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-[#D9E3D6]/70 hover:border-[#7A9C76] cursor-pointer"
              title="Business Opportunities - Explore Opportunities"
            >
              <picture>
                <source srcSet="/images/offering-card-3-2x.png" media="(min-width: 640px)" />
                <img
                  src="/images/offering-card-3.png"
                  alt="Business Opportunities - Guidance to start, set up and scale your panned chocolate business. Explore Opportunities"
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                />
              </picture>
              <span className="sr-only">Business Opportunities - Explore Opportunities</span>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. POPULAR TRAINING PROGRAMS (6 Signature Programs - Exact 1:1 Match) */}
      <section className="w-full py-14 sm:py-18 bg-[#FAF6F0]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="text-center mb-9 sm:mb-11">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.25em] text-[#984A1A]">
              POPULAR TRAINING PROGRAMS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#200D07] mt-1.5 tracking-tight">
              Our Signature Training Programs
            </h2>
          </div>

          {/* 6 Programs Horizontal Row: Exact 1:1 Layout & Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4.5">
            {[
              { id: "almond", name: "Almond Panning", img: "/images/sig-prog-almond-2x.png", link: "/programs/product-wise" },
              { id: "cashew", name: "Cashew Panning", img: "/images/sig-prog-cashew-2x.png", link: "/programs/product-wise" },
              { id: "raisins", name: "Raisins Panning", img: "/images/sig-prog-raisins-2x.png", link: "/programs/product-wise" },
              { id: "coffee", name: "Coffee Bean Panning", img: "/images/sig-prog-coffee-2x.png", link: "/programs/product-wise" },
              { id: "seeds", name: "Seeds Panning", img: "/images/sig-prog-seeds-2x.png", link: "/programs/product-wise" },
              { id: "advanced", name: "Advanced Panning", img: "/images/sig-prog-advanced-2x.png", link: "/programs/advanced" },
            ].map((prog) => (
              <Link
                key={prog.id}
                to={prog.link}
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#E8DACB]/70 hover:border-[#D37B24] cursor-pointer"
                title={prog.name}
              >
                <img
                  src={prog.img}
                  alt={prog.name}
                  className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                />
                <span className="sr-only">{prog.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Full-width Dark Cocoa Banner with Organic Wave & Exact Texture) */}
      <section className="w-full relative overflow-hidden py-4 sm:py-6 bg-[#FAF6F0]">
        <div className="w-full relative select-none">
          <picture>
            <source srcSet="/images/why-choose-us-banner-2x.png" media="(min-width: 640px)" />
            <img
              src="/images/why-choose-us-banner.png"
              alt="Why Choose Us - Learn from Industry Experts (20+ Years of Expertise, Hands-on Practical Training, Real Production Exposure, Personalised Guidance, Certificate of Completion)"
              className="w-full h-auto object-contain block drop-shadow-sm"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* 6. THE PROCESS (5-Step Panning Pipeline - Exact 1:1 Match) */}
      <section className="w-full py-14 sm:py-20 bg-[#FAF6F0]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.25em] text-[#984A1A]">
              THE PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#200D07] mt-1.5 tracking-tight">
              The Chocolate Panning Process
            </h2>
          </div>

          {/* Desktop & Tablet: Exact high-res 1:1 pipeline row */}
          <div className="hidden sm:block w-full max-w-[960px] mx-auto select-none">
            <picture>
              <source srcSet="/images/process-pipeline-row-2x.png" media="(min-width: 640px)" />
              <img
                src="/images/process-pipeline-row.png"
                alt="The Chocolate Panning Process: 1 Preparation, 2 Coating, 3 Building Layers, 4 Polishing, 5 Finished Product"
                className="w-full h-auto object-contain block"
              />
            </picture>
          </div>

          {/* Mobile Stacking View (< 640px) */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
            {[
              { num: 1, name: "Preparation", img: "/images/process-oval-1-2x.png" },
              { num: 2, name: "Coating", img: "/images/process-oval-2-2x.png" },
              { num: 3, name: "Building Layers", img: "/images/process-oval-3-2x.png" },
              { num: 4, name: "Polishing", img: "/images/process-oval-4-2x.png" },
              { num: 5, name: "Finished Product", img: "/images/process-oval-5-2x.png" },
            ].map((st) => (
              <div key={st.num} className="bg-white/60 p-3 rounded-2xl border border-[#E8DACB] flex flex-col items-center text-center">
                <img src={st.img} alt={st.name} className="w-20 h-auto object-contain mb-2" />
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#2B150D] text-white text-[11px] font-bold flex items-center justify-center">
                    {st.num}
                  </span>
                  <span className="text-xs font-bold text-[#200D07]">{st.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL & UPCOMING WORKSHOP (Two-Column Masterpiece - Exact 1:1 Match) */}
      <section className="w-full pb-20 sm:pb-24 bg-[#FAF6F0]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Left: Testimonial Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DACB]/70 select-none bg-white">
              <picture>
                <source srcSet="/images/orig-testimonial-card-2x.png" media="(min-width: 640px)" />
                <img
                  src="/images/orig-testimonial-card.png"
                  alt="Rohit Mehta Testimonial - The training was extremely practical and business-focused."
                  className="w-full h-auto object-contain block"
                />
              </picture>

              {/* Interactive Prev Button Hotspot */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-[30%] w-[12%] h-[40%] z-20 cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Previous Testimonial"
                title="Previous Testimonial"
              />

              {/* Interactive Next Button Hotspot */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-[30%] w-[12%] h-[40%] z-20 cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Next Testimonial"
                title="Next Testimonial"
              />

              {/* Interactive Dots Hotspots */}
              <div className="absolute bottom-[4%] left-[40%] w-[20%] h-[12%] z-20 flex items-center justify-center gap-2 cursor-pointer">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className="w-4 h-4 rounded-full opacity-0 cursor-pointer"
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: UPCOMING WORKSHOP Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(43,21,13,0.35)] hover:-translate-y-1 transition-all duration-300 border border-[#4B2418] select-none bg-[#2B150D]">
              <picture>
                <source srcSet="/images/orig-workshop-card-2x.png" media="(min-width: 640px)" />
                <img
                  src="/images/orig-workshop-card.png"
                  alt="Upcoming Workshop - Chocolate Panning Masterclass, 15-17 Mar 2025, Mumbai, India"
                  className="w-full h-auto object-contain block"
                />
              </picture>

              {/* Interactive Hotspot for 'Register Now ->' Button */}
              <button
                onClick={() => onOpenWorkshop("Chocolate Panning Masterclass", "15–17 Mar 2025")}
                className="absolute left-[5.5%] top-[72.5%] w-[32%] h-[18.5%] rounded-full z-20 cursor-pointer hover:ring-2 hover:ring-[#E69138] hover:shadow-[0_0_20px_rgba(230,145,56,0.6)] transition-all"
                title="Register Now - Chocolate Panning Masterclass"
                aria-label="Register Now - Chocolate Panning Masterclass"
              >
                <span className="sr-only">Register Now</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
