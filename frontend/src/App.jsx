import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import TopBar from "./components/TopBar/topbar";
import "./App.css";
import Footer from "./components/Footer/footer";
import IsoBanner from "./components/IsoBanner/IsoBanner";

import AboutUs from "./pages/aboutus/AboutUs/AboutUs";
import Leadership from "./pages/aboutus/Leadership";
import Privacy from "./pages/aboutus/Privacy";
import Policy from "./pages/aboutus/Policy";

import HomeLoanPurchase from "./pages/products/HomeLoanPurchase/HomeLoanPurchase";
import ConstructionLoan from "./pages/products/ConstructionLoan/ConstructionLoan";
import CompositeHomeLoan from "./pages/products/CompositeHomeLoan/CompositeHomeLoan";
import LoanAgainstProperty from "./pages/products/LoanAgainstProperty/LoanAgainstProperty";
import BalanceTransfer from "./pages/products/BalanceTransfer/BalanceTransfer";
import RefinanceLoan from "./pages/products/RefinanceLoan/RefinanceLoan";
import ImprovementAndExtension from "./pages/products/ImprovementandExtension/ImprovementandExtension";
import EcsMandate from "./pages/customercenter/EcsMandate/EcsMandate";
import ENachBankCode from "./pages/customercenter/ENachBankCode/ENachBankCode";
import ConsumerEducation from "./pages/customercenter/ConsumerEducation/ConsumerEducation";
import ReleaseOfProperty from "./pages/customercenter/ReleaseOfProperty/ReleaseOfProperty";
import RiskBasedPricing from "./pages/customercenter/RiskBasedPricing/RiskBasedPricing";
import AppForm from "./pages/customercenter/AppForm/AppForm";

