import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ENach.css";
import {
  FaFileSignature,
  FaBan,
  FaFilePdf,
  FaCheckCircle,
  FaExclamationCircle,
  FaUniversity,
  FaShieldAlt,
  FaLock,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaUndo
} from "react-icons/fa";
import logo from "../../../assets/images/nivara_logo.png";

const POPULAR_BANKS = [
  "State Bank of India (SBI)",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
  "IndusInd Bank",
  "Federal Bank",
  "IDFC FIRST Bank",
  "Other Bank"
];

const ENach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // activeTab: "creation" | "cancellation"
  const [activeTab, setActiveTab] = useState("creation");

  // Creation form state
  const initialCreationState = {
    loanAccountNo: "",
    applicantName: "",
    accountHolderName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    accountType: "Savings",
    bankName: "",
    ifscCode: "",
    branchName: "",
    maxAmount: "",
    frequency: "Monthly",
    startDate: "",
    endDate: "",
    authMode: "Net Banking",
    mobileNumber: "",
    email: "",
    agreeConsent: false
  };

  const [creationData, setCreationData] = useState(initialCreationState);
  const [creationErrors, setCreationErrors] = useState({});
  const [creationSubmitted, setCreationSubmitted] = useState(null);
  const [isSubmittingCreation, setIsSubmittingCreation] = useState(false);

  // Cancellation form state
  const initialCancellationState = {
    loanAccountNo: "",
    applicantName: "",
    umrnNumber: "",
    accountNumber: "",
    bankName: "",
    cancellationReason: "",
    mobileNumber: "",
    email: "",
    remarks: "",
    agreeDeclaration: false
  };

  const [cancellationData, setCancellationData] = useState(initialCancellationState);
  const [cancellationErrors, setCancellationErrors] = useState({});
  const [cancellationSubmitted, setCancellationSubmitted] = useState(null);
  const [isSubmittingCancellation, setIsSubmittingCancellation] = useState(false);

  // Handlers for Creation Form
  const handleCreationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCreationData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (creationErrors[name]) {
      setCreationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateCreation = () => {
    const errs = {};
    if (!creationData.loanAccountNo.trim()) errs.loanAccountNo = "Loan Account / URN is required";
    if (!creationData.applicantName.trim()) errs.applicantName = "Applicant Name is required";
    if (!creationData.accountHolderName.trim()) errs.accountHolderName = "Account Holder Name is required";
    if (!creationData.accountNumber.trim()) errs.accountNumber = "Bank Account Number is required";
    if (!creationData.confirmAccountNumber.trim()) {
      errs.confirmAccountNumber = "Please confirm Bank Account Number";
    } else if (creationData.accountNumber !== creationData.confirmAccountNumber) {
      errs.confirmAccountNumber = "Account numbers do not match";
    }
    if (!creationData.bankName) errs.bankName = "Please select Bank Name";
    if (!creationData.ifscCode.trim()) {
      errs.ifscCode = "IFSC Code is required";
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(creationData.ifscCode.trim())) {
      errs.ifscCode = "Invalid IFSC Code format (e.g. SBIN0001234)";
    }
    if (!creationData.maxAmount || Number(creationData.maxAmount) <= 0) {
      errs.maxAmount = "Enter a valid Mandate Amount";
    }
    if (!creationData.startDate) errs.startDate = "Mandate Start Date is required";
    if (!creationData.mobileNumber.trim()) {
      errs.mobileNumber = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(creationData.mobileNumber.trim())) {
      errs.mobileNumber = "Enter a valid 10-digit Indian mobile number";
    }
    if (!creationData.email.trim()) {
      errs.email = "Email ID is required";
    } else if (!/\S+@\S+\.\S+/.test(creationData.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!creationData.agreeConsent) {
      errs.agreeConsent = "Please provide your authorization consent to proceed";
    }
    return errs;
  };

  const handleCreationSubmit = (e) => {
    e.preventDefault();
    const errs = validateCreation();
    if (Object.keys(errs).length > 0) {
      setCreationErrors(errs);
      const firstErrorKey = Object.keys(errs)[0];
      const el = document.querySelector(`[name="${firstErrorKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmittingCreation(true);
    setTimeout(() => {
      setIsSubmittingCreation(false);
      const refId = "NHFL-ENACH-CR-" + Math.floor(100000 + Math.random() * 900000);
      setCreationSubmitted({
        refId,
        date: new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }),
        loanAccountNo: creationData.loanAccountNo,
        applicantName: creationData.applicantName,
        bankName: creationData.bankName,
        accountNumber: "••••" + creationData.accountNumber.slice(-4),
        maxAmount: creationData.maxAmount,
        authMode: creationData.authMode
      });
    }, 900);
  };

  const handleResetCreation = () => {
    setCreationData(initialCreationState);
    setCreationErrors({});
    setCreationSubmitted(null);
  };

  // Handlers for Cancellation Form
  const handleCancellationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCancellationData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (cancellationErrors[name]) {
      setCancellationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateCancellation = () => {
    const errs = {};
    if (!cancellationData.loanAccountNo.trim()) errs.loanAccountNo = "Loan Account Number is required";
    if (!cancellationData.applicantName.trim()) errs.applicantName = "Applicant Name is required";
    if (!cancellationData.umrnNumber.trim()) errs.umrnNumber = "Mandate UMRN / Reference ID is required";
    if (!cancellationData.accountNumber.trim()) errs.accountNumber = "Linked Bank Account Number is required";
    if (!cancellationData.bankName) errs.bankName = "Please select or specify Bank Name";
    if (!cancellationData.cancellationReason) errs.cancellationReason = "Please select reason for cancellation";
    if (!cancellationData.mobileNumber.trim()) {
      errs.mobileNumber = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(cancellationData.mobileNumber.trim())) {
      errs.mobileNumber = "Enter a valid 10-digit mobile number";
    }
    if (!cancellationData.email.trim()) {
      errs.email = "Email ID is required";
    } else if (!/\S+@\S+\.\S+/.test(cancellationData.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!cancellationData.agreeDeclaration) {
      errs.agreeDeclaration = "Please confirm the declaration to proceed with cancellation";
    }
    return errs;
  };

  const handleCancellationSubmit = (e) => {
    e.preventDefault();
    const errs = validateCancellation();
    if (Object.keys(errs).length > 0) {
      setCancellationErrors(errs);
      const firstErrorKey = Object.keys(errs)[0];
      const el = document.querySelector(`[name="${firstErrorKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmittingCancellation(true);
    setTimeout(() => {
      setIsSubmittingCancellation(false);
      const refId = "NHFL-ENACH-CN-" + Math.floor(100000 + Math.random() * 900000);
      setCancellationSubmitted({
        refId,
        date: new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }),
        loanAccountNo: cancellationData.loanAccountNo,
        applicantName: cancellationData.applicantName,
        umrnNumber: cancellationData.umrnNumber,
        bankName: cancellationData.bankName,
        reason: cancellationData.cancellationReason
      });
    }, 900);
  };

  const handleResetCancellation = () => {
    setCancellationData(initialCancellationState);
    setCancellationErrors({});
    setCancellationSubmitted(null);
  };

  return (
    <div className="enach-container animate-pop-up">
      {/* ================= LEFT PANEL: BRANDING & RESOURCES ================= */}
      <div className="enach-left">
        <div className="enach-left-wrapper">
          <div className="enach-overlay">
            <img src={logo} alt="Nivara Home Finance" className="logo" width={160} />
            <p className="enach-tagline">
              Secure Your Dream Home with Nivara Home Finance
            </p>
            <div className="enach-badge-list">
              <div className="badge-item">
                <FaShieldAlt className="badge-icon" />
                <span>NPCI NACH Certified</span>
              </div>
              <div className="badge-item">
                <FaLock className="badge-icon" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="badge-item">
                <FaClock className="badge-icon" />
                <span>24-48 Hr Fast Turnaround</span>
              </div>
            </div>
          </div>

          {/* Quick Helpful Resources */}
          <div className="enach-resources-card">
            <h4 className="resources-title">Helpful Mandate Resources</h4>
            <div className="resources-links">
              <Link to="/customercenter/enach-bankcode" className="res-link">
                <FaUniversity className="res-icon" />
                <div>
                  <span className="res-name">E-NACH Bank Code List</span>
                  <span className="res-desc">View supported live banks</span>
                </div>
              </Link>
              <a
                href="/files/enach-bankcode.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="res-link"
              >
                <FaFilePdf className="res-icon pdf" />
                <div>
                  <span className="res-name">Bank Code (PDF)</span>
                  <span className="res-desc">Official PDF reference document</span>
                </div>
              </a>
              <Link to="/customercenter/ecs-mandate" className="res-link">
                <FaFilePdf className="res-icon pdf" />
                <div>
                  <span className="res-name">ECS Mandate Form</span>
                  <span className="res-desc">Download physical ECS form</span>
                </div>
              </Link>
            </div>

            <div className="enach-support-box">
              <p className="support-heading">Need Mandate Assistance?</p>
              <div className="support-item">
                <FaPhoneAlt className="support-icon" />
                <a href="tel:18004195444">1800-419-5444 (Toll-Free)</a>
              </div>
              <div className="support-item">
                <FaEnvelope className="support-icon" />
                <a href="mailto:customercare@nivarahousing.com">customercare@nivarahousing.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT PANEL: INTERACTIVE FORMS ================= */}
      <div className="enach-right">
        <div className="enach-header-section">
          <h1 className="enach-title">E-NACH Mandate Services</h1>
          <p className="enach-header-desc">
            Manage your automated EMI payment mandates seamlessly and securely.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="enach-tab-switcher" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "creation"}
            className={`enach-tab-btn ${activeTab === "creation" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("creation");
            }}
          >
            <FaFileSignature className="tab-icon" />
            <span>E-NACH Creation</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cancellation"}
            className={`enach-tab-btn ${activeTab === "cancellation" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("cancellation");
            }}
          >
            <FaBan className="tab-icon" />
            <span>E-NACH Cancellation</span>
          </button>
        </div>

        {/* ================= TAB 1: E-NACH CREATION ================= */}
        {activeTab === "creation" && (
          <div className="enach-form-panel">
            {creationSubmitted ? (
              <div className="enach-receipt-card animate-pop-up">
                <div className="receipt-status success">
                  <FaCheckCircle className="status-icon" />
                  <h2>E-NACH Creation Request Submitted!</h2>
                  <p>Your electronic mandate creation request has been registered successfully.</p>
                </div>

                <div className="receipt-ref-box">
                  <span className="ref-label">Acknowledgment Reference ID:</span>
                  <span className="ref-id">{creationSubmitted.refId}</span>
                  <span className="ref-time">Submitted On: {creationSubmitted.date}</span>
                </div>

                <div className="receipt-details-grid">
                  <div className="detail-row">
                    <span className="d-label">Loan Account / URN:</span>
                    <span className="d-value">{creationSubmitted.loanAccountNo}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Primary Applicant:</span>
                    <span className="d-value">{creationSubmitted.applicantName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Bank Name:</span>
                    <span className="d-value">{creationSubmitted.bankName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Account (Masked):</span>
                    <span className="d-value">{creationSubmitted.accountNumber}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Max Mandate Amount:</span>
                    <span className="d-value">₹ {Number(creationSubmitted.maxAmount).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Authentication Mode:</span>
                    <span className="d-value">{creationSubmitted.authMode}</span>
                  </div>
                </div>

                <div className="receipt-notice-box">
                  <FaClock className="notice-icon" />
                  <div>
                    <strong>Next Steps for Mandate Activation:</strong>
                    <p>
                      An authorization link will be sent to your registered mobile/email to complete authentication via {creationSubmitted.authMode}. Mandate setup typically completes within 24–48 business hours.
                    </p>
                  </div>
                </div>

                <div className="receipt-actions">
                  <button type="button" className="btn-primary" onClick={handleResetCreation}>
                    <FaUndo className="btn-icon" /> Submit Another Mandate
                  </button>
                  <Link to="/customercenter/enach-bankcode" className="btn-outline">
                    View Supported Banks
                  </Link>
                </div>
              </div>
            ) : (
              <form className="enach-form" onSubmit={handleCreationSubmit} noValidate>
                <div className="form-heading-row">
                  <div>
                    <h2 className="form-title">E-NACH Creation Form</h2>
                    <p className="form-subtitle">
                      Set up an automated payment instruction from your bank account for your Nivara home loan EMI.
                    </p>
                  </div>
                  <span className="form-chip creation-chip">New Mandate</span>
                </div>

                {Object.keys(creationErrors).length > 0 && (
                  <div className="form-alert-error">
                    <FaExclamationCircle className="alert-icon" />
                    <span>Please correct the highlighted errors below before submitting the form.</span>
                  </div>
                )}

                {/* Section 1: Loan & Applicant Details */}
                <div className="form-section-title">
                  <span>1. Loan & Applicant Information</span>
                </div>

                <div className="form-grid">
                  <div className={`form-group ${creationErrors.loanAccountNo ? "has-error" : ""}`}>
                    <label>
                      Loan Account / Unique Reference No. <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="loanAccountNo"
                      placeholder="e.g. NHL0023412 or App ID"
                      value={creationData.loanAccountNo}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.loanAccountNo && (
                      <span className="error-text">{creationErrors.loanAccountNo}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.applicantName ? "has-error" : ""}`}>
                    <label>
                      Primary Applicant Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="applicantName"
                      placeholder="Full Name as per Loan Application"
                      value={creationData.applicantName}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.applicantName && (
                      <span className="error-text">{creationErrors.applicantName}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.mobileNumber ? "has-error" : ""}`}>
                    <label>
                      Registered Mobile Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={creationData.mobileNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setCreationData((prev) => ({ ...prev, mobileNumber: val }));
                        if (creationErrors.mobileNumber) {
                          setCreationErrors((prev) => ({ ...prev, mobileNumber: "" }));
                        }
                      }}
                    />
                    {creationErrors.mobileNumber && (
                      <span className="error-text">{creationErrors.mobileNumber}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.email ? "has-error" : ""}`}>
                    <label>
                      Registered Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={creationData.email}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.email && (
                      <span className="error-text">{creationErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Section 2: Bank Account Details */}
                <div className="form-section-title">
                  <span>2. Bank Account Details (Debit Account)</span>
                </div>

                <div className="form-grid">
                  <div className={`form-group ${creationErrors.accountHolderName ? "has-error" : ""}`}>
                    <label>
                      Bank Account Holder Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountHolderName"
                      placeholder="Name exact as in Bank Passbook/Statement"
                      value={creationData.accountHolderName}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.accountHolderName && (
                      <span className="error-text">{creationErrors.accountHolderName}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.bankName ? "has-error" : ""}`}>
                    <label>
                      Bank Name <span className="req">*</span>
                    </label>
                    <select
                      name="bankName"
                      value={creationData.bankName}
                      onChange={handleCreationChange}
                    >
                      <option value="">-- Select Bank --</option>
                      {POPULAR_BANKS.map((bank) => (
                        <option key={bank} value={bank}>
                          {bank}
                        </option>
                      ))}
                    </select>
                    {creationErrors.bankName && (
                      <span className="error-text">{creationErrors.bankName}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.accountNumber ? "has-error" : ""}`}>
                    <label>
                      Bank Account Number <span className="req">*</span>
                    </label>
                    <input
                      type="password"
                      name="accountNumber"
                      placeholder="Enter Bank Account Number"
                      value={creationData.accountNumber}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.accountNumber && (
                      <span className="error-text">{creationErrors.accountNumber}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.confirmAccountNumber ? "has-error" : ""}`}>
                    <label>
                      Confirm Bank Account Number <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="confirmAccountNumber"
                      placeholder="Re-enter Bank Account Number"
                      value={creationData.confirmAccountNumber}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.confirmAccountNumber && (
                      <span className="error-text">{creationErrors.confirmAccountNumber}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Account Type</label>
                    <select
                      name="accountType"
                      value={creationData.accountType}
                      onChange={handleCreationChange}
                    >
                      <option value="Savings">Savings Account</option>
                      <option value="Current">Current Account</option>
                    </select>
                  </div>

                  <div className={`form-group ${creationErrors.ifscCode ? "has-error" : ""}`}>
                    <label>
                      IFSC Code <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="ifscCode"
                      maxLength={11}
                      placeholder="11-character IFSC (e.g. SBIN0001234)"
                      value={creationData.ifscCode}
                      onChange={(e) => {
                        const val = e.target.value.toUpperCase();
                        setCreationData((prev) => ({ ...prev, ifscCode: val }));
                        if (creationErrors.ifscCode) {
                          setCreationErrors((prev) => ({ ...prev, ifscCode: "" }));
                        }
                      }}
                    />
                    {creationErrors.ifscCode && (
                      <span className="error-text">{creationErrors.ifscCode}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Branch Name (Optional)</label>
                    <input
                      type="text"
                      name="branchName"
                      placeholder="e.g. Indiranagar, Bengaluru"
                      value={creationData.branchName}
                      onChange={handleCreationChange}
                    />
                  </div>

                  <div className={`form-group ${creationErrors.maxAmount ? "has-error" : ""}`}>
                    <label>
                      Maximum Mandate Amount (₹) <span className="req">*</span>
                    </label>
                    <input
                      type="number"
                      name="maxAmount"
                      placeholder="e.g. 25000"
                      min="1"
                      value={creationData.maxAmount}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.maxAmount && (
                      <span className="error-text">{creationErrors.maxAmount}</span>
                    )}
                  </div>

                  <div className={`form-group ${creationErrors.startDate ? "has-error" : ""}`}>
                    <label>
                      Mandate Start Date <span className="req">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={creationData.startDate}
                      onChange={handleCreationChange}
                    />
                    {creationErrors.startDate && (
                      <span className="error-text">{creationErrors.startDate}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Mandate End Date (Optional)</label>
                    <input
                      type="date"
                      name="endDate"
                      value={creationData.endDate}
                      onChange={handleCreationChange}
                    />
                    <small className="field-hint">Leave blank for "Until Cancelled"</small>
                  </div>

                  <div className="form-group">
                    <label>Authentication Mode</label>
                    <select
                      name="authMode"
                      value={creationData.authMode}
                      onChange={handleCreationChange}
                    >
                      <option value="Net Banking">Net Banking</option>
                      <option value="Debit Card">Debit Card</option>
                      <option value="Aadhaar OTP">Aadhaar OTP</option>
                    </select>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className={`consent-group ${creationErrors.agreeConsent ? "has-error" : ""}`}>
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="agreeConsent"
                      checked={creationData.agreeConsent}
                      onChange={handleCreationChange}
                    />
                    <span className="checkmark"></span>
                    <span className="consent-text">
                      I hereby authorize <strong>Nivara Home Finance Limited</strong> and their service providers to debit my bank account mentioned above via NPCI NACH platform for the mandate amount towards my loan repayment obligations.
                    </span>
                  </label>
                  {creationErrors.agreeConsent && (
                    <span className="error-text">{creationErrors.agreeConsent}</span>
                  )}
                </div>

                {/* Submit Actions */}
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={handleResetCreation}>
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmittingCreation}
                  >
                    {isSubmittingCreation ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit E-NACH Creation</span>
                        <FaArrowRight className="btn-icon-right" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ================= TAB 2: E-NACH CANCELLATION ================= */}
        {activeTab === "cancellation" && (
          <div className="enach-form-panel">
            {cancellationSubmitted ? (
              <div className="enach-receipt-card animate-pop-up">
                <div className="receipt-status cancel-success">
                  <FaCheckCircle className="status-icon" />
                  <h2>E-NACH Cancellation Request Logged</h2>
                  <p>Your request to cancel the designated E-NACH mandate has been received.</p>
                </div>

                <div className="receipt-ref-box">
                  <span className="ref-label">Cancellation Ticket ID:</span>
                  <span className="ref-id">{cancellationSubmitted.refId}</span>
                  <span className="ref-time">Submitted On: {cancellationSubmitted.date}</span>
                </div>

                <div className="receipt-details-grid">
                  <div className="detail-row">
                    <span className="d-label">Loan Account No:</span>
                    <span className="d-value">{cancellationSubmitted.loanAccountNo}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Applicant Name:</span>
                    <span className="d-value">{cancellationSubmitted.applicantName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">UMRN / Mandate ID:</span>
                    <span className="d-value">{cancellationSubmitted.umrnNumber}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Bank Name:</span>
                    <span className="d-value">{cancellationSubmitted.bankName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="d-label">Reason for Cancellation:</span>
                    <span className="d-value">{cancellationSubmitted.reason}</span>
                  </div>
                </div>

                <div className="receipt-notice-box">
                  <FaClock className="notice-icon" />
                  <div>
                    <strong>Mandate Revocation Process:</strong>
                    <p>
                      Our operations team will coordinate with your bank to deactivate the mandate within 3–5 working days. Please ensure alternate repayment methods are active to prevent bounce or EMI default.
                    </p>
                  </div>
                </div>

                <div className="receipt-actions">
                  <button type="button" className="btn-primary" onClick={handleResetCancellation}>
                    <FaUndo className="btn-icon" /> Submit Another Request
                  </button>
                  <Link to="/customercenter/complaint" className="btn-outline">
                    Customer Support Helpdesk
                  </Link>
                </div>
              </div>
            ) : (
              <form className="enach-form" onSubmit={handleCancellationSubmit} noValidate>
                <div className="form-heading-row">
                  <div>
                    <h2 className="form-title">E-NACH Cancellation Form</h2>
                    <p className="form-subtitle">
                      Submit a formal request to cancel or revoke an active E-NACH mandate registered with your loan.
                    </p>
                  </div>
                  <span className="form-chip cancel-chip">Revocation Request</span>
                </div>

                {Object.keys(cancellationErrors).length > 0 && (
                  <div className="form-alert-error">
                    <FaExclamationCircle className="alert-icon" />
                    <span>Please correct the highlighted errors below before submitting the cancellation request.</span>
                  </div>
                )}

                {/* Section 1: Mandate & Borrower Details */}
                <div className="form-section-title">
                  <span>1. Mandate Identification</span>
                </div>

                <div className="form-grid">
                  <div className={`form-group ${cancellationErrors.loanAccountNo ? "has-error" : ""}`}>
                    <label>
                      Loan Account Number <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="loanAccountNo"
                      placeholder="e.g. NHL0019283"
                      value={cancellationData.loanAccountNo}
                      onChange={handleCancellationChange}
                    />
                    {cancellationErrors.loanAccountNo && (
                      <span className="error-text">{cancellationErrors.loanAccountNo}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.applicantName ? "has-error" : ""}`}>
                    <label>
                      Registered Applicant Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="applicantName"
                      placeholder="Name as registered with Nivara"
                      value={cancellationData.applicantName}
                      onChange={handleCancellationChange}
                    />
                    {cancellationErrors.applicantName && (
                      <span className="error-text">{cancellationErrors.applicantName}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.umrnNumber ? "has-error" : ""}`}>
                    <label>
                      Unique Mandate Reference Number (UMRN) / Mandate ID <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="umrnNumber"
                      placeholder="e.g. UMRN2024000189201"
                      value={cancellationData.umrnNumber}
                      onChange={handleCancellationChange}
                    />
                    <small className="field-hint">Check your bank mandate SMS/statement for 20-digit UMRN</small>
                    {cancellationErrors.umrnNumber && (
                      <span className="error-text">{cancellationErrors.umrnNumber}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.accountNumber ? "has-error" : ""}`}>
                    <label>
                      Registered Bank Account Number <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="Account number linked to this mandate"
                      value={cancellationData.accountNumber}
                      onChange={handleCancellationChange}
                    />
                    {cancellationErrors.accountNumber && (
                      <span className="error-text">{cancellationErrors.accountNumber}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.bankName ? "has-error" : ""}`}>
                    <label>
                      Bank Name <span className="req">*</span>
                    </label>
                    <select
                      name="bankName"
                      value={cancellationData.bankName}
                      onChange={handleCancellationChange}
                    >
                      <option value="">-- Select Bank --</option>
                      {POPULAR_BANKS.map((bank) => (
                        <option key={bank} value={bank}>
                          {bank}
                        </option>
                      ))}
                    </select>
                    {cancellationErrors.bankName && (
                      <span className="error-text">{cancellationErrors.bankName}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.cancellationReason ? "has-error" : ""}`}>
                    <label>
                      Reason for Mandate Cancellation <span className="req">*</span>
                    </label>
                    <select
                      name="cancellationReason"
                      value={cancellationData.cancellationReason}
                      onChange={handleCancellationChange}
                    >
                      <option value="">-- Select Cancellation Reason --</option>
                      <option value="Loan Closed / Foreclosed">Loan Closed / Foreclosed</option>
                      <option value="Switching Bank Account (New Mandate Set Up)">Switching Bank Account (New Mandate Set Up)</option>
                      <option value="Swapping to Alternate Repayment Mode (ECS / PDC)">Swapping to Alternate Repayment Mode (ECS / PDC)</option>
                      <option value="Disputed Debit / Incorrect Amount">Disputed Debit / Incorrect Amount</option>
                      <option value="Other">Other Reason</option>
                    </select>
                    {cancellationErrors.cancellationReason && (
                      <span className="error-text">{cancellationErrors.cancellationReason}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.mobileNumber ? "has-error" : ""}`}>
                    <label>
                      Registered Mobile Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={cancellationData.mobileNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setCancellationData((prev) => ({ ...prev, mobileNumber: val }));
                        if (cancellationErrors.mobileNumber) {
                          setCancellationErrors((prev) => ({ ...prev, mobileNumber: "" }));
                        }
                      }}
                    />
                    {cancellationErrors.mobileNumber && (
                      <span className="error-text">{cancellationErrors.mobileNumber}</span>
                    )}
                  </div>

                  <div className={`form-group ${cancellationErrors.email ? "has-error" : ""}`}>
                    <label>
                      Registered Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={cancellationData.email}
                      onChange={handleCancellationChange}
                    />
                    {cancellationErrors.email && (
                      <span className="error-text">{cancellationErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Additional Remarks / Details (Optional)</label>
                  <textarea
                    name="remarks"
                    rows={3}
                    placeholder="Provide any closure letter references or additional details..."
                    value={cancellationData.remarks}
                    onChange={handleCancellationChange}
                  ></textarea>
                </div>

                {/* Declaration Checkbox */}
                <div className={`consent-group ${cancellationErrors.agreeDeclaration ? "has-error" : ""}`}>
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="agreeDeclaration"
                      checked={cancellationData.agreeDeclaration}
                      onChange={handleCancellationChange}
                    />
                    <span className="checkmark"></span>
                    <span className="consent-text">
                      I declare that I am requesting the cancellation of this E-NACH mandate. I understand that my repayment liabilities remain active for any outstanding loan balance and must be serviced in accordance with the loan agreement.
                    </span>
                  </label>
                  {cancellationErrors.agreeDeclaration && (
                    <span className="error-text">{cancellationErrors.agreeDeclaration}</span>
                  )}
                </div>

                {/* Submit Actions */}
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={handleResetCancellation}>
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="btn-primary cancel-submit-btn"
                    disabled={isSubmittingCancellation}
                  >
                    {isSubmittingCancellation ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit E-NACH Cancellation</span>
                        <FaArrowRight className="btn-icon-right" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ENach;
