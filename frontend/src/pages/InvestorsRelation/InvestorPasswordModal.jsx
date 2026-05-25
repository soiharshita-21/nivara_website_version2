import React, { useEffect, useRef, useState } from "react";
import { FaLock, FaTimes } from "react-icons/fa";
import "./InvestorPasswordModal.css";
import { isInvestorRelationsPassword } from "./investorAccess";

const InvestorPasswordModal = ({ open, documentName, onConfirm, onCancel }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isInvestorRelationsPassword(password)) {
      onConfirm();
      return;
    }

    setPassword("");
    setError("Incorrect password. Please try again.");
    inputRef.current?.focus();
  };

  return (
    <div className="investor-password-backdrop" role="presentation">
      <div
        className="investor-password-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="investor-password-title"
      >
        <button
          type="button"
          className="investor-password-close"
          aria-label="Close password prompt"
          onClick={onCancel}
        >
          <FaTimes />
        </button>

        <div className="investor-password-icon">
          <FaLock />
        </div>

        <h2 id="investor-password-title">Protected Document</h2>
        <p className="investor-password-copy">
          Enter the password to access {documentName || "this investor document"}.
        </p>

        <form className="investor-password-form" onSubmit={handleSubmit}>
          <label htmlFor="investor-document-password">Password</label>
          <input
            ref={inputRef}
            id="investor-document-password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            aria-invalid={error ? "true" : "false"}
          />
          {error && <p className="investor-password-error">{error}</p>}

          <div className="investor-password-actions">
            <button type="button" className="investor-password-cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="investor-password-submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvestorPasswordModal;
