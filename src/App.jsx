import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import KeyBenefits from "./components/KeyBenefits";
import TalkToSale from "./components/TalkToSale";
import MakeMoneySection from "./components/MakeMoneySection";
import ProductDesignSection from "./components/ProductDesignSection";
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading && <Loader/>}
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <KeyBenefits/>
        <ProductDesignSection/>
        <Workflow />
        <Testimonials />
        <TalkToSale/>
        <MakeMoneySection/> 
        <Footer />
      </div>
    </>
  );
};

export default App;
