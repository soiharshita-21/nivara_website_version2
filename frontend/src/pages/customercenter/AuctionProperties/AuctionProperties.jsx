import React, { useState, useEffect } from 'react';
import './AuctionProperties.css';
import { FileText, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import auctionBg from '../../../assets/images/auction.png';

const defaultAuctionDocuments = [
  {
    title: "Sale Cum Auction Notice",
    borrower: "Balasaheb Sudam Tupe",
    url: "/files/sale-notice-tupe.pdf"
  },
  {
    title: "Sale Cum Auction Notice",
    borrower: "Md Manjunath",
    url: "/files/sale-notice-manjunath.pdf"
  },
  {
    title: "Sale Cum Auction Notice",
    borrower: "Amarnath",
    url: "/files/sale-notice-amarnath.pdf"
  }
];

const AuctionProperties = () => {
  const [documents, setDocuments] = useState(defaultAuctionDocuments);

  useEffect(() => {
    const fetchAuctionDocs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.port === '3000' ? 'http://localhost:5001' : '');
        const res = await axios.get(`${baseUrl}/api/documents?category=auction&t=${Date.now()}`);
        if (Array.isArray(res.data)) {
          if (res.data.length > 0) {
            const apiDocs = res.data.map(doc => {
              let borrowerName = "Auction Property Notice";
              if (doc.extra_info) {
                try {
                  const parsed = typeof doc.extra_info === 'string' ? JSON.parse(doc.extra_info) : doc.extra_info;
                  borrowerName = parsed?.borrower || parsed || "Auction Property Notice";
                } catch (e) {
                  borrowerName = doc.extra_info;
                }
              }
              return {
                title: doc.title,
                borrower: borrowerName,
                url: doc.full_url || doc.file_url
              };
            });
            setDocuments(apiDocs);
          } else {
            setDocuments([]);
          }
        }
      } catch (err) {
        console.error("Failed to load live auction documents, using fallback:", err);
        setDocuments(defaultAuctionDocuments);
      }
    };

    fetchAuctionDocs();

    const handleUpdate = () => fetchAuctionDocs();
    const handleStorage = (e) => {
      if (e.key === "nivara_document_update_timestamp") fetchAuctionDocs();
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
    <div className="auction-page">
      <div className="page-banner" style={{ backgroundImage: `url(${auctionBg})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">Properties for <span className="text-red"> Auction</span></h1>
          <p className="page-banner-subtitle">Realization of dues through public e-auction</p>
        </div>
      </div>

      <div className="auction-container">
        <ScrollReveal direction="up" distance={40} delay={0.2}>
          <div className="auction-content">
            <div className="content-glow"></div>
            <p>
              Whereas the Authorized Officer of Nivara Home Finance Ltd. under Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (in short ‘SARFAESI Act) and in exercise of powers conferred under Section 13(12) read with the Security Interest (Enforcement) Rules, 2002 issued Demand Notice under Sec. 13(2) of SARFAESI Act calling upon the below-mentioned Borrowers/Co-borrowers/mortgagors/Guarantors to repay the amount mentioned in the notice being the amount due together with further interest thereon at the contractual rate plus all costs charges and incidental expenses etc. till the date of payment within 30 days from the date of the said notice.
            </p>
            <p>
              The following Borrowers/Co-borrowers/mortgagors/Guarantors having failed to repay the above said amount within the specified period. Notice is hereby given to the public in general and in particular to the Borrower (s) and Co-Borrower(s) that the authorized officer has taken over possession in exercise of powers conferred under Section 13(4) of SARFAESI Act read with Security Interest (Enforcement) Rules, 2002, which is to be sold by way of auction on “As Is Where Is Basis”, “As Is What Is Basis”, “Whatever There Is Basis”, and “No Recourse Basis” for realization of the dues to the Nivara Home Finance Ltd., (Secured Creditor).
            </p>
            <div className="auction-highlight">
              <div className="highlight-icon">
                <ExternalLink size={20} />
              </div>
              <p>
                Public E-Auction conduct through: <a href="https://sarfaesi.auctiontiger.net" target="_blank" rel="noopener noreferrer">https://sarfaesi.auctiontiger.net</a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="auction-documents-section">
          <ScrollReveal direction="up" distance={30} delay={0.3}>
            <div className="section-header">
              <div className="header-line"></div>
              <h2>Auction Documents</h2>
              <div className="header-line"></div>
            </div>
          </ScrollReveal>

          <div className="documents-grid">
            {documents.map((doc, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                distance={50}
                delay={0.1 * index}
                className="doc-reveal-wrapper"
              >
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="document-card">
                  <div className="doc-card-header">
                    <div className="pdf-icon-wrapper">
                      <FileText className="pdf-icon" size={28} />
                      <span className="pdf-label">PDF</span>
                    </div>
                    <div className="download-circle">
                      <Download size={18} />
                    </div>
                  </div>
                  <div className="doc-details">
                    <h3>{doc.title}</h3>
                    <p>{doc.borrower}</p>
                  </div>
                  <div className="doc-card-footer">
                    <span>View Document</span>
                    <ExternalLink size={14} />
                  </div>
                  <div className="card-hover-bg"></div>
                </a>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuctionProperties;

