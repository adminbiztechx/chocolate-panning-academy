import React from "react";
import { Link } from "react-router-dom";
import { 
  Package, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Factory, 
  Sparkles, 
  CheckCircle2, 
  Download,
  Calendar
} from "lucide-react";

export default function Products({ onOpenEnquire, onOpenBrochure }) {
  const productCategories = [
    {
      id: "machinery",
      title: "Commercial Panning Machines",
      subtitle: "Revolving Stainless Steel Pans",
      desc: "SS-304 food grade panning drums equipped with variable frequency speed drives, hot and cold dehumidified blower nozzles, and tilt adjustment.",
      specs: ["Available in 10kg, 25kg, 50kg & 150kg batch capacities", "Precision temperature-controlled blower ducting", "Quiet low-vibration helical gearbox mechanism"],
      img: "/images/overview-drum.png"
    },
    {
      id: "glazes",
      title: "Polishing & Glazing Solutions",
      subtitle: "International Mirror-Finish Glazes",
      desc: "Specialized gum arabic pre-coating primers, confectionery shellac glazes, and carnauba-beeswax emulsions for durable non-sticky gloss.",
      specs: ["High humidity resistant formulation", "No sticky fingerprints or sugar bloom", "100% vegetarian & food safety certified"],
      img: "/images/advanced-dragees-plate.png"
    },
    {
      id: "chocolates",
      title: "Panning Chocolates & Couvertures",
      subtitle: "Calibrated Viscosity Coatings",
      desc: "Engineered chocolate compounds and couverture formulations with ideal crystallization rates specifically balanced for centrifugal pan coating.",
      specs: ["Pure cocoa butter couvertures (55%, 70% Dark, Milk, White)", "High-heat resistant compound coatings", "Natural fruit-powder infused flavored drops"],
      img: "/images/hero-chocolate-bowl.png"
    },
    {
      id: "centers",
      title: "Raw Centers & Premium Inclusions",
      subtitle: "Sorted & Calibrated Nut Centers",
      desc: "Pre-roasted, uniform-sized California almonds, Goan cashews, Turkish hazelnuts, and freeze-dried whole fruits primed for maximum chocolate adherence.",
      specs: ["Moisture controlled (<2%) for extended shelf stability", "Even spherical/oval grading to prevent flat spots", "Light, medium and dark roasted profiles"],
      img: "/images/dragees-leaves.png"
    }
  ];

  return (
    <div className="w-full bg-[#FAF6F0] text-[#2B150D]">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-r from-[#220F08] via-[#2D140D] to-[#3B1A10] text-[#FCFAF6] py-12 lg:py-16">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#E3D1BC]">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-[#E69138] font-semibold">Products</span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#E69138] text-[#180905] text-[11px] font-bold uppercase tracking-wider">
                PRODUCTS & EQUIPMENT
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Products & Solutions for <br /> Chocolate Panning
              </h1>

              <p className="text-sm sm:text-base text-[#E3D1BC] max-w-xl leading-relaxed">
                Source commercial revolving panning drums, specialized glazes, premium nut centers, and calibrated chocolates directly from Aadhya International.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onOpenEnquire("Products & Machinery Inquiry")}
                  className="px-6 py-3 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] font-semibold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>Request Product Catalog</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => onOpenBrochure("Aadhya Machinery & Ingredients Catalog")}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-[#E3D1BC]/30 font-semibold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Download size={14} className="text-[#E69138]" />
                  <span>Download Spec Sheet</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#55271A] shadow-xl bg-[#180905]">
                <img
                  src="/images/hero-colorful-bowl.png"
                  alt="Aadhya Products"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUCT CARDS */}
      <section className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((item) => (
            <div
              key={item.id}
              className="bg-[#FCFAF6] rounded-3xl border border-[#E3D1BC] overflow-hidden p-6 sm:p-8 flex flex-col justify-between hover:border-[#D37B24] hover:shadow-xl transition-all group"
            >
              <div>
                <div className="w-full h-52 rounded-2xl overflow-hidden bg-[#180905] mb-6 border border-[#E3D1BC]/70">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B86216]">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B150D] mt-1 group-hover:text-[#D37B24] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#623020] mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-[#E3D1BC]/60 space-y-2 text-xs text-[#55271A]">
                  {item.specs.map((spec, sidx) => (
                    <div key={sidx} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#D37B24] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E3D1BC] mt-6 flex items-center justify-between">
                <button
                  onClick={() => onOpenEnquire(`Product Quotation: ${item.title}`)}
                  className="px-5 py-2.5 bg-[#2B150D] hover:bg-[#4B2418] text-[#FCFAF6] rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer shadow transition-all"
                >
                  <span>Request Price Quote</span>
                  <ArrowRight size={13} className="text-[#E69138]" />
                </button>
                <span className="text-xs font-semibold text-[#8c3d10]">Verified Quality</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="pb-16 w-full px-4 sm:px-8 md:px-12 lg:px-[5.5%]">
        <div className="bg-[#2B150D] rounded-3xl overflow-hidden border border-[#4B2418] shadow-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Need Custom Equipment or Bulk Ingredients?
            </h3>
            <p className="text-xs sm:text-sm text-[#E3D1BC]">
              We supply commercial confectionery manufacturers, commercial pan coaters, and artisan chocolatiers across India.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquire("Bulk Supply Quotation")}
            className="px-6 py-3 bg-[#D37B24] hover:bg-[#B86216] text-[#FCFAF6] rounded-xl font-semibold text-xs flex items-center gap-2 cursor-pointer shadow"
          >
            <span>Talk to Supply Team</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

    </div>
  );
}
