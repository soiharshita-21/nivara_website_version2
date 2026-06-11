import React, { useState } from "react";
import "./ContactInquiry.css";

const ContactInquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
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
    setAlertState({ type: "info", message: "Submitting inquiry..." });

    try {
      const response = await fetch("http://localhost:5001/api/contacts/apply", {
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
          name: "",
          email: "",
          phone: "",
          location: "",
          message: ""
        });
      } else {
        setAlertState({ type: "error", message: data.message || "Failed to submit inquiry." });
      }
    } catch (err) {
      console.error("Inquiry submission error:", err);
      setAlertState({
        type: "error",
        message: `Server connection error. Please make sure the backend is running. (Details: ${err.message || err.toString()})`
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="feedback-form-page">
      <div className="feedback-container animate-fade-in">
        <h1 className="feedback-main-title">Feedback / Inquiry / Service Request</h1>

        {alertState.message && (
          <div className={`alert-banner ${alertState.type}`} style={{
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '25px',
            fontSize: "16px",
            fontWeight: 500,
            textAlign: 'center',
            background: alertState.type === 'success' ? '#e6f4ea' : alertState.type === 'error' ? '#fce8e6' : '#e8f0fe',
            color: alertState.type === 'success' ? '#137333' : alertState.type === 'error' ? '#c5221f' : '#1a73e8',
            border: `1px solid ${alertState.type === 'success' ? '#c3e6cb' : alertState.type === 'error' ? '#fad2cf' : '#d2e3fc'}`
          }}>
            {alertState.message}
          </div>
        )}

        <div className="feedback-split-layout">
          {/* Left Side Form */}
          <form className="feedback-left-form" onSubmit={handleSubmit}>
            <div className="feedback-form-grid">
              <div className="feedback-field">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="feedback-field">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="feedback-field">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="feedback-field">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your Location"
                  required
                />
              </div>
            </div>

            <div className="feedback-field-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                required
              />
            </div>

            <button type="submit" className="feedback-submit-btn" disabled={submitting}>
              {submitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>

          {/* Right Side Info */}
          <div className="feedback-right-info">
            <h2 className="feedback-contact-title">Contact Us:</h2>
            
            <div className="feedback-info-block">
              <h3 className="feedback-info-heading">Head Office Address:</h3>
              <p className="feedback-info-text">
                No. 22, 23, 24, 25/101/3, 3RD Floor, BNR Complex, SRI, Rama Layout, J P Nagar
                7TH Phase, OPP RBI Layout, Bengaluru, Karnataka 560078
              </p>
            </div>

            <div className="feedback-info-block">
              <h3 className="feedback-info-heading">Customer care toll free number:</h3>
              <div className="feedback-grievance-block">
                <p className="feedback-info-subheading">Grievance Officer</p>
                <p className="feedback-info-highlight">Rajesh CA</p>
              </div>
              <p className="feedback-info-detail"><strong>Phone:</strong> 1800-309-1516</p>
              <p className="feedback-info-detail">
                <strong>E-mail:</strong> <a href="mailto:contact@nivarahousing.com">contact@nivarahousing.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInquiry;
