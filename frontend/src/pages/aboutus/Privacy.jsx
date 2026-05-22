import React, { useEffect } from "react";
import "./Privacy.css";
import pri from "../../assets/images/privacy.png";

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
      <section className="page-banner animate-pop-up" style={{ backgroundImage: `url(${pri})` }}>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            Privacy <span className="text-red">Policy</span>
          </h1>
          <p className="page-banner-subtitle">
            Your trust is our priority. We safeguard your personal information with the highest standards.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content animate-pop-up">
        <h2 className="animate-pop-up">Introduction</h2>
        <p>
          Nivara Home Finance Limited is committed to protecting your privacy. We make the website, https://www.nivarahousing.com/ and all subdomains (the “Website”) available together with our services as further described in our Terms of Use https://www.nivarahousing.com/ (the “Services”). This Privacy Policy describes how we collect, store, use and distribute information about our users through the Website and Services.

          Consent: By using the Website or our Services you consent to the use of your Personal Information as described in this Privacy Policy.
        </p>

        <h2 className="animate-pop-up">Consent</h2>
        <p>
          By using the Website or our Services you consent to the use of your
          Personal Information as described in this Privacy Policy.
        </p>

        <h2 className="animate-pop-up">Collection of Information</h2>
        <p>
          We aim to collect, use and disclose only such information as is required to enable us to manage your account, to provide the Services, to maintain our customer/visitor lists, to respond to your inquiries or provide feedback, for identification and authentication purposes, for service improvement. We will maintain the confidentiality of any contact information you provide to us on signing up for our Services or contacting us with questions or for further information and we will use it only for the purposes for which we have collected it (subject to the exclusions and disclosures we have listed below), unless you agree that we may disclose it to other third parties.

          Two types of information may be collected through the Website and our Services: Personal Information and Non-Personal Information. This Privacy Policy does not extend to the collection, use or disclosure of the following information which is currently not limited by applicable privacy laws: (a) information that is publicly available, such as names, addresses, telephone numbers and electronic address when listed in a directory or made available through directory assistance; or (b) Non-Personal Information (as defined further below).
        </p>

        <h2 className="animate-pop-up">Personal Information</h2>
        <p>
          “Personal Information” is personally identifiable information, such as your name, address, and e-mail address. At the time of collection, we will clearly identify the information being collected and the purposes for which it will be used. It is always your choice whether or not to provide Personal Information but if you choose not to provide certain requested Personal Information, in some instances you may not be able to register to use the Website or be able to access and use the Website at all. In other instances, your choice not to provide certain other Personal Information may mean that you will not be able to use certain features of the Website. We may collect Personal Information in respect of the Website through registration processes; communications with you; information downloads; service purchases; user support; and surveys.
        </p>

        <h2 className="animate-pop-up">Non-Personal Information</h2>
        <p>
          “Non-Personal Information” is information of an anonymous nature, such as an Internet Protocol Address (IP Address), the domain used to access the Website, and the type and version of browser or operating system being used by visitors to the website. Aggregate information, such as demographic statistics of our users (e.g. average age or geographical allocation of our users), number of visitors, what pages users access or visit, and average time spent on the Website is not considered Personal Information. Similarly, business contact information such as the name, title, business address, or telephone number of a business or professional person or an employee of an organization is not considered Personal Information.

          Although the use of certain Non-Personal Information collected, used or disclosed through the Internet as described herein is not restricted (and to the extent that such is the case, the obligations under this Privacy Policy do not apply to such information), we provide information in this Privacy Policy about the collection of such information for the sake of transparency with respect to the operation of the Website. Such Non-Personal Information is collected or derived by us in the course of operating this Website. For example, our web servers may automatically collect Non-Personal Information that is provided through your browser or stored in a cookie when you choose to visit the Website.
        </p>

        <h2 className="animate-pop-up">Use of Information</h2>
        <p>
          We collect information for the following purposes:
        </p>

        <h2 className="animate-pop-up">Registration</h2>
        <p>
          In order to register for our Services you must provide certain Personal Information to us such as your full name, address, and email address. In general, none of your account registration information will be shared with any other users of the Website or our Services.
        </p>

        <h2 className="animate-pop-up">Account Information:</h2>
        <p>
          We collect information about your Company (such as company name, address and contact information), Users (such as user name, address, phone number, email address, appraisal designations, performance and usage statistics, and language preferences) and Properties/Appraisals (such as property and location information, and client/requestor information).
        </p>

        <h2 className="animate-pop-up">Transactional Notifications:</h2>
        <p>
          We provide notifications for certain activities relating to your use of our Services despite your indicated e-mail preferences, for example we may send you notices of any updates to our Terms of Use or Privacy Policy, forgotten password requests, or security related issues.
        </p>

        <h2 className="animate-pop-up">Marketing Communications:</h2>
        <p>
          If you opt-in to receive marketing communications from us, we will keep you up to date on our products and services. You may withdraw your consent to receiving marketing communications from us at any time by following the opt-out instructions in each communication, or by contacting our marketing department at contact@nivarahousing.com
        </p>

        <h2 className="animate-pop-up">Statistics:</h2>
        <p>
          We also collect statistics about use of the Services. This information will be kept confidential, however, aggregate statistics that do not personally identify an individual will be kept by us and such aggregate statistics may be made available to other members or third parties.
        </p>

        <h2 className="animate-pop-up">System Logs, Cookies & Clear Gifs:</h2>
        <p>
          Cookies and clear gifs are used by us to track content usage and traffic on the Website. A cookie is a feature of your web browser that consists of a text file that is placed on your hard disk by a web server. A clear gif is similar to a cookie, however it is embedded in website pages rather than on the user’s hard drive. The Website uses cookies and clear gifs to help it compile aggregate statistics about usage of this Website, such as how many users visit the Website, how long users spend viewing the Website, and what pages are viewed most often. This information is used to improve the content of the Website. You can set your browser to notify you when you are sent a cookie. This gives you the chance to decide whether or not to accept it. If you disable cookies, you may not be able to take advantage of all the features of the Website. Clear gifs are also used by us in emails to help us understand which emails are opened by recipients.
          Your IP address is reported by your web browser whenever you visit a page on the Website. This information is recorded together with your registration information on our databases.
        </p>

        <h2 className="animate-pop-up">Advertisements:</h2>
        <p>
          Advertisements appearing on the Website may be delivered by us or one or more third-party web advertisers. These third party web advertisers may set cookies. These cookies allow the advertisement server operated by that third party to recognize your computer each time they send you an online advertisement. Accordingly, advertisement servers may compile information about where or whether you viewed their advertisements and which advertisements you clicked on. This information allows web advertisers to deliver targeted advertisements that they believe will be of most interest to you. The Privacy Policy applies to cookies placed on your computer by us, but does not cover the use of cookies by any third-party web advertisers. For the privacy practices of such third-party web advertisers, you should consult the applicable privacy policy for the relevant third-party web advertiser(s). If we plan to use your Personal Information in future for any other purposes not identified above, we will only do so after informing you by updating this Privacy Policy. See further the section of this Privacy Policy entitled ‘Amendment of this Policy’.
        </p>

        <h2 className="animate-pop-up">Disclosures & Transfers:</h2>
        <p>
          We have put in place contractual and other organizational safeguards with our agents (see further below) to ensure a proper level of protection of your Personal Information (see further Security below). In addition to those measures, we will not disclose or transfer your Personal Information to third parties without your permission, except as specified in this Privacy Policy (see further Important Exceptions below).
        </p>

        <h2 className="animate-pop-up">Important Exceptions:</h2>
        <p>
          We may disclose your Personal Information to third parties without your consent if we have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) our rights or property, other Website members, other users of the Services, or anyone else (including the rights or property of anyone else) that could be harmed by such activities. We may disclose Personal Information when we believe in good faith that such disclosure is required by and in accordance with the law. We may also disclose your Personal Information in connection with a corporate re-organization, a merger or amalgamation with another entity, a sale of all or a substantial portion of our assets or stock, including any due diligence exercise carried out in relation to the same, provided that the information disclosed continues to be used for the purposes permitted by this Privacy Policy by the entity acquiring the information.
          <br />

          <h2 className="animate-pop-up">Retention:</h2>
          <p>
            We will keep your Personal Information for as long as it remains necessary for the identified purpose or as required by law, which may extend beyond the termination of our relationship with you. We may retain certain data as necessary to prevent fraud or future abuse, or for legitimate business purposes, such as analysis of aggregated, non-personally-identifiable data, account recovery, or if required by law. All retained personal information will remain subject to the terms of this Privacy Policy. If you request that your name be removed from our databases, it may not be possible to completely delete all your Personal Information due to technological and legal constraints.
          </p>

          <h2 className="animate-pop-up">Amendment of this Policy:</h2>
          <p>
            We reserve the right to change this Privacy Policy at any time. If we decide to change this Privacy Policy in the future, we will post an appropriate notice on our Privacy Policy page https://www.nivarahousing.com/privacy. Any non-material change (such as clarifications) to this Privacy Policy will become effective on the date the change is posted and any material changes will become effective 30 days from their posting on the Website. Unless stated otherwise, our current Privacy Policy applies to all Personal Information that we have about you. The date on which the latest update was made is indicated at the bottom of this document. We recommend that you print a copy of this Privacy Policy for your reference and revisit this policy from time to time to ensure you are aware of any changes. Your continued use of the Website signifies your acceptance of any changes.
          </p>

          <h2 className="animate-pop-up">Access and Accuracy:</h2>
          <p>
            You have the right to access the Personal Information we hold about you in order to verify the Personal Information we have collected in respect to you and to have a general account of our uses of that information. Upon receipt of your written request, we will provide you with a copy of your Personal Information although in certain limited circumstances, we may not be able to make all relevant information available to you such as where that information also pertains to another user. In such circumstances we will provide reasons for the denial to you upon request. We will endeavour to deal with all requests for access and modifications in a timely manner.
            We will make every reasonable effort to keep your Personal Information accurate and up-to-date, and we will provide you with mechanisms to update, correct, delete or add to your Personal Information as appropriate. As appropriate, this amended Personal Information will be transmitted to those parties to which we are permitted to disclose your information. Having accurate Personal Information about you enables us to give you the best possible service.
          </p>

          <h2 className="animate-pop-up">Contact Us:</h2>
          <p>You can help by keeping us informed of any changes such as a change of address or telephone number. If you would like to access your information, if you have any questions, comments or suggestions of if you find any errors in our information about you, please
          </p>



          <a href="mailto:contact@nivarahousing.com">
            contact@nivarahousing.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
