import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import TopBar from "./components/TopBar/topbar";
import "./App.css";
import Footer from "./components/Footer/footer";

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
import ENach from "./pages/customercenter/enach";
import FairPractice from "./pages/customercenter/FairPractice";
import InterestRate from "./pages/customercenter/interestrate";
import QuickLink from "./pages/customercenter/quicklink";
import Calculator from "./pages/customercenter/calculator";

import PublicDisclosure from "./pages/customercenter/publicdisclosure";
import CorporateGovernance from "./pages/customercenter/corporategovernance";
import Download from "./pages/customercenter/download";
import Faqs from "./pages/customercenter/faqs";
import Blog from "./pages/media/blog";
import PressRelease from "./pages/media/pressrelease";
import NivaraGallery from "./pages/media/nivaragallery";
import Branch from "./pages/contactus/branch";
import Offices from "./pages/contactus/offices";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/vision-mission" element={<VisionMission />} />
          <Route path="/aboutus/core-values" element={<ObjectivesCoreValues />} />  
          <Route path="/aboutus/investors" element={<Investors />} />
          
          <Route path="/aboutus/board" element={<BoardOfDirectors />} />
          <Route path="/aboutus/management" element={<ManagementTeam />} />
          <Route path="/aboutus/privacy" element={<Privacy />} />
          <Route path="/aboutus/policy" element={<Policy />} />

          <Route path="/products/home-loan" element={<HomeLoanPurchase />} />
          <Route
            path="/products/construction-loan"
            element={<ConstructionLoan />}
          />
          <Route
            path="/products/composite-loan"
            element={<CompositeHomeLoan />}
          />
          <Route path="/products/lap" element={<LoanAgainstProperty />} />
          <Route
            path="/products/balance-transfer"
            element={<BalanceTransfer />}
          />
          <Route
            path="/products/refinance-loan"
            element={<RefinanceLoan />} 
            />
             <Route
            path="/products/improvementandextension"
            element={<ImprovementAndExtension />} 
            />
          <Route path="/customercenter/e-nach" element={<ENach />} />
          <Route
            path="/customercenter/interest-rate"
            element={<InterestRate />}
          />
          <Route path="/customercenter/quick-link" element={<QuickLink />} />
          <Route
            path="/customercenter/fair-practice"
            element={<FairPractice />}
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
          <Route path="/media/blog" element={<Blog />} />
          <Route path="/media/press-release" element={<PressRelease />} />
          <Route path="/media/nivara-gallery" element={<NivaraGallery />} />
          <Route path="/contactus/branch" element={<Branch />} />
          <Route path="/contactus/offices" element={<Offices />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
