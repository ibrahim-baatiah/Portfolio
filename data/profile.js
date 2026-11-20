// ─────────────────────────────────────────────────────────────
// PROFILE — everything about you lives here.
// Change any text below and it updates across the whole site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ibrahim Baatiah",
  firstName: "Ibrahim",
  // Shown in the navbar logo ("IB.")
  initials: "IB",
  title: "Cloud & Infra Management Engineer",
  location: "Poland",

  // Home page hero
  greeting: "Hi, I'm Ibrahim 👋",
  headline: "Cloud Engineer | Automation Nerd | Builder of Things",
  tagline:
    "I spin up infrastructure on Azure and AWS, automate the boring bits, and occasionally build things from scratch just to see how they work.",

  email: "ibrahimbaatiah@gmail.com",
  links: {
    github: "https://github.com/ibrahim-baatiah",
    linkedin: "https://www.linkedin.com/in/ibrahim-baatiah-2183b21a0/",
  },

  // Languages you speak (used on the CV page)
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "C1" },
  ],
};

// ─────────────────────────────────────────────────────────────
// ABOUT PAGE — "My Story"
// Each string is one paragraph. Add, remove or reorder freely.
// You can use **double asterisks** to highlight a word in the accent colour.
// ─────────────────────────────────────────────────────────────
export const story = [
  "Hi, I'm **Ibrahim**, a cloud engineer who genuinely enjoys the moment something finally works after it has spent hours refusing to.",
  "By day, I'm a **Cloud & Infra Management Engineer at LTM**, helping Microsoft's enterprise customers when their Azure, Windows Server or Active Directory environments decide to misbehave. VMs that won't boot, DNS that resolves everything except the one thing you need, domain controllers that stopped talking to each other. You name it, I've probably stared at it at 4pm on a Friday.",
  "One fix kept coming up again and again: a SYSVOL replication repair that has to be done server by server, so the more domain controllers you have, the longer you're stuck clicking. So I wrote a **PowerShell** script for it. Now it doesn't matter if it's 2 servers or 20, it's done in a minute or so. Then, because I apparently can't leave things alone, I built a whole multi-region AD lab with **Terraform** and **Ansible** just to break it and fix it on purpose.",
  "That's pretty much how I learn: I build it myself. I wrote a Unix shell in **C** to understand what actually happens when you hit Enter in a terminal, and an HTTP server in **Java** with nothing but raw sockets. I deployed a full 3-tier app on **AWS** by hand in the Console, one service at a time, then shut it down before the bill got scary.",
  "I graduated in Computer Science from **WSB University** in 2026, and right now I'm studying for the **AWS Solutions Architect** exam. Wish me luck.",
];

// Little sign-off at the end of the story
export const storySignOff = "That's me :)";
