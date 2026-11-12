import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, ArrowRight, ShieldCheck, Award, Heart, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "../data/siteData";

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

            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-[#E69138] font-medium">
                <ShieldCheck size={16} /> Certified Quality
              </div>
              <span className="text-stone-600">•</span>
              <div className="flex items-center gap-1.5 text-xs text-[#E69138] font-medium">
                <Award size={16} /> 20+ Years Excellence
              </div>
            </div>

            {/* OFFICIAL SOCIAL MEDIA CHANNELS */}
            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#E69138] block mb-2">
                Connect With Us:
              </span>
              <div className="flex items-center gap-2.5">
                {/* YouTube */}
                <a
                  href={siteData.brand.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#261009] border border-[#3E1B10] flex items-center justify-center text-[#E3D1BC] hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all group shadow"
                  title="Subscribe on YouTube (@chocolatepanning)"
                  aria-label="YouTube Channel"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={siteData.brand.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#261009] border border-[#3E1B10] flex items-center justify-center text-[#E3D1BC] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all group shadow"
                  title="Follow on Instagram (@chocolatepanningacademy)"
                  aria-label="Instagram Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={siteData.brand.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#261009] border border-[#3E1B10] flex items-center justify-center text-[#E3D1BC] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group shadow"
                  title="Follow on Facebook (/chocolatepanningacademy)"
                  aria-label="Facebook Page"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteData.brand.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#261009] border border-[#3E1B10] flex items-center justify-center text-[#E3D1BC] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all group shadow"
                  title="Direct WhatsApp Chat (+91 8600134951)"
                  aria-label="WhatsApp Contact"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.761.458 3.483 1.332 5.006L2 22l5.163-1.353a9.92 9.92 0 0 0 4.868 1.268h.004c5.508 0 9.985-4.477 9.985-9.984 0-2.668-1.04-5.176-2.928-7.064A9.927 9.927 0 0 0 12.031 2zm0 18.25c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.167.83.845-3.088-.199-.317a8.21 8.21 0 0 1-1.26-4.341c0-4.549 3.702-8.25 8.251-8.25 2.204 0 4.275.859 5.834 2.418a8.204 8.204 0 0 1 2.417 5.834c0 4.55-3.702 8.252-8.151 8.252zm4.524-6.177c-.248-.124-1.467-.724-1.694-.807-.228-.083-.393-.124-.559.124-.165.248-.642.807-.787.973-.145.165-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.559-1.347-.766-1.845-.201-.485-.406-.419-.558-.427-.145-.007-.311-.009-.477-.009s-.435.062-.663.311c-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.682 4.254 3.761.595.257 1.06.41 1.423.525.598.19 1.142.163 1.572.099.48-.072 1.467-.6 1.674-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z"/>
                  </svg>
                </a>
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
                <span className="leading-snug">
                  {siteData.brand.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={15} className="text-[#E69138] shrink-0" />
                <span>{siteData.brand.workHours}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="text-[#E69138] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${siteData.brand.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-[#E69138]">
                    {siteData.brand.phone}
                  </a>
                  <a href={`tel:${siteData.brand.altPhone.replace(/[^0-9+]/g, "")}`} className="hover:text-[#E69138] text-[11px] text-[#E3D1BC]/60">
                    {siteData.brand.altPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="text-[#E69138] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`mailto:${siteData.brand.email}`} className="hover:text-[#E69138] truncate block">
                    {siteData.brand.email}
                  </a>
                  <a href={`mailto:${siteData.brand.altEmail}`} className="hover:text-[#E69138] text-[11px] text-[#E3D1BC]/60 truncate block">
                    {siteData.brand.altEmail}
                  </a>
                </div>
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
