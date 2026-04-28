import React, { useEffect } from "react";
import { CheckCircle, Clock, ShieldCheck, TrendingUp, UserCheck, Smartphone } from "lucide-react";
import "./WhyChooseUs.css";
import whyChooseImage from "../../assets/images/whychooseus.jpg"; // Using an existing image for banner

const WhyChooseUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="benefit-icon" />,
      title: "Highest Loan Eligibility",
      description: "We offer the highest possible home loan eligibility to help you get the home you want."
    },
    {
      icon: <ShieldCheck className="benefit-icon" />,
      title: "Flexible Documentation",
      description: "Home loans with or without income proof documents, caterering specifically to self-employed individuals."
    },
    {
      icon: <Clock className="benefit-icon" />,
      title: "Loans at Your Convenience",
      description: "Hassle-free process designed to fit your schedule and needs."
    },
    {
      icon: <TrendingUp className="benefit-icon" />,
      title: "Longer Tenure Loans",
      description: "Enjoy flexible repayment options with longer loan tenures to reduce your monthly burden."
    },
    {
      icon: <UserCheck className="benefit-icon" />,
      title: "Timely Response",
      description: "We value your time and ensure quick and responsive communication throughout the process."
    },
    {
      icon: <Smartphone className="benefit-icon" />,
      title: "Loan Enhancement",
      description: "Option to enhance your existing loan to meet your evolving financial needs."
    },
    {
      icon: <CheckCircle className="benefit-icon" />,
      title: "Attractive Interest Rates",
      description: "Competitive interest rates that make your home loan journey more affordable."
    },
    {
      icon: <ShieldCheck className="benefit-icon" />,
      title: "No Hidden Charges",
      description: "Complete transparency with zero hidden costs or surprise fees."
    }
  ];

  return (
    <div className="why-choose-us-page">
      {/* Hero Section */}
      <section className="why-hero">
        <img src={whyChooseImage} alt="Why Choose Us Banner" className="why-hero-img" />
        <div className="why-hero-overlay"></div>
        <div className="why-hero-content animate-on-scroll">
          <h1>Why Choose Nivara?</h1>
          <p>Your dream home is closer than you think. Discover the Nivara advantage.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="why-content-section">
        <div className="why-container">
          <div className="why-intro animate-on-scroll">
            <h2>The Nivara Advantage</h2>
            <p>
              We are a retail-focused housing finance company that mainly serves low and middle-income
              self-employed customers in India’s rural and semi-urban areas.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="benefit-icon-wrapper">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="why-footer-cta animate-on-scroll">
            <h3>Looking for a home loan with Nivara?</h3>
            <p>Your Home Loan is just a few simple steps away!</p>
            <div className="cta-steps">
              <div className="cta-step">
                <span className="step-num">1</span>
                <h4>Check Eligibility</h4>
              </div>
              <div className="cta-step">
                <span className="step-num">2</span>
                <h4>Choose a Loan</h4>
              </div>
              <div className="cta-step">
                <span className="step-num">3</span>
                <h4>Visit Branch</h4>
              </div>
            </div>
            <button className="apply-btn-large" onClick={() => window.location.href = '/apply'}>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
