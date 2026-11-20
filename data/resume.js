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

// Projects on the resume: short, professional one-liners + repo link
// (the casual descriptions in data/projects.js are for the website)
export const resumeProjects = [
  {
    title: "AWS 3-Tier Java App",
    repo: gh("aws-3tier-java-login-app"),
    text: "Nginx → Tomcat → RDS MySQL with Redis sessions, NLBs, Auto Scaling, CloudFront/ACM, Secrets Manager, a Maven → SonarCloud → JFrog pipeline and CloudWatch alerting.",
  },
  {
    title: "Azure Multi-Region AD Lab",
    repo: gh("windows-ad-automation"),
    text: "Terraform-built hub-spoke network across 3 regions routed through a Linux NVA; Ansible promotes the domain and PowerShell automates SYSVOL recovery.",
  },
  {
    title: "NoteWise",
    repo: gh("notewise"),
    text: "AI study platform (Next.js, FastAPI, PostgreSQL) on Azure Functions and Blob Storage, with infrastructure in Terraform modules.",
  },
  {
    title: "Azure Sentinel Detections",
    repo: gh("azure-sentinel"),
    text: "KQL rules detecting SSH brute-force bursts correlated with VM power events, plus a Logic Apps SOAR playbook.",
  },
  {
    title: "ish (Unix Shell in C)",
    repo: gh("ish"),
    text: "Shell built from scratch with fork/exec process execution, pipes, I/O redirection and shell variables.",
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
