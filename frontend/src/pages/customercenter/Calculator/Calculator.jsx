
import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [amount, setAmount] = useState(2500000); // 25L
  const [rate, setRate] = useState(8.9);
  const [years, setYears] = useState(18);

  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const P = amount;
    const r = rate / 12 / 100;
    const n = years * 12;

    const EMI =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const total = EMI * n;
    const int = total - P;

    setEmi(Math.round(EMI));
    setTotalPayment(Math.round(total));
    setInterest(Math.round(int));
  }, [amount, rate, years]);

  return (
    <div className="emi-page">

      <h1 className="emi-title animate-pop-up">EMI Calculator</h1>
      <p className="emi-subtitle">Calculate your monthly payment and plan your finances</p>
      
      <div className="emi-card animate-pop-up">

        {/* LEFT */}
        <div className="emi-left">

          {/* Loan Amount */}
          <div className="slider-box">
            <div className="label-row animate-pop-up">
              <span>Loan Amount</span>
              <strong>₹{amount.toLocaleString("en-IN")}</strong>
            </div>

            <input
              type="range"
              min="100000"
              max="10000000"
              step="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{
                accentColor: `rgb(${255 - (amount - 100000) / 9900000 * 255}, ${ (amount - 100000) / 9900000 * 200}, 0)`
              }}
            />
            <div className="range-labels">
              <span>₹1L</span>
              <span>₹1Cr</span>
            </div>
          </div>

          {/* Interest */}
          <div className="slider-box">
            <div className="label-row animate-pop-up">
              <span>Interest Rate (p.a.)</span>
              <strong>{rate}%</strong>
            </div>

            <input
              type="range"
              min="6"
              max="15"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              style={{
                accentColor: `rgb(${255 - (rate - 6) / 9 * 255}, ${(rate - 6) / 9 * 200}, 0)`
              }}
            />
            <div className="range-labels">
              <span>6%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="slider-box">
            <div className="label-row animate-pop-up">
              <span>Loan Tenure</span>
              <strong>{years} Years</strong>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              style={{
                accentColor: `rgb(${255 - (years - 1) / 29 * 255}, ${(years - 1) / 29 * 200}, 0)`
              }}
            />
            <div className="range-labels">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="emi-right">

          {/* EMI BOX */}
          <div className="emi-main hover-pop">
            <span>MONTHLY EMI</span>
            <h2 className="animate-pop-up">₹{emi.toLocaleString("en-IN")}</h2>
          </div>

          <div className="emi-small-grid">

            <div className="emi-small hover-pop">
              <span>Principal</span>
              <h3 className="animate-pop-up">₹{amount.toLocaleString("en-IN")}</h3>
            </div>

            <div className="emi-small hover-pop">
              <span>Interest</span>
              <h3 className="animate-pop-up">₹{interest.toLocaleString("en-IN")}</h3>
            </div>

          </div>

          <div className="emi-total hover-pop">
            <span>Total Payment</span>
            <h3 className="animate-pop-up">₹{totalPayment.toLocaleString("en-IN")}</h3>

            <div className="progress-bar">
              <div
                className="progress-principal"
                style={{ width: `${(amount / totalPayment) * 100}%` }}
              ></div>
              <div
                className="progress-interest"
                style={{ width: `${(interest / totalPayment) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* <button className="apply-loan-btn">Apply for This Loan</button> */}

        </div>

      </div>
    </div>
  );
};

export default Calculator;
