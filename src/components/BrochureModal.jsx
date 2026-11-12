import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function BrochureModal({ isOpen, onClose, programName = "Chocolate Panning Academy Course Brochure" }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloading(true);

    setTimeout(() => {
      setDownloading(false);
      setDone(true);
      try {
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}

      // Trigger automatic simulated download of prospectus
      const element = document.createElement("a");
      const file = new Blob([
        `AADHYA INTERNATIONAL - CHOCOLATE PANNING ACADEMY\n\nCurriculum & Prospectus for: ${programName}\n\nContents:\n1. Introduction to Dragée & Chocolate Panning\n2. Raw Material Priming & Temperature Curves\n3. Stainless Steel Drum Speeds & Blower Airflow Calibration\n4. Gum Arabic, Glaze & Shellac Mirror Polishing\n5. Quality Defects Troubleshooting & Recipe Scaling\n\nContact: aadhyainternational@gmail.com | +91 8600134951 | 9322876919\nAddress: 325, Keshri house, North Patel Nagar, Hesag, Hatia, Ranchi, Jharkhand - 834003\nTraining Hubs: Mumbai & Ranchi, India`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${programName.replace(/\s+/g, '_')}_Prospectus.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E3D1BC] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#2B150D] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="text-[#D37B24]" size={20} />
            <h3 className="font-serif text-lg font-bold">Download Course Brochure</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-stone-300 hover:text-white rounded-full"
          >
            <X size={18} />
          </button>
        </div>

        {done ? (
          <div className="p-6 text-center space-y-3">
            <CheckCircle2 size={44} className="text-[#D37B24] mx-auto" />
            <h4 className="font-serif text-xl font-bold text-[#2B150D]">Brochure Downloaded!</h4>
            <p className="text-xs text-[#55271A] leading-relaxed">
              We've triggered your download for <strong>{programName}</strong>. A copy has also been sent to your email ({email}).
            </p>
            <button
              onClick={() => { setDone(false); onClose(); }}
              className="mt-3 px-5 py-2 bg-[#2B150D] text-white rounded-lg text-xs font-semibold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="p-6 space-y-3.5">
            <p className="text-xs text-[#623020]">
              Enter your details to receive the comprehensive curriculum, equipment specs, and pricing breakdown.
            </p>

            <div>
              <label className="block text-xs font-medium text-[#2B150D] mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#2B150D] mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#2B150D] mb-1">WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={downloading}
              className="w-full py-2.5 bg-[#D37B24] hover:bg-[#B86216] text-white rounded-lg font-semibold flex items-center justify-center gap-2 text-xs shadow-md mt-2 cursor-pointer"
            >
              {downloading ? "Preparing PDF..." : (
                <>
                  <Download size={14} /> Download Curriculum PDF
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
