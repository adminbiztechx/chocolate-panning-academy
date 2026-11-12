import React, { useState } from "react";
import { X, Calendar, MapPin, CheckCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function WorkshopModal({ isOpen, onClose, batchTitle = "Chocolate Panning Masterclass", date = "15–17 Mar 2025" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [seats, setSeats] = useState(1);
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
    try {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E3D1BC] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#2B150D] text-white p-5 border-b border-[#4B2418]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-widest text-[#E69138] font-bold">Upcoming Hands-on Workshop</span>
            <button onClick={onClose} className="text-stone-300 hover:text-white p-1">
              <X size={18} />
            </button>
          </div>
          <h3 className="font-serif text-xl font-bold mt-1 text-[#FCFAF6]">{batchTitle}</h3>
          <div className="flex items-center gap-4 text-xs text-[#E3D1BC] mt-2">
            <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#E69138]" /> {date}</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#E69138]" /> Mumbai, India</span>
          </div>
        </div>

        {booked ? (
          <div className="p-7 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2B150D]">Seat Reservation Reserved!</h4>
            <p className="text-xs text-[#55271A] leading-relaxed">
              We have reserved <strong>{seats} seat(s)</strong> for <strong>{name}</strong> for the upcoming Mumbai batch on <strong>{date}</strong>. Our academy coordinator will share the batch venue address and prep guidelines via WhatsApp at <strong>{phone}</strong>.
            </p>
            <button
              onClick={() => { setBooked(false); onClose(); }}
              className="mt-3 px-6 py-2 bg-[#2B150D] text-[#FCFAF6] rounded-xl text-xs font-semibold"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-3.5">
            <div className="bg-[#F7F1E7] p-3 rounded-xl border border-[#E3D1BC] text-[11px] text-[#55271A] space-y-1">
              <div className="flex justify-between font-semibold text-[#2B150D]">
                <span>Batch Status:</span>
                <span className="text-emerald-700">Admissions Open (Limited to 12 trainees)</span>
              </div>
              <p>Includes complete raw materials, commercial revolving pan practice, safety kit & certificate.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2B150D] mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Participant Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2B150D] mb-1">WhatsApp No. *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2B150D] mb-1">Seats Required</label>
                <select
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
                >
                  <option value={1}>1 Person</option>
                  <option value={2}>2 Persons (Partner)</option>
                  <option value={3}>3 Persons (Team)</option>
                  <option value={4}>4+ (Corporate)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2B150D] mb-1">Current City</label>
              <input
                type="text"
                placeholder="e.g. Mumbai, Delhi, Pune"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D8C7B5] bg-white text-xs text-[#2B150D] focus:ring-1 focus:ring-[#D37B24] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#D37B24] hover:bg-[#B86216] text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-xs shadow-md mt-2 cursor-pointer transition-all"
            >
              Confirm Batch Registration →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
