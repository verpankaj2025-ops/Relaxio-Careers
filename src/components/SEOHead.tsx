import { useEffect } from "react";
import { JOB_OPENINGS, BRAND_NAME, SPA_LOCATION, WHATSAPP_NUMBER } from "../data";

export default function SEOHead() {
  useEffect(() => {
    // 1. Set Page Title (optimized for recruitment)
    document.title = "Female Spa Staff Hiring in Lucknow & Gomti Nagar | Relaxio Spa";

    // 2. Set Page Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = "Urgent openings for female spa therapist jobs, massage therapists, and receptionist vacancy in Gomti Nagar, Lucknow. High salary (₹30K-₹55K), safe environment, and accommodation.";
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", descriptionText);

    // 3. Set OpenGraph (Meta Ads & WhatsApp previews)
    const ogTags = [
      { property: "og:title", content: "Female Spa Staff Hiring in Lucknow - Relaxio Spa" },
      { property: "og:description", content: "Immediate joining for female massage therapists and receptionists in Lucknow. High salary, safe female-only workspace & lodging." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=60" },
      { property: "og:url", content: window.location.href },
      { property: "og:locale", content: "en_IN" }
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", tag.content);
    });

    // 4. Set keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute(
      "content",
      "female spa jobs in Lucknow, spa therapist jobs in Gomti Nagar, female massage therapist jobs, spa staff vacancy Lucknow, wellness spa hiring, female receptionist jobs spa, salon therapist Lucknow, Relaxio Spa Lucknow"
    );

    // 5. Inject JSON-LD Schema Markups (JobPosting & LocalBusiness)
    const scriptId = "seo-schema-markup";
    let schemaScript = document.getElementById(scriptId) as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = scriptId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    const schemas = [
      // Local Business Schema
      {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": BRAND_NAME,
        "image": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
        "telephone": WHATSAPP_NUMBER,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gomti Nagar",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "url": window.location.href
      },
      // Job Posting Schemas lists
      ...JOB_OPENINGS.map((job) => ({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": `${job.description} Join Relaxio Spa in Gomti Nagar, Lucknow. Requirements: ${job.requirements.join(". ")}`,
        "datePosted": "2026-05-20",
        "validThrough": "2027-05-20",
        "jobBenefits": job.tags.join(", "),
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": BRAND_NAME,
          "sameAs": window.location.href,
          "logo": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=200&q=80"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gomti Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226010",
            "addressCountry": "IN"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 25000,
            "maxValue": 55000,
            "unitText": "MONTH"
          }
        }
      }))
    ];

    schemaScript.textContent = JSON.stringify(schemas);

    return () => {
      // Cleanup dynamically injected meta-tags on unmount
      ogTags.forEach((tag) => {
        const element = document.querySelector(`meta[property="${tag.property}"]`);
        if (element) element.remove();
      });
      const keywords = document.querySelector('meta[name="keywords"]');
      if (keywords) keywords.remove();
      const schemaMarkup = document.getElementById(scriptId);
      if (schemaMarkup) schemaMarkup.remove();
    };
  }, []);

  return null;
}
