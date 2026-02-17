import React from "react";
import "./AboutUs.css";
import  hero from "../../../assets/images/hero.jpeg";

const AboutUs = () => {
  return (
    <div className="about-page">
 <section className="about-hero">
  <img src={hero} className="hero-img" alt="Hero"  />


  <div className="about-overlay">
    <h1>Nivara Home Finance </h1>
    <p>Building homes. Creating security. Empowering lives.</p>
  </div>
</section>



      <section className="about-section">
        <h2>Our Genesis</h2>
        <p>
          The genesis of Nivara Home Finance Limited is rooted in the shared
          vision of seasoned professionals who brought together decades of
          experience in retail banking, housing finance, and real estate. What
          began as a simple conversation evolved into a powerful mission — to
          create a trusted, impactful, and purpose-driven organization in the
          affordable housing finance sector.
        </p>
        <p>
          Founded on strong professional relationships, deep industry knowledge,
          and a shared passion for financial inclusion, Nivara was established
          to transform the way home loans are accessed and experienced in India.
        </p>
      </section>

      <section className="about-section light">
        <h2>Our Inspiration</h2>
        <p>
          The name "Nivara" is derived from the Sanskrit roots "नि + वृ" (Ni +
          Vru), meaning to cover, shelter, protect, and provide refuge.
        </p>
        <p>
          Shelter (निवारा) is one of the three fundamental human needs, along
          with food (अन्न) and clothing (वस्त्र). A home is not just a structure
          — it is a foundation for growth, stability, security, and human
          development.
        </p>
        <p>
          At Nivara, we believe that providing access to housing is not just a
          financial service — it is a contribution to building stronger
          families, communities, and futures.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Purpose</h2>
        <blockquote>
          To make home ownership accessible, affordable, and achievable for
          every family.
        </blockquote>
        <p>
          We exist to empower individuals, especially from underserved and
          informal sectors, by providing transparent, ethical, and responsible
          housing finance solutions that improve quality of life and long-term
          stability.
        </p>
      </section>

      <section className="about-section light">
        <h2>Our Journey</h2>
        <p>
          Nivara was incorporated under The Companies Act, 2013, with a clear
          objective of providing home loans to underserved segments of urban
          India.
        </p>
        <p>
          Since inception, Nivara has grown into a trusted name in the
          affordable housing finance ecosystem, driven by a mission to simplify
          processes, eliminate barriers, and deliver financial dignity to every
          customer. With strong corporate governance, ethical leadership, and a
          people-first culture, Nivara is committed to bringing transformative
          change in the affordable housing finance segment. We are not just a
          home loan provider — we are a partner in dreams, growth, and
          stability.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
