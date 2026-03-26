import React, { useEffect } from "react";
import "./Privacy.css";
import pri from "../../assets/images/pri.jpg";

const PrivacyPolicy = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-pop-up, .animate-slide-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-banner animate-pop-up">
        <div className="privacy-band"></div>

        {/* Decorative background elements */}
        <div className="bg-decor top-left-decor"></div>
        <div className="bg-decor bottom-right-decor"></div>

        <div className="privacy-banner-container animate-pop-up">
          <div className="privacy-left">
            <h1 className="animate-pop-up">Privacy Policy</h1>
            <div className="privacy-text-band">
              <p>
                Your privacy matters to us at Nivara Home Finance Limited. We are
                committed to protecting the personal information of our customers
                and ensuring transparency in how data is collected, used, and
                safeguarded.
              </p>
            </div>
            
            <ul className="privacy-features">
              <li>
                <div className="feature-icon">
                  <div className="feature-icon-inner"></div>
                </div>
                Easy to Understand
              </li>
              <li>
                <div className="feature-icon">
                  <div className="feature-icon-inner"></div>
                </div>
                Built for Our Customers
              </li>
              <li>
                <div className="feature-icon">
                  <div className="feature-icon-inner"></div>
                </div>
                Complies with Privacy Laws
              </li>
            </ul>
          </div>

          <div className="privacy-right">
            <div className="privacy-image-wrapper animate-slide-up">
              <div className="arc-circle arc-outer-1"></div>
              <div className="arc-circle arc-outer-2"></div>
              <div className="arc-circle arc-inner"></div>
              <div className="privacy-image-center">
                <img src={pri} alt="Privacy Policy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content animate-pop-up">
        <h2 className="animate-pop-up">Introduction</h2>
        <p>
          Nivara Home Finance Limited is committed to protecting your privacy.
          We make the website, https://www.nivarahousing.com/ and all subdomains
          (the “Website”) available together with our services as further
          described in our Terms of Use https://www.nivarahousing.com/ (the
          “Services”). This Privacy Policy describes how we collect, store, use
          and distribute information about our users through the Website and
          Services.
        </p>

        <h2 className="animate-pop-up">Consent</h2>
        <p>
          By using the Website or our Services you consent to the use of your
          Personal Information as described in this Privacy Policy.
        </p>

        <h2 className="animate-pop-up">Collection of Information</h2>
        <p>
          We aim to collect, use and disclose only such information as is
          required to enable us to manage your account, to provide the Services,
          to maintain our customer/visitor lists, to respond to your inquiries
          or provide feedback, for identification and authentication purposes,
          and for service improvement.
        </p>

        <h2 className="animate-pop-up">Personal Information</h2>
        <p>
          “Personal Information” is personally identifiable information, such as
          your name, address, and e-mail address. It is always your choice
          whether or not to provide Personal Information but if you choose not
          to provide certain requested Personal Information, you may not be able
          to access some features of the Website or Services.
        </p>

        <h2 className="animate-pop-up">Non-Personal Information</h2>
        <p>
          “Non-Personal Information” includes anonymous data such as IP address,
          browser type, domain, operating system, and usage statistics. This
          data is used to improve the Website and Services.
        </p>

        <h2 className="animate-pop-up">Use of Information</h2>
        <p>
          We collect information for purposes including registration, account
          management, transactional notifications, marketing communications,
          statistics, system logs, cookies, and service improvement.
        </p>

        <h2 className="animate-pop-up">Cookies, Logs & Tracking</h2>
        <p>
          Cookies and clear gifs are used to track content usage and traffic on
          the Website. You may disable cookies in your browser, but some
          features of the Website may not function properly.
        </p>

        <h2 className="animate-pop-up">Disclosures & Transfers</h2>
        <p>
          We will not disclose or transfer your Personal Information to third
          parties without your permission, except as specified in this Privacy
          Policy or required by law.
        </p>

        <h2 className="animate-pop-up">Important Exceptions</h2>
        <p>
          We may disclose Personal Information if required by law, to protect
          rights or property, or during corporate restructuring, mergers, or
          acquisitions.
        </p>

        <h2 className="animate-pop-up">Security</h2>
        <p>
          We use commercially reasonable efforts to protect your Personal
          Information using technical, administrative, and physical safeguards
          including SSL encryption.
        </p>

        <h2 className="animate-pop-up">Retention</h2>
        <p>
          We retain Personal Information only as long as necessary for business
          or legal purposes.
        </p>

        <h2 className="animate-pop-up">Amendment of this Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time.
          Continued use of the Website signifies acceptance of any changes.
        </p>

        <h2 className="animate-pop-up">Access and Accuracy</h2>
        <p>
          You have the right to access and correct your Personal Information. We
          will make reasonable efforts to keep your information accurate and
          up-to-date.
        </p>

        <h2 className="animate-pop-up">Contact Us</h2>
        <p>
          If you have any questions, comments or requests, please contact us at:
          <br />
          <a href="mailto:contact@nivarahousing.com">
            contact@nivarahousing.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
