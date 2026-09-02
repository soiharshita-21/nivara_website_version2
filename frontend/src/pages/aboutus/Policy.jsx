import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Policy.css";
import policy2 from "../../assets/images/policy2.png";

const defaultPolicies = [
  { name: "POSH Policy", link: "/files/policy-posh.pdf" },
  { name: "Whistle Blower Policy", link: "/files/policy-whistle-blower.pdf" },
  { name: "KYC & AML Policy", link: "/files/policy-kyc-aml.pdf" },
  { name: "Nomination & Remuneration Policy", link: "/files/policy-nomination-remuneration.pdf" },
  { name: "Conversion Policy", link: "/files/policy-conversion.pdf" },
  { name: "Code of Conduct for Independent Directors", link: "/files/policy-code-independent-directors.pdf" },

  { name: "Related Party Transaction Policy", link: "/files/policy-related-party.pdf" },
  { name: "Equal Opportunity Policy", link: "/files/policy-equal-opportunity.pdf" },
  { name: "Corporate Social Responsibility", link: "/files/policy-csr.pdf" },
  { name: "Social Media Policy", link: "/files/policy-social-media.pdf" },
  { name: "Anti Bribery and Anti Corruption Policy", link: "/files/policy-anti-bribery.pdf" },
  { name: "Trade Relief Policy", link: "/files/policy-trade-relief.pdf" },
  { name: "Internal Guidelines on Corporate Governance", link: "/files/policy-corporate-governance.pdf" },
];

const PolicyPage = () => {
  const [policies, setPolicies] = useState(defaultPolicies);

  useEffect(() => {
    const fetchLivePolicies = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.port === '3000' ? 'http://localhost:5001' : '');
        const res = await axios.get(`${baseUrl}/api/documents?category=policies`);
        if (Array.isArray(res.data) && res.data.length > 0) {
          const apiPolicies = res.data.map(doc => ({
            name: doc.title,
            link: doc.full_url || doc.file_url
          }));

          const existingLinks = new Set(defaultPolicies.map(p => p.link.toLowerCase()));
          const uniqueApiPolicies = apiPolicies.filter(p => !existingLinks.has(p.link.toLowerCase()));
          setPolicies([...uniqueApiPolicies, ...defaultPolicies]);
        }
      } catch (err) {
        console.error("Failed to load live policies:", err);
      }
    };

    fetchLivePolicies();

    const handleUpdate = () => fetchLivePolicies();
    const handleStorage = (e) => {
      if (e.key === "nivara_document_update_timestamp") fetchLivePolicies();
    };

    window.addEventListener("documentsUpdated", handleUpdate);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleUpdate);

    return () => {
      window.removeEventListener("documentsUpdated", handleUpdate);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleUpdate);
    };
  }, []);

  return (
    <section className="policy-section animate-pop-up">
      <section className="page-banner policy-page-banner animate-pop-up" style={{ backgroundImage: `url(${policy2})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content policy-page-banner-content">
          <h1 className="page-banner-title policy-page-banner-title">
            Policy
          </h1>
          <p className="page-banner-subtitle policy-page-banner-subtitle">
            Transparency and regulatory compliance in housing finance.
          </p>
        </div>
      </section>

      <div className="policy-links">
        <ul>
          {policies.map((policy, index) => (
            <li key={index}>
              <a
                href={policy.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {policy.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PolicyPage;