import InterestRate from "./pages/customercenter/InterestRate/InterestRate";
import Calculator from "./pages/customercenter/Calculator/Calculator";
import InvestorsRelation from "./pages/InvestorsRelation/InvestorsRelation";
import TranscriptViewer from "./pages/InvestorsRelation/TranscriptViewer";
import PublicDisclosure from "./pages/customercenter/PublicDisclosure/PublicDisclosure";
import CorporateGovernance from "./pages/customercenter/corporategovernance";
import Faqs from "./pages/customercenter/Faqs/Faqs";
import AuctionProperties from "./pages/customercenter/AuctionProperties/AuctionProperties";
import Complaint from "./pages/customercenter/Complaint/Complaint";
import Lenders from "./pages/OurPartners/Lenders/Lenders";
import OurInsurancePartners from "./pages/OurPartners/OurInsurancePartners/OurInsurancePartners";
import Blog from "./pages/media/Blog/Blog";
import BlogDetail from "./pages/media/Blog/BlogDetail";
import PressRelease from "./pages/media/PressRelease/PressRelease";
import NivaraGallery from "./pages/media/NivaraGallery/NivaraGallery";
import Career from "./pages/Career/Career";
import Branch from "./pages/contactus/Branch/Branch";
import BranchMicrosite from "./pages/contactus/Branch/BranchMicrosite";
import Offices from "./pages/contactus/Offices/Offices";
import FairPracticeCode from "./pages/customercenter/FairPracticeCode/FairPracticeCode";
import LoanApplyForm from "./pages/loanapplyform";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";
import KycAmlMeasures from "./pages/KycAmlMeasures/KycAmlMeasures";
import RecoveryAgents from "./pages/customercenter/RecoveryAgents/RecoveryAgents";
import Mitc from "./pages/customercenter/Mitc/Mitc";
import GrievanceRedressal from "./pages/customercenter/GrievanceRedressal/GrievanceRedressal";
import DescriptionOfGrievanceRedressalProcedure from "./pages/customercenter/DescriptionOfGrievanceRedressalProcedure/DescriptionOfGrievanceRedressalProcedure";
import CsrInitiatives from "./pages/aboutus/CsrInitiatives/CsrInitiatives";
import DynamicPage from "./pages/DynamicPage/DynamicPage";
import GetAppointment from "./pages/GetAppointment/GetAppointment";
import ContactInquiry from "./pages/ContactInquiry/ContactInquiry";
import MeetAdvisor from "./pages/MeetAdvisor/MeetAdvisor";
import AccessDenied from "./pages/AccessDenied/AccessDenied";
import NotFound from "./pages/NotFound/NotFound";


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
  const isRestrictedPath = location.pathname === '/investorsrelation/restricted';
  const isBranchMicrositePath = location.pathname.startsWith('/branch/');
  const hideHeaderFooter = isAdminPath || isRestrictedPath;
  const hideFooter = isBranchMicrositePath;

  return (
    <>
      <ScrollToTop />
      {!hideHeaderFooter && <TopBar />}
      {!hideHeaderFooter && <Navbar />}
      {!hideHeaderFooter && <IsoBanner />}

      <div className={hideHeaderFooter ? "" : "page-content"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/vision-mission" element={<AboutUs />} />
          <Route path="/aboutus/core-values" element={<AboutUs />} />
          <Route path="/aboutus/investors" element={<Leadership />} />
          <Route path="/aboutus/board" element={<Leadership />} />
          <Route path="/aboutus/management" element={<Leadership />} />
          <Route path="/aboutus/leadership" element={<Leadership />} />
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
          <Route path="/investorsrelation" element={<CorporateGovernance initialTab="investors" />} />
          <Route path="/investorsrelation/annual-returns" element={<CorporateGovernance initialTab="investors" initialSub="annual-returns" />} />
          <Route path="/investorsrelation/notices" element={<CorporateGovernance initialTab="investors" initialSub="notices" />} />
          <Route path="/investorsrelation/transcripts" element={<CorporateGovernance initialTab="investors" initialSub="transcripts" />} />
          <Route path="/investorsrelation/transcript" element={<TranscriptViewer />} />
          <Route path="/customercenter/ecs-mandate" element={<EcsMandate />} />
          <Route path="/customercenter/enach-bankcode" element={<ENachBankCode />} />
          <Route path="/customercenter/consumer-education" element={<ConsumerEducation />} />
          <Route path="/customercenter/release-of-property" element={<ReleaseOfProperty />} />
          <Route path="/customercenter/risk-based-pricing" element={<RiskBasedPricing />} />
          <Route path="/customercenter/app-form" element={<AppForm />} />
          <Route
            path="/customercenter/interest-rate"
            element={<InterestRate />}
          />
          <Route
            path="/customercenter/fair-practice-code"
            element={<FairPracticeCode />}
          />
          <Route
            path="/customercenter/publicdisclosure"
            element={<PublicDisclosure />}
          />
          <Route
            path="/customercenter/complaint"
            element={<Complaint />}
          />
          <Route
            path="/customercenter/corporategovernance"
            element={<CorporateGovernance />}
          />
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
          <Route path="/press_-release_coverage" element={<PressRelease />} />
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/media/nivara-gallery/nivara-gallery" element={<NivaraGallery />} />
          <Route path="/career/career" element={<Career />} />
          <Route path="/contactus/branch/branch" element={<Branch />} />
          <Route path="/branch/:branchSlug" element={<BranchMicrosite />} />
          <Route path="/contactus/offices/offices" element={<Offices />} />
          <Route path="/apply-home-loan" element={<LoanApplyForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/aboutus/kyc-aml-measures" element={<KycAmlMeasures />} />
          <Route path="/customercenter/recovery-agents" element={<RecoveryAgents />} />
          <Route path="/customercenter/mitc" element={<Mitc />} />
          <Route path="/customercenter/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/customercenter/description-of-grievance-redressal-procedure" element={<DescriptionOfGrievanceRedressalProcedure />} />
          <Route path="/terms-conditions" element={<Mitc />} />
          <Route path="/aboutus/csr-initiatives" element={<CsrInitiatives />} />
          <Route path="/p/:slug" element={<DynamicPage />} />
          <Route path="/get-appointment" element={<GetAppointment />} />
          <Route path="/contact-inquiry" element={<ContactInquiry />} />
          <Route path="/contact-us" element={<ContactInquiry />} />
          <Route path="/meet-advisor" element={<MeetAdvisor />} />
          <Route path="/investorsrelation/restricted" element={<AccessDenied />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!hideHeaderFooter && !hideFooter && <Footer />}
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
