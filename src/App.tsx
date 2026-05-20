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

export default function App() {
  // Conversional funnel state: tracking role auto-selection from Vacancies cards
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelection = (roleTitle: string) => {
    setSelectedRole(roleTitle);
  };

  return (
    <div className="min-h-screen bg-spa-obsidian font-sans text-spa-cream selection:bg-spa-gold selection:text-spa-obsidian">
      {/* 1. Injects SEO head dynamic triggers, JSON-LD microdata schema */}
      <SEOHead />

      {/* 2. Sticky branding navigation header */}
      <Header />

      {/* 3. Luxury visual hero section */}
      <Hero />

      {/* 4. Elegant career benefits grid */}
      <Benefits />

      {/* 5. Live vacancies cards (bridges roles selection state to form) */}
      <JobOpenings onSelectRole={handleRoleSelection} />

      {/* 6. Legal and safety eligibility section */}
      <Eligibility />

      {/* 7. Workplace respect, verified clients, and stats metrics */}
      <WhyJoin />

      {/* 8. Conversional application form with success callback modules */}
      <ApplicationForm selectedRoleFromOpening={selectedRole} />

      {/* 9. Interactive FAQs block using motion collapse */}
      <FAQs />

      {/* 10. Polished semantic directory footer */}
      <Footer />

      {/* 11. Sticky WhatsApp and dialing CTA overlay */}
      <WhatsAppFloat />
    </div>
  );
}
