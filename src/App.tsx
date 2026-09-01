import { useState } from "react";
import SEOHead from "./components/SEOHead";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import JobOpenings from "./components/JobOpenings";
import Eligibility from "./components/Eligibility";
import WhyJoin from "./components/WhyJoin";
import ApplicationForm from "./components/ApplicationForm";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import JobPage from "./pages/JobPage";
import RecruitmentLandingPage from "./pages/RecruitmentLandingPage";

function getPathname(): string {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

const JOB_ROUTES: Record<string, string> = {
  "/female-massage-therapist-jobs-lucknow": "massage-therapist",
  "/female-spa-specialist-jobs-lucknow": "spa-staff",
  "/female-spa-receptionist-jobs-lucknow": "receptionist",
  "/female-wellness-consultant-jobs-lucknow": "wellness-consultant",
};

const LANDING_ROUTES: Record<
  string,
  "hub" | "freshers" | "accommodation" | "india"
> = {
  "/female-spa-jobs-lucknow": "hub",
  "/spa-jobs-for-freshers-lucknow": "freshers",
  "/spa-jobs-with-accommodation": "accommodation",
  "/spa-jobs-india": "india",
};

function MainHome() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelection = (roleTitle: string) => {
    setSelectedRole(roleTitle);
  };

  return (
    <div className="min-h-screen bg-spa-obsidian font-sans text-spa-cream selection:bg-spa-gold selection:text-spa-obsidian">
      <SEOHead />
      <Header />
      <Hero />
      <Benefits />
      <JobOpenings onSelectRole={handleRoleSelection} />
      <Eligibility />
      <WhyJoin />
      <ApplicationForm selectedRoleFromOpening={selectedRole} />
      <FAQs />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  const pathname = getPathname();
  const jobId = JOB_ROUTES[pathname];

  if (jobId) {
    return <JobPage jobId={jobId} />;
  }

  const landingPage = LANDING_ROUTES[pathname];

  if (landingPage) {
    return <RecruitmentLandingPage type={landingPage} />;
  }

  return <MainHome />;
}
