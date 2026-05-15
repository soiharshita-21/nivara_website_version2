import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import "./DynamicPage.css";

const DynamicPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5001/api/pages/${slug}`);
        setPageData(res.data);
      } catch (err) {
        console.error("Page not found", err);
        // Optional: navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="dynamic-page-loader">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="dynamic-page-not-found">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={() => navigate("/")} className="back-home-btn">Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="dynamic-page-container">
      <ScrollReveal direction="down">
        <section 
          className="page-banner custom-dynamic-banner"
          style={pageData.banner_image ? { backgroundImage: `url("${pageData.banner_image}")` } : {}}
        >
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">{pageData.title}</h1>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <section className="dynamic-content-section">
          <div className="quill-content" dangerouslySetInnerHTML={{ __html: pageData.content }} />
        </section>
      </ScrollReveal>
    </div>
  );
};

export default DynamicPage;
