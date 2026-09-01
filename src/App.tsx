import { lazy, Suspense, useState } from "react";
import SEOHead from "./components/SEOHead";
import Header from "./components/Header";
import Hero from "./components/Hero";
const Benefits = lazy(() => import("./components/Benefits"));
const JobOpenings = lazy(() => import("./components/JobOpenings"));
const Eligibility = lazy(() => import("./components/Eligibility"));
const WhyJoin = lazy(() => import("./components/WhyJoin"));
const ApplicationForm = lazy(() => import("./components/ApplicationForm"));
const FAQs = lazy(() => import("./components/FAQs"));
const Footer = lazy(() => import("./components/Footer"));
const WhatsAppFloat = lazy(() => import("./components/WhatsAppFloat"));
const JobPage = lazy(() => import("./pages/JobPage"));
const RecruitmentLandingPage = lazy(() => import("./pages/RecruitmentLandingPage"));

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

      <Suspense
        fallback={
          <div className="min-h-[240px] bg-spa-obsidian" aria-hidden="true" />
        }
      >
        <Benefits />
        <JobOpenings onSelectRole={handleRoleSelection} />
        <Eligibility />
        <WhyJoin />
        <ApplicationForm selectedRoleFromOpening={selectedRole} />
        <FAQs />
        <Footer />
        <WhatsAppFloat />
      </Suspense>
    </div>
  );
}

export default function App() {
  const pathname = getPathname();
  const jobId = JOB_ROUTES[pathname];

  if (jobId) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-spa-obsidian text-spa-cream flex items-center justify-center">
            Loading careers page...
          </div>
        }
      >
        <JobPage jobId={jobId} />
      </Suspense>
    );
  }

  const landingPage = LANDING_ROUTES[pathname];

  if (landingPage) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-spa-obsidian text-spa-cream flex items-center justify-center">
            Loading careers page...
          </div>
        }
      >
        <RecruitmentLandingPage type={landingPage} />
      </Suspense>
    );
  }

  return <MainHome />;
}
