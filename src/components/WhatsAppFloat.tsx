import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageSquare, Phone, ChevronRight } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from "../data";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Buttons for desktop and mid-size screen */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-sm:hidden">
        {/* Phone Circle Button */}
        <motion.a
          href={PHONE_LINK}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-14 h-14 bg-amber-500 rounded-full shadow-lg text-spa-obsidian border-2 border-spa-gold hover:bg-amber-400 transition-colors"
          title="Call Coordinator"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </motion.a>

        {/* WhatsApp Circle Button */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-lg text-white border-2 border-emerald-400 hover:bg-emerald-400 transition-colors"
          title="Apply on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Bottom Sticky Bar for Mobile-first views */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-spa-obsidian/95 backdrop-blur-md border-t border-spa-charcoal p-3 flex gap-3 sm:hidden shadow-2xl"
          >
            {/* Call Now */}
            <a
              href={PHONE_LINK}
              className="flex-1 flex items-center justify-center gap-2 bg-spa-charcoal hover:bg-spa-charcoal/80 text-spa-gold font-semibold font-grotesk py-3 px-4 rounded-xl border border-spa-gold/30 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-spa-gold" />
              <span>Call Now</span>
            </a>

            {/* Apply on WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[2] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold font-grotesk py-3 px-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-colors text-sm animate-pulse"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Apply on WhatsApp</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
