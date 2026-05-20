import { motion } from "motion/react";
import { Sparkles, Phone, MessageSquare } from "lucide-react";
import { BRAND_NAME, PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from "../data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-spa-obsidian/85 backdrop-blur-md border-b border-spa-charcoal py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="p-2 bg-gradient-to-br from-spa-gold/20 to-transparent rounded-lg border border-spa-gold/30">
            <Sparkles className="w-5 h-5 text-spa-gold" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-spa-cream block leading-tight">
              RELAXIO
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-spa-gold block">
              Spa & Wellness
            </span>
          </div>
        </motion.div>

        {/* Action Widgets - WhatsApp and Call quick response triggers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 sm:gap-4"
        >
          {/* Minimal Safe Tag */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-emerald-950/40 border border-emerald-800/30 rounded-full text-xs text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Lucknow Female-Only Jobs</span>
          </div>

          <a
            href={PHONE_LINK}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-spa-sand hover:text-spa-gold transition-colors py-1.5 px-3 border border-spa-charcoal rounded-lg"
          >
            <Phone className="w-3.5 h-3.5 text-spa-gold" />
            <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-spa-gold hover:bg-spa-gold-light text-spa-obsidian px-4 py-2 rounded-lg font-grotesk text-xs sm:text-sm font-semibold transition-all shadow-md shadow-spa-gold/10 hover:shadow-spa-gold/20 hover:-translate-y-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-spa-obsidian text-spa-obsidian" />
            <span>Apply Now</span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
