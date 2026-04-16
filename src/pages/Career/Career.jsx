import React, { useEffect } from "react";
import "./Career.css";

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

    const elements = document.querySelectorAll(".animate-pop-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="career-page">
      <div className="career-container animate-pop-up">
        {/* LEFT CONTENT */}
        <div className="career-content animate-pop-up">
          <h1 className="animate-pop-up">Career</h1>
          <h2 className="animate-pop-up">Why Nivara?</h2>
          <p className="animate-pop-up">
            Nivara, meaning “shelter”, is a Housing Finance Company offers
            opportunity to participate in organizational building in the truest
            sense.
          </p>
          <p className="animate-pop-up">
            We at Nivara are committed to develop a unique business model and value
            proposition, with emphasis on using technology to provide superior
            customer service. It therefore offers an unique possibility for
            implementing fresh ideas, policies and processes – which otherwise may
            be difficult in old and established companies.
          </p>
          <p className="animate-pop-up">
            Needless to mention, the opportunities for growth will be tremendous.
            The added attraction is the satisfaction of serving the housing
            finance needs of those near the bottom of the pyramid as well as
            contributing to the larger mission of <b>“Housing for All”</b>.
          </p>

          <h2 className="red animate-pop-up">Careers with Nivara</h2>
          <p className="animate-pop-up">
            We welcome candidates (Experienced & Fresher) who are keen to ride the
            exciting (and expectedly rough) journey of creating an organization.
            We are looking for those with a predilection to thinking out-of-the-box,
            can handle the uncertainties, have respect & empathy for all
            individuals and a strong value system.
          </p>
          <p className="animate-pop-up">
            We have open positions across locations in the functions of Sales,
            Operations, Credit & Risk, Technical and Legal. If you would like to
            explore further, please drop in your CV to
            <b> careers@nivarahousing.com</b>
          </p>

          {/* JOB OPENINGS */}
          <div className="job-section animate-pop-up">
            <h2 className="animate-pop-up">Job Openings</h2>

            <div className="job-card animate-pop-up">
              <h3 className="animate-pop-up">Sales Executive</h3>
              <p><b>Years of Experience:</b> 0 to 1 year</p>
              <p>Any Educational Degree with good communication skills</p>
              <p>
                Candidates should be earnest and driven to create an impact with
                the work that they do. Looking for someone with an open mind,
                willingness to learn and evolve.
              </p>
            </div>

            <div className="job-card animate-pop-up">
              <h3 className="animate-pop-up">Sales Officer</h3>
              <p><b>Years of Experience:</b> 0 to 1 year</p>
              <p>Any Educational Degree with good communication skills</p>
              <p>
                Candidates should be earnest and driven to create an impact with
                the work that they do. Looking for someone with an open mind,
                willingness to learn and evolve.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="career-form animate-pop-up">
          <div className="form-header">WE'RE HIRING</div>

          <form>
            <label>Select your Careers</label>
            <select>
              <option>Sales Executive</option>
              <option>Sales Officer</option>
            </select>

            <div className="form-row animate-pop-up">
              <div>
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Contact Number</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row animate-pop-up">
              <div>
                <label>Your email</label>
                <input type="email" />
              </div>
              <div>
                <label>Location</label>
                <input type="text" />
              </div>
            </div>

            <div>
              <label>Your message (optional)</label>
              <textarea rows="4"></textarea>
            </div>

            <div className="upload-box">
              <label>Upload Your CV</label>
              <input type="file" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;