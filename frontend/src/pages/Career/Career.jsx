import React, { useEffect, useState, useRef } from "react";
import { FaGraduationCap, FaSuitcase, FaBuilding, FaUserTie, FaEnvelope, FaMapMarkerAlt, FaUpload } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Career.css";
import careersHero from "../../assets/images/hiring.png";

const Career = () => {
  const [formData, setFormData] = useState({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    // Validate type
    const allowedExtensions = ['pdf', 'docx', 'doc'];
    const fileExt = selectedFile.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExt)) {
      setAlert({ type: "error", message: "Only PDF, DOCX, and DOC formats are supported." });
      setFile(null);
      return;
    }

    // Validate size (5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setAlert({ type: "error", message: "File size exceeds the 5MB limit." });
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setAlert({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setAlert({ type: "error", message: "Please upload your resume." });
      return;
    }

    setSubmitting(true);
    setAlert({ type: "info", message: "Submitting application..." });

    const submissionData = new FormData();
    Object.keys(formData).forEach(key => {
      submissionData.append(key, formData[key]);
    });
    submissionData.append("resume", file);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/careers/apply`, {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ type: "success", message: data.message });
        setFormData({
          position: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          message: ""
        });
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setAlert({ type: "error", message: data.message || "Failed to submit application." });
      }
    } catch (err) {
      setAlert({ type: "error", message: "Server connection error. Please make sure the backend is running." });
    } finally {
      setSubmitting(false);
    }
  };

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

    const elements = document.querySelectorAll(".animate-fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <div className="career-modern-page">
      {/* Hero Section */}
      <section className="career-hero">
        <img src={careersHero} alt="Careers Banner" className="hero-banner-img" />
        <div className="hero-content animate-fade-up">
          <h1>Build Your Future With Us</h1>
          <p>Join Nivara Housing Finance and help us fulfill the mission of "Housing for All".</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="career-main-section">
        <div className="career-modern-container">

          {/* Left Column - Information */}
          <div className="career-info-column">
            <div className="info-block animate-fade-up">
              <div className="block-header">
                <FaBuilding className="icon-red" />
                <h2>Why Nivara?</h2>
              </div>
              <p>
                Nivara, meaning “shelter”, is a Housing Finance Company offering
                the opportunity to participate in organizational building in the truest sense.
              </p>
              <p>
                We are committed to developing a unique business model and value proposition,
                with an emphasis on using technology to provide superior customer service.
                We offer a unique possibility for implementing fresh ideas, policies, and processes
                that are difficult to realize in established companies.
              </p>
              <p>
                The opportunities for growth will be tremendous. The added attraction is the satisfaction
                of serving the housing finance needs of those near the bottom of the pyramid while contributing
                to our core vision.
              </p>
            </div>

            <div className="info-block animate-fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="block-header">
                <FaUserTie className="icon-red" />
                <h2>Careers with Nivara</h2>
              </div>
              <p>
                We welcome candidates (Experienced & Freshers) keen to ride the exciting journey of
                creating an organization. We are looking for those who think out-of-the-box, handle
                uncertainties, and possess empathy and a strong value system.
              </p>
              <p>
                We have open positions across locations in Sales, Operations, Credit & Risk, Technical,
                and Legal. If you'd like to explore further, drop your CV to:
              </p>
              <a href="mailto:careers@nivarahousing.com" className="email-link">
                <FaEnvelope /> careers@nivarahousing.com
              </a>
            </div>

            <div className="jobs-section animate-fade-up" style={{ transitionDelay: '0.2s' }}>
              <h2>Current Openings</h2>

              <div className="job-modern-card">
                <div className="job-card-content">
                  <div className="job-title-row">
                    <h3><FaSuitcase className="job-icon" /> Sales Executive</h3>
                    <span className="experience-badge">0 - 1 Years</span>
                  </div>
                  <p className="education-req"><FaGraduationCap /> Any Educational Degree with good communication skills</p>
                  <p className="job-desc">
                    Candidates should be earnest and driven to create an impact. Looking for someone with an open mind,
                    willingness to learn and evolve.
                  </p>
                </div>
                <button className="apply-btn-outline" onClick={() => setShowModal(true)}>Apply Now <MdOutlineArrowForwardIos /></button>
              </div>

              <div className="job-modern-card">
                <div className="job-card-content">
                  <div className="job-title-row">
                    <h3><FaSuitcase className="job-icon" /> Sales Officer</h3>
                    <span className="experience-badge">0 - 1 Years</span>
                  </div>
                  <p className="education-req"><FaGraduationCap /> Any Educational Degree with good communication skills</p>
                  <p className="job-desc">
                    Candidates should be earnest and driven to create an impact. Looking for someone with an open mind,
                    willingness to learn and evolve.
                  </p>
                </div>
                <button className="apply-btn-outline" onClick={() => setShowModal(true)}>Apply Now <MdOutlineArrowForwardIos /></button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="career-form-column animate-fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="form-modern-wrapper">
              <div className="form-modern-header">
                <h2>Join Our Team</h2>
                <p>Fill out the form below and we'll be in touch soon.</p>
              </div>

              {alert.message && (
                <div className={`alert-banner ${alert.type}`} style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  fontSize: "18px",
                  fontWeight: 500,
                  textAlign: 'center',
                  background: alert.type === 'success' ? '#e6f4ea' : alert.type === 'error' ? '#fce8e6' : '#e8f0fe',
                  color: alert.type === 'success' ? '#137333' : alert.type === 'error' ? '#c5221f' : '#1a73e8',
                  border: `1px solid ${alert.type === 'success' ? '#c3e6cb' : alert.type === 'error' ? '#fad2cf' : '#d2e3fc'}`
                }}>
                  {alert.message}
                </div>
              )}

              <form className="modern-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Position Interested In</label>
                  <select name="position" value={formData.position} onChange={handleChange} required>
                    <option value="" disabled>Select an open position</option>
                    <option>Sales Executive</option>
                    <option>Sales Officer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-row-multi">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                  </div>
                </div>

                <div className="form-row-multi">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Current Location <FaMapMarkerAlt className="input-icon-inline" /></label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Bangalore, KA" required />
                </div>

                <div className="form-group">
                  <label>Cover Letter / Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us why you are a good fit..."></textarea>
                </div>

                <div className="form-upload-group">
                  <span className="upload-label">Resume / CV</span>
                  <div 
                    className={`upload-dropzone ${file ? 'has-file' : ''}`}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaUpload className="upload-icon" />
                    {file ? (
                      <div>
                        <p style={{ fontWeight: 600, color: '#333', margin: '5px 0' }}>Selected: {file.name}</p>
                        <span style={{ fontSize: "16px", color: "#211F1F" }}>(${(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                        <button 
                          type="button" 
                          className="remove-file-btn" 
                          onClick={(e) => { e.stopPropagation(); setFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                          style={{
                            display: 'block',
                            margin: '10px auto 0',
                            padding: '6px 16px',
                            background: '#ff4d4f',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: "16px",
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}
                        >
                          Remove File
                        </button>
                      </div>
                    ) : (
                      <>
                        <p>Drag and drop or click to upload</p>
                        <span>Supported formats: PDF, DOCX (Max: 5MB)</span>
                      </>
                    )}
                    <input 
                      type="file" 
                      className="file-input-hidden" 
                      ref={fileInputRef}
                      onChange={(e) => handleFile(e.target.files[0])}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn-modern" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="career-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="career-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="career-modal-close" onClick={() => setShowModal(false)} aria-label="Close modal">&times;</button>
            <div className="career-modal-header">
              <FaGraduationCap className="modal-header-icon" />
              <h2>Application Details</h2>
            </div>
            <div className="career-modal-body">
              <div className="requirement-tag animate-fade-in-quick">
                <FaGraduationCap className="icon-red" />
                <span>Any Educational Degree with good communication skills</span>
              </div>
              
              <p className="modal-paragraph">
                Candidates should be earnest and driven to create an impact with the work that they do. Looking for someone with an open mind, willingness to learn and evolve.
              </p>
              
              <p className="modal-paragraph">
                We welcome candidates (Experinced & Fresher) who are keen to ride the exciting (and expectedly rough) journey of creating an organization. We are looking for those with a predilection to thinking out-of-the-box, can handle the uncertainties, have respect & empathy for all individuals and a strong value system.
              </p>
              
              <div className="open-positions-highlight">
                <p>
                  We have open positions across locations in the functions of <strong>Sales, Operations, Credit & Risk, Technical and Legal</strong>. If you would like to explore further, please drop in your CV to:
                </p>
                <a href="mailto:careers@nivarahousing.com" className="modal-email-btn">
                  <FaEnvelope /> careers@nivarahousing.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;