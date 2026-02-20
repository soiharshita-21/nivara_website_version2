import React, { useState } from "react";
import "./Calculator.css";
import ca from "../../../assets/images/ca.jpg";


const Calculator = () => {
  return (
    <div className="calculator-page">

      {/* Page Title */}
      <h1 className="calculator-main-title">Calculator</h1>

      {/* ================= Eligibility Calculator ================= */}
      <section className="calculator-section">

        <div className="calc-left">
          <h2>Eligibility Calculator</h2>

          <label>Monthly Income ( ₹ ):</label>
          <input type="number" placeholder="Income" />

          <label>Monthly Debt Obligations ( ₹ ):</label>
          <input type="number" placeholder="Obligations" />

          <label>Age:</label>
          <input type="number" placeholder="Age" />

          <button className="calc-btn">COMPUTE</button>
        </div>

        <div className="calc-middle">
          <h3>Payment Information:</h3>
          <p><strong>Max EMI ( ₹ ):</strong></p>
          <p><strong>Max Tenure Eligibility:</strong></p>
          <p><strong>Max Loan Amount Eligibility ( ₹ ):</strong></p>
        </div>
         <div className="calc-right">
          <img src={ca} alt="calculator" />
        </div>

      </section>

       

     

      {/* ================= EMI Calculator ================= */}
      <section className="calculator-section">

        <div className="calc-left">
          <h2>EMI Calculator</h2>

          <label>Loan Amount ( ₹ ):</label>
          <input type="number" placeholder="Loan Amount" />

          <label>Rate of Interest (%):</label>
          <input type="number" placeholder="Rate of Interest" />

          <label>Repayment in Years:</label>
          <input type="number" placeholder="Years" />

          <button className="calc-btn">COMPUTE</button>
        </div>

        <div className="calc-middle">
          <h3>Payment Information:</h3>
          <p><strong>EMI ( ₹ ):</strong></p>
        </div>

       

      </section>

    </div>
  );
};

export default Calculator;
