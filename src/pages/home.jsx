import Banner from "../components/Banner/banner";
import OurImpact from "../components/OurImpact/ourimpact";
import WhyChooseUs from "../components/WhyChooseUs/whychooseus";

const Home = () => {
  return (
    <>
      <Banner />
      <OurImpact />
      <div className="w-full overflow-x-hidden">
        <WhyChooseUs />
      </div>
    </>
  );
};

export default Home;
