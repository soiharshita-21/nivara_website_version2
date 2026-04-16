import React, { useEffect } from "react";
import "./HowItWorks.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFileAlt, FaCheckCircle, FaMoneyBillWave, FaHeadphones, FaHeadset } from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Apply",
    desc: "Submit your application online or visit our nearest branch",
    color: "#8B1E2D",
  },
  {
    icon: <FaCheckCircle />,
    title: "Approval",
    desc: "Quick verification and approval process within 48 hours",
    color: "#F36B6B",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Disbursement",
    desc: "Fast loan disbursement to your account",
    color: "#5CC1B3",
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    desc: "Continuous support throughout your loan journey",
    color: "#F4B942",
  },
];

export default function HowItWorks() {
  const navigate = useNavigate();
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
    <section className="how-section">
      <div className="how-container">
        <div className="top-badge animate-pop-up">Simple Process</div>
        <h2 className="how-title animate-pop-up">How It Works</h2>
        <p className="how-subtitle animate-pop-up">
          Four simple steps to get your home loan approved and disbursed
        </p>

        <div className="how-steps-container">
          <div className="how-steps">
            {steps.map((step, index) => (
              <div
                className="how-step animate-pop-up"
                key={index}
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
            ))}
          </div>
        </div>

        <div className="how-cta animate-pop-up">
          <p>Ready to get started?</p>
          <button onClick={() => navigate("/apply-home-loan")}>
            Start Your Application →
          </button>
        </div>
      </div>
    </section>
  );
}