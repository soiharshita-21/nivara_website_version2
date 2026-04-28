import React, { useEffect } from "react";
import { FaGraduationCap, FaSuitcase, FaBuilding, FaUserTie, FaEnvelope, FaMapMarkerAlt, FaUpload } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Career.css";
import careersHero from "../../assets/images/hiring.png";

const Career = () => {
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
                <button className="apply-btn-outline">Apply Now <MdOutlineArrowForwardIos /></button>
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
                <button className="apply-btn-outline">Apply Now <MdOutlineArrowForwardIos /></button>
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

              <form className="modern-contact-form">
                <div className="form-group">
                  <label>Position Interested In</label>
                  <select defaultValue="">
                    <option value="" disabled>Select an open position</option>
                    <option>Sales Executive</option>
                    <option>Sales Officer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-row-multi">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>

                <div className="form-row-multi">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Current Location <FaMapMarkerAlt className="input-icon-inline" /></label>
                  <input type="text" placeholder="e.g. Bangalore, KA" />
                </div>

                <div className="form-group">
                  <label>Cover Letter / Message (Optional)</label>
                  <textarea rows="4" placeholder="Tell us why you are a good fit..."></textarea>
                </div>

                <div className="form-upload-group">
                  <span className="upload-label">Resume / CV</span>
                  <div className="upload-dropzone">
                    <FaUpload className="upload-icon" />
                    <p>Drag and drop or click to upload</p>
                    <span>Supported formats: PDF, DOCX (Max: 5MB)</span>
                    <input type="file" className="file-input-hidden" />
                  </div>
                </div>

                <button type="submit" className="submit-btn-modern">Submit Application</button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Career;