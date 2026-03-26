import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import TopBar from "./components/TopBar/topbar";
import "./App.css";
import Footer from "./components/Footer/footer";
import IsoBanner from "./components/IsoBanner/IsoBanner";

import AboutUs from "./pages/aboutus/AboutUs/AboutUs";
import VisionMission from "./pages/aboutus/VisionMission/VisionMission";
import ObjectivesCoreValues from "./pages/aboutus/ObjectivesCoreValues/ObjectivesCoreValues";
import Investors from "./pages/aboutus/Investors";
import BoardOfDirectors from "./pages/aboutus/BoardOfDirectors/BoardOfDirectors";
import ManagementTeam from "./pages/aboutus/ManagementTeam/ManagementTeam";
import Privacy from "./pages/aboutus/Privacy";
import Policy from "./pages/aboutus/Policy";

import HomeLoanPurchase from "./pages/products/HomeLoanPurchase/HomeLoanPurchase";
import ConstructionLoan from "./pages/products/ConstructionLoan/ConstructionLoan";
import CompositeHomeLoan from "./pages/products/CompositeHomeLoan/CompositeHomeLoan";
import LoanAgainstProperty from "./pages/products/LoanAgainstProperty/LoanAgainstProperty";
import BalanceTransfer from "./pages/products/BalanceTransfer/BalanceTransfer";
import RefinanceLoan from "./pages/products/RefinanceLoan/RefinanceLoan";
import ImprovementAndExtension from "./pages/products/ImprovementandExtension/ImprovementandExtension";
import ENach from "./pages/customercenter/Enach/Enach";

import InterestRate from "./pages/customercenter/InterestRate/InterestRate";
import QuickLink from "./pages/customercenter/Quicklink/Quicklink";
import Calculator from "./pages/customercenter/Calculator/Calculator";
import InvestorsRelation from "./pages/InvestorsRelation/InvestorsRelation";

import PublicDisclosure from "./pages/customercenter/PublicDisclosure/PublicDisclosure";
import CorporateGovernance from "./pages/customercenter/corporategovernance";
import Download from "./pages/customercenter/Download/Download";
import Faqs from "./pages/customercenter/Faqs/Faqs";
import Lenders from "./pages/OurPartners/Lenders/Lenders";
import OurInsurancePartners from "./pages/OurPartners/OurInsurancePartners/OurInsurancePartners";
import Blog from "./pages/media/Blog/Blog";
import PressRelease from "./pages/media/pressrelease/pressrelease";
import NivaraGallery from "./pages/media/nivaragallery/nivaragallery";
import Career from"./pages/Career/Career";
import Branch from "./pages/contactus/Branch/Branch";
import Offices from "./pages/contactus/Offices/Offices";
import FairPracticeCode from "./pages/customercenter/FairPracticeCode/FairPracticeCode";
import LoanApplyForm from "./pages/loanapplyform";
const ScrollAnimations = () => {
  const location = useLocation();

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

    setTimeout(() => {
      const elements = document.querySelectorAll(".animate-pop-up");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollAnimations />
      <TopBar />
      <Navbar />

      <div className="page-content">
        <IsoBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/vision-mission" element={<VisionMission />} />
          <Route
            path="/aboutus/core-values"
            element={<ObjectivesCoreValues />}
          />
          <Route path="/aboutus/investors" element={<Investors />} />

          <Route path="/aboutus/board" element={<BoardOfDirectors />} />
          <Route path="/aboutus/management" element={<ManagementTeam />} />
          <Route path="/aboutus/privacy" element={<Privacy />} />
          <Route path="/aboutus/policy" element={<Policy />} />

          <Route path="/services/home-loan" element={<HomeLoanPurchase />} />
          <Route
            path="/services/construction-loan"
            element={<ConstructionLoan />}
          />
          <Route
            path="/services/composite-loan"
            element={<CompositeHomeLoan />}
          />
          <Route path="/services/lap" element={<LoanAgainstProperty />} />
          <Route
            path="/services/balance-transfer"
            element={<BalanceTransfer />}
          />
          <Route path="/services/refinance-loan" element={<RefinanceLoan />} />
          <Route
            path="/services/improvementandextension"
            element={<ImprovementAndExtension />}
          />
          <Route path="investorsrelation" element={<InvestorsRelation />} />
          <Route path="/customercenter/e-nach" element={<ENach />} />
          <Route
            path="/customercenter/interest-rate"
            element={<InterestRate />}
          />
          <Route path="/customercenter/quick-link" element={<QuickLink />} />
          <Route
            path="/customercenter/fair-practice-code"
            element={<FairPracticeCode />}
          />
          <Route
            path="/customercenter/publicdisclosure"
            element={<PublicDisclosure />}
          />
          <Route
            path="/customercenter/corporategovernance"
            element={<CorporateGovernance />}
          />
          <Route path="/customercenter/download" element={<Download />} />
          <Route path="/customercenter/calculator" element={<Calculator/>} />
          <Route path="/customercenter/faqs" element={<Faqs />} />
          <Route path="/ourpartners/lenders/lenders" element={<Lenders />} />
          <Route
            path="/ourpartners/ourinsurancepartners/ourinsurancepartners"
            element={<OurInsurancePartners />}
          />

          <Route path="/media/blog/blog" element={<Blog />} />
          <Route path="/media/pressrelease/pressrelease" element={<PressRelease />} />
          <Route path="/media/nivara-gallery/nivara-gallery" element={<NivaraGallery />} />
          <Route path="/career/career" element={<Career />} /> 
          <Route path="/contactus/branch/branch" element={<Branch />} />
          <Route path="/contactus/offices/offices" element={<Offices />} />
          <Route path="/apply-home-loan" element={<LoanApplyForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
