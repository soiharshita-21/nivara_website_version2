import React from "react";
import "./Privacy.css";
import hero from "../../assets/images/hero.jpeg";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <img src={hero} alt="Privacy" className="privacy-hero-img" />
        <div className="privacy-hero-overlay">
          <h1>Privacy Policy</h1>
          <p>Your privacy matters to us at Nivara Home Finance Limited</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <h2>Introduction</h2>
        <p>
          Nivara Home Finance Limited is committed to protecting your privacy.
          We make the website, https://www.nivarahousing.com/ and all subdomains
          (the “Website”) available together with our services as further
          described in our Terms of Use https://www.nivarahousing.com/ (the
          “Services”). This Privacy Policy describes how we collect, store, use
          and distribute information about our users through the Website and
          Services.
        </p>

        <h2>Consent</h2>
        <p>
          By using the Website or our Services you consent to the use of your
          Personal Information as described in this Privacy Policy.
        </p>

        <h2>Collection of Information</h2>
        <p>
          We aim to collect, use and disclose only such information as is
          required to enable us to manage your account, to provide the Services,
          to maintain our customer/visitor lists, to respond to your inquiries
          or provide feedback, for identification and authentication purposes,
          and for service improvement.
        </p>

        <h2>Personal Information</h2>
        <p>
          “Personal Information” is personally identifiable information, such as
          your name, address, and e-mail address. It is always your choice
          whether or not to provide Personal Information but if you choose not
          to provide certain requested Personal Information, you may not be able
          to access some features of the Website or Services.
        </p>

        <h2>Non-Personal Information</h2>
        <p>
          “Non-Personal Information” includes anonymous data such as IP address,
          browser type, domain, operating system, and usage statistics. This
          data is used to improve the Website and Services.
        </p>

        <h2>Use of Information</h2>
        <p>
          We collect information for purposes including registration, account
          management, transactional notifications, marketing communications,
          statistics, system logs, cookies, and service improvement.
        </p>

        <h2>Cookies, Logs & Tracking</h2>
        <p>
          Cookies and clear gifs are used to track content usage and traffic on
          the Website. You may disable cookies in your browser, but some
          features of the Website may not function properly.
        </p>

        <h2>Disclosures & Transfers</h2>
        <p>
          We will not disclose or transfer your Personal Information to third
          parties without your permission, except as specified in this Privacy
          Policy or required by law.
        </p>

        <h2>Important Exceptions</h2>
        <p>
          We may disclose Personal Information if required by law, to protect
          rights or property, or during corporate restructuring, mergers, or
          acquisitions.
        </p>

        <h2>Security</h2>
        <p>
          We use commercially reasonable efforts to protect your Personal
          Information using technical, administrative, and physical safeguards
          including SSL encryption.
        </p>

        <h2>Retention</h2>
        <p>
          We retain Personal Information only as long as necessary for business
          or legal purposes.
        </p>

        <h2>Amendment of this Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time.
          Continued use of the Website signifies acceptance of any changes.
        </p>

        <h2>Access and Accuracy</h2>
        <p>
          You have the right to access and correct your Personal Information. We
          will make reasonable efforts to keep your information accurate and
          up-to-date.
        </p>

        <h2>Contact Us</h2>
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
