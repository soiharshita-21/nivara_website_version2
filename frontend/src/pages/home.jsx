import Banner from "../components/Banner/banner";
import OurImpact from "../components/OurImpact/ourimpact";
import WhyChooseUs from "../components/WhyChooseUs/whychooseus";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowitWorks/HowItWorks";
const Home = () => {
  return (
    <>
      <Banner />
      <OurImpact />
      <div className="w-full overflow-x-hidden">
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
