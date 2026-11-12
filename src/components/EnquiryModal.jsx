import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, Mail, Building } from "lucide-react";
import confetti from "canvas-confetti";
import { siteData } from "../data/siteData";

export default function EnquiryModal({ isOpen, onClose, initialInterest = "General Enquiry" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    interest: initialInterest,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D37B24', '#2B150D', '#D4AF37', '#8c3d10']
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E3D1BC] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="bg-[#2B150D] text-white px-6 py-5 flex items-center justify-between border-b border-[#4B2418]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D37B24] animate-ping" />
            <div>
              <h3 className="font-serif text-xl font-bold tracking-wide">Send Your Enquiry</h3>
              <p className="text-xs text-[#E3D1BC]">Aadhya International • Chocolate Panning Academy</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-[#D37B24] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#2B150D]">Thank You, {formData.name || "Learner"}!</h4>
            <p className="text-[#55271A] text-sm max-w-md mx-auto leading-relaxed">
              Your enquiry has been received successfully. Our Master Trainer & Technical Consultant will contact you within 24 hours at <strong className="text-[#2B150D]">{formData.phone || formData.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#2B150D] text-[#FCFAF6] rounded-xl font-medium hover:bg-[#4B2418] transition-all shadow-md text-sm"
              >
                Close & Continue Exploring
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
            <p className="text-xs text-[#623020]">
              Please share your details and requirements. Our confectionery team will get back to you shortly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#2B150D] mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-[#2B150D] text-sm focus:outline-none focus:ring-2 focus:ring-[#D37B24]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B150D] mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-[#2B150D] text-sm focus:outline-none focus:ring-2 focus:ring-[#D37B24]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#2B150D] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-[#2B150D] text-sm focus:outline-none focus:ring-2 focus:ring-[#D37B24]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B150D] mb-1">Business / Organisation</label>
                <input
                  type="text"
                  placeholder="Company or Freelancer"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-[#2B150D] text-sm focus:outline-none focus:ring-2 focus:ring-[#D37B24]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2B150D] mb-1">I am Interested In *</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-[#2B150D] text-sm focus:outline-none focus:ring-2 focus:ring-[#D37B24]"
              >
                <option value="Beginner Chocolate Panning Training">Beginner Chocolate Panning Training (2 Days)</option>
                <option value="Product-wise Chocolate Panning Training">Product-wise Chocolate Panning (Almond, Cashew, Coffee, Seeds)</option>
                <option value="Advanced Chocolate Panning Training">Advanced Chocolate Panning Training (3 Days)</option>
                <option value="Professional Chocolate Panning Masterclass">Professional Masterclass (5 Days)</option>
                <option value="Consultancy - Commercial Plant Setup">Consultancy: Commercial Plant Setup & Machinery</option>
                <option value="Consultancy - Product Development & Recipes">Consultancy: Product Development & Custom Recipes</option>
                <option value="Consultancy - Process Optimization">Consultancy: Process Optimization & Glaze Finishing</option>
                <option value="Raw Materials & Ingredients">Raw Materials & Chocolate Ingredients</option>
                <option value="Other">Other Custom Requirement</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2B150D] mb-1">Your Requirement / Message</label>
              <textarea
                rows={3}
                placeholder="Tell us about your production goals, current background, batch sizes, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C7B5] bg-white text-[#2B150D] text-sm focus:outline-none focus:ring-2 focus:ring-[#D37B24] resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#D37B24] hover:bg-[#B86216] text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20 transition-all cursor-pointer text-sm"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting Enquiry...
                  </span>
                ) : (
                  <>
                    Submit Enquiry <Send size={16} />
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 border-t border-[#E3D1BC] flex items-center justify-between text-[11px] text-[#623020]">
              <a href={`tel:${siteData.brand.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-1 hover:text-[#D37B24]">
                <Phone size={11} className="text-[#D37B24]" /> {siteData.brand.phone}
              </a>
              <a href={`mailto:${siteData.brand.email}`} className="flex items-center gap-1 hover:text-[#D37B24]">
                <Mail size={11} className="text-[#D37B24]" /> {siteData.brand.email}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
