import nodemailer from "nodemailer";

type ApplicationPayload = {
  name?: unknown;
  phone?: unknown;
  age?: unknown;
  role?: unknown;
  experience?: unknown;
  city?: unknown;
  website?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return Response.json(
        { success: false, message: "Method not allowed." },
        { status: 405 },
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_APP_PASSWORD;
    const recruitmentEmail =
      process.env.RECRUITMENT_EMAIL || "s80891433@gmail.com";

    if (!smtpUser || !smtpPassword || !EMAIL_REGEX.test(recruitmentEmail)) {
      console.error("Email configuration is missing or invalid.");
      return Response.json(
        {
          success: false,
          message: "Application service is temporarily unavailable.",
        },
        { status: 500 },
      );
    }

    let body: ApplicationPayload;

    try {
      body = (await request.json()) as ApplicationPayload;
    } catch {
      return Response.json(
        { success: false, message: "Invalid application request." },
        { status: 400 },
      );
    }

    // Honeypot: bots should leave this empty.
    if (text(body.website)) {
      return Response.json({ success: true });
    }

    const name = text(body.name);
    const rawPhone = text(body.phone);
    const phone = rawPhone
      .replace(/\D/g, "")
      .replace(/^91(?=\d{10}$)/, "");

    const age = Number(text(body.age));
    const role = text(body.role);
    const experience = text(body.experience);
    const city = text(body.city);

    if (!name || name.length > 100) {
      return Response.json(
        { success: false, message: "Please enter a valid name." },
        { status: 400 },
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        { success: false, message: "Please enter a valid 10-digit mobile number." },
        { status: 400 },
      );
    }

    if (!Number.isInteger(age) || age < 18 || age > 45) {
      return Response.json(
        { success: false, message: "Applicant age must be between 18 and 45." },
        { status: 400 },
      );
    }

    if (!role || role.length > 100) {
      return Response.json(
        { success: false, message: "Please select a role." },
        { status: 400 },
      );
    }

    if (!experience || experience.length > 120) {
      return Response.json(
        { success: false, message: "Please select your experience." },
        { status: 400 },
      );
    }

    if (!city || city.length > 100) {
      return Response.json(
        { success: false, message: "Please enter your current city." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeRole = escapeHtml(role);
    const safeExperience = escapeHtml(experience);
    const safeCity = escapeHtml(city);

    try {
      await transporter.sendMail({
        from: smtpUser,
        to: recruitmentEmail,
        replyTo: smtpUser,
        subject: `New Spa Job Application — ${role} — ${name}`,
        text: [
          "NEW RELAXIO SPA JOB APPLICATION",
          "",
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Age: ${age}`,
          `Role: ${role}`,
          `Experience: ${experience}`,
          `Current City: ${city}`,
          `Submitted: ${submittedAt}`,
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>New Relaxio Spa Job Application</h2>
            <table cellpadding="8" cellspacing="0" border="0">
              <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
              <tr><td><strong>Age</strong></td><td>${age}</td></tr>
              <tr><td><strong>Role</strong></td><td>${safeRole}</td></tr>
              <tr><td><strong>Experience</strong></td><td>${safeExperience}</td></tr>
              <tr><td><strong>Current City</strong></td><td>${safeCity}</td></tr>
              <tr><td><strong>Submitted</strong></td><td>${escapeHtml(submittedAt)}</td></tr>
            </table>
          </div>
        `,
      });

      return Response.json({ success: true });
    } catch (error) {
      console.error("Application email failed:", error);

      return Response.json(
        {
          success: false,
          message:
            "We could not send your application right now. Please apply via WhatsApp.",
        },
        { status: 502 },
      );
    }
  },
};
