import { motion } from "motion/react";
import * as Lucide from "lucide-react";
import { BENEFITS } from "../data";

// Helper component to render Lucide icons based on string names correctly
function BenefitIcon({ name }: { name: string }) {
  const IconComponent = (Lucide as any)[name];
  if (!IconComponent) return <Lucide.Sparkles className="w-6 h-6 text-spa-gold" />;
  return <IconComponent className="w-6 h-6 text-spa-gold" />;
}

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-spa-bronze relative overflow-hidden border-b border-spa-charcoal">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-spa-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-spa-gold font-bold block">
            Why Choose Relaxio Spa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Premium Work Benefits
          </h2>
          <div className="w-16 h-[2px] bg-spa-gold mx-auto" />
          <p className="text-sm sm:text-base text-spa-sand/80">
            We provide the most supportive, friendly, and empowering employee environment in Uttar Pradesh. Read our customized perks designed for female welfare:
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 sm:p-8 rounded-2xl bg-spa-charcoal/70 border border-spa-charcoal hover:border-spa-gold/30 transition-all hover:-translate-y-1 block text-left space-y-4 shadow-xl"
            >
              {/* Icon Sphere */}
              <div className="w-12 h-12 rounded-xl bg-spa-obsidian border border-spa-gold/20 flex items-center justify-center shadow-lg">
                <BenefitIcon name={benefit.iconName} />
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="font-grotesk text-lg font-bold text-white tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-sm text-spa-sand/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
