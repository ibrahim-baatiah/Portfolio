// ─────────────────────────────────────────────────────────────
// CV — experience, education and certifications for the CV page.
// Skills come from data/skills.js and languages from data/profile.js.
// ─────────────────────────────────────────────────────────────

// Each point has a short bold `title` and the `text` that follows it.
// These are used on the CV web page AND the "Download PDF" resume.
export const experience = [
  {
    role: "Cloud & Infra Management Engineer",
    company: "LTM",
    period: "Mar 2024 – Present",
    location: "Kraków, Poland",
    points: [
      {
        title: "SYSVOL Repair Automation",
        text: "Wrote a PowerShell script that performs DFSR SYSVOL authoritative/non-authoritative syncs across multiple domain controllers; a manual fix that grew with every server now finishes in about a minute, regardless of environment size.",
      },
      {
        title: "Enterprise Incident Resolution",
        text: "Achieved a 95% first-contact resolution rate for Microsoft global enterprise customers, owning incidents end to end across VMs, network connectivity, DNS, storage and access.",
      },
      {
        title: "Hybrid Active Directory",
        text: "Resolved sign-in failures in hybrid environments involving Kerberos, Group Policy and domain controller replication.",
      },
      {
        title: "Knowledge Base",
        text: "Co-authored internal documentation for recurring issues, reducing team incident load by 25%.",
      },
    ],
  },
];

// Newest first. `note` is optional (shown as a smaller line underneath).
export const education = [
  {
    degree: "BSc in Computer Science",
    school: "WSB University",
    location: "Poland",
    period: "Oct 2023 – Jul 2026",
  },
  {
    degree: "Erasmus+ Exchange Semester",
    school: "AGH University of Kraków",
    location: "Kraków, Poland",
    period: "Mar 2023 – Jul 2023",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issued: "Jun 2026",
    url: "https://learn.microsoft.com/en-us/users/ibrahimomar212/credentials/6869d44a369a17bd",
  },
  {
    name: "Docker Foundations Professional Certificate",
    issued: "Sep 2026",
    url: "https://www.linkedin.com/learning/certificates/6ca4ac69dbb8f3a7af9903882f0d8de83b3c3cbc55f1f35805ade1f0b057cc2c",
  },
  {
    name: "The Infrastructure Developer's Guide to Terraform",
    issued: "Jul 2026",
    url: "https://certificates.platform.qa.com/9d39d8c6c122e5de606a0bae0f3619fcf06370e7.pdf",
  },
  {
    name: "Azure Linux Academy: Linux Specialist",
    issued: "Aug 2025",
    url: "https://certificates.platform.qa.com/c1d00bfe382b3bb2720ba82d5ca226bba7f3769f.pdf",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issued: "In progress",
  },
];
