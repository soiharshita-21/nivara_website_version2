import React from "react";
import "./HowItWorks.css";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaCheckCircle, FaMoneyBillWave, FaHeadset, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Apply",
    desc: "Submit your application online or visit our nearest branch",
    color: "#d32f2f",
  },
  {
    icon: <FaCheckCircle />,
    title: "Approval",
    desc: "Quick verification and approval process within 48 hours",
    color: "#d32f2f",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Disbursement",
    desc: "Fast loan disbursement to your account",
    color: "#d32f2f",
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    desc: "Continuous support throughout your loan journey",
    color: "#d32f2f",
  },
];

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="how-section">
      <div className="how-container">
        <ScrollReveal direction="down">
          <div className="section-badge-wrapper">
            <span className="section-badge-spark">✦</span>
            <div className="section-badge-title">Simple Process</div>
            <span className="section-badge-spark">✦</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="how-title">How It Works</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="how-subtitle">
            Four simple steps to get your home loan approved and disbursed
          </p>
        </ScrollReveal>

        <div className="how-steps-container">
          <div className="how-steps">
            {steps.map((step, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + index * 0.1}
                distance={40}
                scale={0.9}
              >
                <div
                  className="how-step"
                  style={{ "--index": index, "--step-color": step.color }}
                >
                  <div className="how-step-number" style={{ color: step.color }}>
                    0{index + 1}
                  </div>
                  <div className="how-circle-wrapper">
                    <div className="how-circle" style={{ backgroundColor: step.color }}>
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="how-connector-arrow">
                        <svg viewBox="0 0 100 20">
                          <path d="M0,10 L90,10" stroke={step.color} strokeWidth="2" fill="none" strokeDasharray="5,5" />
                          <path d="M85,5 L95,10 L85,15" fill={step.color} />
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3 style={{ color: step.color }}>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ScrollReveal direction="up" delay={0.3} distance={50} scale={1}>
        <div className="how-cta-banner">
          <div className="how-cta-overlay">
            <div className="how-cta-content">
              <p>Ready to get started?</p>
              <button onClick={() => navigate("/apply-home-loan")}>
                Start Your Application <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
