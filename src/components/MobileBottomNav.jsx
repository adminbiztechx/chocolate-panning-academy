import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  GraduationCap, 
  Phone, 
  MessageCircle, 
  Send 
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function MobileBottomNav({ onOpenEnquire }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHome = currentPath === "/";
  const isPrograms = currentPath.startsWith("/programs");

  const phoneClean = siteData.brand.phone.replace(/[^0-9+]/g, "");
  const whatsappClean = siteData.brand.whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#180905]/95 backdrop-blur-md border-t border-[#3D1A10] shadow-[0_-4px_25px_rgba(0,0,0,0.4)] select-none">
      <div className="grid grid-cols-5 items-center py-1.5 px-1 max-w-md mx-auto text-center">
        
        {/* 1. HOME / BACK TO HOME */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            isHome ? "text-[#E69138] font-bold" : "text-[#D9C4B0] hover:text-[#E69138]"
          }`}
          title="Back to Home"
        >
          <div className={`p-1 rounded-full ${isHome ? "bg-[#33170D]" : ""}`}>
            <Home size={19} className={isHome ? "text-[#E69138]" : "text-[#D9C4B0]"} />
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5">
            {isHome ? "Home" : "Back Home"}
          </span>
        </Link>

        {/* 2. ALL PROGRAMS */}
        <Link
          to="/programs"
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            isPrograms ? "text-[#E69138] font-bold" : "text-[#D9C4B0] hover:text-[#E69138]"
          }`}
          title="Training Programs"
        >
          <div className={`p-1 rounded-full ${isPrograms ? "bg-[#33170D]" : ""}`}>
            <GraduationCap size={19} className={isPrograms ? "text-[#E69138]" : "text-[#D9C4B0]"} />
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5">Programs</span>
        </Link>

        {/* 3. CALL NOW (COMPULSORY) */}
        <a
          href={`tel:${phoneClean}`}
          className="flex flex-col items-center justify-center py-1 text-[#D9C4B0] hover:text-[#E69138] transition-colors"
          title="Call Us Now"
        >
          <div className="p-1 rounded-full bg-[#27120A] text-[#E69138]">
            <Phone size={18} />
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5">Call</span>
        </a>

        {/* 4. WHATSAPP (COMPULSORY) */}
        <a
          href={`https://wa.me/${whatsappClean}?text=Hello%20Aadhya%20Chocolate%20Panning%20Academy,%20I%20am%20interested%20in%20your%20training%20programs`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#D9C4B0] hover:text-[#25D366] transition-colors"
          title="WhatsApp Chat"
        >
          <div className="p-1 rounded-full bg-[#0E2818] text-[#25D366]">
            <MessageCircle size={18} />
          </div>
          <span className="text-[10px] tracking-tight leading-tight mt-0.5 text-emerald-300">WhatsApp</span>
        </a>

        {/* 5. ENQUIRE NOW (COMPULSORY) */}
        <button
          onClick={() => onOpenEnquire("Mobile Bottom Bar")}
          className="flex flex-col items-center justify-center py-1 text-[#E69138] hover:text-white transition-colors cursor-pointer"
          title="Send Enquiry"
        >
          <div className="p-1 rounded-full bg-[#D37B24] text-[#180905]">
            <Send size={18} className="translate-x-0.5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight leading-tight mt-0.5 text-[#E69138]">Enquire</span>
        </button>

      </div>
    </div>
  );
}
