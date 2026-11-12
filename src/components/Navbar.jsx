import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Calendar, 
  Send, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Award, 
  Layers, 
  BookOpen, 
  Factory, 
  Package, 
  HelpCircle,
  PhoneCall
} from "lucide-react";

export default function Navbar({ onOpenEnquire, onOpenWorkshop }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [consultancyDropdown, setConsultancyDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdown(false);
    setConsultancyDropdown(false);
    setMoreDropdown(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-40 transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#180905] text-[#E3D1BC] text-[12px] py-2 px-4 sm:px-8 md:px-12 lg:px-[5.5%] border-b border-[#381B12]/60">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-1.5 font-medium">
          <div className="flex items-center gap-2 tracking-wide">
            <span className="text-[#FCFAF6] font-semibold">Aadhya International</span>
            <span className="text-[#B86216]">|</span>
            <span className="text-[#E3D1BC]/90">Chocolate Panning Academy</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-[#FCFAF6]">
              <Calendar size={13} className="text-[#E69138]" />
              <span>Upcoming Workshop: <strong className="font-semibold text-white">15–17 Mar 2025</strong>, Mumbai</span>
            </div>
            <button 
              onClick={onOpenWorkshop}
              className="text-[#E69138] hover:text-[#f3b573] font-semibold flex items-center gap-1 transition-colors group cursor-pointer text-xs"
            >
              <span>Register Now</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className={`w-full bg-[#FCFAF6] transition-all duration-300 border-b border-[#E3D1BC]/70 ${
        scrolled ? "shadow-md bg-[#FCFAF6]/95 backdrop-blur-md py-2.5" : "py-3.5"
      }`}>
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%] flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2B150D] to-[#55271A] flex items-center justify-center text-[#E69138] shadow-md border border-[#D37B24]/40 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" stroke="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif tracking-widest text-lg font-black text-[#2B150D] leading-none uppercase">
                  Aadhya
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B86216]">
                  International
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D37B24]" />
                <span className="text-[11px] font-semibold text-[#623020] tracking-wider uppercase">
                  Chocolate Panning Academy
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-7">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors ${
                isActive("/") ? "text-[#2B150D] font-bold border-b-2 border-[#D37B24] pb-0.5" : "text-[#55271A] hover:text-[#D37B24]"
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors ${
                isActive("/about") ? "text-[#2B150D] font-bold border-b-2 border-[#D37B24] pb-0.5" : "text-[#55271A] hover:text-[#D37B24]"
              }`}
            >
              About Us
            </Link>

            {/* TRAINING PROGRAMS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsDropdown(true)}
              onMouseLeave={() => setProgramsDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-semibold py-1 transition-colors cursor-pointer ${
                  isActive("/programs") ? "text-[#2B150D] font-bold border-b-2 border-[#D37B24]" : "text-[#55271A] hover:text-[#D37B24]"
                }`}
              >
                <span>Training Programs</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${programsDropdown ? "rotate-180 text-[#D37B24]" : ""}`} />
              </button>

              {programsDropdown && (
                <div className="absolute top-full -left-4 w-72 bg-[#FCFAF6] border border-[#E3D1BC] rounded-xl shadow-xl py-2 z-50 animate-fade-in divide-y divide-[#E3D1BC]/40">
                  <div className="p-2 space-y-1">
                    <Link 
                      to="/programs" 
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span>All Training Programs</span>
                        <span className="text-[10px] text-[#D37B24] bg-amber-50 px-1.5 py-0.5 rounded">Hub</span>
                      </div>
                      <p className="text-[11px] font-normal text-[#623020]">Overview of all courses & levels</p>
                    </Link>

                    <Link 
                      to="/programs/beginner" 
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span>Beginner Training (2 Days)</span>
                        <span className="text-[10px] text-amber-700 bg-amber-100/60 px-1.5 py-0.5 rounded">Foundational</span>
                      </div>
                      <p className="text-[11px] font-normal text-[#623020]">Fundamentals, roasting & coating</p>
                    </Link>

                    <Link 
                      to="/programs/product-wise" 
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span>Product-Wise Training (1 Day)</span>
                        <span className="text-[10px] text-orange-700 bg-orange-100/60 px-1.5 py-0.5 rounded">Focus</span>
                      </div>
                      <p className="text-[11px] font-normal text-[#623020]">Almond, Cashew, Coffee, Seeds</p>
                    </Link>

                    <Link 
                      to="/programs/advanced" 
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span>Advanced Training (3 Days)</span>
                        <span className="text-[10px] text-amber-800 bg-amber-200/60 px-1.5 py-0.5 rounded">Pro Scale</span>
                      </div>
                      <p className="text-[11px] font-normal text-[#623020]">Layer building, airflow & defects</p>
                    </Link>

                    <Link 
                      to="/programs/professional" 
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span>Professional Masterclass (5 Days)</span>
                        <span className="text-[10px] text-red-800 bg-red-100/60 px-1.5 py-0.5 rounded">Complete</span>
                      </div>
                      <p className="text-[11px] font-normal text-[#623020]">Commercial factory & recipe setup</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CONSULTANCY DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setConsultancyDropdown(true)}
              onMouseLeave={() => setConsultancyDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-semibold py-1 transition-colors cursor-pointer ${
                  isActive("/consultancy") ? "text-[#2B150D] font-bold border-b-2 border-[#D37B24]" : "text-[#55271A] hover:text-[#D37B24]"
                }`}
              >
                <span>Consultancy</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${consultancyDropdown ? "rotate-180 text-[#D37B24]" : ""}`} />
              </button>

              {consultancyDropdown && (
                <div className="absolute top-full -left-4 w-64 bg-[#FCFAF6] border border-[#E3D1BC] rounded-xl shadow-xl p-2 z-50 animate-fade-in space-y-1">
                  <Link 
                    to="/consultancy" 
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    All Consultancy Services
                    <p className="text-[11px] font-normal text-[#623020]">End-to-end industrial advisory</p>
                  </Link>
                  <Link 
                    to="/consultancy#plant-setup" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Plant Setup & Machinery
                    <p className="text-[11px] font-normal text-[#623020]">Pan sizing, HVAC & project layout</p>
                  </Link>
                  <Link 
                    to="/consultancy#product-development" 
                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Product & Recipe Development
                    <p className="text-[11px] font-normal text-[#623020]">Mirror glaze, polishing & shelf life</p>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/products" 
              className={`text-sm font-semibold transition-colors ${
                isActive("/products") ? "text-[#2B150D] font-bold border-b-2 border-[#D37B24] pb-0.5" : "text-[#55271A] hover:text-[#D37B24]"
              }`}
            >
              Products
            </Link>

            {/* MORE DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setMoreDropdown(true)}
              onMouseLeave={() => setMoreDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-semibold py-1 transition-colors cursor-pointer ${
                  isActive("/more") ? "text-[#2B150D] font-bold border-b-2 border-[#D37B24]" : "text-[#55271A] hover:text-[#D37B24]"
                }`}
              >
                <span>More</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${moreDropdown ? "rotate-180 text-[#D37B24]" : ""}`} />
              </button>

              {moreDropdown && (
                <div className="absolute top-full -left-8 w-60 bg-[#FCFAF6] border border-[#E3D1BC] rounded-xl shadow-xl p-2 z-50 animate-fade-in space-y-1">
                  <Link 
                    to="/more" 
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Resources & Events Hub
                  </Link>
                  <Link 
                    to="/more#events" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Events & Workshops
                  </Link>
                  <Link 
                    to="/more#gallery" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Academy Gallery
                  </Link>
                  <Link 
                    to="/more#faq" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link 
                    to="/more#testimonials" 
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-[#2B150D] hover:bg-[#F7F1E7] transition-colors"
                  >
                    Success Stories & Reviews
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA ENQUIRE BUTTON */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquire("General Enquiry")}
              className="bg-[#2B150D] hover:bg-[#4B2418] text-[#FCFAF6] px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Enquire Now</span>
              <Send size={13} className="text-[#E69138] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2B150D] hover:bg-[#F7F1E7] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCFAF6] border-t border-[#E3D1BC] px-5 py-4 space-y-3 animate-fade-in shadow-xl">
            <Link to="/" className="block py-2 text-sm font-semibold text-[#2B150D]">Home</Link>
            <Link to="/about" className="block py-2 text-sm font-semibold text-[#2B150D]">About Us</Link>
            
            <div className="py-2 border-y border-[#E3D1BC]/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B86216]">Training Programs</span>
              <div className="pl-3 space-y-1.5 text-xs text-[#55271A]">
                <Link to="/programs" className="block py-1 hover:text-[#D37B24]">All Programs Overview</Link>
                <Link to="/programs/beginner" className="block py-1 hover:text-[#D37B24]">Beginner Training (2 Days)</Link>
                <Link to="/programs/product-wise" className="block py-1 hover:text-[#D37B24]">Product-Wise Training (1 Day)</Link>
                <Link to="/programs/advanced" className="block py-1 hover:text-[#D37B24]">Advanced Training (3 Days)</Link>
                <Link to="/programs/professional" className="block py-1 hover:text-[#D37B24]">Professional Masterclass (5 Days)</Link>
              </div>
            </div>

            <Link to="/consultancy" className="block py-2 text-sm font-semibold text-[#2B150D]">Consultancy Services</Link>
            <Link to="/products" className="block py-2 text-sm font-semibold text-[#2B150D]">Products & Solutions</Link>
            <Link to="/more" className="block py-2 text-sm font-semibold text-[#2B150D]">Resources & Events</Link>
            <Link to="/enquiry" className="block py-2 text-sm font-semibold text-[#2B150D]">Contact & Enquiry</Link>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquire("Mobile Menu Enquiry")}
                className="w-full bg-[#2B150D] text-[#FCFAF6] py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span>Enquire Now</span>
                <Send size={13} className="text-[#E69138]" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
