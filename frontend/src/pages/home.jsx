import Banner from "../components/Banner/banner";
import OurImpact from "../components/OurImpact/ourimpact";
import WhyChooseUs from "../components/WhyChooseUs/whychooseus";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowitWorks/HowItWorks";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Banner />
      <OurImpact />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
