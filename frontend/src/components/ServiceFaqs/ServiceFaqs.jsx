import React, { useState } from "react";
import "./ServiceFaqs.css";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const serviceFaqData = [
  {
    q: "What Kind Of Home Loans Does Nivara Offer?",
    a: "Nivara offers a wide range of home loan products including purchase, construction, renovation, extension, and balance transfer loans. We also offer Loan Against Property (LAP) and Refinance options."
  },
  {
    q: "Who can apply for a loan at Nivara?",
    a: "Any salaried, self-employed, or professional individual meeting the eligibility criteria can apply. We cater specifically to the informal and low-income segments who may not have traditional income proofs."
  },
  {
    q: "What is the Home loan application process?",
    a: "Our process is simple and hassle-free: Application submission → Document verification → Credit appraisal → Technical and Legal valuation of property → Loan approval → Disbursement."
  },
  {
    q: "What are the eligibility parameters?",
    a: "Eligibility is based on factors such as age, income stability, repayment capacity, credit history, and the value of the property being financed. We look beyond just documents to understand your true potential."
  },
  {
    q: "What documents are generally required?",
    a: "Typical documents include Proof of Identity (Aadhar, PAN), Proof of Residence, Bank Statements, and Property-related documents. However, we also facilitate loans for customers without formal income proof through customized assessments."
  },
  {
    q: "What is a 'fixed' or 'floating' rate of interest?",
    a: "A 'fixed' rate remains constant throughout the loan tenure, whereas a 'floating' rate (or variable rate) varies based on market conditions and the lender's benchmark interest rate."
  },
  {
    q: "Can I choose my loan tenure?",
    a: "Yes, Nivara offers flexible repayment tenures typically ranging up to 20 years, depending on your profile and age at the time of loan maturity, ensuring your EMIs are comfortable."
  },
  {
    q: "What security do I need to provide?",
    a: "The primary security for the loan is the equitable mortgage of the property being financed. The title must be clear, marketable, and free from encumbrances."
  }
];

const ServiceFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="service-faq-wrapper">
      <ScrollReveal direction="up">
        <div className="service-faq-header">
          <h2 className="service-faq-title">Frequently Asked Questions</h2>
          <p className="service-faq-subtitle">
            Everything you need to know about our services and process.
          </p>
        </div>
      </ScrollReveal>

      <div className="service-faq-container">
        {serviceFaqData.map((item, index) => (
          <ScrollReveal 
            key={index} 
            direction="up" 
            delay={index * 0.05}
            distance={20}
          >
            <div 
              className={`service-faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="service-faq-question">
                <h3>{item.q}</h3>
                <div className="service-faq-icon">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              <div className="service-faq-answer">
                <div className="answer-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ServiceFaqs;
