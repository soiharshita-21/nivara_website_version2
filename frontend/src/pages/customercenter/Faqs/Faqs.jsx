import React, { useState } from "react";
import "./Faqs.css";
import {
  Plus,
  Minus,
  HelpCircle,
  ChevronRight,
  Book,
  ShieldCheck,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import faqBg from "../../../assets/images/FAQ.png";

const faqsData = [
  {
    q: "What Kind Of Home Loans Does Nivara Offer?",
    a: "Nivara offers a wide range of home loan products including purchase, construction, renovation, extension and balance transfer loans.",
    category: "Loans",
    icon: <Landmark size={20} />,
  },
  {
    q: "Who can apply? When and how can I make an application?",
    a: "Any salaried, self-employed or professional individual meeting eligibility criteria can apply. Applications can be made online or at Nivara branches.",
    category: "Application",
    icon: <Book size={20} />,
  },
  {
    q: "Who can be the Co-applicants to the loan?",
    a: "Spouse, parents, children or close family members with stable income can be co-applicants.",
    category: "Application",
    icon: <Book size={20} />,
  },
  {
    q: "Do I need to provide a Guarantor to get a home loan?",
    a: "Generally no guarantor is required unless specifically asked based on risk assessment.",
    category: "Loans",
    icon: <Landmark size={20} />,
  },
  {
    q: "What is Own Contribution?",
    a: "Own contribution is the amount that the applicant must invest from personal savings in the property purchase.",
    category: "Finance",
    icon: <BadgeCheck size={20} />,
  },
  {
    q: "What is the Home loan application process at Nivara?",
    a: "Application → Document submission → Verification → Credit approval → Disbursement.",
    category: "Application",
    icon: <Book size={20} />,
  },
  {
    q: "What are the eligibility parameters to get a Home Loan from Nivara?",
    a: "Income stability, age, credit score, repayment capacity and property valuation.",
    category: "Eligibility",
    icon: <ShieldCheck size={20} />,
  },
  {
    q: "What Security Do I need to Provide for availing Home Loan?",
    a: "The financed property itself is the primary security.",
    category: "Security",
    icon: <ShieldCheck size={20} />,
  },
  {
    q: "Is it compulsory to insure the property?",
    a: "Yes, property insurance is mandatory to protect against unforeseen risks.",
    category: "Security",
    icon: <ShieldCheck size={20} />,
  },
  {
    q: "What do EMI and Pre-EMI Interest mean?",
    a: "EMI is monthly installment. Pre-EMI is interest paid before full loan disbursement.",
    category: "Finance",
    icon: <BadgeCheck size={20} />,
  },
  {
    q: "What is a ‘fixed’ or ‘floating’ rate of interest?",
    a: "Fixed remains constant, floating changes with market rates.",
    category: "Finance",
    icon: <BadgeCheck size={20} />,
  },
  {
    q: "What the tax benefits of having a home loan?",
    a: "Tax benefits are available on principal and interest under Income Tax Act sections.",
    category: "Benefits",
    icon: <BadgeCheck size={20} />,
  },
];

const categories = [
  { name: "Application", icon: <Book size={18} /> },
  { name: "Loans", icon: <Landmark size={18} /> },
  { name: "Finance", icon: <BadgeCheck size={18} /> },
  { name: "Security", icon: <ShieldCheck size={18} /> },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Application");

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqsData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="faq-page">

      {/* ================= HERO ================= */}
      {/* Hero Section */}
      <div className="faq-hero" style={{ backgroundImage: `url(${faqBg})` }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down" distance={30} className="hero-content-wrapper">
          {/* <div className="hero-badge">
            <HelpCircle size={16} />
            <span>Support Center</span>
          </div> */}
          <h1 className="page-banner-title">FAQs</h1>
          <p className="page-banner-subtitle">Find answers to commonly asked questions about our home loan solutions</p>
        </ScrollReveal>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="faq-container">
        <div className="faq-side-layout">

          {/* CATEGORY TABS */}
          <div className="faq-tabs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`category-tab ${activeCategory === cat.name ? "active" : ""
                  }`}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setActiveIndex(null);
                }}
              >
                {cat.icon}
                <span>{cat.name}</span>
                <ChevronRight size={14} className="tab-arrow" />
              </button>
            ))}
          </div>

          {/* FAQ LIST */}
          <div className="faq-list">
            <h2 className="current-category-title">{activeCategory}</h2>

            {filteredFaqs.map((item, index) => (
              <ScrollReveal
                key={`${activeCategory}-${index}`}
                direction="right"
                delay={index * 0.1}
              >
                <div
                  className={`faq-accordion ${activeIndex === index ? "open" : ""
                    }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="accordion-header">
                    <h3>{item.q}</h3>
                    <div className="accordion-icon">
                      {activeIndex === index ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </div>

                  <div
                    className={`accordion-body ${activeIndex === index ? "visible" : ""
                      }`}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;