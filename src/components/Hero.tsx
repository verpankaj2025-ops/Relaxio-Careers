import { motion } from "motion/react";
import { MessageSquare, Phone, MapPin, ShieldCheck, Trophy, Sparkles, ChevronDown } from "lucide-react";
import { BRAND_NAME, PHONE_LINK, WHATSAPP_LINK } from "../data";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("apply-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 px-4 sm:px-8 border-b border-spa-charcoal">
      {/* Background Image with Dark Soft Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80"
          alt="Relaxio Luxury Spa Interior Lucknow"
          className="w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend image cleanly into the theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-obsidian via-spa-obsidian/90 to-spa-obsidian/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-spa-obsidian to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Headlines and details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-spa-charcoal/80 border border-spa-gold/30 rounded-full text-xs sm:text-sm font-mono text-spa-gold-light"
          >
            <Sparkles className="w-4 h-4 text-spa-gold" />
            <span>VIP Wellness Spa Vacancies — Gomti Nagar, Lucknow</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Female Spa Staff <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-gold">
              Hiring in Lucknow
            </span>
          </motion.h1>

          {/* Subheadline provided in the requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-1.5 text-sm sm:text-base md:text-lg font-medium text-spa-sand/90"
          >
            <span className="bg-spa-charcoal py-1 px-3.5 rounded-lg border border-spa-charcoal text-spa-gold font-grotesk text-xs sm:text-sm">High Salary</span>
            <span className="text-spa-gold">•</span>
            <span className="bg-spa-charcoal py-1 px-3.5 rounded-lg border border-spa-charcoal text-spa-gold font-grotesk text-xs sm:text-sm">Safe Environment</span>
            <span className="text-spa-gold">•</span>
            <span className="bg-spa-charcoal py-1 px-3.5 rounded-lg border border-spa-charcoal text-spa-gold font-grotesk text-xs sm:text-sm">Luxury Spa</span>
            <span className="text-spa-gold">•</span>
            <span className="bg-spa-charcoal py-1 px-3.5 rounded-lg border border-spa-charcoal text-white font-grotesk text-xs sm:text-sm">Immediate Joining</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-spa-sand/80 max-w-xl leading-relaxed"
          >
            Are you looking for a respectable wellness career? Relaxio Spa & Wellness offers the safest, highest-paying, and most luxurious workspace for female massage therapists and spa staff in Gomti Nagar, Lucknow. Experienced profiles & freshers welcome!
          </motion.p>

          {/* Direct CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA (WhatsApp) */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer flex items-center justify-center gap-2 text-spa-obsidian font-bold text-sm sm:text-base font-grotesk py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-5 h-5 fill-spa-obsidian text-spa-obsidian" />
              <span>Apply on WhatsApp</span>
            </a>

            {/* Call Now */}
            <a
              href={PHONE_LINK}
              className="flex items-center justify-center gap-2 bg-spa-charcoal hover:bg-spa-charcoal/80 border border-spa-gold/30 text-spa-gold font-bold text-sm sm:text-base font-grotesk py-4 px-8 rounded-xl transition-all hover:border-spa-gold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Simple Inline Form CTA Link */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={scrollToForm}
            className="text-xs sm:text-sm font-mono text-spa-gold underline hover:text-spa-gold-light transition-colors mt-2"
          >
            Or Submit Direct Application Form Online ↓
          </motion.button>

          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-spa-charcoal/50 w-full"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-white">100% Safe</span>
                <span className="block text-[10px] text-spa-sand/60 font-mono">Female Only Space</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-spa-gold shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-white">₹35K - ₹55K</span>
                <span className="block text-[10px] text-spa-sand/60 font-mono">High Sal + Weekly Incentives</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-white">Gomti Nagar</span>
                <span className="block text-[10px] text-spa-sand/60 font-mono">Premium Lucknow Area</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Attractive Visual Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="lg:col-span-5 relative max-lg:hidden flex justify-center"
        >
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[24px] overflow-hidden border-2 border-spa-gold/30 shadow-2xl bg-spa-charcoal">
            {/* Visual element representing a peaceful spa treatment */}
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
              alt="Experienced Female Massage Therapist Lucknow spa"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Elegant vignette, label overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-spa-obsidian via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-spa-charcoal/90 backdrop-blur-md border border-spa-gold/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-widest font-mono text-spa-gold font-bold">Now Interviewing</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-sm font-semibold text-white">Daily Walk-in Available</p>
              <p className="text-[11px] text-spa-sand/75">Timing: 11:00 AM to 6:00 PM</p>
            </div>
          </div>

          {/* Background glowing circle for aesthetic depth */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-spa-gold/10 blur-[100px] rounded-full z-0" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 blur-[100px] rounded-full z-0" />
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <ChevronDown className="w-6 h-6 text-spa-gold/50" />
      </div>
    </section>
  );
}
