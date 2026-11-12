import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  FlaskConical, 
  Users, 
  FileCheck, 
  TrendingUp, 
  ArrowRight, 
  Calendar, 
  Monitor, 
  CheckCircle2,
  Clock,
  Briefcase
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function Programs({ onOpenEnquire, onOpenBrochure }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Programs" },
    { id: "beginner", label: "Beginner" },
    { id: "product-wise", label: "Product-wise" },
    { id: "advanced", label: "Advanced" },
    { id: "professional", label: "Professional" },
    { id: "workshops", label: "Workshops" },
  ];

  const allCourses = [
    {
      id: "almond",
      title: "Almond Panning",
      desc: "Premium whole almond chocolate coating & high gloss mirror finishing.",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      category: "product-wise",
      image: "/images/program-almond.png",
      link: "/programs/product-wise"
    },
    {
      id: "cashew",
      title: "Cashew Panning",
      desc: "Multi-layer curved cashew chocolate coating without breakage.",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      category: "product-wise",
      image: "/images/program-cashew.png",
      link: "/programs/product-wise"
    },
    {
      id: "raisins",
      title: "Raisins Panning",
      desc: "Moisture priming & glossy sealing for dried soft fruits.",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      category: "product-wise",
      image: "/images/program-raisins.png",
      link: "/programs/product-wise"
    },
    {
      id: "coffee",
      title: "Coffee Bean Panning",
      desc: "Intense roast espresso bean chocolate coating and crisp crunch.",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      category: "product-wise",
      image: "/images/program-coffee.png",
      link: "/programs/product-wise"
    },
    {
      id: "seeds",
      title: "Seeds Panning",
      desc: "Micro-dragée coating for sunflower, pumpkin and chia seeds.",
      duration: "1 Day",
      level: "Beginner to Intermediate",
      category: "product-wise",
      image: "/images/program-seeds.png",
      link: "/programs/product-wise"
    },
    {
      id: "beginner-prog",
      title: "Beginner Chocolate Panning Training",
      desc: "Comprehensive 2-day entry-level hands-on training for starters & bakers.",
      duration: "2 Days",
      level: "Beginner",
      category: "beginner",
      image: "/images/offering-training.png",
      link: "/programs/beginner"
    },
    {
      id: "advanced-prog",
      title: "Advanced Chocolate Panning Training",
      desc: "Master layer-building, temperature airflow curves, and commercial scale.",
      duration: "3 Days",
      level: "Advanced",
      category: "advanced",
      image: "/images/program-advanced.png",
      link: "/programs/advanced"
    },
    {
      id: "pro-masterclass",
      title: "Professional Chocolate Panning Masterclass",
      desc: "Complete end-to-end training: machinery setup, QA, shelf-life & business.",
      duration: "5 Days",
      level: "Professional",
      category: "professional",
      image: "/images/masterclass-side.png",
      link: "/programs/professional"
    },
    {
      id: "mumbai-workshop",
      title: "Upcoming Mumbai Hands-on Workshop",
      desc: "Intensive 3-day live revolving pan workshop (15-17 Mar 2025).",
      duration: "3 Days",
      level: "All Levels",
      category: "workshops",
      image: "/images/about-drum-machine.png",
      link: "/programs/advanced"
    }
  ];

  const filteredCourses = activeFilter === "all" 
    ? allCourses 
    : allCourses.filter(c => c.category === activeFilter);

  const whatYouWillLearnSteps = [
    { title: "Raw Material Selection", icon: "Seeds" },
    { title: "Coating Techniques", icon: "Syrup" },
    { title: "Building Multiple Layers", icon: "Layers" },
    { title: "Polishing & Finishing", icon: "Sparkle" },
    { title: "Quality Control & Shelf Life", icon: "Check" },
    { title: "Production & Scaling", icon: "Scale" },
  ];

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1024/203]">
          <picture>
            <source srcSet="/images/programs-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/programs-hero-banner.jpg"
              alt="Training Programs - Hands-on, practical and industry-focused training in chocolate panning for beginners to professionals"
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

      {/* 2. FEATURE STRIP (5 items) */}
      <section className="bg-[#FAF6F0] border-b border-[#E3D1BC] py-5">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E3D1BC] text-center">
            
            <div className="flex items-center justify-center gap-2.5 pt-2 md:pt-0">
              <Award size={18} className="text-[#B86216]" />
              <div className="text-xs font-bold text-[#2B150D]">Hands-on Practical Training</div>
            </div>

            <div className="flex items-center justify-center gap-2.5 pt-2 md:pt-0 pl-0 md:pl-2">
              <FlaskConical size={18} className="text-[#B86216]" />
              <div className="text-xs font-bold text-[#2B150D]">Industry Proven Techniques</div>
            </div>

            <div className="flex items-center justify-center gap-2.5 pt-2 md:pt-0 pl-0 md:pl-2">
              <Users size={18} className="text-[#B86216]" />
              <div className="text-xs font-bold text-[#2B150D]">Expert Trainers (20+ Years Exp.)</div>
            </div>

            <div className="flex items-center justify-center gap-2.5 pt-2 md:pt-0 pl-0 md:pl-2">
              <FileCheck size={18} className="text-[#B86216]" />
              <div className="text-xs font-bold text-[#2B150D]">Certificate of Completion</div>
            </div>

            <div className="flex items-center justify-center gap-2.5 pt-2 md:pt-0 pl-0 md:pl-2">
              <TrendingUp size={18} className="text-[#B86216]" />
              <div className="text-xs font-bold text-[#2B150D]">Business Guidance & Support</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CHOOSE THE RIGHT TRAINING PROGRAM & FILTER TABS */}
      <section className="py-14 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
              Choose the Right Training Program
            </h2>
          </div>
          <p className="text-xs text-[#55271A] max-w-md">
            A comprehensive range of training programs designed to help you learn, produce and scale panned chocolate products.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#E3D1BC] pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#2B150D] text-white shadow"
                  : "bg-[#F7F1E7] text-[#623020] hover:bg-[#EFE3D3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] p-5 flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="w-full h-44 rounded-xl overflow-hidden bg-white mb-4 border border-[#E3D1BC]/60">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#B86216] font-semibold mb-1">
                  <span className="bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E3D1BC]">{c.duration}</span>
                  <span className="bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#E3D1BC]">{c.level}</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#2B150D] mt-2 group-hover:text-[#D37B24] transition-colors">
                  {c.title}
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D1BC] mt-5 flex items-center justify-between">
                <Link
                  to={c.link}
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => onOpenEnquire(c.title)}
                  className="px-3 py-1 bg-[#2B150D] hover:bg-[#4B2418] text-[#FCFAF6] rounded-lg text-[11px] font-medium transition-colors cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROGRAM: PROFESSIONAL MASTERCLASS */}
      <section className="py-14 bg-[#F7F1E7] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="bg-[#FCFAF6] rounded-3xl p-6 sm:p-10 border border-[#E3D1BC] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Drum Image */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#E3D1BC] shadow-md h-64 lg:h-80 bg-[#180905]">
                <img
                  src="/images/overview-drum.png"
                  alt="Industrial Chocolate Panning Drum"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-[#B86216] font-bold text-[11px] uppercase tracking-wider">
                  FEATURED PROGRAM
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D] leading-tight">
                  Professional Chocolate Panning Masterclass
                </h3>

                <p className="text-xs sm:text-sm text-[#55271A] leading-relaxed">
                  A complete, hands-on training program covering the full process of chocolate panning — from basics to commercial production.
                </p>

                {/* 4 Quick Info Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#E3D1BC] text-center">
                    <span className="text-[10px] text-[#623020] block">Duration</span>
                    <strong className="text-xs font-bold text-[#2B150D]">3 Days</strong>
                  </div>
                  <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#E3D1BC] text-center">
                    <span className="text-[10px] text-[#623020] block">Level</span>
                    <strong className="text-xs font-bold text-[#2B150D]">Beginner to Adv.</strong>
                  </div>
                  <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#E3D1BC] text-center">
                    <span className="text-[10px] text-[#623020] block">Mode</span>
                    <strong className="text-xs font-bold text-[#2B150D]">Offline (Hands-on)</strong>
                  </div>
                  <div className="bg-[#FAF6F0] p-2.5 rounded-xl border border-[#E3D1BC] text-center">
                    <span className="text-[10px] text-[#623020] block">Certificate</span>
                    <strong className="text-xs font-bold text-[#2B150D]">Yes (Accredited)</strong>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link
                    to="/programs/professional"
                    className="px-5 py-2.5 bg-[#2B150D] hover:bg-[#4B2418] text-[#FCFAF6] rounded-xl font-semibold text-xs flex items-center gap-2 shadow transition-all cursor-pointer"
                  >
                    <span>View Detailed Curriculum</span>
                    <ArrowRight size={14} className="text-[#E69138]" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquire("Professional Chocolate Panning Masterclass")}
                    className="px-5 py-2.5 bg-[#FAF6F0] hover:bg-[#EFE3D3] text-[#2B150D] border border-[#D8C7B5] rounded-xl font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Calendar size={14} className="text-[#D37B24]" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU WILL LEARN */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
              What You Will Learn
            </h2>
          </div>
          <p className="text-xs text-[#55271A] max-w-md">
            Practical, step-by-step learning to make high-quality, consistent and market-ready panned chocolate products.
          </p>
        </div>

        {/* 6 Step Flow */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {whatYouWillLearnSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F7F1E7] rounded-xl p-3.5 border border-[#E3D1BC] flex flex-col items-center text-center space-y-2"
            >
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#D37B24] flex items-center justify-center font-serif text-xs font-bold text-[#D37B24]">
                0{idx + 1}
              </div>
              <h5 className="font-serif text-xs font-bold text-[#2B150D] leading-tight">
                {step.title}
              </h5>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHO CAN JOIN & TRAINING MODES */}
      <section className="py-14 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Who Can Join */}
            <div className="md:col-span-6 bg-[#FAF6F0] p-6 rounded-2xl border border-[#E3D1BC] space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2">
                <Users size={18} className="text-[#D37B24]" />
                <span>Who Can Join?</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#55271A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D37B24] shrink-0" />
                  <span>Individuals interested in chocolate making</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D37B24] shrink-0" />
                  <span>Home bakers and confectionery enthusiasts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D37B24] shrink-0" />
                  <span>Entrepreneurs & startup business owners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D37B24] shrink-0" />
                  <span>Existing chocolate manufacturers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D37B24] shrink-0" />
                  <span>Food industry professionals</span>
                </li>
              </ul>
            </div>

            {/* Training Modes */}
            <div className="md:col-span-6 bg-[#FAF6F0] p-6 rounded-2xl border border-[#E3D1BC] space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2">
                <Monitor size={18} className="text-[#D37B24]" />
                <span>Training Modes</span>
              </h4>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl border border-[#E3D1BC]">
                  <strong className="text-xs font-bold text-[#2B150D] block">Offline Classroom Training</strong>
                  <p className="text-[11px] text-[#623020] mt-0.5">
                    Hands-on, practical training at our dedicated Mumbai training facility with real revolving pan lines.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#E3D1BC]">
                  <strong className="text-xs font-bold text-[#2B150D] block">Online Training & Hybrid Guidance</strong>
                  <p className="text-[11px] text-[#623020] mt-0.5">
                    Learn from anywhere with expert guidance, recipe sheets, recorded demos and live practical Q&A sessions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="bg-[#2B150D] rounded-3xl overflow-hidden border border-[#4B2418] shadow-2xl flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 text-white gap-6">
          <div className="space-y-2 max-w-lg">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Start Your Chocolate Panning Journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BC]">
              Choose a training program, learn from industry experts and build your own panned chocolate business.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEnquire("Training Programs CTA - Enrol")}
              className="px-5 py-2.5 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] rounded-xl font-semibold text-xs flex items-center gap-2 cursor-pointer shadow transition-all"
            >
              <span>Explore Training Programs</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => onOpenEnquire("Training Programs CTA - Consultation")}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-[#E3D1BC]/30 rounded-xl font-semibold text-xs flex items-center gap-2 cursor-pointer transition-all"
            >
              <Calendar size={14} className="text-[#E69138]" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
