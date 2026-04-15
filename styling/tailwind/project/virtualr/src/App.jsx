import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonialss from "./components/Testimonialss";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonialss />
        <Footer />
      </div>
    </>
  );
}
