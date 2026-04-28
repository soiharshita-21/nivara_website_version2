import React from "react";
import "./RequestQuote.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const RequestQuote = ({ themeColor = "#2e7d32", title = "Request Quote Now" }) => {
  return (
    <section className="rq-section" style={{ "--rq-theme": themeColor }}>
      <ScrollReveal direction="up" distance={30}>
        <div className="rq-container">
          <div className="rq-header">
            <h2 className="rq-title">{title}</h2>
            <p className="rq-subtitle">
              Fill out the form below and our experts will get back to you with the best loan options tailored for you.
            </p>
          </div>

          <form className="rq-form" onSubmit={(e) => e.preventDefault()}>
            <div className="rq-form-grid">
              <div className="rq-input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="rq-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="rq-input-group">
                <label>Contact Number</label>
                <input type="tel" placeholder="Enter phone number" required />
              </div>
              <div className="rq-input-group">
                <label>State</label>
                <input type="text" placeholder="Enter state" required />
              </div>
              <div className="rq-input-group">
                <label>City</label>
                <input type="text" placeholder="Enter city" required />
              </div>
              <div className="rq-input-group">
                <label>Preferred Date</label>
                <input type="date" required />
              </div>
              <div className="rq-input-group full-width">
                <label>Loan Amount Required (₹)</label>
                <input type="number" placeholder="e.g. 500000" required />
              </div>
              <div className="rq-button-wrapper">
                <button type="submit" className="rq-submit-btn">
                  SEND A REQUEST
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default RequestQuote;
