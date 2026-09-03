import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mitc.css";
import { ShieldCheck, ChevronDown, ChevronUp, FileText, Percent, Calendar, Shield, ClipboardCheck, RefreshCw, AlertCircle, Headset, MessageSquare } from "lucide-react";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const defaultMitcDocs = [
  { name: "MITC English", path: "/files/mitc-english.pdf" },
  { name: "MITC Kannada", path: "/files/mitc-kannada.pdf" },
  { name: "MITC Telugu", path: "/files/mitc-telugu.pdf" },
  { name: "MITC Tamil", path: "/files/mitc-tamil.pdf" },
  { name: "MITC Marathi", path: "/files/mitc-marathi.pdf" }
];

const Mitc = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [feesTab, setFeesTab] = useState("hl");
  const [mitcDocs, setMitcDocs] = useState(defaultMitcDocs);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchMitc = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.port === '3000' ? 'http://localhost:5001' : '');
        const res = await axios.get(`${baseUrl}/api/documents?category=mitc&t=${Date.now()}`);
        if (Array.isArray(res.data)) {
          if (res.data.length > 0) {
            setMitcDocs(res.data.map(d => ({
              name: d.title,
              path: d.full_url || d.file_url
            })));
          } else {
            setMitcDocs([]);
          }
        }
      } catch (e) {
        console.error("Failed to load live MITC documents:", e);
        setMitcDocs(defaultMitcDocs);
      }
    };

    fetchMitc();

    const handleUpdate = () => fetchMitc();
    window.addEventListener("documentsUpdated", handleUpdate);
    return () => window.removeEventListener("documentsUpdated", handleUpdate);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const sections = [
    {
      title: "Loan Parameters",
      icon: <FileText size={24} />,
      content: (
        <div className="terms-detail">
          <h4>1. Loan</h4>
          <p>Sanctioned Amount: As specified in the Sanction Letter.</p>

          <h4>2. Interest</h4>
          <table className="mitc-table">
            <thead>
              <tr>
                <th>Type / Parameter</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Type</strong></td>
                <td>Fixed / Floating / Semi-Fixed as per the Loan Agreement.</td>
              </tr>
              <tr>
                <td><strong>Interest Rate Chargeable</strong></td>
                <td>As specified in the Sanction Letter and Loan Agreement.</td>
              </tr>
              <tr>
                <td><strong>Moratorium or Subsidy</strong></td>
                <td>As per the specific loan scheme and regulatory guidelines.</td>
              </tr>
              <tr>
                <td><strong>Date of Reset of Interest</strong></td>
                <td>Subject to change from time to time as per the prevailing company policy.</td>
              </tr>
              <tr>
                <td><strong>Modes of Communication of changes in interest rate</strong></td>
                <td>Through our website (www.nivarahousing.com) and offices by displaying on the notice boards from time to time.</td>
              </tr>
            </tbody>
          </table>

          <h4>3. Instalment types: Monthly (EMI)</h4>
          <h4>4. Loan Tenure: As specified in the Sanction Letter.</h4>
          <h4>5. Purpose of Loan: As specified in the Sanction Letter.</h4>
        </div>
      )
    },
    {
      title: "Fees and Other Charges",
      icon: <Percent size={24} />,
      content: (
        <div className="terms-detail">
          <p className="fees-intro-text">Select your loan type to view applicable processing fees, administrative charges, and foreclosure terms:</p>
          
          <div className="fees-tab-container">
            <button 
              className={`fees-tab-btn ${feesTab === "hl" ? "active" : ""}`}
              onClick={() => setFeesTab("hl")}
            >
              🏠 Home Loan (HL) Dues
            </button>
            <button 
              className={`fees-tab-btn ${feesTab === "nhl" ? "active" : ""}`}
              onClick={() => setFeesTab("nhl")}
            >
              🏢 Non-Home Loan (NHL) Dues
            </button>
          </div>

          {feesTab === "hl" && (
            <div className="tab-fade-in">
              <div className="mitc-table-title">Fees and Charges-HL</div>
              <table className="mitc-table">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>S. No.</th>
                    <th style={{ width: "42%" }}></th>
                    <th style={{ width: "50%" }}>HL- Home Loan Construction/Composite loan/Home Loan Purchase/Refinance Loan/Balance Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Application processing fee</td>
                    <td>Rs. 5000/- (Inclusive of applicable taxes)- Normal Nil -Nivara Nivas (CLSS)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Loan on boarding charges on actuals</td>
                    <td>Rs. 11,500/-(Inclusive of applicable taxes)- Nivara Nivas (CLSS)</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Loan processing fees</td>
                    <td>2.25% plus applicable taxes of the sanction value</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SRO Search, ROC Search, Non-Encumbrance Certificate from SRO, Creation of charge at ROC/MODT charges/NOI charges</td>
                    <td>At actuals with applicable charges</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Technical Valuation/Legal</td>
                    <td>NIL, included in the Processing fee/Loan Onboarding charges</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Transaction Handling charges in Balance Transfer</td>
                    <td>Rs. 5000/- (Inclusive of applicable taxes)</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>CERSAI Fees (not applicable for Business Loan)</td>
                    <td>
                      Rs.50/- plus applicable taxes (for loans &lt;= 5 lacs)<br />
                      Rs.100/- plus applicable taxes (for loans &gt; 5 lacs)
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>NACH Mandate / Security Mandate / ECS Dishonour</td>
                    <td>Rs.500/- plus applicable taxes, for each NACH Mandate / Security Mandate / ECS bounce</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Penal Charges</td>
                    <td>3% per month (36% per annum) on Overdue EMIs, plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>NACH Mandate / Security Mandate/ECS Swapping</td>
                    <td>Rs.1,000/- per instance plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Retrieval charges for Copies of loan/property document from Nivara’s custody/LOD/COD</td>
                    <td>Rs.1,000/- per instance plus applicable taxes + Courier Charges</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Charges for Statement of Account/Amortization Schedule /NOC/NDC</td>
                    <td>Rs.500/- plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Duplicate Annual Account Statement, Provisional Certificate</td>
                    <td>Rs.1000/- plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Loan Re-schedulement (at discretion of Nivara)</td>
                    <td>0.50% of the loan outstanding plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Swap Charges (Fixed or Mixed fixed rate to floating and vice-versa at discretion of Nivara)</td>
                    <td>2% of the loan outstanding plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Disbursement cancellation and reissuance.</td>
                    <td>Rs.1,000/- plus applicable taxes (cancellation Charges) &amp; PEMI will be charged.</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Disbursement postponement after the NEFT</td>
                    <td>
                      1. If request received within 7 days of the disbursement: 2. If request received after 7 days of the disbursement: Rs.1,000/-plus applicable taxes, PEMI till the date of cancellation request
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Loan cancellation charges</td>
                    <td>2.25% plus applicable taxes on the loan sanction value + PEMI till date of cancellation</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Commitment charges</td>
                    <td>Rs.5000/-plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Disbursement cancellation and reissuance.</td>
                    <td>Rs.1,000/- plus applicable taxes (cancellation Charges) &amp; PEMI will be charged.</td>
                  </tr>
                </tbody>
              </table>

              <div className="mitc-table-title">Foreclosure Charges &amp; Pre-payment Charges</div>
              <table className="mitc-table">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>S. No.</th>
                    <th style={{ width: "42%" }}>Nature of Charges</th>
                    <th style={{ width: "50%" }}>Quantum of Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>Part- Payment / Foreclosure of home loans on floating rate of Interest</td>
                    <td>Nil</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Part- Payment / Foreclosure of home loans on fixed rate of interest (own source)</td>
                    <td>Nil</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Part Payment of home loan on fixed rate of interest (other than own source)</td>
                    <td>2% of the prepaid amount, plus applicable taxes</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Foreclosure of home loans on fixed rate of interest (other than own source)</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>If loan is foreclosed within 12 months from commencement of EMI</td>
                    <td>5% of the prepaid amount, plus applicable taxes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {feesTab === "nhl" && (
            <div className="tab-fade-in">
              <div className="mitc-table-title">Fees and Charges-NHL</div>
              <table className="mitc-table">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>S. No.</th>
                    <th style={{ width: "42%" }}>Nature of Charges</th>
                    <th style={{ width: "50%" }}>Quantum of Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Application processing fee</td>
                    <td>Rs.5,000 (inclusive of Service Tax)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Loan processing fee</td>
                    <td>3.0% + Service Tax</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SRO Search, ROC Search, Non-Encumbrance Certificate from SRO, Creation of charge at ROC</td>
                    <td>At actuals for applicable charges</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Technical Valuation</td>
                    <td>NIL, included in the Processing fee</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Transaction Handling charges in Balance Transfer</td>
                    <td>Rs.2,500/- + S.T</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>CERSAI Fees</td>
                    <td>
                      Rs. 50/- + ST (for loans &lt;= Rs. 5 lacs)<br />
                      Rs. 100/- + ST (for loans &gt; Rs. 5 lacs)
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>PDC / ECS Dishonor</td>
                    <td>Rs. 500/- for each PDC / ECS bounce</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Late Payment</td>
                    <td>3% per month on Overdue EMIs</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>PDC/ECS Swapping</td>
                    <td>Rs.1,000/- per instance + S.T.</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Retrieval charges for Copies of loan /property document from Nivara’s custody</td>
                    <td>Rs.1,000/- per instance + S.T.+ Courier Charges</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Charges for Statement of Account / Amortization Schedule / NOC / NDC</td>
                    <td>Rs.500 + S.T.</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Duplicate Annual Account Statement, Provisional Certificate</td>
                    <td>Rs. 500 + S.T.</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Loan Re-schedulement (at discretion of Nivara)</td>
                    <td>0.50% of the loan outstanding + Service Tax</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Swap Charges ((Fixed or semi-fixed rate to floating and vice-versa at discretion of Nivara)</td>
                    <td>2% of the loan outstanding</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Disbursement Cheque Cancellation &amp; re-issuance</td>
                    <td>Rs. 1,000/- + ST (cancelation Charges) &amp; PEMI will be charged.</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Disbursement postponement after the Cheque is made</td>
                    <td>
                      1. If request received within 7 days of the disbursement: Rs. 1,000/- + ST.<br />
                      2. If request received after 7 days of the disbursement: Rs. 1,000/- + ST Plus PEMI till the date of cancellation request
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Pre-payment Charges</td>
                    <td>
                      <ul className="pl-3 mb-0" style={{ textAlign: "left" }}>
                        <li className="mb-2">Part- Prepayment/ Foreclosure of Loan on Floating rate of Interest: NIL</li>
                        <li className="mb-2">Part- Prepayment/ Foreclosure of Loan on fixed rate of interest:</li>
                        <li className="mb-2">NIL if loan is foreclosed/part-prepayment from own source of funds</li>
                        <li className="mb-2">If loan is foreclosed from other sources:</li>
                        <li className="mb-2">4%+ ST as applicable on principle o/s &amp; all part prepayments done in case loan is closed within 12 months from the date of commencement of EMI.</li>
                        <li className="mb-0">3% + ST as applicable on outstanding principle &amp; all part prepayments done in last 12 months in case loan is closed after 12 months from the commencement of EMI.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-3 text-muted" style={{ fontSize: "17px", lineHeight: "1.6" }}>
            <p className="mb-2">Above charges are the standard rates for all customers and would be subject to changes from time to time. Actual charges may differ at the time of sanction / disbursement which will be communicated to the customer.</p>
            <p>All charges, interest, taxes, fee, Service tax, levies etc. as prescribed by any statutory/regulatory bodies from time to time shall be borne by the Borrower.</p>
          </div>
        </div>
      )
    },
    {
      title: "Security for the Loan",
      icon: <Shield size={24} />,
      content: (
        <div className="terms-detail">
          <p>Generally, the Security of the loan will be the security on the property being financed. Other additional collateral and interim Security may be required by Nivara from time to time.</p>
          <table className="mitc-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Nature of Security</th>
                <th>Description</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Property being financed</td>
                <td>Equitable mortgage of the property financed by Nivara</td>
                <td>As specified in the Sanction Letter</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Other Security (if any)</td>
                <td>Additional collateral or interim security as requested</td>
                <td>As specified in the Loan Agreement</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Guarantor details</td>
                <td>Personal guarantee of co-applicant(s) or guarantor(s)</td>
                <td>As specified in the Sanction Letter</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "Insurance of the property / Borrowers",
      icon: <ClipboardCheck size={24} />,
      content: (
        <div className="terms-detail">
          <p><strong>Insurance of Property</strong></p>
          <p>The borrower shall ensure that property is properly insured for fire, earthquake, flood, explosion, storm and other allied perils for an amount equal to the cost of the property during the pendency of the loan. The policy has to be assigned in favour of Nivara Home Finance Ltd. and the borrower is also required to provide evidence to that extent each year.</p>
          
          <p><strong>Insurance of Borrower</strong></p>
          <p>The Borrower is further advised to keep his/her life insured at all times to the extent of loan outstanding during the continuity of the loan with Nivara as the sole beneficiary.</p>
        </div>
      )
    },
    {
      title: "Conditions for Disbursement of the Loan",
      icon: <RefreshCw size={24} />,
      content: (
        <div className="terms-detail">
          <p>The Loan would be disbursed subject to fulfilment of various terms and conditions. The broad conditions are that the Borrower shall:</p>
          <ul className="terms-sub-list">
            <li>Fulfil all the conditions mentioned in the sanction letter and Loan Agreements to the satisfaction of Nivara.</li>
            <li>Submit the Disbursement request form in writing.</li>
            <li>Ensure that the borrower has absolute, clear and marketable title to the property and the said property is free from all encumbrances and free from any liability whatsoever.</li>
            <li>Ensure that the construction of the property is as per the approved plans.</li>
            <li>Execution of loan agreement and such other documents as prescribed by Nivara along with proof of own contribution receipts.</li>
            <li>Create of the security in favour of Nivara.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Repayment of the Loan and Interest",
      icon: <Calendar size={24} />,
      content: (
        <div className="terms-detail">
          <p>EMIs are payable on a fixed due date every month and Nivara would make best efforts to remind the customers regarding the due date of the EMIs. However, the customers are expected to honour the repayment without fail.</p>
          <table className="mitc-table">
            <thead>
              <tr>
                <th>Repayment Parameter</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EMI</strong></td>
                <td>As specified in the Sanction Letter</td>
              </tr>
              <tr>
                <td><strong>Commencement date of EMI</strong></td>
                <td>As specified in the Sanction Letter / Loan Agreement</td>
              </tr>
              <tr>
                <td><strong>Due Date of EMI</strong></td>
                <td>As specified in the Sanction Letter / Loan Agreement</td>
              </tr>
              <tr>
                <td><strong>Total No of EMIs</strong></td>
                <td>As specified in the Sanction Letter</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">Till the final disbursement is made, Pre-EMI interest is payable every month at the rate mentioned above from the date of each disbursement up to the date of commencement of EMI.</p>
        </div>
      )
    },
    {
      title: "Brief procedure to be followed for Recovery of Overdues",
      icon: <AlertCircle size={24} />,
      content: (
        <div className="terms-detail">
          <p>The borrowers are clearly explained the procedure for repayment of the loan in terms of tenure, frequency, instalment amount and mode or repayment of the loan. It shall be the liability of the customer to ensure the timely repayment of all the dues. It is advised that borrowers should ensure the timely payment of all instalments to avoid any adverse impact on their credit history as we submit the credit behaviour information of all the borrowers on a monthly basis to credit Bureaus like CIBIL, Equifax, Experian, High Mark etc.</p>
          <p>In the event of default, the borrower will be sent reminders for settlement of any outstanding amounts on their home loans by way of telephonic calls, SMSes, post, e-mails, or by engaging third parties to remind, follow-up and for collection of pending dues.</p>
          <p>Intimation letters and reminder notices will be sent to the borrowers before initiating any steps for the recovery of pending dues under various applicable provisions of law like Negotiable Instruments Act, SARFAESI Act, or Civil Suit and so on. The recovery process will be in accordance with directions laid down under the respective laws which might include physical possession and sale of the mortgaged property.</p>
          <p>Intimation letters and reminder notices will be sent to the borrowers before initiating any steps for the recovery of pending dues under various applicable provisions of law like Negotiable Instruments Act, SARFAESI Act, or Civil Suit and so on. The recovery process will be in accordance with directions laid down under the respective laws which might include physical possession and sale of the mortgaged property.</p>
          <p>Hence, Nivara will make a series of efforts including telephonic calls, customer visits, and written communication to ensure the collection of dues from the delinquent borrowers before resorting to legal course of action.</p>
        </div>
      )
    },
    {
      title: "Customer Services",
      icon: <Headset size={24} />,
      content: (
        <div className="terms-detail">
          <ul className="terms-sub-list">
            <li><strong>Branch Visit Hours:</strong> Between 10 a.m. and 5 p.m. from Monday to Friday &amp; from 10 a.m. to 1 p.m. on Saturdays (except on public holidays).</li>
            <li><strong>Telephone Contact:</strong> +91-80-2655 2822 between 10 a.m. and 5 p.m. from Monday to Friday &amp; from 10 a.m. to 1 p.m. on Saturdays (except on public holidays).</li>
            <li><strong>Email Support:</strong> <a href="mailto:contact@nivarahousing.com">contact@nivarahousing.com</a></li>
            <li><strong>Service Delivery Timelines:</strong> Customers may obtain the following by means of a simple application:
              <ul className="sub-nested-list">
                <li>Loan Account Statement: <strong>7 Days</strong></li>
                <li>Photocopy of title documents: <strong>15 Days</strong></li>
                <li>Return of original documents on closure/transfer of loan: <strong>21 Days</strong></li>
                <li>Annual Outstanding balance statement: <strong>Available on demand</strong></li>
              </ul>
            </li>
          </ul>
          <p className="mt-3">Nivara may disclose any information/documents relating to the borrower to any third party for credit verification, regulatory or promotional purpose. Also Nivara may send SMS to your mobile/e-mail you for information &amp; updates pertaining to your loan account.</p>
        </div>
      )
    },

    {
      title: "MITC",
      icon: <ShieldCheck size={24} />,
      content: (
        <div className="terms-detail">
          <ul className="mitc-dropdown-list">
            {mitcDocs.map((item, idx) => (
              <li key={idx} className="mitc-dropdown-item">
                <a href={item.path} target="_blank" rel="noopener noreferrer" className="mitc-dropdown-link mitc-link-red">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="terms-page">
      <section className="page-banner" style={{ backgroundImage: "url(/src/assets/images/terms.png)" }}>
        <div className="page-banner-overlay"></div>
        <ScrollReveal direction="down">
          <div className="page-banner-content">

            <h1 className="page-banner-title">MITC</h1>
            <p className="page-banner-subtitle">Most Important Terms and Conditions (MITC) for Nivara Home Loans</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="terms-intro-section">
        <div className="terms-container">
          <p className="mitc-intro">
            The Most Important Terms and Conditions (MITC) of Loan between a Borrower and Nivara Home Finance Limited, having its registered office at No. 22, 23, 24, 25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, Opp. RBI Layout, 7th Phase, JP Nagar, Bangalore – 560078 (hereinafter referred as “NIVARA”) are agreed upon and mentioned below. Please note that the MITC document is to be read and understood in conjunction with the terms and conditions mentioned in the sanction letter, loan agreement and any other documents as prescribed by Nivara as the loan shall be governed by all these documents put together. The MITC document provided in below mentioned paragraphs is indicative and not exhaustive.
          </p>
        </div>
      </section>

      <section className="terms-accordion-section">
        <div className="terms-accordion-container">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`accordion-item ${activeAccordion === index ? "active" : ""}`}
            >
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <div className="header-left">
                  <span className="icon-box">{section.icon}</span>
                  <h3>{section.title}</h3>
                </div>
                {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div className="accordion-content">
                <div className="content-inner">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mitc;
