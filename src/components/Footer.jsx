import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, ArrowRight, ShieldCheck, Award, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer({ onOpenEnquire }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    } catch (err) {}
  };

  return (
    <footer className="bg-[#180905] text-[#E3D1BC] border-t border-[#381B12] pt-16 pb-10">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        
        {/* TOP ROW: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#381B12]">
          
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2B150D] to-[#4B2418] flex items-center justify-center text-[#E69138] border border-[#D37B24]/40">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <span className="font-serif tracking-widest text-lg font-black text-white uppercase block">
                  Aadhya International
                </span>
                <span className="text-xs font-semibold text-[#E69138] uppercase tracking-wider">
                  Chocolate Panning Academy
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#E3D1BC]/80 leading-relaxed max-w-md">
              Established in 2005, Aadhya International is India's dedicated centre of excellence for commercial chocolate panning training, technical consultancy, plant setup, and high-gloss panned confectionery development.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#E69138] font-medium">
                <ShieldCheck size={16} /> Certified Quality
              </div>
              <span className="text-stone-600">•</span>
              <div className="flex items-center gap-1.5 text-xs text-[#E69138] font-medium">
                <Award size={16} /> 20+ Years Excellence
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-7 bg-[#220F08] p-6 sm:p-8 rounded-2xl border border-[#381B12] flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#E69138] font-bold">Stay Updated with Masterclasses</span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                Subscribe for Batch Dates & Technical Insights
              </h4>
              <p className="text-xs text-[#E3D1BC]/80 mt-1 max-w-xl">
                Get early notifications on upcoming offline batches in Mumbai, international panning formulations, and equipment sizing guides.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 text-xs p-3 rounded-xl mt-4">
                Thank you for subscribing! We'll keep you updated with the latest workshops and technical insights.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-[#E69138]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#D37B24] hover:bg-[#B86216] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Subscribe</span>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MIDDLE ROW: DETAILED SITEMAP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#381B12] text-xs">
          
          <div>
            <h5 className="font-serif text-sm font-bold text-white mb-3 tracking-wide">Quick Navigation</h5>
            <ul className="space-y-2 text-[#E3D1BC]/80">
              <li><Link to="/" className="hover:text-[#E69138] transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-[#E69138] transition-colors">About Us & Founder</Link></li>
              <li><Link to="/programs" className="hover:text-[#E69138] transition-colors">All Training Programs</Link></li>
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Consultancy Services</Link></li>
              <li><Link to="/products" className="hover:text-[#E69138] transition-colors">Products & Solutions</Link></li>
              <li><Link to="/more" className="hover:text-[#E69138] transition-colors">Resources & Events</Link></li>
              <li><Link to="/enquiry" className="hover:text-[#E69138] transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-sm font-bold text-white mb-3 tracking-wide">Training Programs</h5>
            <ul className="space-y-2 text-[#E3D1BC]/80">
              <li><Link to="/programs/beginner" className="hover:text-[#E69138] transition-colors">Beginner Program (2 Days)</Link></li>
              <li><Link to="/programs/product-wise" className="hover:text-[#E69138] transition-colors">Almond Panning (1 Day)</Link></li>
              <li><Link to="/programs/product-wise" className="hover:text-[#E69138] transition-colors">Cashew & Nut Panning (1 Day)</Link></li>
              <li><Link to="/programs/product-wise" className="hover:text-[#E69138] transition-colors">Coffee Bean & Seeds (1 Day)</Link></li>
              <li><Link to="/programs/advanced" className="hover:text-[#E69138] transition-colors">Advanced Panning (3 Days)</Link></li>
              <li><Link to="/programs/professional" className="hover:text-[#E69138] transition-colors">Professional Masterclass (5 Days)</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-sm font-bold text-white mb-3 tracking-wide">Consultancy Offerings</h5>
            <ul className="space-y-2 text-[#E3D1BC]/80">
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Commercial Plant Setup</Link></li>
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Panning Machinery Sizing</Link></li>
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Formulation & Recipes</Link></li>
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Mirror Glaze & Polishing</Link></li>
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Production Cost Optimization</Link></li>
              <li><Link to="/consultancy" className="hover:text-[#E69138] transition-colors">Defect & Blooming Resolution</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-sm font-bold text-white mb-3 tracking-wide">Contact & Location</h5>
            <ul className="space-y-3 text-[#E3D1BC]/80">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-[#E69138] shrink-0 mt-0.5" />
                <span>Aadhya Confectionery Center, Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#E69138] shrink-0" />
                <a href="tel:+919112345678" className="hover:text-[#E69138]">+91 91 1234 5678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#E69138] shrink-0" />
                <a href="mailto:info@aadhyainternational.com" className="hover:text-[#E69138]">info@aadhyainternational.com</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenEnquire("Footer Quick Enquiry")}
                  className="w-full py-2 bg-[#2B150D] hover:bg-[#381B12] text-[#FCFAF6] border border-[#4B2418] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Book Consultation Call</span>
                  <ArrowRight size={13} className="text-[#E69138]" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E3D1BC]/60">
          <div>
            © {new Date().getFullYear()} Aadhya International. All rights reserved. Chocolate Panning Academy.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#E69138]">Privacy Policy</Link>
            <Link to="/about" className="hover:text-[#E69138]">Terms of Service</Link>
            <Link to="/enquiry" className="hover:text-[#E69138]">Enquiry Form</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
