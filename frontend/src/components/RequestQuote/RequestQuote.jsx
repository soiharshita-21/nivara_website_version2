import React, { useState } from "react";
import "./RequestQuote.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const RequestQuote = ({ themeColor = "#7EB542", title = "Request Quote Now" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    state: "",
    city: "",
    preferredDate: "",
    loanAmount: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [alertState, setAlertState] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setAlertState({ type: "info", message: "Submitting request..." });

    try {
      const response = await fetch("http://localhost:5001/api/quotes/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setAlertState({ type: "success", message: data.message });
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          state: "",
          city: "",
          preferredDate: "",
          loanAmount: ""
        });
      } else {
        setAlertState({ type: "error", message: data.message || "Failed to submit request." });
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      setAlertState({
        type: "error",
        message: "Server connection error. Please make sure the backend is running."
      });
    } finally {
      setSubmitting(false);
    }
  };

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

          {alertState.message && (
            <div className={`alert-banner ${alertState.type}`} style={{
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 500,
              textAlign: 'center',
              background: alertState.type === 'success' ? '#e6f4ea' : alertState.type === 'error' ? '#fce8e6' : '#e8f0fe',
              color: alertState.type === 'success' ? '#137333' : alertState.type === 'error' ? '#c5221f' : '#1a73e8',
              border: `1px solid ${alertState.type === 'success' ? '#c3e6cb' : alertState.type === 'error' ? '#fad2cf' : '#d2e3fc'}`,
              transition: 'all 0.3s ease'
            }}>
              {alertState.message}
            </div>
          )}

          <form className="rq-form" onSubmit={handleSubmit}>
            <div className="rq-form-grid">
              <div className="rq-input-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-input-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-input-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input 
                  type="tel" 
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter phone number" 
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-input-group">
                <label htmlFor="state">State</label>
                <input 
                  type="text" 
                  id="state"
                  name="state"
                  placeholder="Enter state" 
                  value={formData.state}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-input-group">
                <label htmlFor="city">City</label>
                <input 
                  type="text" 
                  id="city"
                  name="city"
                  placeholder="Enter city" 
                  value={formData.city}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-input-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input 
                  type="date" 
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-input-group full-width">
                <label htmlFor="loanAmount">Loan Amount Required (₹)</label>
                <input 
                  type="number" 
                  id="loanAmount"
                  name="loanAmount"
                  placeholder="e.g. 500000" 
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="rq-button-wrapper">
                <button type="submit" className="rq-submit-btn" disabled={submitting}>
                  {submitting ? "SENDING REQUEST..." : "SEND A REQUEST"}
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


