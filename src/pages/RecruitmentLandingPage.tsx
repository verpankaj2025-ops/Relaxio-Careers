import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { JOB_OPENINGS, buildWhatsAppLink } from "../data";

type LandingPageType =
  | "hub"
  | "freshers"
  | "accommodation"
  | "india";

interface RecruitmentLandingPageProps {
  type: LandingPageType;
}

const JOB_LINKS = [
  {
    id: "massage-therapist",
    href: "/female-massage-therapist-jobs-lucknow/",
    label: "Female Massage Therapist Jobs",
  },
  {
    id: "spa-staff",
    href: "/female-spa-specialist-jobs-lucknow/",
    label: "Female Spa Specialist Jobs",
  },
  {
    id: "receptionist",
    href: "/female-spa-receptionist-jobs-lucknow/",
    label: "Female Spa Receptionist Jobs",
  },
  {
    id: "wellness-consultant",
    href: "/female-wellness-consultant-jobs-lucknow/",
    label: "Female Wellness & Spa Consultant Jobs",
  },
] as const;

const CONTENT = {
  hub: {
    eyebrow: "Current Vacancies · Gomti Nagar, Lucknow",
    title: "Female Spa Jobs in Lucknow",
    intro:
      "Explore current female spa career opportunities at Relaxio Spa & Wellness in Gomti Nagar, Lucknow. Eligible experienced professionals and suitable freshers can review available roles, salary ranges and application details.",
    sectionTitle: "Current Female Spa Vacancies",
    sectionText:
      "Our current recruitment includes therapist, spa specialist, front desk and wellness roles. Review each vacancy before applying so you can choose the role that best matches your experience and career goals.",
  },
  freshers: {
    eyebrow: "Entry-Level Recruitment · Lucknow",
    title: "Spa Jobs for Freshers in Lucknow",
    intro:
      "Relaxio Spa & Wellness welcomes eligible female candidates who are starting their careers in the spa and wellness industry. Selected candidates may receive role-specific guidance and training support.",
    sectionTitle: "Begin Your Spa Career",
    sectionText:
      "Freshers should review each vacancy's eligibility and responsibilities before applying. Previous professional spa experience is not automatically required for every role, and the recruitment team can explain the position and joining process.",
  },
  accommodation: {
    eyebrow: "Relocation Support · Gomti Nagar, Lucknow",
    title: "Female Spa Jobs With Accommodation in Lucknow",
    intro:
      "Candidates relocating to Lucknow from another city or state can apply for eligible female spa vacancies at Relaxio Spa & Wellness. Accommodation support may be available depending on role and current arrangements.",
    sectionTitle: "Relocating to Lucknow for Work?",
    sectionText:
      "Before travelling for an interview or joining, applicants should confirm accommodation availability, joining requirements and the selected vacancy with the recruitment team.",
  },
  india: {
    eyebrow: "Applications Open Across India",
    title: "Spa Jobs in India — Apply for Lucknow Vacancies",
    intro:
      "Relaxio Spa & Wellness currently recruits for eligible spa and wellness roles in Gomti Nagar, Lucknow. Candidates from anywhere in India can submit an application for suitable current vacancies.",
    sectionTitle: "Candidates From Anywhere in India Can Apply",
    sectionText:
      "You do not need to live in Lucknow to submit your application. Share your current city, experience and preferred role so the recruitment team can explain interview and joining requirements.",
  },
} as const;

export default function RecruitmentLandingPage({
  type,
}: RecruitmentLandingPageProps) {
  const content = CONTENT[type];

  return (
    <div className="min-h-screen bg-spa-obsidian font-sans text-spa-cream">
      <Header />

      <main>
        <section className="border-b border-spa-charcoal px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <a
              href="/"
              className="text-sm font-medium text-spa-gold underline underline-offset-4"
            >
              ← Relaxio Careers
            </a>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-spa-gold">
              {content.eyebrow}
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold text-white sm:text-5xl">
              {content.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-spa-sand/80">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#apply-form-section"
                className="rounded-xl bg-spa-gold px-6 py-3 font-bold text-spa-obsidian"
              >
                Apply Now
              </a>

              <a
                href={buildWhatsAppLink(
                  "Hi Relaxio Spa, I want to know about current female spa job vacancies in Gomti Nagar, Lucknow."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-spa-gold px-6 py-3 font-bold text-spa-gold"
              >
                Ask Recruitment Team
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-white">
              {content.sectionTitle}
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-spa-sand/80">
              {content.sectionText}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {JOB_LINKS.map((item) => {
                const job = JOB_OPENINGS.find(
                  (opening) => opening.id === item.id
                );

                if (!job) return null;

                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-spa-charcoal bg-spa-charcoal/60 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-spa-gold">
                      Current Vacancy
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-white">
                      {job.title}
                    </h3>

                    <p className="mt-3 text-sm text-spa-sand/75">
                      {job.description}
                    </p>

                    <div className="mt-4 text-sm text-spa-sand/85">
                      <strong className="text-white">Salary:</strong>{" "}
                      {job.salary}
                    </div>

                    <a
                      href={item.href}
                      className="mt-5 inline-flex text-sm font-bold text-spa-gold underline underline-offset-4"
                    >
                      View job details →
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-spa-charcoal px-4 py-10 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Recruitment resources">
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <a
                  href="/female-spa-jobs-lucknow/"
                  className="font-bold text-spa-gold underline underline-offset-4"
                >
                  Female Spa Jobs in Lucknow
                </a>
                <a
                  href="/spa-jobs-for-freshers-lucknow/"
                  className="font-bold text-spa-gold underline underline-offset-4"
                >
                  Freshers Jobs
                </a>
                <a
                  href="/spa-jobs-with-accommodation/"
                  className="font-bold text-spa-gold underline underline-offset-4"
                >
                  Accommodation Support
                </a>
                <a
                  href="/spa-jobs-india/"
                  className="font-bold text-spa-gold underline underline-offset-4"
                >
                  Applicants From India
                </a>
              </div>
            </nav>
          </div>
        </section>

        <section className="border-y border-spa-charcoal px-4 py-16 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-white">
              Applying From Outside Lucknow?
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-spa-sand/80">
              Candidates from other cities and states can apply online or
              contact the recruitment team before travelling. Share your
              current location, experience and preferred role so the team can
              guide you about interview and joining requirements.
            </p>

            <a
              href="/spa-jobs-india/"
              className="mt-5 inline-flex text-sm font-bold text-spa-gold underline underline-offset-4"
            >
              India-wide applicant information →
            </a>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-spa-gold/20 bg-spa-charcoal p-8">
            <h2 className="text-2xl font-bold text-white">
              Ready to Apply?
            </h2>

            <p className="mt-3 max-w-2xl text-spa-sand/80">
              Choose a vacancy above or submit your basic profile through the
              application form.
            </p>

            <a
              href="/#apply-form-section"
              className="mt-6 inline-flex rounded-xl bg-spa-gold px-6 py-3 font-bold text-spa-obsidian"
            >
              Open Application Form
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
