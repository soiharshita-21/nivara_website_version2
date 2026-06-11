import React from "react";
import "./ManagementTeam.css";
import rao from "../../../assets/images/Director/Rao (1).jpg";
import shreyas from "../../../assets/images/Director/Shreyas.jpg";
import srinivasan from "../../../assets/images/Directors/Srinivasan-CV_NEW (2).jpg";
import suresh from "../../../assets/images/Directors/Suresh G.jpg";
import venkat from "../../../assets/images/Directors/befe9b7bf680b2ac (1).jpeg";
import nagesh from "../../../assets/images/Directors/Nagesh (2).jpg";
import sidharth from "../../../assets/images/Directors/Sisharth-1 (1).jpg";
import prakash from "../../../assets/images/Directors/prakash.jpg";
import hema from "../../../assets/images/Directors/_DSC6348 copy.JPG";
import erica from "../../../assets/images/Directors/Erica Gonsalves(1).jpg";
import aditya from "../../../assets/images/Directors/Aditya (3).jpg";
import raja from "../../../assets/images/Directors/Raja Shankarasubramanian (2).png";
import babu from "../../../assets/images/Directors/Babu-Abraham (2).png";
import raina from "../../../assets/images/Directors/Raina D'silva.png";
import bonojit from "../../../assets/images/Directors/Ukil-pic (1).jpg";
import thimmaiah from "../../../assets/images/Directors/C-G-Thimmah (1).jpg";
import userPlaceholder from "../../../assets/images/user2.jpg";
import manoj from "../../../assets/images/Directors/Manoj Patil.jpg";
import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";

