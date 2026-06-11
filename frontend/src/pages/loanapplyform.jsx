import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./LoanApplyForm.css";

const servicesList = [
  "Home Loan for Purchase",
  "Construction Loan",
  "Composite Home Loan",
  "Loan Against Property",
  "Balance Transfer",
  "Refinance Loan",
  "Improvement & Extension Loan"
];

const LoanApplyForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    state: "",
    district: "",
    city: "",
    fullAddress: "",
    loanFor: "Home Loan for Purchase",
    loanAmount: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [alertState, setAlertState] = useState({ type: "", message: "" });

  useEffect(() => {
    if (location.state?.service && servicesList.includes(location.state.service)) {
      setFormData(prev => ({ ...prev, loanFor: location.state.service }));
    } else {
      const params = new URLSearchParams(location.search);
      const serviceParam = params.get("service");
      if (serviceParam && servicesList.includes(serviceParam)) {
        setFormData(prev => ({ ...prev, loanFor: serviceParam }));
      }
    }
  }, [location]);

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
    setAlertState({ type: "info", message: "Submitting application..." });

    try {
      const response = await fetch("http://localhost:5001/api/loans/apply", {
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
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          state: "",
          district: "",
          city: "",
          fullAddress: "",
          loanFor: "Home Loan for Purchase",
          loanAmount: ""
        });
      } else {
        setAlertState({ type: "error", message: data.message || "Failed to submit application." });
      }
    } catch (err) {
      setAlertState({ type: "error", message: "Server connection error. Please make sure the backend is running." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="loan-form-page">
      <form className="loan-form" onSubmit={handleSubmit}>
        <h2 className="form-title animate-pop-up">Personal Information</h2>

        {alertState.message && (
          <div className={`alert-banner ${alertState.type}`} style={{
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
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
        
        <div className="row animate-pop-up">
          <div>
            <label htmlFor="firstName">First name</label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label htmlFor="email">Your email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label htmlFor="state">State</label>
            <input 
              type="text" 
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="district">District</label>
            <input 
              type="text" 
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="fullAddress">Full Address</label>
            <input 
              type="text" 
              id="fullAddress"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label htmlFor="loanFor">Loan for</label>
            <select 
              id="loanFor"
              name="loanFor"
              value={formData.loanFor}
              onChange={handleChange}
              required
            >
              {servicesList.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="loanAmount">Loan Amount (INR)</label>
            <input 
              type="number" 
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Enter amount manually"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoanApplyForm;