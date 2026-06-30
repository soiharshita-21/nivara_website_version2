
import React, { useMemo, useState, useEffect } from "react";
import "./Calculator.css";

const defaultValues = {
  amount: 2500000,
  rate: 11,
  years: 18,
};

const limits = {
  amount: { min: 100000, max: 10000000, step: 50000 },
  rate: { min: 11, max: 30, step: 0.1 },
  years: { min: 1, max: 30, step: 1 },
};

const clampNumber = (value, min, max) => {
  const nextValue = Number(value);
  if (Number.isNaN(nextValue)) return min;
  return Math.min(Math.max(nextValue, min), max);
};

const formatCurrency = (value) =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;

const Calculator = () => {
  const [amount, setAmount] = useState(defaultValues.amount);
  const [rate, setRate] = useState(defaultValues.rate);
  const [years, setYears] = useState(defaultValues.years);

  const { emi, totalPayment, interest } = useMemo(() => {
    const principal = amount;
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const monthlyEmi = monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const payableAmount = monthlyEmi * months;
    const interestAmount = payableAmount - principal;

    return {
      emi: Math.round(monthlyEmi),
      totalPayment: Math.round(payableAmount),
      interest: Math.round(interestAmount),
    };
  }, [amount, rate, years]);

  const principalShare = totalPayment > 0 ? (amount / totalPayment) * 100 : 0;
  const interestShare = totalPayment > 0 ? (interest / totalPayment) * 100 : 0;

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

  const handleAmountChange = (value) => {
    setAmount(Math.round(clampNumber(value, limits.amount.min, limits.amount.max)));
  };

  const handleRateChange = (value) => {
    setRate(Number(clampNumber(value, limits.rate.min, limits.rate.max).toFixed(1)));
  };

  const handleYearsChange = (value) => {
    setYears(Math.round(clampNumber(value, limits.years.min, limits.years.max)));
  };

  const resetCalculator = () => {
    setAmount(defaultValues.amount);
    setRate(defaultValues.rate);
    setYears(defaultValues.years);
  };

  return (
    <div className="emi-page">

      <div className="emi-heading animate-pop-up">
        <span className="emi-eyebrow">Nivara Home Finance</span>
        <h1 className="emi-title">EMI Calculator</h1>
        <p className="emi-subtitle">Calculate your monthly payment and plan your finances</p>
      </div>
      
      <div className="emi-card animate-pop-up">

        {/* LEFT */}
        <div className="emi-left">
          <div className="calculator-panel-title">
            <span>Loan Details</span>
            <button type="button" className="reset-btn" onClick={resetCalculator}>
              Reset
            </button>
          </div>

          {/* Loan Amount */}
          <div className="input-card animate-pop-up">
            <label htmlFor="loan-amount">Loan Amount</label>
            <div className="calc-input-group">
              <span>₹</span>
              <input
                id="loan-amount"
                type="number"
                min={limits.amount.min}
                max={limits.amount.max}
                step={limits.amount.step}
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                aria-label="Loan amount"
              />
            </div>
            <small>Range {formatCurrency(limits.amount.min)} to {formatCurrency(limits.amount.max)}</small>
          </div>

          {/* Interest */}
          <div className="input-card animate-pop-up">
            <label htmlFor="interest-rate">Interest Rate (p.a.)</label>
            <div className="calc-input-group">
              <input
                id="interest-rate"
                type="number"
                min={limits.rate.min}
                max={limits.rate.max}
                step={limits.rate.step}
                value={rate}
                onChange={(e) => handleRateChange(e.target.value)}
                aria-label="Interest rate"
              />
              <span>%</span>
            </div>
            <small>Range {limits.rate.min}% to {limits.rate.max}%</small>
          </div>

          {/* Tenure */}
          <div className="input-card animate-pop-up">
            <label htmlFor="loan-tenure">Loan Tenure</label>
            <div className="calc-input-group">
              <input
                id="loan-tenure"
                type="number"
                min={limits.years.min}
                max={limits.years.max}
                step={limits.years.step}
                value={years}
                onChange={(e) => handleYearsChange(e.target.value)}
                aria-label="Loan tenure in years"
              />
              <span>Years</span>
            </div>
            <small>Range {limits.years.min} to {limits.years.max} years</small>
          </div>

        </div>

        {/* RIGHT */}
        <div className="emi-right">

          {/* EMI BOX */}
          <div className="emi-main hover-pop">
            <span>Monthly EMI</span>
            <h2 className="animate-pop-up">{formatCurrency(emi)}</h2>
            <p>Estimated instalment for {years} years at {rate}% p.a.</p>
          </div>

          <div className="emi-small-grid">

            <div className="emi-small hover-pop">
              <span>Principal</span>
              <h3 className="animate-pop-up">{formatCurrency(amount)}</h3>
            </div>

            <div className="emi-small hover-pop">
              <span>Interest</span>
              <h3 className="animate-pop-up">{formatCurrency(interest)}</h3>
            </div>

          </div>

          <div className="emi-total hover-pop">
            <span>Total Payment</span>
            <h3 className="animate-pop-up">{formatCurrency(totalPayment)}</h3>

            <div className="progress-bar">
              <div
                className="progress-principal"
                style={{ width: `${principalShare}%` }}
              ></div>
              <div
                className="progress-interest"
                style={{ width: `${interestShare}%` }}
              ></div>
            </div>

            {/* <div className="progress-legend">
              <span><i className="principal-dot"></i>Principal</span>
              <span><i className="interest-dot"></i>Interest</span>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