const managementTeamData = [
  { 
    name: "Mr. C. V. Rao",
    role: "Founder, Managing Director & CEO",
    desc: "Brings over 30 years of leadership experience in banking and financial services, with deep expertise in retail lending and portfolio risk management.",
    longDesc: "Mr. C. V. Rao is the Founder, Managing Director & Chief Executive Officer of the Company. He brings over 30 years of leadership experience in banking and financial services, with deep expertise in retail lending, portfolio risk management, and building scalable businesses across economic and credit cycles.\n\nHe holds an M.Com from Andhra University and an MBA from Osmania University, Hyderabad. Early in his career, he served as a Research Assistant in Finance and Accounting at IIM Ahmedabad, where he also published research in reputed academic journals.\n\nMr. Rao has held senior leadership roles with leading private sector banks, including ICICI Bank, IndusInd Bank, and ING Vysya Bank (now Kotak Mahindra Bank). At ICICI Bank, he was part of the core team that scaled the mortgage business into a ₹50,000+ crore portfolio, contributing to market leadership. At ING Vysya Bank, he led national portfolios in Agriculture & Rural Banking and Consumer Assets.\n\nUnder his founding leadership, the Company has built resilience, strengthened its market position, and continues to focus on sustainable, long‑term value creation.",
    color: "red",
    img: rao,
  },
  {
    name: "Mr. Shreyas Ramanathan",
    role: "Executive Director & Chief Business Officer",
    desc: "Qualified Chartered Accountant and MBA with over 20+ years of experience across retail banking and financial services.",
    longDesc: "Shreyas Ramanathan serves as Executive Director on the Board of Nivara and Chief Business Officer of the Company. A qualified Chartered Accountant, he holds an MBA from the Asian Institute of Management, Manila, and brings over 20+ years of experience across retail banking and financial services. In his current role, he is instrumental in advancing Nivara's mission of \"Housing for All\" by pioneering lending solutions tailored to the unserved and underserved segments of India's informal economy.\n\nDrawing on deep expertise in credit underwriting and portfolio management, and a proven track record of scaling businesses, Shreyas has developed sustainable lending models for self-employed professionals and micro-entrepreneurs in the EWS and LIG segments, many of whom are first-time borrowers. He also oversees collections and asset quality, ensuring Nivara upholds the highest standards of responsible lending while expanding access to affordable housing finance across urban and semi-urban markets.\n\nEarlier in his career, Shreyas built Ola Cabs leasing business from inception to over 10,000 vehicles with zero credit cost, establishing it as the country's largest captive leasing company in a record timeframe. Prior to that, he spent 12 years at ICICI Bank, where his final role was Policy Head for a ₹1.25 trillion secured assets portfolio. During his tenure at the bank, he held diverse roles across sales, credit, and risk in multiple geographies, spanning the retail, mid-corporate, and agri-business verticals.\n\nHis career reflects a consistent commitment to building transformative financial services businesses that serve underserved communities. Shreyas brings deep expertise in credit policy, risk management, and portfolio optimization, guided by the conviction that access to home finance is a fundamental enabler of dignified living and sustainable development for communities across India.",
    color: "green",
    img: shreyas,
  },
  {
    name: "Mr. Srinivasan C V",
    role: "Chief Financial Officer",
    desc: "Qualified Chartered and Cost Accountant with 25+ years of experience in Strategy, Financial planning, and Fund raising.",
    longDesc: "Srinivasan CV is the Chief Financial Officer of our Company. He holds a bachelor’s degree in commerce from University of Madras and is a qualified Chartered and Cost Accountant. He has also successfully completed Accelerated General Management Program (AGMP) from IIM Ahmedabad. As a CFO at Nivara he has played a pivotal role in strengthening the Company’s accounting and finance functions and driving debt and equity raising initiatives. He has contributed significantly to budgeting, liquidity management, and cost optimization, ensuring financial discipline while enabling growth.\n\nHe has a career spanning 25+ years of experience in Strategy, Financial planning & analysis, Equity and Debt Fund raising, Finance & Accounts, Treasury, Taxation, Direct assignments/securitization deals, Managing Audits and Investor relations. In his previous assignment, he was a CFO at Chaitanya India Fin Credit Pvt. Ltd for close to 6 years. He brings in a wide variety of experience in traditional, multinational, VC-funded start-up companies in diverse industries such as financial services, manufacturing, IT infra-distribution, Investment company, food services and facilities management.",
    color: "red",
    img: srinivasan,
  },
  {
    name: "Mr. Suresh G",
    role: "Head-Collections",
    desc: "22 years of sound experience in Risk and Debt management within the Banking and Financial Services sector.",
    longDesc: "Suresh G is the Head of Collections of our Company. His exceptional execution and leadership in this segment have been instrumental in strengthening and driving best in class asset quality for Nivara.\n\nHe is a Bachelor of Commerce with over 22 years of sound experience in Risk and Debt management within the Banking and Financial Services sector, Mr. Suresh specializes in Collections and Recovery, Process Improvement, Regulatory Compliance, Cost Control, Credit Operations & Retail Asset Management.\n\nHe has consistently demonstrated an exceptional grasp of navigating complex financial landscape and strategizing the recoveries under various buckets and keep a constant check on Asset Quality. Prior to joining us, he has extensively worked in the last two decades with Fullerton India Home Finance, ING Vysya Bank Ltd., Axis Bank, HDFC Bank Ltd.",
    color: "green",
    img: suresh,
  },
  {
    name: "Mr. Nagesh H S",
    role: "State Head – Karnataka",
    desc: "Experienced mortgage professional with nearly 20 years in the banking and financial services industry.",
    longDesc: "Nagesh holds an MBA and brings a strong combination of industry knowledge, leadership, and execution capability to the Company. A founder member of Nivara, Mr. Nagesh is now in his second innings with the Company, spearheading sales for Karnataka. He has been instrumental in driving growth through strong branch expansion and customer outreach, while ensuring operational excellence in the region.\n\nAn experienced mortgage professional with nearly 20 years in the banking and financial services industry. He has deep expertise in setting up retail branch networks and distribution channels, and has a proven history of building and scaling mortgage businesses.\n\nOver the course of his career, he has held senior positions at Karvy Financial Services, Aviom India Housing Finance, and IDFC First Bank.",
    color: "red",
    img: nagesh,
  },
  {
    name: "Mr. Venkat Sharma Konduri",
    role: "State Head – AP & Telangana",
    desc: "Nearly 24 years of rich experience in sales distribution across home loans, mortgages, and business loans.",
    longDesc: "Venkat Sharma Konduri holds an MBA in Sales and Marketing (Digital Marketing) from IIM Amritsar and brings nearly 24 years of rich experience in sales distribution across home loans, mortgages, and business loans. Mr. Konduri is currently the State Head for Andhra Pradesh and Telangana, spearheading growth and strengthening Nivara’s presence in the region.\n\nHe is well-versed in business development, credit, collections, product-based marketing, and business strategies. Over the course of his career, he has worked extensively with Adani Capital, Vistaar Finance, and Karvy Financial Services (now SBFC), where he successfully built businesses from inception to portfolios of several thousand crores in assets under management (AUM).",
    color: "green",
    img: venkat,
  },
  {
    name: "Mr. Radhakrishna",
    role: "State Head", 
    desc: "Experienced banking and financial services professional.",
    longDesc: "Profile will be shared shortly.",
    color: "red",
    img: userPlaceholder,
    hidden: true,
  },
  {
    name: "Mr. Sidharth Vij",
    role: "National Credit Manager",
    desc: "Qualified Chartered Accountant and MBA with over two decades of experience in strategic credit solutions and risk management.",
    longDesc: "Sidharth Vij is a National Credit Manager of the Company. He is a qualified Chartered Accountant, a Certified Associate of the Indian Institute of Bankers (CAIIB), and has completed the Master of Business Finance (MBF) program from ICAI. In addition, he holds an MBA from IIM Raipur. At Nivara, instrumental in strengthening credit approvals with efficient turnaround times and ensuring robust risk management practices. His leadership has significantly enhanced operational efficiency and asset quality.\n\nHe is a seasoned finance professional with over two decades of experience in driving strategic credit solutions and risk management in the housing finance business. He has a proven track record of establishing mortgage businesses and has been pivotal in setting up branch networks, developing guidelines for mortgage products, and establishing credit and risk policies.\n\nOver the course of his career, he has been associated with renowned organizations such as ICICI Bank, GE Money, HDFC Bank Ltd., DBS Bank, and India Shelter Finance Corporation.",
    color: "red",
    img: sidharth,
  },
  {
    name: "Ms. Erica Gonsalves",
    role: "Head – Operations",
    desc: "CFA professional with over 18 years of experience across the finance and banking sector.",
    longDesc: "Erica Gonsalves is Head of Operation of our Company. She is a CFA professional with over 18 years of experience across the finance and banking sector. At Nivara, she is spearheading initiatives to streamline disbursement processes, enhance operational efficiency, and implement scalable systems that support business growth.\n\nShe has spent 11 years of her career with Home First Finance, where she played a pivotal role in optimizing workflows, improving productivity, and driving organizational growth. Prior to that, she gained valuable experience at Saraswat Bank and Mecklai Financials, building a strong foundation in financial services and operational excellence.",
    color: "green",
    img: erica,
  },
  {
    name: "Mr. Prakash MP",
    role: "State Head – Tamil Nadu",
    desc: "Over 26 years of Extensive Experience in the Banking and Financial services industry.",
    longDesc: "Prakash MP is State Head for Tamil Nadu. He holds a Master of Business Administration from Symbiosis Management and brings over 26 years of Extensive Experience in the Banking and Financial services industry, with a strong specialization in home finance and mortgage operations. At Nivara, his expertise would enable establishing and scaling retail branch networks in Tamil Nadu.\n\nHe is a seasoned mortgage professional with a proven track record of success across multiple domains, including business development, credit assessment, collections, product marketing, and strategic planning.\n\nPrior to his current role, Mr. Prakash MP has held Senior Leadership positions at reputed financial institutions such as HDFC, HSBC, ICICI, DHFL and India Shelter, His deep industry knowledge and leadership capabilities make him a key contributor to Our Organizational growth and Operational Excellence.",
    color: "red",
    img: prakash,
  },
  {
    name: "Mr. Manoj Patil",
    role: "State Business Head – Maharashtra",
    desc: "Over 25 years of extensive experience in banking and financial services, with strong domain expertise in mortgages, secured lending, and business development.",
    longDesc: "Manoj Patil serves as the State Business Head (Maharashtra) at Nivara Home Finance Ltd. He brings over 25 years of extensive experience in banking and financial services, with strong domain expertise in mortgages, secured lending, retail banking, insurance, and business development.\n\nOver the course of his career, Manoj has demonstrated a consistent ability to build and scale high-performing teams, drive market expansion, and deliver sustainable, profitable growth. In his current role, he leads large, multi-location teams across Maharashtra, focusing on expanding the branch network, strengthening distribution capabilities, and enhancing overall business performance while maintaining strong portfolio quality and risk discipline.\n\nPrior to joining Nivara Home Finance Ltd., he held key leadership positions with reputed organizations including Credit Saison, Hiranandani Financial Services, HDB Financial Services, HDFC Bank, and SBI Life Insurance. Across these roles, he has successfully driven business growth across mortgage loans, loan against property (LAP), affordable housing finance, and insurance cross-selling, while implementing robust operational and strategic frameworks.",
    color: "green",
    img: manoj,
  },
  {
    name: "Mr. Raja Shankarasubramanian",
    role: "Head – IT & Digital",
    desc: "Techno Ops leader with 30 years of experience across Banking, NBFC, and MFI sectors.",
    longDesc: "Raja S is the Head of IT & Digital. He holds an MBA from Ignou. At Nivara, he is spearheading the organization’s digital transformation journey, by enabling technology into the core of Nivara’s operations, smarter decision-making, seamless customer experiences, and stronger governance.\n\nHe is an impact Techno Ops leader with 30 years of experience across Banking, NBFC, and MFI sectors. He specializes in transforming IT from a support function into a core business enabler, driving operational excellence through digital initiatives and robust automation by deploying SAS Based tools for decision making and Business Excellence. The gap between high-level business requirements and technical execution makes him a vital asset for driving a digital-first strategy. Implementing automation tools for various functions to ensure efficiency, integrity and compliance.",
    color: "green",
    img: raja,
  },
  {
    name: "Mr. Aditya Babu PVN",
    role: "Head-Human Resources",
    desc: "Senior human resource professional with over 25 years of experience across Banking, NBFC, Retail Finance, and Telecom sectors.",
    longDesc: "Aditya Babu PVN is the Head of Human Resources of our Company. He is an engineering graduate with advanced qualifications in management and human resources and has completed executive education in Talent Management from XLRI. As a Head- HR he is responsible for the enterprisewide human resources strategy, including talent management, leadership and succession planning, performance and rewards governance, statutory and regulatory compliance, and workforce productivity. He has contributed significantly to multistate business operations and expansion, strengthening leadership depth and institutionalizing standardized HR processes aligned with long term organizational objectives.\n\nAs a senior human resource professional with over 25 years of experience across the Banking, NBFC, Retail Finance, and Telecom sectors. He has extensive experience in developing scalable and governanceoriented people frameworks that support sustainable growth in regulated, multilocation institutions\n\nPrior to joining us in January 2021, Aditya held senior HR leadership roles at Jana Small Finance Bank Ltd. (Bengaluru), Reliance Jio Infocomm Ltd. (Bengaluru), Idea Cellular Ltd. (Bhubaneswar), and Tata Teleservices Ltd. (Bhopal).",
    color: "red",
    img: aditya,
  },
  {
    name: "Mr. Babu Abraham",
    role: "Head- Legal",
    desc: "Over 20 years of in-house legal counsel experience across corporate and practice.",
    longDesc: "Babu Abraham is the Legal Head of the Company, bringing over 20 years of in-house legal counsel experience across corporate and practice. He holds an LLB and MBA. At Nivara, Mr. Abraham has been instrumental in strengthening the legal framework, streamlining documentation processes, and supporting debt recovery.\n\nHe is highly skilled in negotiations, contract review, legal and regulatory compliance, litigation, title search reports, due diligence, and legal recovery. His functional expertise spans banking law, arbitrations, debt recovery tribunals, and labor welfare.\n\nBefore joining the Company, Mr. Abraham served as Deputy General Manager – Law at Mantri Developers. He has also held senior legal roles at Tata Motor Finance, Fullerton, Toyota, and Reliance Capital, in addition to practicing as an advocate and consultant.",
    color: "green",
    img: babu,
  },
  {
    name: "Ms. Raina D’ Silva",
    role: "Company Secretary",
    desc: "Qualified Company Secretary and Law graduate with about 10 years of experience.",
    longDesc: "Raina D Silva is the Company Secretary of the Company. She is a qualified Company Secretary and Law graduate with about 10 years of experience in secretarial and compliance functions. At Nivara, she has been instrumental in strengthening the compliance framework, streamlining secretarial practices, and ensuring adherence to regulatory requirements. Her contributions have enhanced transparency, governance standards, and stakeholder confidence.\n\nShe is well-versed in the Companies Act, SEBI regulations, and RBI directions applicable to Housing Finance Companies. Her expertise includes drafting, corporate communication, and management, with a strong focus on ensuring governance and compliance.\n\nPrior to joining us, she was working with Fineotex Chemical Ltd, as Company Secretary and Compliance Officer and HSBC Electronic Data Processing India Pvt. Ltd, as Senior Company Secretarial Assistant.",
    color: "red",
    img: raina,
  },
  {
    name: "Ms. Hema Madhukar",
    role: "Head – Inbound Sales & Client Relations",
    desc: "Over three decades of experience across leading financial institutions including HSBC, ICICI Bank, and Tata Capital.",
    longDesc: "Hema heads Inbound Sales and Marketing of the Company. She is a Bachelor of Arts and has over three decades of experience across leading financial institutions including HSBC, ICICI Bank, Tata Capital Housing Finance, and emerging fintech organizations. Her experience spans retail banking, mortgage lending, affordable housing finance, and digital lending solutions. At Nivara her focus is on strengthening customer relationships, enhancing brand visibility, and expanding Nivara’s footprint through innovative marketing strategies.\n\nOver the course of her career, she have held leadership roles across sales, business development, and strategic initiatives, managing large teams and driving business growth across multiple regions. Her professional journey combines banking domain expertise with fintech innovation, enabling her to bridge traditional financial services with evolving digital ecosystems",
    color: "green",
    img: hema,
  },
  {
    name: "Mr. Bonojit Ukil",
    role: "Chief Compliance Officer",
    desc: "Veteran in Banking and financial Services space with about four decades of experience.",
    longDesc: "Bonojit Ukil is the Chief Compliance Officer of the Company. His qualification includes M.Sc in Chemistry and advance banking certification from CAIIB. At Nivara, he brings in effective governance within the organization by ensuring compliance with laws, regulatory requirements, policies, and procedures along with the internal control and risk management processes.\n\nHe is a veteran in Banking and financial Services space with about four decades of experience in overall policy formulation and process management with an innate ability to evaluate complex, multi-dimensional situations and compliance risk characteristics.\n\nPreviously, he has worked across the wide spectrum of reputed Banks/NBFCs like UCO Bank, Bank of Punjab, First Blue Home Finance, Ujjivan Small Finance Bank, Aye Finance and Rural Mandi Fintech Pvt. Ltd.",
    color: "red",
    img: bonojit,
  },
  {
    name: "Mr. C. G. Thimmaiah",
    role: "Head – Audit",
    desc: "Results-driven professional with a diverse experience spanning over 3 decades in Retail Asset.",
    longDesc: "C. G. Thimmaiah is Head of Internal Audit of our Company. At Nivara, he has established rigorous internal audit processes, enhanced compliance monitoring, and ensured adherence to regulatory standards.\n\nHe holds Masters in Commerce and is a results-driven professional with a diverse experience spanning over 3 decades in Retail Asset – mortgages, construction finance underwriting, extensive exposure in sales, credit appraisal, and collection within the realms of Housing Loans/LAP. He has demonstrated leadership & management as a seasoned Branch Head with over 10 years of experience, successfully steering branches in Karnataka, Andhra Pradesh, Gujarat, and Tamil Nadu. He has a proven track record as an expert in implementing effective credit processes and managing credit teams, Audit & Compliance.\n\nPreviously. he has worked with Can Fin Homes, Reliance Home Finance and IDBI Bank.",
    color: "green",
    img: thimmaiah,
  },
];


