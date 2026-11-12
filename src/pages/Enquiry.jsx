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
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";

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
      <section className="bg-[#FAF6F0] border-y border-[#E3D1BC] py-8">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <a 
              href="tel:+919112345678"
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#D37B24] flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[11px] text-[#623020] block">Call Us</span>
                <strong className="text-xs font-bold text-[#2B150D]">+91 91 1234 5678</strong>
              </div>
            </a>

            <a 
              href="https://wa.me/919112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#D37B24] flex items-center justify-center shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <span className="text-[11px] text-[#623020] block">Chat on WhatsApp</span>
                <strong className="text-xs font-bold text-[#2B150D]">+91 91 1234 5678</strong>
              </div>
            </a>

            <a 
              href="mailto:info@aadhyainternational.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#D37B24] flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[11px] text-[#623020] block">Email Us</span>
                <strong className="text-[11px] font-bold text-[#2B150D] truncate block">info@aadhyainternational.com</strong>
              </div>
            </a>

            <div 
              onClick={() => {
                const elem = document.getElementById("enquiry-form-card");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3D1BC] hover:border-[#D37B24] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] text-[#D37B24] flex items-center justify-center shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <span className="text-[11px] text-[#623020] block">Book a Consultation</span>
                <strong className="text-xs font-bold text-[#2B150D]">1-on-1 Discussion</strong>
              </div>
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
