import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AIFeatures from "../../components/AIFeatures/AIFeatures";
import Security from "../../components/Security/Security";
import Pricing from "../../components/Pricing/Pricing";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AIFeatures />
      <Security />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;