const ManagementTeam = () => {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <>
      <section className="management-section">
        <ScrollReveal direction="up">
          <div className="management-header">
            <span className="management-heading">Management Team</span>
            {/* <h2>Our   Management   Leadership</h2> */}
            <p>Experienced professionals managing operations, governance, and business excellence</p>
          </div>
        </ScrollReveal>

        <div className="management-grid">
          {managementTeamData
            .filter(item => !item.hidden)
            .map((item, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + (index % 4) * 0.1}
                distance={40}
                scale={0.9}
              >
                <div
                  className={`management-card ${item.color}`}
                  onClick={() => {
                    setSelectedMember(item);
                    setIsExpanded(false);
                  }}
                >
                  <div className="management-image">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="management-content">
                    <span className="management-role">{item.role}</span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <button className="view-bio-btn" onClick={() => {
                      setSelectedMember(item);
                      setIsExpanded(false);
                    }}>View Details</button>
                  </div>

                  <div className="leadership-strip-animated"></div>
                </div>
              </ScrollReveal>
            ))}
        </div>
        {/* <p className="management-updated-date" style={{ textAlign: "center", marginTop: "40px", color: "#211F1F", fontSize: "16px" }}>
          Updated 30.04.2026
        </p> */}
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="unique-management-modal-overlay"
            onClick={() => {
              setSelectedMember(null);
              setIsExpanded(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="unique-management-modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '1000px',
                height: '550px',
                width: '100%',
                borderRadius: '30px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
              }}
            >
              <button
                onClick={() => {
                  setSelectedMember(null);
                  setIsExpanded(false);
                }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  zIndex: 100,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  background: '#f3f4f6',
                  cursor: 'pointer',
                  fontSize: "26px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                &times;
              </button>

              <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                <div style={{ flex: '0 0 45%', height: '100%', overflow: 'hidden' }}>
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ flex: '0 0 55%', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#fff', overflowY: 'auto' }}>
                  <h2 style={{ fontWeight: 700, fontSize: "34px", margin: '0 0 5px 0', color: '#211F1F', lineHeight: '1.1' }}>
                    {selectedMember.name}
                  </h2>
                  <span style={{ display: 'block', fontSize: "15px", textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1.2px', color: '#B3191F', marginBottom: '20px' }}>
                    {selectedMember.role}
                  </span>
                  <div style={{ width: '60px', height: '6px', backgroundColor: '#B3191F', marginBottom: '30px', borderRadius: '3px' }}></div>
                  <p style={{ fontSize: "18px", fontWeight: 600, color: '#211F1F', marginBottom: '25px', lineHeight: '1.5' }}>
                    {selectedMember.desc}        
                  </p>
                  <div>
                    <p style={{ fontSize: "16px", lineHeight: '1.8', color: "#211F1F", fontWeight: 400, textAlign: 'justify', whiteSpace: 'pre-line' }}>
                      {isExpanded ? selectedMember.longDesc : `${selectedMember.longDesc.substring(0, 200)}...`}
                    </p>
                    {selectedMember.longDesc.length > 200 && (
                      <button
                        onClick={toggleReadMore}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#B3191F',
                          fontWeight: 700,
                          cursor: 'pointer',
                          padding: '0',
                          marginTop: '10px',
                          fontSize: "17px",
                          textDecoration: 'underline'
                        }}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ManagementTeam;

