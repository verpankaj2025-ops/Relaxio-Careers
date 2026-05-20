import { JobOpening, FAQItem, BenefitItem } from "./types";

export const BRAND_NAME = "Relaxio Spa & Wellness";
export const WHATSAPP_NUMBER = "+919455671995";

const WHATSAPP_WA_ME_ID = WHATSAPP_NUMBER.replace(/\D/g, "");

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_WA_ME_ID}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = buildWhatsAppLink(
  "Hi Relaxio Spa, I am interested in the Female Spa Staff Vacancy. Please share details."
);

/** 10-digit local number for placeholders and inline labels */
export const WHATSAPP_DISPLAY_LOCAL = WHATSAPP_WA_ME_ID.slice(-10);

/** Human-readable format, e.g. +91 9455671995 */
export const WHATSAPP_DISPLAY_FORMATTED = `+91 ${WHATSAPP_DISPLAY_LOCAL}`;

export const PHONE_NUMBER = WHATSAPP_NUMBER;
export const PHONE_LINK = `tel:${WHATSAPP_NUMBER}`;
export const SPA_LOCATION = "Gomti Nagar, Lucknow, Uttar Pradesh, India (Pin Code: 226010)";

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "massage-therapist",
    title: "Female Massage Therapist",
    salary: "₹35,000 - ₹55,000 + High Incentives",
    experience: "Freshers & Experienced Candidates (Training Provided)",
    description: "Perform premium therapeutic spa treatments including Swedish, Deep Tissue, Thai, and Aromatherapy. Provide visual luxury service while adhering to traditional wellness principles for our VIP clients.",
    requirements: [
      "Must have a professional and courteous attitude",
      "Knowledge of basic massage therapies (or willingness to learn)",
      "Dedicated to maintaining high hygiene and luxury spa standards",
      "Age profile between 18 to 35 preferred"
    ],
    tags: ["High Salary", "Immediate Joining", "Weekly Incentives", "Free Accommodation"]
  },
  {
    id: "spa-staff",
    title: "Female Spa Specialist & Therapist",
    salary: "₹30,000 - ₹45,000 + Daily Tips",
    experience: "Experienced or Enthusiastic Freshers",
    description: "Deliver luxurious body scrubs, steam bath management, facial therapies, and assist in setting up treatment rooms with candles, essential oils, and premium wellness tools.",
    requirements: [
      "Basic grooming standards and energetic personality",
      "Capable of managing wellness sessions and guiding clients",
      "Reliable, punctual, and helpful mindset",
      "Knowledge of alternative healing techniques is a plus"
    ],
    tags: ["Luxury Vibe", "Flexible Hours", "Training Provided", "Lucknow Job"]
  },
  {
    id: "receptionist",
    title: "Female Front Desk Receptionist",
    salary: "₹25,000 - ₹35,000 + Performance Bonus",
    experience: "0 - 3 Years of Customer Service / Hospitality Experience",
    description: "Manage front-desk operations, handle booking inquiries via phone, welcome VIP guests in luxury attire, and coordinate treatment scheduling for female massage therapists.",
    requirements: [
      "Excellent communication skills (Hindi & basic English)",
      "Polite, helpful, and welcoming personality",
      "Basic computer literacy to manage bookings and invoices",
      "Should naturally maintain elegant grooming standards"
    ],
    tags: ["Fixed Shifts", "No Hard Manual Work", "AC Workspace", "Lucknow Gomti Nagar"]
  },
  {
    id: "wellness-consultant",
    title: "Female Wellness & Spa Consultant",
    salary: "₹32,000 - ₹50,000 + Booking Incentives",
    experience: "1+ Years in hospitality, fitness, or luxury salons",
    description: "Consult with clients to recommend appropriate therapeutic packages, customized aromatherapy sessions, and spa benefits, ensuring a super-premium standard of customer delight.",
    requirements: [
      "Strong convincing and gentle communication skills",
      "High level of professional confidence & hospitality background",
      "Basic understanding of spa therapies and wellness packages",
      "Dedicated to growing premium clientele networks"
    ],
    tags: ["Hot Career Growth", "Premium Comm", "Luxury Client Focus"]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "High Executive Salary",
    description: "Earn best-in-industry monthly payouts of ₹30,000 to ₹55,000 + guaranteed daily tips and high conversion booking commissions.",
    iconName: "IndianRupee"
  },
  {
    title: "Guaranteed Safe Workplace",
    description: "Clean, professional, and female-only staffed working environment with strict security systems, CCTV, and verified luxury clients.",
    iconName: "ShieldCheck"
  },
  {
    title: "Luxury Work Atmosphere",
    description: "Work inside a stunning, modern luxury spa environment featuring relaxing gold interiors, therapeutic aroma systems, and high-end clients.",
    iconName: "Sparkles"
  },
  {
    title: "Accommodation Support",
    description: "Dedicated safe hostel and lodging accommodation facility available for female candidates moving from out of Lucknow.",
    iconName: "Home"
  },
  {
    title: "Professional Training Support",
    description: "Free international spa therapy training sessions from certified wellness experts. Beginners and freshers are absolutely welcome!",
    iconName: "GraduationCap"
  },
  {
    title: "Flexible Timings",
    description: "Choose customized shifts that balance your career goals with personal commitments. Weekly off and paid sick leaves provided.",
    iconName: "CalendarDays"
  },
  {
    title: "Weekly Incentives & Tips",
    description: "Special high-performing bonuses and 100% of staff visual tips are directly paid out every Sunday to encourage exceptional client feedback.",
    iconName: "TrendingUp"
  }
];

