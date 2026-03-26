import { useEffect } from "react";
import {
  CheckCircle,
  Percent,
  Home,
  FileText,
  Zap,
  Headphones,
} from "lucide-react";
import "./whychooseus.css";

const features = [
  {
    title: "Easy Approval",
    desc: "Hassle-free and fast loan approvals",
    icon: CheckCircle,
    color: "rose",
  },
  {
    title: "Competitive Rates",
    desc: "Best interest rates in the market",
    icon: Percent,
    color: "orange",
  },
  {
    title: "Doorstep Assistance",
    desc: "We come to you for documentation",
    icon: Home,
    color: "teal",
  },
  {
    title: "Minimal Paperwork",
    desc: "Simple and transparent process",
    icon: FileText,
    color: "yellow",
  },
  {
    title: "Quick Disbursement",
    desc: "Fast release of funds",
    icon: Zap,
    color: "purple",
  },
  {
    title: "Dedicated Support",
    desc: "Personal relationship managers",
    icon: Headphones,
    color: "pink",
  },
];

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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-heading-wrapper animate-pop-up">
          <span className="spark">✦</span>
          <h6 className="why-heading">Why Choose Us</h6>
          <span className="spark">✦</span>
        </div>

        <h2 className="why-title animate-pop-up" style={{transitionDelay: "0.1s"}}>Why Choose Nivara?</h2>
        <p className="why-subtitle animate-pop-up" style={{transitionDelay: "0.2s"}}>
          We're committed to making home ownership accessible and affordable.
        </p>

        <div className="why-grid">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className={`why-card ${item.color} animate-pop-up`} style={{transitionDelay: `${0.1 + index * 0.15}s`}} key={index}>
                <div className={`why-icon ${item.color}`}>
                  <Icon size={26} />
                </div>
                <h3 className={`why-card-title ${item.color}`}>{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="trust-wrapper animate-pop-up" style={{transitionDelay: "0.2s"}}>
          <div className="trust-badges">
            <div className="trust-item">
              <div className="trust-icon rbi">✓</div>
              <div className="trust-text">
                <span>RBI Registered</span>
                <h4>Housing Finance Company</h4>
              </div>
            </div>

            <div className="divider"></div>

            <div className="trust-item">
              <div className="trust-icon iso">✳</div>
              <div className="trust-text">
                <span>ISO Certified</span>
                <h4>Quality Assured</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
