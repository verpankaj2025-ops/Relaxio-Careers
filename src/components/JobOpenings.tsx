import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Sparkles, MessageSquare, Briefcase } from "lucide-react";
import { JOB_OPENINGS, buildWhatsAppLink } from "../data";

interface JobOpeningsProps {
  onSelectRole: (role: string) => void;
}

export default function JobOpenings({ onSelectRole }: JobOpeningsProps) {
  // Utility to create custom WhatsApp text per role
  const getWhatsAppLink = (roleTitle: string) =>
    buildWhatsAppLink(
      `Hi Relaxio Spa, I am interested in applying for the Female "${roleTitle}" position in Gomti Nagar, Lucknow. Please let me know the interview details.`
    );

  const handleApplyClick = (roleTitle: string) => {
    // Select role in form dropdown and scroll there
    onSelectRole(roleTitle);
    const element = document.getElementById("apply-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="vacancies-section" className="py-20 px-4 sm:px-8 bg-spa-obsidian relative border-b border-spa-charcoal">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-spa-gold font-bold block">
            Immediate Vacancies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Explore Job Openings
          </h2>
          <div className="w-16 h-[2px] bg-spa-gold mx-auto" />
          <p className="text-sm sm:text-base text-spa-sand/80">
            Hiring active female applicants right now. We support full on-job training. Apply directly below using WhatsApp callback or our web application form:
          </p>
        </div>

        {/* Vacancy Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {JOB_OPENINGS.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-spa-bronze/90 border border-spa-charcoal hover:border-spa-gold/35 transition-all shadow-xl hover:shadow-spa-gold/5 overflow-hidden"
            >
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-spa-gold/5 via-spa-gold/40 to-spa-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Info row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-spa-gold/10 border border-spa-gold/20 text-[10px] font-mono text-spa-gold font-bold uppercase tracking-wider mb-2">
                      <Briefcase className="w-3 h-3" />
                      Active Hiring
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                      {job.title}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="block text-sm font-mono text-spa-gold-light font-bold">
                      {job.salary}
                    </span>
                    <span className="block text-[10px] text-spa-sand/60">
                      Monthly Take-home
                    </span>
                  </div>
                </div>

                {/* Sub title / Exp */}
                <p className="text-xs font-mono text-spa-sand/90 mb-4 bg-spa-charcoal/50 py-1.5 px-3 rounded-lg border border-spa-charcoal/30 inline-block">
                  🎯 Experience: {job.experience}
                </p>

                {/* Short Description */}
                <p className="text-sm text-spa-sand/70 leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Requirements check list */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-spa-gold font-semibold">Key Requirements:</p>
                  {job.requirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-spa-sand/95 font-medium">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and CTA layout */}
              <div className="space-y-6 pt-6 border-t border-spa-charcoal/50 mt-auto">
                {/* Visual badges */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-spa-charcoal text-spa-sand/80 border border-spa-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action buttons */}
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  {/* WhatsApp contact */}
                  <a
                    href={getWhatsAppLink(job.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm font-grotesk py-3 px-5 rounded-xl transition-all shadow-md active:translate-y-px"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Apply via WhatsApp</span>
                  </a>

                  {/* Form toggle apply */}
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-spa-charcoal hover:bg-spa-charcoal/80 border border-spa-gold/30 text-spa-gold hover:border-spa-gold font-bold text-xs sm:text-sm font-grotesk py-3 px-5 rounded-xl transition-all"
                  >
                    <span>Or Submit Form Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
