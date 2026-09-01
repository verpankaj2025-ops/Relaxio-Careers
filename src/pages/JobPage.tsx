import { JOB_OPENINGS, buildWhatsAppLink } from "../data";
import { SITE_URL } from "../seoData";

interface JobPageProps {
  jobId: string;
}

export default function JobPage({ jobId }: JobPageProps) {
  const job = JOB_OPENINGS.find((item) => item.id === jobId);

  if (!job) {
    return (
      <main className="min-h-screen bg-spa-obsidian text-white flex items-center justify-center p-6">
        <div>
          <h1 className="text-3xl font-bold">Job not found</h1>
          <a className="underline" href="/">Back to careers</a>
        </div>
      </main>
    );
  }

  const slugMap: Record<string, string> = {
    "massage-therapist": "female-massage-therapist-jobs-lucknow",
    "spa-staff": "female-spa-specialist-jobs-lucknow",
    receptionist: "female-spa-receptionist-jobs-lucknow",
    "wellness-consultant": "female-wellness-consultant-jobs-lucknow",
  };

  const slug = slugMap[job.id];
  const canonical = `${SITE_URL}/${slug}/`;

  return (
    <>

      <main className="min-h-screen bg-spa-obsidian text-spa-cream">
        <section className="py-20 px-4 sm:px-8 border-b border-spa-charcoal">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="/" className="text-sm text-spa-gold underline">
                ← Relaxio Careers
              </a>
              <a
                href="/female-spa-jobs-lucknow/"
                className="text-sm text-spa-gold underline"
              >
                All Female Spa Jobs in Lucknow
              </a>
              <a
                href="/spa-jobs-for-freshers-lucknow/"
                className="text-sm text-spa-gold underline"
              >
                Freshers Guide
              </a>
              <a
                href="/spa-jobs-with-accommodation/"
                className="text-sm text-spa-gold underline"
              >
                Accommodation Support
              </a>
              <a
                href="/spa-jobs-india/"
                className="text-sm text-spa-gold underline"
              >
                Apply From Anywhere in India
              </a>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-spa-gold">
              Current Vacancy · Gomti Nagar, Lucknow
            </p>

            <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-white">
              {job.title} Jobs in Lucknow
            </h1>

            <p className="mt-6 text-lg text-spa-sand/80 max-w-3xl">
              {job.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-spa-charcoal border border-spa-charcoal">
                <strong className="block text-spa-gold">Salary</strong>
                <span>{job.salary}</span>
              </div>
              <div className="p-5 rounded-xl bg-spa-charcoal border border-spa-charcoal">
                <strong className="block text-spa-gold">Location</strong>
                <span>Gomti Nagar, Lucknow</span>
              </div>
              <div className="p-5 rounded-xl bg-spa-charcoal border border-spa-charcoal">
                <strong className="block text-spa-gold">Experience</strong>
                <span>{job.experience}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-white">Job Responsibilities & Requirements</h2>
                <ul className="mt-5 space-y-3">
                  {job.requirements.map((item) => (
                    <li key={item} className="text-spa-sand/85">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">Who Can Apply?</h2>
                <p className="mt-4 text-spa-sand/80 leading-relaxed">
                  Eligible female candidates from Lucknow and other parts of India
                  can apply. Candidates relocating to Lucknow can ask the recruitment
                  team about available accommodation support and joining guidance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">How to Apply</h2>
                <p className="mt-4 text-spa-sand/80 leading-relaxed">
                  Apply directly through WhatsApp or use the main online application
                  form. Share your basic profile, current city, experience and preferred
                  role for interview scheduling.
                </p>

                <a
                  href={buildWhatsAppLink(`Hi Relaxio Spa, I want to apply for the ${job.title} position in Gomti Nagar, Lucknow.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 px-6 py-3 rounded-xl bg-spa-gold text-spa-obsidian font-bold"
                >
                  Apply on WhatsApp
                </a>
              </section>
            </article>

            <aside className="p-6 rounded-2xl bg-spa-charcoal border border-spa-gold/20 h-fit">
              <h2 className="text-xl font-bold text-white">Apply for this job</h2>
              <p className="mt-3 text-sm text-spa-sand/75">
                Candidates from across India are welcome to apply for this Lucknow vacancy.
              </p>
              <a href="/#apply-form-section" className="block mt-6 text-center px-5 py-3 rounded-xl border border-spa-gold text-spa-gold font-bold">
                Open Application Form
              </a>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
