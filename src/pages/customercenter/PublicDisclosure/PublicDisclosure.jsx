import React from "react";
import "./PublicDisclosure.css";
import home3 from "../../../assets/images/home3.jpeg"; // add your image

const PublicDisclosure = () => {
  return (
    <div className="public-page">

      {/* Banner */}
      <div className="public-banner animate-pop-up">
        <img src={home3} alt="Public Disclosure" />
        <div className="public-overlay">
          <h1 className="animate-pop-up">Public Disclosure</h1>
        </div>
      </div>

      {/* Content */}
      <div className="public-content animate-pop-up">

        <p className="public-note">
          All documents are available for download. Click a document name to open or download.
        </p>

        {/* Public Disclosure Section */}
        <h2 className="animate-pop-up">PUBLIC DISCLOSURE</h2>
        <div className="public-links">
          <a href="/files/pd-mar-2021.pdf" target="_blank">Public Disclosure March 2021</a>
          <a href="/files/pd-jun-2021.pdf" target="_blank">Public Disclosure June 2021</a>
          <a href="/files/pd-sep-2021.pdf" target="_blank">Public Disclosure September 2021</a>
          <a href="/files/pd-dec-2021.pdf" target="_blank">Public Disclosure December 2021</a>
          <a href="/files/pd-mar-2022.pdf" target="_blank">Public Disclosure March 2022</a>
          <a href="/files/pd-jun-2022.pdf" target="_blank">Public Disclosure June 2022</a>
          <a href="/files/pd-sep-2022.pdf" target="_blank">Public Disclosure September 2022</a>
          <a href="/files/pd-dec-2022.pdf" target="_blank">Public Disclosure December 2022</a>
          <a href="/files/pd-mar-2023.pdf" target="_blank">Public Disclosure March 2023</a>
          <a href="/files/pd-jun-2023.pdf" target="_blank">Public Disclosure June 2023</a>
          <a href="/files/pd-sep-2023.pdf" target="_blank">Public Disclosure September 2023</a>
          <a href="/files/pd-dec-2023.pdf" target="_blank">Public Disclosure December 2023</a>
          <a href="/files/pd-mar-2024.pdf" target="_blank">Public Disclosure March 2024</a>
          <a href="/files/pd-jun-2024.pdf" target="_blank">Public Disclosure June 2024</a>
          <a href="/files/pd-sep-2024.pdf" target="_blank">Public Disclosure September 2024</a>
          <a href="/files/pd-dec-2024.pdf" target="_blank">Public Disclosure December 2024</a>
          <a href="/files/pd-mar-2025.pdf" target="_blank">Public Disclosure March 2025</a>
          <a href="/files/pd-jun-2025.pdf" target="_blank">Public Disclosure June 2025</a>
          <a href="/files/pd-sep-2025.pdf" target="_blank">Public Disclosure September 2025</a>
          <a href="/files/pd-dec-2025.pdf" target="_blank">Public Disclosure December 2025</a>
        </div>

        {/* Sarfaesi Section */}
        <h2 className="animate-pop-up">SARFAESI ATTACHMENTS</h2>
        <div className="public-links">
          <a href="/files/sarfaesi-31-aug-2025.pdf" target="_blank">
            Updated list of properties under SARFAESI Act as on 31st August 2025
          </a>
          <a href="/files/sarfaesi-30-sep-2025.pdf" target="_blank">
            Updated list of properties under SARFAESI Act as on 30th September 2025
          </a>
          <a href="/files/sarfaesi-31-oct-2025.pdf" target="_blank">
            Updated list of properties under SARFAESI Act as on 31st October 2025 (1)
          </a>
          <a href="/files/sarfaesi-30-nov-2025.pdf" target="_blank">
            Updated list of properties under SARFAESI Act as on 30th November 2025
          </a>
          <a href="/files/sarfaesi-31-dec-2025.pdf" target="_blank">
            Updated list of properties under SARFAESI Act as on 31st December 2025
          </a>
          <a href="/files/sarfaesi-31-jan-2026.pdf" target="_blank">
            Updated list of properties under SARFAESI Act as on 31st January 2026
          </a>
        </div>

      </div>
    </div>
  );
};

export default PublicDisclosure;
