const gh = (repo) => `https://github.com/ibrahim-baatiah/${repo}`;

export const categories = ["All", "Cloud", "Automation", "Security", "Software"];

export const projects = [
  {
    title: "AWS 3-Tier Java App",
    description:
      "Production-style 3-tier deployment on AWS: Nginx → Tomcat → RDS MySQL with Redis sessions, load balancers, auto scaling, HTTPS, CloudFront, a Maven → SonarCloud → JFrog pipeline and CloudWatch alerting.",
    tags: ["AWS", "Nginx", "Tomcat", "RDS", "Redis", "CloudFront"],
    categories: ["Cloud"],
    repo: gh("aws-3tier-java-login-app"),
    featured: true,
  },
  {
    title: "Azure AD SYSVOL Lab",
    description:
      "Multi-region Active Directory lab: Terraform builds three domain controllers in a hub-spoke network routed through a Linux NVA, Ansible promotes the domain, and PowerShell automates SYSVOL restores.",
    tags: ["Azure", "Terraform", "Ansible", "PowerShell", "Active Directory"],
    categories: ["Cloud", "Automation"],
    repo: gh("windows-ad-automation"),
    featured: true,
  },
  {
    title: "NoteWise",
    description:
      "Cloud-native AI study platform that turns PDFs, audio and notes into summaries and deep dives, with Azure infrastructure defined in Terraform modules.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Azure Functions", "Terraform"],
    categories: ["Software", "Cloud"],
    repo: gh("notewise"),
    featured: true,
  },
  {
    title: "Azure Sentinel Detections",
    description:
      "SSH brute-force detections in KQL, correlated with VM restart/deallocate events, with entity mapping and a Logic Apps SOAR playbook that notifies on new incidents.",
    tags: ["Microsoft Sentinel", "KQL", "Logic Apps", "Log Analytics"],
    categories: ["Security", "Cloud"],
    repo: gh("azure-sentinel"),
  },
  {
    title: "ish — Unix Shell",
    description:
      "A Unix shell built from scratch in C: process execution with fork/exec, pipes, I/O redirection, shell variables and script execution.",
    tags: ["C", "Linux", "Processes"],
    categories: ["Software"],
    repo: gh("ish"),
  },
  {
    title: "HTTP Server",
    description:
      "A lightweight HTTP server in Java built on raw sockets, parsing requests and writing responses manually with no frameworks.",
    tags: ["Java", "Networking", "Sockets"],
    categories: ["Software"],
    repo: gh("http-server"),
  },
];