export const WHY_JOIN_US = [
  {
    title: "Highly Respected Career",
    description: "We treat spa therapy as a professional form of medical wellness. Step up in class with Relaxio's highly certified therapist platform.",
    stat: "100%"
  },
  {
    title: "Verified Premium Clients",
    description: "Our center in Gomti Nagar serves elite, pre-screened business executives and upscale local Lucknow families seeking genuine relaxation.",
    stat: "5-Star"
  },
  {
    title: "Accelerated Career Trajectory",
    description: "Outstanding therapists are promoted to Spa Captains, Center Managers, and International Trainers within 12 to 18 months of joining.",
    stat: "3x Faster"
  },
  {
    title: "Direct & Safe Payments",
    description: "Direct bank transfer payments are deposited on exactly the 1st of every month without any delays, ensuring total financial reliance.",
    stat: "On Time"
  }
];

export const ELIGIBILITY_RULES = [
  {
    title: "Gender Specific",
    value: "Female Candidates Only",
    desc: "Strictly hiring female therapists and spa support staff to maintain privacy.",
    highlight: true
  },
  {
    title: "Age Criterion",
    value: "18 to 35 Years",
    desc: "Energy, dedication, enthusiasm, and a positive career mindset are essential.",
    highlight: false
  },
  {
    title: "Prior Experience",
    value: "Freshers Welcome",
    desc: "Experience optional. Certified, free training is offered to all selected freshers.",
    highlight: false
  },
  {
    title: "Preferred Skills",
    value: "Helpful Communication",
    desc: "Polite tone. Basic Hindi or elementary English is appreciated for VIP customer dialogue.",
    highlight: false
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How to apply for spa jobs in Lucknow?",
    answer: `Applying is quick and easy. You can click the 'Apply Now on WhatsApp' button to start a direct chat with our recruitment coordinator at ${WHATSAPP_DISPLAY_FORMATTED}. Alternatively, fill out the simple online application form on this landing page, and our Gomti Nagar Lucknow office team will call you within 2-4 hours to schedule an interview.`
  },
  {
    question: "What is the salary of female spa staff in Lucknow at Relaxio Spa?",
    answer: "Female spa therapists and massage professionals at Relaxio Spa & Wellness earn between ₹30,000 to ₹55,000 per month. Additionally, there are rewarding daily cash tips, high retail booking commissions, and beautiful weekly performance incentives. Receptionists receive a fixed baseline salary of ₹25,000 to ₹35,000."
  },
  {
    question: "Is experience required for spa therapist jobs?",
    answer: "No, prior professional experience is not mandatory. We heartily welcome freshers! Relaxio Spa & Wellness offers fully paid premium guidance and training program managed by senior international therapists to prepare you for luxury massage therapies, skincare, and elite customer etiquette."
  },
  {
    question: "Do you provide accommodation for female staff?",
    answer: "Yes, absolutely. We recognize that many talented female massage therapists and spa therapists come from various towns across Uttar Pradesh, Uttarakhand, Bihar, and other regions. Relaxio provides safe, standard, hygienic, and supervised shared accommodation with meals near our Gomti Nagar facility."
  },
  {
    question: "Is the work environment safe for female employees?",
    answer: "Yes, employee safety is our highest priority! Relaxio Spa operates under a strictly professional, transparent, and standard medical wellness theme. We have CCTV surveillance in public lobby areas, a verified luxury customer registration policy, female-managed administrative operations, and security protocols to ensure complete safety and peace of mind."
  },
  {
    question: "Where is the spa located and when can I join?",
    answer: "Our luxury spa facility is situated in the premium commercial hub of Gomti Nagar, Lucknow. Selected candidates can join immediately as we have urgent visual staff vacancies ready right now. We can facilitate same-day interview callbacks and offer letters."
  }
];
