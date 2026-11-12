import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Award, 
  Users, 
  Factory, 
  FlaskConical, 
  Settings, 
  TrendingUp, 
  Star,
  GraduationCap,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock
} from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "../data/siteData";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    interest: "Training Programs",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D37B24', '#2B150D', '#D4AF37', '#8c3d10']
        });
      } catch (err) {}
    }, 700);
  };

  const selectOffering = (interestTitle) => {
    setFormData((prev) => ({ ...prev, interest: interestTitle }));
    const formElem = document.getElementById("enquiry-form-card");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO BANNER - 100% EDGE-TO-EDGE FULL-WIDTH (EXACT DESIGN MATCH) */}
      <section className="w-full bg-[#1c0c07] relative overflow-hidden border-b border-[#381B12]/60 select-none">
        <div className="w-full relative aspect-[1199/308]">
          <picture>
            <source srcSet="/images/enquiry-hero-banner-2x.jpg" media="(min-width: 640px)" />
            <img
              src="/images/enquiry-hero-banner.jpg"
              alt="Enquire Now - Aadhya Chocolate Panning Academy"
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

      {/* 2. MAIN SECTION: HOW CAN WE HELP YOU + SEND YOUR ENQUIRY FORM */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: How Can We Help You? */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B150D]">
                How Can We Help You?
              </h2>
              <p className="text-xs sm:text-sm text-[#55271A] mt-1.5 leading-relaxed">
                Tell us your requirement and our team will get in touch with the right information, program details and next steps.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Option 1: Training Programs */}
              <div 
                onClick={() => selectOffering("Training Programs")}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                  formData.interest.includes("Training") 
                    ? "bg-[#F7F1E7] border-[#D37B24] shadow-md" 
                    : "bg-[#FCFAF6] border-[#E3D1BC] hover:border-[#D37B24]"
                }`}
              >
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                    <GraduationCap size={18} className="text-[#B86216]" />
                    <span>Training Programs</span>
                  </h4>
                  <p className="text-xs text-[#623020] mt-1 leading-relaxed">
                    Learn chocolate panning from basic to professional level.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-[#E3D1BC]">
                  <img src="/images/enquiry-training.png" alt="Training" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Option 2: Consultancy Services */}
              <div 
                onClick={() => selectOffering("Consultancy Services")}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                  formData.interest.includes("Consultancy") 
                    ? "bg-[#F7F1E7] border-[#D37B24] shadow-md" 
                    : "bg-[#FCFAF6] border-[#E3D1BC] hover:border-[#D37B24]"
                }`}
              >
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                    <Factory size={18} className="text-[#B86216]" />
                    <span>Consultancy Services</span>
                  </h4>
                  <p className="text-xs text-[#623020] mt-1 leading-relaxed">
                    Get expert support for plant setup, product development and production optimization.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-[#E3D1BC]">
                  <img src="/images/enquiry-consultancy.png" alt="Consultancy" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Option 3: Products & Solutions */}
              <div 
                onClick={() => selectOffering("Products & Solutions")}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                  formData.interest.includes("Products") 
                    ? "bg-[#F7F1E7] border-[#D37B24] shadow-md" 
                    : "bg-[#FCFAF6] border-[#E3D1BC] hover:border-[#D37B24]"
                }`}
              >
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2B150D] flex items-center gap-2 group-hover:text-[#D37B24] transition-colors">
                    <Sparkles size={18} className="text-[#B86216]" />
                    <span>Products & Solutions</span>
                  </h4>
                  <p className="text-xs text-[#623020] mt-1 leading-relaxed">
                    Explore raw materials, ingredients and solutions for chocolate panning.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-[#E3D1BC]">
                  <img src="/images/enquiry-products.png" alt="Products" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Send Your Enquiry Form */}
          <div id="enquiry-form-card" className="lg:col-span-7 bg-[#2B150D] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#4B2418]">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Send Your Enquiry
            </h3>
            <p className="text-xs text-[#E3D1BC] mt-1 mb-6">
              Please share your details and requirement. Our team will get back to you shortly.
            </p>

            {submitted ? (
              <div className="bg-[#180905]/80 p-8 rounded-2xl border border-[#4B2418] text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-[#D37B24]/20 text-[#E69138] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">Enquiry Received!</h4>
                <p className="text-xs sm:text-sm text-[#E3D1BC] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry for <em>{formData.interest}</em> has been registered. Our chief confectionery consultant will connect with you at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#D37B24] hover:bg-[#B86216] text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#E3D1BC] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Rathi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-[#E69138]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#E3D1BC] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-[#E69138]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#E3D1BC] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-[#E69138]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#E3D1BC] mb-1">Your Business / Organisation</label>
                    <input
                      type="text"
                      placeholder="Bakery, Brand or Startup"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-[#E69138]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E3D1BC] mb-1">I am Interested In *</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs focus:outline-none focus:border-[#E69138]"
                  >
                    <option value="Training Programs">Training Programs (Beginner, Advanced, Masterclass)</option>
                    <option value="Beginner Chocolate Panning Training">Beginner Chocolate Panning (2 Days)</option>
                    <option value="Product-wise Training">Product-wise Training (Almond, Cashew, Coffee, Seeds)</option>
                    <option value="Advanced Chocolate Panning Training">Advanced Chocolate Panning Training (3 Days)</option>
                    <option value="Professional Chocolate Panning Masterclass">Professional Masterclass (5 Days)</option>
                    <option value="Consultancy Services">Consultancy Services (Plant Setup & Sizing)</option>
                    <option value="Products & Solutions">Products & Raw Material Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E3D1BC] mb-1">Your Requirement / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirement, questions or planned business timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#180905] border border-[#4B2418] text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-[#E69138] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
                  >
                    {loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. DIRECT CONTACT STRIP (Call Us, WhatsApp, Email, Book Consultation) */}
      <section className="bg-[#FAF6F0] border-y border-[#E3D1BC] py-10">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <a 
              href={`tel:${siteData.brand.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FAF6F0] text-[#D37B24] group-hover:bg-[#2B150D] group-hover:text-[#E69138] flex items-center justify-center shrink-0 transition-colors">
                <Phone size={19} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#623020] block">Call Us Directly</span>
                <strong className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] transition-colors block truncate">
                  {siteData.brand.phone}
                </strong>
                <span className="text-[10px] text-[#8C5E4A] block truncate">{siteData.brand.altPhone}</span>
              </div>
            </a>

            <a 
              href={siteData.brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E3D1BC] hover:border-emerald-600 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <MessageSquare size={19} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#623020] block">Chat on WhatsApp</span>
                <strong className="text-xs font-bold text-[#2B150D] group-hover:text-emerald-700 transition-colors block truncate">
                  {siteData.brand.whatsapp}
                </strong>
                <span className="text-[10px] text-emerald-600 block">Instant Response</span>
              </div>
            </a>

            <a 
              href={`mailto:${siteData.brand.email}`}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FAF6F0] text-[#D37B24] group-hover:bg-[#2B150D] group-hover:text-[#E69138] flex items-center justify-center shrink-0 transition-colors">
                <Mail size={19} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#623020] block">Email Inquiries</span>
                <strong className="text-[11px] font-bold text-[#2B150D] group-hover:text-[#D37B24] transition-colors truncate block">
                  {siteData.brand.email}
                </strong>
                <span className="text-[10px] text-[#8C5E4A] block truncate">{siteData.brand.altEmail}</span>
              </div>
            </a>

            <div 
              onClick={() => {
                const elem = document.getElementById("enquiry-form-card");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FAF6F0] text-[#D37B24] group-hover:bg-[#2B150D] group-hover:text-[#E69138] flex items-center justify-center shrink-0 transition-colors">
                <Calendar size={19} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#623020] block">Book a Consultation</span>
                <strong className="text-xs font-bold text-[#2B150D] group-hover:text-[#D37B24] transition-colors block">
                  1-on-1 Discussion
                </strong>
                <span className="text-[10px] text-[#8C5E4A] block">Fill out form below</span>
              </div>
            </div>

          </div>

          {/* OFFICIAL ADDRESS & SOCIAL CHANNELS STRIP */}
          <div className="mt-6 pt-6 border-t border-[#E3D1BC]/70 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#55271A]">
              <div className="flex items-start gap-2 max-w-md">
                <MapPin size={16} className="text-[#D37B24] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B150D] block font-semibold">Registered Office & Academy:</strong>
                  <span className="text-[#623020] leading-snug block">{siteData.brand.address}</span>
                  <span className="text-[11px] text-[#8C5E4A] block mt-0.5">Training Hubs: {siteData.brand.trainingLocation}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l sm:border-[#E3D1BC] sm:pl-4">
                <Clock size={16} className="text-[#D37B24] shrink-0" />
                <div>
                  <strong className="text-[#2B150D] block font-semibold">Working Hours:</strong>
                  <span className="text-[#623020]">{siteData.brand.workHours}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center justify-start md:justify-end gap-3">
              <span className="text-xs font-bold text-[#2B150D] uppercase tracking-wider text-[11px]">
                Follow Us:
              </span>

              {/* YouTube */}
              <a
                href={siteData.brand.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E3D1BC] flex items-center justify-center text-[#55271A] hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all shadow-sm"
                title="YouTube Channel (@chocolatepanning)"
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
                className="w-9 h-9 rounded-xl bg-white border border-[#E3D1BC] flex items-center justify-center text-[#55271A] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all shadow-sm"
                title="Instagram (@chocolatepanningacademy)"
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
                className="w-9 h-9 rounded-xl bg-white border border-[#E3D1BC] flex items-center justify-center text-[#55271A] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-sm"
                title="Facebook (/chocolatepanningacademy)"
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
                className="w-9 h-9 rounded-xl bg-white border border-[#E3D1BC] flex items-center justify-center text-[#55271A] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-sm"
                title="WhatsApp Direct Chat"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.761.458 3.483 1.332 5.006L2 22l5.163-1.353a9.92 9.92 0 0 0 4.868 1.268h.004c5.508 0 9.985-4.477 9.985-9.984 0-2.668-1.04-5.176-2.928-7.064A9.927 9.927 0 0 0 12.031 2zm0 18.25c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.167.83.845-3.088-.199-.317a8.21 8.21 0 0 1-1.26-4.341c0-4.549 3.702-8.25 8.251-8.25 2.204 0 4.275.859 5.834 2.418a8.204 8.204 0 0 1 2.417 5.834c0 4.55-3.702 8.252-8.151 8.252zm4.524-6.177c-.248-.124-1.467-.724-1.694-.807-.228-.083-.393-.124-.559.124-.165.248-.642.807-.787.973-.145.165-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.559-1.347-.766-1.845-.201-.485-.406-.419-.558-.427-.145-.007-.311-.009-.477-.009s-.435.062-.663.311c-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.682 4.254 3.761.595.257 1.06.41 1.423.525.598.19 1.142.163 1.572.099.48-.072 1.467-.6 1.674-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z"/>
                </svg>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* 4. BOTTOM STATS BANNER (Dark Brown 6 Stats) */}
      <section className="bg-[#2B150D] text-white py-12">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#4B2418]">
            <div className="pt-2 sm:pt-0">
              <Star size={18} className="text-[#E69138] mx-auto mb-1" />
              <div className="font-serif text-sm font-bold text-white">20+ Years</div>
              <div className="text-[10px] text-[#E3D1BC]/80">of Expertise</div>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Users size={18} className="text-[#E69138] mx-auto mb-1" />
              <div className="font-serif text-sm font-bold text-white">1000+</div>
              <div className="text-[10px] text-[#E3D1BC]/80">Professionals Trained</div>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Factory size={18} className="text-[#E69138] mx-auto mb-1" />
              <div className="font-serif text-sm font-bold text-white">Plant Setup</div>
              <div className="text-[10px] text-[#E3D1BC]/80">Support</div>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <FlaskConical size={18} className="text-[#E69138] mx-auto mb-1" />
              <div className="font-serif text-sm font-bold text-white">Product</div>
              <div className="text-[10px] text-[#E3D1BC]/80">Development</div>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <Settings size={18} className="text-[#E69138] mx-auto mb-1" />
              <div className="font-serif text-sm font-bold text-white">Production</div>
              <div className="text-[10px] text-[#E3D1BC]/80">Optimization</div>
            </div>

            <div className="pt-2 sm:pt-0 pl-0 sm:pl-2">
              <TrendingUp size={18} className="text-[#E69138] mx-auto mb-1" />
              <div className="font-serif text-sm font-bold text-white">Business</div>
              <div className="text-[10px] text-[#E3D1BC]/80">Growth Guidance</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
