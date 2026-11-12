import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EnquiryModal from "./components/EnquiryModal";
import BrochureModal from "./components/BrochureModal";
import WorkshopModal from "./components/WorkshopModal";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import BeginnerProgram from "./pages/BeginnerProgram";
import ProductWiseProgram from "./pages/ProductWiseProgram";
import AdvancedProgram from "./pages/AdvancedProgram";
import ProfessionalProgram from "./pages/ProfessionalProgram";
import Consultancy from "./pages/Consultancy";
import Products from "./pages/Products";
import ResourcesMore from "./pages/ResourcesMore";
import Enquiry from "./pages/Enquiry";

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [enquireTopic, setEnquireTopic] = useState("General Enquiry");

  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochureTopic, setBrochureTopic] = useState("Chocolate Panning Academy Course Brochure");

  const [workshopOpen, setWorkshopOpen] = useState(false);
  const [workshopTitle, setWorkshopTitle] = useState("Chocolate Panning Masterclass");
  const [workshopDate, setWorkshopDate] = useState("15–17 Mar 2025");

  const handleOpenEnquire = (topic = "General Enquiry") => {
    setEnquireTopic(topic);
    setEnquireOpen(true);
  };

  const handleOpenBrochure = (topic = "Chocolate Panning Academy Course Brochure") => {
    setBrochureTopic(topic);
    setBrochureOpen(true);
  };

  const handleOpenWorkshop = (title = "Chocolate Panning Masterclass", date = "15–17 Mar 2025") => {
    setWorkshopTitle(title);
    setWorkshopDate(date);
    setWorkshopOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#2B150D]">
        
        {/* Sticky Header & Navbar */}
        <Navbar 
          onOpenEnquire={handleOpenEnquire}
          onOpenWorkshop={() => handleOpenWorkshop("Chocolate Panning Masterclass", "15–17 Mar 2025")}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenWorkshop={() => handleOpenWorkshop("Chocolate Panning Masterclass", "15–17 Mar 2025")}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <About 
                  onOpenEnquire={handleOpenEnquire}
                />
              } 
            />
            <Route 
              path="/programs" 
              element={
                <Programs 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenWorkshop={handleOpenWorkshop}
                />
              } 
            />
            <Route 
              path="/programs/beginner" 
              element={
                <BeginnerProgram 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenWorkshop={handleOpenWorkshop}
                />
              } 
            />
            <Route 
              path="/programs/product-wise" 
              element={
                <ProductWiseProgram 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenWorkshop={handleOpenWorkshop}
                />
              } 
            />
            <Route 
              path="/programs/advanced" 
              element={
                <AdvancedProgram 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenWorkshop={handleOpenWorkshop}
                />
              } 
            />
            <Route 
              path="/programs/professional" 
              element={
                <ProfessionalProgram 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenWorkshop={handleOpenWorkshop}
                />
              } 
            />
            <Route 
              path="/consultancy" 
              element={
                <Consultancy 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <Products 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                />
              } 
            />
            <Route 
              path="/more" 
              element={
                <ResourcesMore 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenWorkshop={handleOpenWorkshop}
                />
              } 
            />
            <Route 
              path="/enquiry" 
              element={
                <Enquiry />
              } 
            />
            {/* Catch-all redirect to Home */}
            <Route 
              path="*" 
              element={
                <Home 
                  onOpenEnquire={handleOpenEnquire}
                  onOpenWorkshop={() => handleOpenWorkshop("Chocolate Panning Masterclass", "15–17 Mar 2025")}
                />
              } 
            />
          </Routes>
        </main>

        {/* Luxury Footer */}
        <Footer onOpenEnquire={handleOpenEnquire} />

        {/* Global Modals */}
        <EnquiryModal 
          isOpen={enquireOpen} 
          onClose={() => setEnquireOpen(false)}
          initialInterest={enquireTopic}
        />

        <BrochureModal
          isOpen={brochureOpen}
          onClose={() => setBrochureOpen(false)}
          programName={brochureTopic}
        />

        <WorkshopModal
          isOpen={workshopOpen}
          onClose={() => setWorkshopOpen(false)}
          batchTitle={workshopTitle}
          date={workshopDate}
        />

      </div>
    </Router>
  );
}
