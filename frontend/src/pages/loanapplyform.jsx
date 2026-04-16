import "./LoanApplyForm.css";

const LoanApplyForm = () => {
  return (
    <div className="loan-form-page">
      

      <form className="loan-form">
          <h2 className="form-title animate-pop-up"> Personal Information</h2>
        <div className="row animate-pop-up">
          <div>
            <label>First name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label>Your email</label>
            <input type="email" />
          </div>
          <div>
            <label>Contact Number</label>
            <input type="tel" />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label>State</label>
            <input type="text" />
          </div>
          <div>
            <label>District</label>
            <input type="text" />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label>City</label>
            <input type="text" />
          </div>
          <div>
            <label>Full Address</label>
            <input type="text" />
          </div>
        </div>

        <div className="row animate-pop-up">
          <div>
            <label>Loan for</label>
            <input type="text" value="Home Loan for Purchase" readOnly />
          </div>
          <div>
            <label>Loan Amount</label>
            <input type="number" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default LoanApplyForm;