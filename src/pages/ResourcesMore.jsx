import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Calendar, 
  Image as ImageIcon, 
  Download, 
  HelpCircle, 
  MessageSquare, 
  Bell, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Play
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function ResourcesMore({ onOpenEnquire, onOpenBrochure, onOpenWorkshop }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1199/236]">
          <picture>
            <source srcSet="/images/resources-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/resources-hero-banner.jpg"
              alt="More at Chocolate Panning Academy - Resources & Events"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>

          {/* Interactive Breadcrumb Hotspot */}
          <Link
            to="/"
            className="absolute left-[5.8%] top-[14%] w-[5%] h-[20%] z-20 cursor-pointer"
            title="Return to Home"
          >
            <span className="sr-only">Home</span>
          </Link>
        </div>
      </section>

      {/* 2. SIX RESOURCE CARDS (2x3 Grid matching mockup) */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Blog & Insights */}
          <div className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] overflow-hidden flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group">
            <div className="p-3">
              <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100">
                <img src="/images/resource-blog.png" alt="Blog & Insights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                  <FileText size={18} className="text-[#B86216]" />
                  <span>Blog & Insights</span>
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  Articles, tips and industry updates on chocolate panning, product development and business growth.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4">
                <button 
                  onClick={() => onOpenEnquire("Blog & Insights Access")}
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Blog</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Events & Workshops */}
          <div id="events" className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] overflow-hidden flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group">
            <div className="p-3">
              <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100">
                <img src="/images/resource-events.png" alt="Events & Workshops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                  <Calendar size={18} className="text-[#B86216]" />
                  <span>Events & Workshops</span>
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  Stay updated on upcoming training batches, workshops, webinars and industry events.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4">
                <button 
                  onClick={() => onOpenWorkshop("Upcoming Events & Workshops", "15–17 Mar 2025")}
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Events</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Gallery */}
          <div id="gallery" className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] overflow-hidden flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group">
            <div className="p-3">
              <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100">
                <img src="/images/resource-gallery.png" alt="Academy Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                  <ImageIcon size={18} className="text-[#B86216]" />
                  <span>Gallery</span>
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  A glimpse of our training sessions, production demos, events and success stories.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4">
                <button 
                  onClick={() => onOpenEnquire("Gallery Photo High-Res Access")}
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Gallery</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Resources */}
          <div className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] overflow-hidden flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group">
            <div className="p-3">
              <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100">
                <img src="/images/resource-library.png" alt="Resources & Technical Guides" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                  <Download size={18} className="text-[#B86216]" />
                  <span>Resources</span>
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  Download brochures, technical guides, checklists and practical resources.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4">
                <button 
                  onClick={() => onOpenBrochure("Resource Library Pack")}
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Resources</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: FAQ */}
          <div id="faq" className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] overflow-hidden flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group">
            <div className="p-3">
              <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100">
                <img src="/images/resource-faq.png" alt="FAQ Questions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                  <HelpCircle size={18} className="text-[#B86216]" />
                  <span>Frequently Asked Questions</span>
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  Get answers to common questions about our training, consultancy, products, certification and more.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4">
                <a 
                  href="#faq-accordion"
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1"
                >
                  <span>View FAQs</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 6: Testimonials */}
          <div id="testimonials" className="bg-[#FCFAF6] rounded-2xl border border-[#E3D1BC] overflow-hidden flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group">
            <div className="p-3">
              <div className="w-full h-44 rounded-xl overflow-hidden bg-stone-100 relative">
                <img src="/images/resource-testimonials.png" alt="Testimonials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#2B150D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={16} className="ml-0.5 fill-current" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                  <MessageSquare size={18} className="text-[#B86216]" />
                  <span>Testimonials</span>
                </h4>
                <p className="text-xs text-[#623020] mt-1.5 leading-relaxed">
                  Hear from our trainees and clients about their learning experience and business growth with us.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E3D1BC]/60 mt-4">
                <button 
                  onClick={() => onOpenEnquire("Student Case Studies & Reviews")}
                  className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Testimonials</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE FAQ ACCORDION SECTION */}
      <section id="faq-accordion" className="py-14 bg-[#FCFAF6] border-y border-[#E3D1BC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#55271A] mt-1">
              Quick answers about chocolate panning training, batch sizes, equipment and consultancy.
            </p>
          </div>

          <div className="space-y-3">
            {siteData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6F0] rounded-xl border border-[#E3D1BC] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-serif text-sm font-bold text-[#2B150D] hover:text-[#D37B24] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-[#D37B24] shrink-0" /> : <ChevronDown size={18} className="text-[#623020] shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#55271A] leading-relaxed border-t border-[#E3D1BC]/60 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA: STAY CONNECTED WITH US */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="bg-[#2B150D] rounded-3xl overflow-hidden border border-[#4B2418] shadow-2xl flex flex-col md:flex-row items-center">
          
          <div className="md:w-5/12 h-56 md:h-64 w-full bg-[#180905]">
            <img
              src="/images/about-bottom-chocolates.png"
              alt="Stay Connected Chocolates"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-7/12 p-8 sm:p-10 space-y-4 text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Stay Connected with Us
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BC] max-w-md">
              Get the latest updates on training programs, workshops, industry insights and special offers.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquire("Newsletter & Updates Subscription")}
                className="px-6 py-3 bg-[#E69138] hover:bg-[#D37B24] text-[#180905] font-bold text-xs rounded-xl shadow flex items-center gap-2 cursor-pointer transition-all"
              >
                <Bell size={14} />
                <span>Subscribe for Updates</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
