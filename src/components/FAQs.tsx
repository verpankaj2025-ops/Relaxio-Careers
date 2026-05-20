import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { FAQ_ITEMS, buildWhatsAppLink } from "../data";

const FAQ_WHATSAPP_MESSAGE =
  "Hi Relaxio Spa, I have an outstanding question regarding the female spa therapist hiring. Can we chat?";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default for premium visual layout

  const toggleIndex = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-spa-obsidian relative border-b border-spa-charcoal overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute left-1/4 top-1/2 w-[300px] h-[300px] bg-spa-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-left">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-spa-gold font-bold block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-spa-gold mx-auto" />
          <p className="text-sm text-spa-sand/80">
            Find immediate clarity regarding salaries, secure female boarding facility, joining timelines, and interviews in Lucknow below:
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl bg-spa-bronze border border-spa-charcoal overflow-hidden"
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex justify-between items-center gap-4 hover:bg-spa-charcoal/30 transition-colors"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-spa-gold shrink-0" />
                    <span className="font-serif text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-spa-sand shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-spa-gold" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="pb-6 pt-1 px-6 sm:px-8 text-sm sm:text-base text-spa-sand/85 leading-relaxed border-t border-spa-charcoal/40 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Extra notice box */}
        <div className="mt-12 p-6 rounded-2xl bg-spa-charcoal/40 border border-spa-charcoal flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif text-base font-bold text-white">Still have queries or feeling hesitant?</h4>
            <p className="text-xs text-spa-sand/70">Connect directly with our Lucknow recruitment manager for a polite call.</p>
          </div>
          <a
            href={buildWhatsAppLink(FAQ_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-grotesk text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-md shrink-0 block"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
