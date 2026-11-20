// ─────────────────────────────────────────────────────────────
// RESUME (PDF) — extra content used only by the "Download PDF" resume.
// Experience, education and certifications are shared with the CV page
// and live in data/cv.js. Name/email/links come from data/profile.js.
//
// Keep it to ONE A4 page: if you add lines, check the print preview.
// ─────────────────────────────────────────────────────────────

const gh = (repo) => `https://github.com/ibrahim-baatiah/${repo}`;

// Header line under your name
export const resumeHeader = {
  location: "Kraków, Poland",
  website: "https://ibrahimdev.cloud",
};

// Projects on the resume: one plain sentence on what you built + repo link
// (the casual descriptions in data/projects.js are for the website)
export const resumeProjects = [
  {
    title: "AWS 3-Tier Java App",
    repo: gh("aws-3tier-java-login-app"),
    text: "Deployed a Java login app on AWS as a highly available 3-tier architecture with load balancing, auto scaling, HTTPS and monitoring.",
  },
  {
    title: "Azure Multi-Region AD Lab",
    repo: gh("windows-ad-automation"),
    text: "Built a 3-region Active Directory lab on Azure with Terraform and Ansible to reproduce and automate SYSVOL replication fixes.",
  },
  {
    title: "NoteWise",
    repo: gh("notewise"),
    text: "Built a full-stack AI study app that turns PDFs, audio and notes into summaries, deployed on Azure with Terraform.",
  },
  {
    title: "Azure Sentinel Detections",
    repo: gh("azure-sentinel"),
    text: "Wrote Microsoft Sentinel detections in KQL that flag SSH brute-force attacks and trigger automated alerts.",
  },
  {
    title: "ish (Unix Shell in C)",
    repo: gh("ish"),
    text: "Wrote a Unix shell from scratch in C, with pipes, I/O redirection and variables, to learn how processes work.",
  },
];

// Skills on the resume (grouped more compactly than on the website)
export const resumeSkills = [
  { group: "Cloud", items: "Azure, AWS" },
  { group: "IaC & Containers", items: "Terraform, Ansible, Docker, Docker Compose, Kubernetes" },
  { group: "Networking", items: "TCP/IP, Subnetting, DNS, VNets/VPCs, Peering, Hub-Spoke, UDRs/NVA Routing, Load Balancers, TLS" },
  { group: "Systems", items: "Linux (troubleshooting, boot/GRUB, SSH), Windows Server, Active Directory (FSMO, Kerberos), DFSR/SYSVOL, Group Policy" },
  { group: "Languages", items: "Python, Java, C, JavaScript, PowerShell, Bash, SQL" },
  { group: "Frameworks & Databases", items: "FastAPI, React, Next.js, PostgreSQL, MySQL, Azure SQL, MongoDB, Redis" },
  { group: "Spoken", items: "Arabic (Native), English (C1)" },
];
