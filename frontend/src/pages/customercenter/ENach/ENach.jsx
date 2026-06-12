import React, { useEffect } from "react";

/*
  NOTE: The original ENach page implementation is intentionally preserved below
  inside a block comment so it can be restored later if needed. Per request,
  this file is kept but the interactive local ENach UI is disabled and users
  are redirected to the external NACH login page when this component mounts.

  ORIGINAL FILE START

import React, { useState } from "react";
import "./ENach.css";
import { FaFilePdf, FaEye } from "react-icons/fa";
import logo from "../../../assets/images/nivara_logo.png";

const ENach = () => {
  // screen states: "main" | "login" | "register"
  const [screen, setScreen] = useState("main");

  return (
    <div className="enach-container animate-pop-up">
      {/* LEFT PANEL */}
      <div className="enach-left">
        <div className="enach-overlay">
          <img src={logo} alt="Company Logo" className="logo" width={150} />
          <p className="enach-tagline">
            Secure Your Dream Home with Nivara Home Finance
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="enach-right">

        {/* ================= MAIN SCREEN ================= */}
        {screen === "main" && (
          <>
            <h2 className="enach-title animate-pop-up">NACH E-MANDATE</h2>

            <div className="enach-actions">
              <button
                className="btn-primary"
                onClick={() => setScreen("login")}
              >
                Nach Mandate Cancel
              </button>

              <button
                className="btn-primary"
                onClick={() => setScreen("register")}
              >
                Registration
              </button>
            </div>

            <div className="or-line">
              <span>OR</span>
            </div>

            <h3 className="enach-subtitle">Nach e-mandate video guidance</h3>

            <div className="enach-video-buttons">
              <button className="btn-dark">Mandate registration</button>
              <button className="btn-dark">Mandate Reject</button>
            </div>

            <div className="or-line">
              <span>OR</span>
            </div>

            <h3 className="enach-subtitle">
              Nach e-mandate FAQs and userguide
            </h3>

            <div className="enach-doc-buttons">
              <button className="btn-outline">
                <FaFilePdf /> mandate FAQ
              </button>
              <button className="btn-outline">
                <FaFilePdf /> mandate Userguide
              </button>
            </div>

          </>
        )}

        {/* ================= LOGIN SCREEN ================= */}
        {screen === "login" && (
          <div className="nach-login">
            <h2 className="login-title animate-pop-up">Nivara Nach Welcome</h2>
            <p className="login-subtitle">Enter your details to log in</p>

            <div className="login-group">
              <label>Loan Number</label>
              <input type="text" placeholder="Enter loan number" />
            </div>

            <div className="login-group">
              <label>Loan Amount</label>
              <input type="text" placeholder="Enter loan amount" />
            </div>

            <div className="login-group">
              <label>Password</label>
              <div className="password-box">
                <input type="password" placeholder="Enter Password" />
                <FaEye className="eye-icon" />
              </div>
            </div>

            <button className="login-btn">Securely Log In</button>

            <button className="back-btn" onClick={() => setScreen("main")}>
              ← Back
            </button>
          </div>
        )}

        {/* ================= REGISTRATION SCREEN ================= */}
        {screen === "register" && (
          <div className="nach-register">
            <h2 className="register-title animate-pop-up">Welcome to Nivara Nach</h2>
            <p className="register-subtitle">
              Please enter your details to register.
            </p>

            <div className="register-grid">
              <div className="reg-group">
                <label>Unique Reference Number</label>
                <input
                  type="text"
                  placeholder="Enter Unique Reference Number"
                />
              </div>

              <div className="reg-group">
                <label>Applicant Name</label>
                <input type="text" placeholder="Enter Applicant Name" />
              </div>

              <div className="reg-group">
                <label>A/c Holder Name</label>
                <input type="text" placeholder="Enter A/c Holder Name" />
              </div>

              <div className="reg-group">
                <label>Bank Account No</label>
                <input type="text" placeholder="Enter Bank Account No" />
              </div>

              <div className="reg-group">
                <label>Bank Name</label>
                <select>
                  <option>-- Select Bank --</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Axis</option>
                </select>
              </div>

              <div className="reg-group">
                <label>Branch</label>
                <input type="text" placeholder="Enter Branch" />
              </div>

              <div className="reg-group">
                <label>IFSC</label>
                <input type="text" placeholder="Enter IFSC" />
              </div>

              <div className="reg-group">
                <label>MICR (optional)</label>
                <input type="text" placeholder="Enter MICR (optional)" />
              </div>

              <div className="reg-group">
                <label>Start Date</label>
                <input type="date" />
              </div>

              <div className="reg-group">
                <label>End Date</label>
                <input type="date" />
              </div>
            </div>

            <div className="register-actions">
              <button
                className="back-btn"
                onClick={() => setScreen("main")}
              >
                Back
              </button>

              <button className="next-btn">Next</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ENach;

  ORIGINAL FILE END
*/

const ENach = () => {
  useEffect(() => {
    // Redirect to external NACH login
    window.location.href = "https://nach.nivarahousing.com/auth/nach-mandate-login";
  }, []);

  return null; // nothing rendered locally
};

export default ENach;
