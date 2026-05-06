import React from "react";
import "./Quicklink.css";
import { ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import quicklink2 from "../../../assets/images/quicklink2.png"

const Quicklink = () => {
  return (
    <div className="quicklink-page">

      {/* Hero Section */}
      <ScrollReveal direction="down">
        <section className="page-banner" style={{ backgroundImage: `url(${quicklink2})` }}>
          <div className="page-banner-overlay"></div>
          <div className="page-banner-content">
            <h1 className="page-banner-title">
              Quick <span className="text-red">Links</span>
            </h1>
            <p className="page-banner-subtitle">
              Easy access to essential resources and services.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Content Section */}
      <div className="quicklink-content animate-pop-up">

        <p>
          This privacy policy sets out how Nivara uses and protects any information
          that you give Nivara when you use this website.
        </p>

        <p>
          Nivara is committed to ensuring that your privacy is protected. Should we ask you
          to provide certain information by which you can be identified when using this website,
          then you can be assured that it will only be used in accordance with this privacy statement.
          Nivara may change this policy from time to time by updating this page. You should check
          this page from time to time to ensure that you are happy with any changes.
          This policy is effective from 2026.
        </p>

        <h3 className="animate-pop-up">What we collect</h3>
        <ul>
          <li>Name and Job Title.</li>
          <li>Contact Information including Email Address.</li>
          <li>Demographic Information such as Postcode, Preferences and Interests.</li>
          <li>Other Information relevant to Customer Surveys and/or Offers.</li>
        </ul>

        <h3 className="animate-pop-up">What we do with the information we gather</h3>
        <p>
          We require this information to understand your needs and provide you with a better service,
          and in particular for the following reasons:
        </p>

        <ul>
          <li>Internal Record Keeping.</li>
          <li>We may use the information to Improve our Products and Services.</li>
          <li>
            We may periodically send promotional email about new products, special offers or other
            information which we think you may find interesting using the email address which you have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you for market research purposes.
            We may contact you by email, phone, fax or mail.
          </li>
          <li>
            We may use the information to customize the website according to your interests.
          </li>
          <li>
            We may provide your information to our third party partners for marketing or promotional purposes.
          </li>
          <li className="quicklink-highlight">
            We will never sell your information.
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Quicklink;
