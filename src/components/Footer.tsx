import { BRAND_NAME, PHONE_LINK, PHONE_NUMBER, SPA_LOCATION, WHATSAPP_DISPLAY_FORMATTED, WHATSAPP_LINK } from "../data";
import { Sparkles, MapPin, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-spa-obsidian border-t border-spa-charcoal text-left">
      {/* Upper Footer: Core Coordinates & Map Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-spa-charcoal/50">
        
        {/* Brand column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-spa-gold/10 rounded border border-spa-gold/20">
              <Sparkles className="w-4 h-4 text-spa-gold" />
            </div>
            <span className="font-serif text-lg font-bold tracking-wider text-white">
              RELAXIO SPA
            </span>
          </div>
          <p className="text-xs sm:text-sm text-spa-sand/75 leading-relaxed max-w-sm">
            Relaxio Spa & Wellness is Lucknow\'s leading premium boutique retreat specializing in organic healing therapies. We promote respectful and highly secure careers for passionate female wellness consultants.
          </p>
          <div className="p-3.5 bg-spa-charcoal/50 border border-spa-charcoal rounded-xl text-xs text-spa-sand/70 flex gap-2 items-center max-w-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Strictly verified families & business luxury clientele only.</span>
          </div>
        </div>

        {/* Contact/Location details */}
        <div className="md:col-span-4 space-y-5">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-spa-gold font-bold">
            Office Location
          </h4>
          
          <div className="space-y-4 text-xs sm:text-sm text-spa-sand/90">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-spa-gold shrink-0 mt-0.5" />
              <span>
                <strong>Premium Centre:</strong> Gomti Nagar, Lucknow, Uttar Pradesh, Pin Code: 226010, India
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-spa-gold shrink-0 mt-0.5" />
              <span>
                <strong>HR Desk:</strong> {PHONE_NUMBER}
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-spa-gold shrink-0 mt-0.5" />
              <span>
                <strong>WhatsApp Group Support:</strong> Active 24 Hours
              </span>
            </div>
          </div>
        </div>

        {/* Quick links to navigate sections smoothly */}
        <div className="md:col-span-3 space-y-5">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-spa-gold font-bold">
            Therapist Resources
          </h4>
          <ul className="space-y-2.5 text-xs font-mono text-spa-sand/80">
            <li>
              <a href="#vacancies-section" className="hover:text-spa-gold transition-colors">
                ⚡ Walk-in Vacancies
              </a>
            </li>
            <li>
              <a href="#apply-form-section" className="hover:text-spa-gold transition-colors">
                ✍ Apply Online Form
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-spa-gold transition-colors text-emerald-400">
                💬 Fast-Track WhatsApp
              </a>
            </li>
            <li>
              <a href={PHONE_LINK} className="hover:text-spa-gold transition-colors text-amber-400">
                📞 Call {WHATSAPP_DISPLAY_FORMATTED}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SEO Natural Keywords Block: Essential for organic crawling crawlers in Lucknow */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8 text-left border-b border-spa-charcoal/50">
        <h5 className="font-mono text-[10px] uppercase tracking-widest text-spa-gold font-bold mb-3">
          Lucknow Local Directory & SEO Career Classification
        </h5>
        <p className="text-[11px] text-spa-sand/55 leading-relaxed font-sans">
          Are you searching for terms like <strong>female spa jobs in Lucknow</strong> or premium <strong>spa therapist jobs in Gomti Nagar</strong>? Relaxio Spa & Wellness provides lucrative employment vacancies matching <strong>female massage therapist jobs</strong> and comprehensive entry-level <strong>spa staff vacancy Lucknow</strong> lookouts. Our professional facility is highly optimized for female-only employees looking for <strong>wellness spa hiring</strong> lists, as well as <strong>female receptionist jobs spa</strong> sectors near Gomti Nagar bypass channels. Freshers in Uttar Pradesh receive full therapy training and lodging accommodations to establish high-paying, certified wellness therapist careers in Lucknow.
        </p>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-spa-sand/50 gap-4">
        <p>© 2026 {BRAND_NAME}. All Recruitment Rights Reserved.</p>
        <div className="flex gap-4">
          <span>Registered Wellness Employer, Lucknow</span>
          <span>•</span>
          <span>Privacy & Employee Safety Certified</span>
        </div>
      </div>
    </footer>
  );
}
