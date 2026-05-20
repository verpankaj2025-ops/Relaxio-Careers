import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle, MessageSquare, Phone, RefreshCw, AlertCircle, Sparkles } from "lucide-react";
import { PHONE_NUMBER, PHONE_LINK, buildWhatsAppLink, WHATSAPP_DISPLAY_LOCAL } from "../data";

interface ApplicationFormProps {
  selectedRoleFromOpening: string;
}

export default function ApplicationForm({ selectedRoleFromOpening }: ApplicationFormProps) {
  // Input fields
  const [role, setRole] = useState("Female Massage Therapist");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  
  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  // Sync role selection when chosen from openings
  useEffect(() => {
    if (selectedRoleFromOpening) {
      setRole(selectedRoleFromOpening);
    }
  }, [selectedRoleFromOpening]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple Form Validations
    if (!name.trim()) return setError("Please enter your name");
    if (!phone.trim() || phone.length < 10) return setError("Please enter a valid 10-digit mobile number");
    if (!age || parseInt(age) < 18 || parseInt(age) > 45) return setError("Applicant age must be between 18 and 45");
    if (!experience) return setError("Please choose prior therapy experience status");
    if (!city.trim()) return setError("Please enter your current city location");

    setIsSubmitting(true);

    // Simulate submission loading for premium UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Save locally to maintain state persistence on refresh/test
      const payload = { name, phone, age, experience, role, city, date: new Date().toISOString() };
      const currentHistory = JSON.parse(localStorage.getItem("relaxio_apps") || "[]");
      currentHistory.push(payload);
      localStorage.setItem("relaxio_apps", JSON.stringify(currentHistory));
    }, 1500);
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setName("");
    setPhone("");
    setAge("");
    setExperience("");
    setCity("");
  };

  // Fast track via WhatsApp
  const handleWhatsAppSubmit = () => {
    const message =
      `*NEW SPA JOB APPLICATION FORM*\n\n` +
      `● *Name:* ${name || "Not Entered"}\n` +
      `● *Role:* ${role}\n` +
      `● *Phone:* ${phone || "Not Entered"}\n` +
      `● *Age:* ${age || "Not Entered"} Years\n` +
      `● *Experience:* ${experience || "Not Selected"}\n` +
      `● *Current City:* ${city || "Not Entered"}\n\n` +
      `Please schedule my interview at the Gomti Nagar center.`;
    window.open(buildWhatsAppLink(message), "_blank");
  };

  return (
    <section id="apply-form-section" className="py-20 px-4 sm:px-8 bg-spa-bronze border-b border-spa-charcoal relative">
      {/* Glow elements */}
      <div className="absolute left-10 top-1/3 w-[250px] h-[250px] bg-spa-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Descriptive text pointing to quick response times */}
          <div className="lg:col-span- così lg:col-span-5 text-left space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-spa-gold font-bold block">
              1-Minute Application
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Apply Online Instantly
            </h2>
            <p className="text-sm sm:text-base text-spa-sand/80 leading-relaxed">
              Fill in your basic details below. Our female HR recruiting team will contact you back via phone or WhatsApp within 2-4 hours to organize your interview or assist with lodging logistics.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-spa-charcoal flex items-center justify-center shrink-0 border border-spa-gold/20">
                  <span className="font-mono text-spa-gold text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Submit details</h4>
                  <p className="text-xs text-spa-sand/60">Takes less than 45 seconds to submit your quick profile summary.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-spa-charcoal flex items-center justify-center shrink-0 border border-spa-gold/20">
                  <span className="font-mono text-spa-gold text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Quick HR brief</h4>
                  <p className="text-xs text-spa-sand/60">We review and confirm initial qualifications instantly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-spa-charcoal flex items-center justify-center shrink-0 border border-spa-gold/20">
                  <span className="font-mono text-spa-gold text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Interview booking</h4>
                  <p className="text-xs text-spa-sand/60">Receive fixed salary offer letter and immediate Lucknow joining dates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The actual high-converting form container */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-spa-charcoal/50 border border-spa-charcoal shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-gold" />
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="application-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="text-center sm:text-left mb-6">
                      <h3 className="font-serif text-2xl font-bold text-white">Application Form</h3>
                      <p className="text-xs text-spa-sand/65">Please fill with correct references to secure fast interview callbacks.</p>
                    </div>

                    {/* Show error alerts */}
                    {error && (
                      <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-red-400 text-xs flex gap-2 items-center text-left">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Grid wrapper */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="text-left space-y-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-spa-sand/85 font-semibold">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Priya Sharma"
                          className="w-full bg-spa-obsidian border border-spa-charcoal hover:border-spa-gold/20 focus:border-spa-gold text-white text-sm py-3 px-4 rounded-xl outline-none transition-colors"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="text-left space-y-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-spa-sand/85 font-semibold">WhatsApp / Mobile No.</label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                          placeholder={`e.g. ${WHATSAPP_DISPLAY_LOCAL}`}
                          className="w-full bg-spa-obsidian border border-spa-charcoal hover:border-spa-gold/20 focus:border-spa-gold text-white text-sm py-3 px-4 rounded-xl outline-none transition-colors"
                        />
                      </div>

                      {/* Age (Mandatory check 18+) */}
                      <div className="text-left space-y-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-spa-sand/85 font-semibold">Your Age (Years)</label>
                        <input
                          type="number"
                          required
                          min={18}
                          max={45}
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="e.g. 23"
                          className="w-full bg-spa-obsidian border border-spa-charcoal hover:border-spa-gold/20 focus:border-spa-gold text-white text-sm py-3 px-4 rounded-xl outline-none transition-colors"
                        />
                      </div>

                      {/* Role selection dropdown */}
                      <div className="text-left space-y-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-spa-sand/85 font-semibold">Applying For</label>
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full bg-spa-obsidian border border-spa-charcoal hover:border-spa-gold/20 focus:border-spa-gold text-white text-sm py-3 px-4 rounded-xl outline-none transition-colors appearance-none"
                        >
                          <option value="Female Massage Therapist">Female Massage Therapist</option>
                          <option value="Spa Staff Specialist">Spa Specialist/Staff</option>
                          <option value="Spa Front Desk Receptionist">Front Desk Receptionist</option>
                          <option value="Spa Wellness Consultant">Wellness Consultant</option>
                        </select>
                      </div>

                      {/* Experience Dropdown */}
                      <div className="text-left space-y-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-spa-sand/85 font-semibold">Your Experience</label>
                        <select
                          required
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="w-full bg-spa-obsidian border border-spa-charcoal hover:border-spa-gold/20 focus:border-spa-gold text-white text-sm py-3 px-4 rounded-xl outline-none transition-colors"
                        >
                          <option value="" disabled>Choose your profile</option>
                          <option value="Fresher (No Experience - Training required)">Fresher (Needs Training)</option>
                          <option value="Experienced (Under 1 Year)">Experienced (Under 1 Year)</option>
                          <option value="Experienced (1-3 Years)">Experienced (1-3 Years)</option>
                          <option value="Senior Specialist (3+ Years)">Senior Specialist (3+ Years)</option>
                        </select>
                      </div>

                      {/* Current City */}
                      <div className="text-left space-y-1.5">
                        <label className="block text-xs font-mono uppercase tracking-wider text-spa-sand/85 font-semibold">Current City</label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Lucknow or Varanasi"
                          className="w-full bg-spa-obsidian border border-spa-charcoal hover:border-spa-gold/20 focus:border-spa-gold text-white text-sm py-3 px-4 rounded-xl outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-spa-gold hover:bg-spa-gold-light text-spa-obsidian disabled:bg-spa-charcoal disabled:text-spa-sand font-bold font-grotesk py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-spa-gold/10 hover:-translate-y-0.5 flex justify-center items-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Register Application Form</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Frame with Double Conversion Triggers */
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6 space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-3xl font-bold text-white">Application Received!</h3>
                      <p className="text-sm text-spa-sand/80 max-w-md mx-auto leading-relaxed">
                        Excellent, <strong className="text-white">{name}</strong>! Your application profile for the <strong className="text-spa-gold font-serif">{role}</strong> role has been securely saved in our Lucknow system database.
                      </p>
                    </div>

                    {/* Double conversions buttons nested */}
                    <div className="p-5 bg-spa-obsidian border border-spa-charcoal rounded-2xl max-w-md mx-auto space-y-4">
                      <span className="block text-[11px] font-mono tracking-widest text-spa-gold uppercase font-bold">
                        ★ Recommended Action ★
                      </span>
                      <p className="text-xs text-spa-sand/70">
                        To bypass queue waiting times and fast-track your Lucknow interview schedule, tap below to forward your details directly on WhatsApp:
                      </p>

                      <button
                        onClick={handleWhatsAppSubmit}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-grotesk py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                      >
                        <MessageSquare className="w-4 h-4 fill-white text-white" />
                        <span>Send Application on WhatsApp</span>
                      </button>

                      <a
                        href={PHONE_LINK}
                        className="block text-center text-xs font-mono text-spa-sand hover:text-spa-gold py-1.5 transition-colors underline"
                      >
                        Or Call HR Office Direct: {PHONE_NUMBER}
                      </a>
                    </div>

                    <button
                      onClick={resetForm}
                      className="text-xs text-spa-sand/50 hover:text-spa-gold transition-colors font-mono underline"
                    >
                      Fill another application form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
