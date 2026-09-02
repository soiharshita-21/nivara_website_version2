import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

import "./Branch.css";

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getBranchSlug = (branch = {}) => {
  const citySlug = slugify(branch.city);
  const stateSlug = slugify(branch.state);
  return [citySlug, stateSlug].filter(Boolean).join("-");
};

const BranchMicrosite = () => {
  const { branchSlug } = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlBranch = useMemo(() => {
    const city = queryParams.get("city");
    const state = queryParams.get("state");

    if (!city && !state) {
      return null;
    }

    return {
      city,
      state,
      opened: queryParams.get("opened") || "",
      address: queryParams.get("address") || `${city || ""}, ${state || ""}, India`.trim(),
      contact: queryParams.get("contact") || "1800-309-1516",
      map_link: queryParams.get("map_link") || ""
    };
  }, [queryParams]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/branches`
        );

        if (Array.isArray(response.data)) {
          setBranches(response.data);
        }
      } catch (error) {
        console.error("Failed to load branch microsite data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  const branch = useMemo(() => {
    const matchedBranch = branches.find((item) => getBranchSlug(item) === branchSlug);

    if (matchedBranch) {
      return matchedBranch;
    }

    return urlBranch;
  }, [branchSlug, branches, urlBranch]);

  const branchContact = branch?.contact || "1800-309-1516";
  const branchAddress = branch?.address || `${branch?.city || ""}, ${branch?.state || ""}, India`.trim();

  const branchHighlights = [
    "Home Loans",
    "Loan Against Property",
    "Balance Transfer",
    "Construction Finance",
    "Customer Support",
  ];

  const branchBenefits = [
    {
      title: "Local Guidance",
      text: "Meet our branch team for personalized guidance on eligibility, documentation, and the right loan option for your city.",
      icon: FaBuilding,
    },
    {
      title: "Fast Support",
      text: "Reach out easily for branch assistance, appointment scheduling, and quick clarification on mortgage requirements.",
      icon: FaClock,
    },
    {
      title: "Trusted Process",
      text: "Experience transparent support through every step of your home financing journey with Nivara Home Finance.",
      icon: FaShieldAlt,
    },
  ];

  const openDirections = () => {
    if (!branch?.map_link) {
      const query = encodeURIComponent(`Nivara Home Finance ${branch?.city || "Branch"}`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(branch.map_link, "_blank", "noopener,noreferrer");
  };

  const openPhone = () => {
    window.location.href = `tel:${branchContact.replace(/[^+\d]/g, "") || "18003091516"}`;
  };

  const openApplyForm = () => {
    window.open("/apply-home-loan", "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="branch-microsite-page"> 
        <div className="branch-microsite-shell">
          <div className="branch-microsite-loader">Loading branch microsite...</div>
        </div>
      </div>
    );
  }

  if (!branch) {
    return (
      <div className="branch-microsite-page">
        <div className="branch-microsite-shell">
          <div className="branch-microsite-not-found">
            <h2>Branch microsite not found</h2>
            <p>The selected branch could not be located. Please return to the branch locator.</p>
            <Link to="/contactus/branch/branch" className="branch-microsite-back-link">
              Go back to branch locator
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="branch-microsite-page">
      <div className="branch-microsite-shell">
        <div className="branch-microsite-hero">
          <div className="branch-microsite-hero-copy">
            <span className="branch-crumb">Nivara Branch Experience</span>
            <h1>{branch.city}</h1>
            <p className="branch-microsite-subtitle">{branch.state}</p>
            <p className="branch-microsite-description">
              Visit your nearest Nivara Home Finance branch for personalized support on home loans,
              loan against property, balance transfer, and mortgage planning that fits your needs.
            </p>

            <div className="branch-microsite-actions">
              <button className="branch-microsite-primary-btn" onClick={openDirections}>
                <FaMapMarkerAlt /> Get Directions
              </button>
              <button className="branch-microsite-secondary-btn" onClick={openPhone}>
                <FaPhoneAlt /> Call Branch
              </button>
            </div>

            <div className="branch-microsite-trust-row">
              <span><FaStar /> Trusted local assistance</span>
              <span><FaCheckCircle /> Home loan support for every step</span>
            </div>
          </div>

          <div className="branch-microsite-card">
            <h3>Branch Snapshot</h3>
            <div className="branch-microsite-grid">
              <div className="branch-microsite-stat">
                <FaMapMarkerAlt />
                <div>
                  <span>Location</span>
                  <strong>{branch.city}, {branch.state}</strong>
                </div>
              </div>
              <div className="branch-microsite-stat">
                <FaPhoneAlt />
                <div>
                  <span>Support</span>
                  <strong>{branchContact}</strong>
                </div>
              </div>
              <div className="branch-microsite-stat">
                <FaCalendarAlt />
                <div>
                  <span>Opened</span>
                  <strong>{branch.opened ? new Date(branch.opened).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" }) : "Available on request"}</strong>
                </div>
              </div>
              <div className="branch-microsite-stat">
                <FaBuilding />
                <div>
                  <span>Branch Standard</span>
                  <strong>Nivara Home Finance Ltd.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="branch-microsite-section">
          <div className="branch-microsite-section-heading">
            <h2>Why this branch works for you</h2>
            <p>Thoughtful support, faster assistance, and a more confident borrowing journey.</p>
          </div>

          <div className="branch-microsite-benefit-grid">
            {branchBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div className="branch-microsite-benefit-card" key={item.title}>
                  <div className="branch-microsite-benefit-icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="branch-microsite-section">
          <div className="branch-microsite-section-heading">
            <h2>Branch Details</h2>
            <p>Everything you need to reach, contact, or plan your visit.</p>
          </div>

          <div className="branch-microsite-info-grid">
            <div className="branch-microsite-info-card">
              <span className="branch-microsite-info-label">Address</span>
              <p>{branchAddress}</p>
            </div>
            <div className="branch-microsite-info-card">
              <span className="branch-microsite-info-label">Contact Support</span>
              <p>{branchContact}</p>
            </div>
            <div className="branch-microsite-info-card">
              <span className="branch-microsite-info-label">Branch Services</span>
              <p>Home Loans, LAP, Balance Transfer, Construction Finance, and more.</p>
            </div>
            <div className="branch-microsite-info-card">
              <span className="branch-microsite-info-label">Visit Us</span>
              <p>Locate the branch, plan your visit, and connect with our loan support team.</p>
            </div>
          </div>
        </section>

        <section className="branch-microsite-section">
          <div className="branch-microsite-section-heading">
            <h2>Solutions Available</h2>
            <p>Designed for a consistent experience across every branch location.</p>
          </div>

          <div className="branch-microsite-chips">
            {branchHighlights.map((item) => (
              <span className="branch-microsite-chip" key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="branch-microsite-section branch-microsite-cta-banner">
          <div>
            <span className="branch-microsite-info-label">Ready to move forward?</span>
            <h2>Speak with a Nivara advisor today</h2>
            <p>Our branch team can help you with the next step, documentation guidance, and loan support tailored to your goals.</p>
          </div>
          <div className="branch-microsite-cta-actions">
            <button className="branch-microsite-primary-btn" onClick={openPhone}>
              <FaPhoneAlt /> Contact Branch
            </button>
            <button className="branch-microsite-secondary-btn" onClick={openApplyForm}>
              <FaArrowRight /> Apply Online
            </button>
          </div>
        </section>

        <section className="branch-microsite-section">
          <div className="branch-microsite-section-heading">
            <h2>Other Branches</h2>
            <p>Browse nearby branch experiences and explore more location-based support.</p>
          </div>

          <div className="branch-microsite-quick-links">
            {branches.slice(0, 8).map((item) => (
              <button
                key={`${item.city}-${item.state}`}
                className="branch-microsite-quick-link"
                onClick={() => {
                  const params = new URLSearchParams({
                    city: item.city || "",
                    state: item.state || "",
                    opened: item.opened || "",
                    address: item.address || "",
                    contact: item.contact || "",
                    map_link: item.map_link || ""
                  }).toString();

                  window.open(`/branch/${getBranchSlug(item)}?${params}`, "_blank", "noopener,noreferrer");
                }}
              >
                <span>{item.city}</span>
                <FaArrowRight />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BranchMicrosite;
