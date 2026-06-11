import {
  CheckCircle,
  Percent,
  Home,
  FileText,
  Zap,
  Headset,
} from "lucide-react";
import "./whychooseus.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const features = [
  {
    title: "Easy Approval",
    desc: "Hassle-free and fast loan approvals",
    icon: CheckCircle,
    color: "red",
  },
  {
    title: "Competitive Rates",
    desc: "Best interest rates in the market",
    icon: Percent,
    color: "red",
  },
  {
    title: "Doorstep Assistance",
    desc: "We come to you for documentation",
    icon: Home,
    color: "red",
  },
  {
    title: "Minimal Paperwork",
    desc: "Simple and transparent process",
    icon: FileText,
    color: "red",
  },
  {
    title: "Quick Disbursement",
    desc: "Fast release of funds",
    icon: Zap,
    color: "red",
  },
  {
    title: "Dedicated Support",
    desc: "Personal relationship managers",
    icon: Headset,
    color: "red",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <ScrollReveal direction="down" distance={20}>
          <div className="section-badge-wrapper">
            <span className="section-badge-spark">✦</span>
            <h6 className="section-badge-title">Why Choose Us</h6>
            <span className="section-badge-spark">✦</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} distance={30}>
          <h2 className="why-title">Why Choose Nivara?</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} distance={30}>
          <p className="why-subtitle">
            We're committed to making home ownership accessible and affordable.
          </p>
        </ScrollReveal>

        <div className="why-grid">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + index * 0.1}
                distance={40}
                scale={0.9}
              >
                <div className={`why-card ${item.color}`}>
                  <div className={`why-icon ${item.color}`}>
                    <Icon size={26} />
                  </div>
                  <h3 className={`why-card-title ${item.color}`}>{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                  <div className="multi-color-line"></div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ScrollReveal direction="up" delay={0.3} distance={40} scale={1}>
        <div className="trust-banner-container">
          <div className="trust-wrapper">
            <div className="trust-badges">
              <div className="trust-item">
                <div className="trust-icon rbi">✓</div>
                <div className="trust-text">
                  <span className="highlight-text rbi-color">RBI Registered</span>
                  <h4>Housing Finance Company</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="trust-item">
                <div className="trust-icon iso">✳</div>
                <div className="trust-text">
                  <span className="highlight-text iso-color">ISO 27001:2022 Certified</span>
                  <h4>Quality Assured</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WhyChooseUs;
