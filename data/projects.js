// ─────────────────────────────────────────────────────────────
// PROJECTS — shown on the Projects page.
//
// To add a project, copy one object and edit it:
//   title       – card heading
//   description – one or two sentences, keep it friendly
//   tags        – small pills under the description
//   categories  – must match names in `categories` below (used by the filter)
//   repo        – GitHub link (optional)
//   live        – live demo link (optional, shows a "Live" button)
// ─────────────────────────────────────────────────────────────

// Helper so you only type the repo name
const gh = (repo) => `https://github.com/ibrahim-baatiah/${repo}`;

// Filter buttons on the Projects page ("All" shows everything)
export const categories = ["All", "Cloud", "Automation", "Security", "Software"];

export const projects = [
  {
    title: "AWS 3-Tier Java App",
    description:
      "A Java login app deployed the 'proper' way on AWS: Nginx → Tomcat → RDS, Redis sessions, load balancers, auto scaling, HTTPS, CloudFront and alerts that email me when things break. All built by hand in the Console.",
    tags: ["AWS", "Nginx", "Tomcat", "RDS", "Redis", "CloudFront"],
    categories: ["Cloud"],
    repo: gh("aws-3tier-java-login-app"),
  },
  {
    title: "Azure AD SYSVOL Lab",
    description:
      "Three domain controllers in three countries, all talking through a Linux router I set up. Terraform builds it, Ansible makes it a domain, and PowerShell fixes SYSVOL when I break it (on purpose, mostly).",
    tags: ["Azure", "Terraform", "Ansible", "PowerShell", "Active Directory"],
    categories: ["Cloud", "Automation"],
    repo: gh("windows-ad-automation"),
  },
  {
    title: "NoteWise",
    description:
      "Throw your PDFs, audio and notes at it and get back summaries and deep dives, powered by AI. Built with Next.js and FastAPI, and running on Azure set up with Terraform.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Azure Functions", "Terraform"],
    categories: ["Software", "Cloud"],
    repo: gh("notewise"),
  },
  {
    title: "Azure Sentinel Detections",
    description:
      "I brute-forced my own VM so Sentinel could catch me. KQL detections spot SSH attacks, link them to VM restarts, and a Logic App sends a heads-up.",
    tags: ["Microsoft Sentinel", "KQL", "Logic Apps", "Log Analytics"],
    categories: ["Security", "Cloud"],
    repo: gh("azure-sentinel"),
  },
  {
    title: "ish: Unix Shell",
    description:
      "Ever wondered what actually happens when you press Enter in a terminal? I did, so I built a shell from scratch in C, with pipes, redirection and variables.",
    tags: ["C", "Linux", "Processes"],
    categories: ["Software"],
    repo: gh("ish"),
  },
  {
    title: "HTTP Server",
    description:
      "A tiny web server in Java with zero frameworks: just raw sockets, hand-parsed requests and a lot of respect for the people who wrote Tomcat.",
    tags: ["Java", "Networking", "Sockets"],
    categories: ["Software"],
    repo: gh("http-server"),
  },
];
