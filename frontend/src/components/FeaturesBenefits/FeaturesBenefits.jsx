import React, { useState } from "react";
import "./FeaturesBenefits.css";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const FeaturesBenefits = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Open the first item by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="features-benefits-section">
      <ScrollReveal direction="up">
        <h2 className="features-benefits-title">{title}</h2>
      </ScrollReveal>

      <div className="features-benefits-container">
        {items.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.03}
              distance={15}
            >
              <div
                className={`features-benefits-item ${isOpen ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="features-benefits-header">
                  <div className="features-benefits-title-group">
                    <span className="features-benefits-check-icon">
                      <CheckCircle2 size={20} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <span className={`features-benefits-arrow ${isOpen ? "rotated" : ""}`}>
                    <ChevronDown size={20} />
                  </span>
                </div>

                <div className="features-benefits-content-wrapper">
                  <div className="features-benefits-content">
                    <div className="features-benefits-text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesBenefits;
