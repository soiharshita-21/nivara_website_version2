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
import AuctionProperties from "./pages/customercenter/AuctionProperties/AuctionProperties";
import Lenders from "./pages/OurPartners/Lenders/Lenders";
import OurInsurancePartners from "./pages/OurPartners/OurInsurancePartners/OurInsurancePartners";
import Blog from "./pages/media/Blog/Blog";
import BlogDetail from "./pages/media/Blog/BlogDetail";
import PressRelease from "./pages/media/pressrelease/pressrelease";
import NivaraGallery from "./pages/media/nivaragallery/nivaragallery";
import Career from "./pages/Career/Career";
import Branch from "./pages/contactus/Branch/Branch";
import Offices from "./pages/contactus/Offices/Offices";
import FairPracticeCode from "./pages/customercenter/FairPracticeCode/FairPracticeCode";
import LoanApplyForm from "./pages/loanapplyform";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import KycAmlMeasures from "./pages/KycAmlMeasures/KycAmlMeasures";
import RecoveryAgents from "./pages/customercenter/RecoveryAgents/RecoveryAgents";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import CsrInitiatives from "./pages/CsrInitiatives/CsrInitiatives";
import DynamicPage from "./pages/DynamicPage/DynamicPage";


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function AppContent() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {!isAdminPath && <TopBar />}
      {!isAdminPath && <Navbar />}

      <div className={isAdminPath ? "" : "page-content"}>
        {!isAdminPath && <IsoBanner />}
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
          <Route path="/customercenter/calculator" element={<Calculator />} />
          <Route path="/customercenter/faqs" element={<Faqs />} />
          <Route path="/customercenter/auction-properties" element={<AuctionProperties />} />
          <Route path="/ourpartners/lenders/lenders" element={<Lenders />} />
          <Route
            path="/ourpartners/ourinsurancepartners/ourinsurancepartners"
            element={<OurInsurancePartners />}
          />

          <Route path="/media/blog/blog" element={<Blog />} />
          <Route path="/media/blog/:slug" element={<BlogDetail />} />
          <Route path="/media/pressrelease/pressrelease" element={<PressRelease />} />
          <Route path="/media/nivara-gallery/nivara-gallery" element={<NivaraGallery />} />
          <Route path="/career/career" element={<Career />} />
          <Route path="/contactus/branch/branch" element={<Branch />} />
          <Route path="/contactus/offices/offices" element={<Offices />} />
          <Route path="/apply-home-loan" element={<LoanApplyForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/kyc-aml-measures" element={<KycAmlMeasures />} />
          <Route path="/customercenter/recovery-agents" element={<RecoveryAgents />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/csr-initiatives" element={<CsrInitiatives />} />
          <Route path="/p/:slug" element={<DynamicPage />} />
        </Routes>
        {!isAdminPath && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;