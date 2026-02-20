import React, { useState } from "react";
import "./Faqs.css";

const faqsData = [
  {
    q: "What Kind Of Home Loans Does Nivara Offer?",
    a: "Nivara offers a wide range of home loan products including purchase, construction, renovation, extension and balance transfer loans.",
  },
  {
    q: "Who can apply? When and how can I make an application?",
    a: "Any salaried, self-employed or professional individual meeting eligibility criteria can apply. Applications can be made online or at Nivara branches.",
  },
  {
    q: "Who can be the Co-applicants to the loan?",
    a: "Spouse, parents, children or close family members with stable income can be co-applicants.",
  },
  {
    q: "Do I need to provide a Guarantor to get a home loan?",
    a: "Generally no guarantor is required unless specifically asked based on risk assessment.",
  },
  {
    q: "What is Own Contribution?",
    a: "Own contribution is the amount that the applicant must invest from personal savings in the property purchase.",
  },
  {
    q: "What is the Home loan application process at Nivara?",
    a: "Application → Document submission → Verification → Credit approval → Disbursement.",
  },
  {
    q: "What are the eligibility parameters to get a Home Loan from Nivara?",
    a: "Income stability, age, credit score, repayment capacity and property valuation.",
  },
  {
    q: "What Security Do I need to Provide for availing Home Loan?",
    a: "The financed property itself is the primary security.",
  },
  {
    q: "Is it compulsory to insure the property?",
    a: "Yes, property insurance is mandatory to protect against unforeseen risks.",
  },
  {
    q: "What do EMI and Pre-EMI Interest mean?",
    a: "EMI is monthly installment. Pre-EMI is interest paid before full loan disbursement.",
  },
  {
    q: "What is a ‘fixed’ or ‘floating’ rate of interest?",
    a: "Fixed remains constant, floating changes with market rates.",
  },
  {
    q: "What are the tax benefits of having a home loan?",
    a: "Tax benefits are available on principal and interest under Income Tax Act sections.",
  },
  {
    q: "Can I repay my home loan ahead of contracted tenure?",
    a: "Yes, one can repay the loan ahead of schedule by making lump sum payments towards part or full prepayment, subject to the prepayment charges applicable from time to time.",
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-breadcrumb">
        <span>Nivara Home</span>
        <span className="arrow"> &gt; </span>
        <span className="active">FAQs</span>
      </div>

      <h1 className="faq-title">FAQs</h1>

      <div className="faq-container">
        {faqsData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span className="icon">{activeIndex === index ? "−" : "+"}</span>
              <span className="question-text">{item.q}</span>
            </div>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
