import { motion } from "motion/react";
import { Sparkles, Star, Award, ShieldAlert, CheckCircle2 } from "lucide-react";
import { WHY_JOIN_US } from "../data";

export default function WhyJoin() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-spa-obsidian relative border-b border-spa-charcoal overflow-hidden">
      {/* Background glow shadow elements */}
      <div className="absolute right-1/4 top-1/2 w-[350px] h-[350px] bg-spa-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column A: Stats Cards Grid */}
          <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {WHY_JOIN_US.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-spa-bronze border border-spa-charcoal hover:border-spa-gold/20 transition-all text-left shadow-lg relative"
              >
                {/* Micro stat number overlay */}
                <div className="absolute top-4 right-6 text-3xl font-mono text-spa-gold/15 font-extrabold select-none">
                  0{idx + 1}
                </div>

                <div className="text-2xl font-serif font-bold text-spa-gold-light tracking-tight mb-2">
                  {item.stat}
                </div>
                <h3 className="font-grotesk text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-spa-sand/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column B: Strong text highlights & guarantee */}
          <div className="lg:col-span-5 order-1 lg:order-2 text-left space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-spa-gold font-bold block">
              Professional Culture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              A Highly Rewarding & Respectable Career Way
            </h2>
            <p className="text-sm sm:text-base text-spa-sand/85 leading-relaxed">
              At Relaxio Spa & Wellness, we operate unlike raw commercial setups. We understand that spa therapists are healing practitioners who deserve immense respect, absolute security, and fantastic financial growth.
            </p>

            <ul className="space-y-3.5">
              {[
                "100% Secure Female Salon Operations",
                "Direct, Non-Delayed Bank Payouts on Name Registration",
                "Supportive and respectful female management coordinators",
                "Elegant client code of conduct, ensuring proper decorum"
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-spa-gold shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-spa-cream/95">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Visual banner quote */}
            <div className="mt-8 p-5 rounded-2xl bg-spa-charcoal/80 border border-spa-charcoal flex gap-4">
              <Star className="w-8 h-8 text-spa-gold shrink-0" />
              <div>
                <p className="font-serif text-sm italic text-spa-sand">
                  \"I joined Relaxio as a freshman with no background. Within 6 months, their free training helped me double my income, and I live comfortably in their safe Gomti Nagar hostel!\"
                </p>
                <span className="block text-xs font-mono text-spa-gold mt-2 font-bold">— Sapna S., Senior Massage Specialist</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
