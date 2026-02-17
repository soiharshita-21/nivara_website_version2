import Banner from "../components/Banner/banner";
import OurImpact from "../components/OurImpact/ourimpact";
import WhyChooseUs from "../components/WhyChooseUs/whychooseus";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <OurImpact />
      <div className="w-full overflow-x-hidden">
        <WhyChooseUs />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
