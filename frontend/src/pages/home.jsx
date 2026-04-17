import Banner from "../components/Banner/banner";
import OurImpact from "../components/OurImpact/ourimpact";
import WhyChooseUs from "../components/WhyChooseUs/whychooseus";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowitWorks/HowItWorks";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

const Home = () => {
  return (
    <>
      <ScrollReveal direction="down" distance={30}>
        <Banner />
      </ScrollReveal>
      
      <ScrollReveal direction="up" distance={50} delay={0.1}>
        <OurImpact />
      </ScrollReveal>

      <div className="w-full overflow-x-hidden">
        <ScrollReveal direction="up" distance={50} delay={0.2}>
          <WhyChooseUs />
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={50} delay={0.1}>
          <HowItWorks />
        </ScrollReveal>
        
        <ScrollReveal direction="up" distance={50} delay={0.1}>
          <Testimonials />
        </ScrollReveal>
      </div>
    </>
  );
};

export default Home;
