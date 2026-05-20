import { motion } from "motion/react";
import { Sparkles, AlertCircle, HelpCircle } from "lucide-react";
import { ELIGIBILITY_RULES } from "../data";

export default function Eligibility() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-spa-bronze relative border-b border-spa-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive info and urgent notification */}
          <div className="lg:col-span- così lg:col-span-5 text-left space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-spa-gold font-bold block">
              Candidate Requirements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Are You Eligible to Apply?
            </h2>
            <p className="text-sm sm:text-base text-spa-sand/80 leading-relaxed">
              We maintain a premium, safe wellness salon culture. Please review our basic requirements before you schedule your Lucknow interview briefing. We love to promote raw talent with dynamic values!
            </p>

            {/* Critical alert badge */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-white uppercase tracking-wider font-mono">
                  Strict Privacy Policy
                </span>
                <span className="block text-xs text-spa-sand/80 mt-1">
                  Relaxio is a ladies spa and wellness sanctuary in Gomti Nagar. Out of high security and strict operational boundaries, we only hire female therapists, specialists, and receptionists.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key requirements list cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ELIGIBILITY_RULES.map((rule, idx) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`p-6 rounded-2xl border text-left flex flex-col justify-between h-[180px] transition-all shadow-md ${
                  rule.highlight
                    ? "bg-gradient-to-tr from-spa-gold/15 to-transparent border-spa-gold/40"
                    : "bg-spa-charcoal/60 border-spa-charcoal/80 hover:border-spa-charcoal"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono tracking-wider uppercase inline-block mb-1 px-2 py-0.5 rounded ${
                    rule.highlight ? "bg-spa-gold text-spa-obsidian font-bold" : "bg-spa-charcoal text-spa-sand/80"
                  }`}>
                    {rule.title}
                  </span>
                  <p className="font-serif text-lg font-bold text-white mt-2">
                    {rule.value}
                  </p>
                </div>
                <p className="text-xs text-spa-sand/75 leading-relaxed mt-2">
                  {rule.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
