import FutureOfFinance from "./FutureOfFinance";
import HeroSection from "./hero";
import OurPhilosophy from "./our-philosophy";
import TechnologySection from "./TechnologySection";
import './style.css'
import Footer from "./Footer";
import CTAComponent from "./CTAComponent";
import TrustedByTheBest from "./TrustedByTheBest";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <FutureOfFinance />
      <OurPhilosophy />
      <TechnologySection/>
      <TrustedByTheBest/>
      <CTAComponent/>
      <Footer/>
    </div>
  );
};
