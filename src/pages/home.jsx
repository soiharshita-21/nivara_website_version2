import Banner from "../components/banner";
import OurImpact from "../components/ourimpact";
import WhyChooseUs from "../components/whychooseus";


const Home = () => {
  return (
    <>
      <Banner />
      <OurImpact/>
      <div className="w-full overflow-x-hidden">
  <WhyChooseUs />
</div>
      
    </>
  );
};

export default Home;