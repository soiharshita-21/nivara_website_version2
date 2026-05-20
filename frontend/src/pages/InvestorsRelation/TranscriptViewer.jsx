import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./TranscriptViewer.css";

const TranscriptViewer = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const file = searchParams.get("file");
  const hasDisclaimer = searchParams.get("disclaimer") === "true";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!file) {
    return (
      <div className="viewer-error-container">
        <h2>Document Not Found</h2>
        <p>The requested transcript could not be loaded.</p>
      </div>
    );
  }

  const disclaimerText = "Disclaimer: The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.";

  return (
    <div className="transcript-viewer-container">
      <div className="transcript-viewer-content">
        {/* Red Title (Exactly matching the user's screenshot layout) */}
        <h1 className="transcript-title">{title || "Transcript"}</h1>
        
        {/* Disclaimer Text */}
        {hasDisclaimer && (
          <div className="transcript-disclaimer-box">
            <p className="disclaimer-paragraph">
              <strong className="disclaimer-label">Disclaimer:</strong>{" "}
              {disclaimerText.replace("Disclaimer: ", "")}
            </p>
          </div>
        )}

        {/* Embedded PDF Viewer (File/PDF shown below the text) */}
        <div className="pdf-embed-wrapper">
          <iframe 
            src={`${file}#view=FitH`} 
            title={title || "PDF Viewer"}
            width="100%" 
            height="1100px"
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default TranscriptViewer;
