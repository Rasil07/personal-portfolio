import { ResumeData } from "@/types/resume";

export const SOCIAL_CONTACTS = {
  email: "rasil.baidar44@gmail.com",
  github: "https://github.com/Rasil07",
  linkedin: "https://www.linkedin.com/in/rasil-baidar/",
};

export const CAREER: ResumeData = {
  roles: [
    {
      company: "Jetpack Work Labs",
      role: "Full-Stack Developer",
      location: "Sydney Remote",
      dates: "Jan 2023 - Sep 2025",
      description: [
        "Delivered 5+ user-heavy apps like Getsign and Smart Columns to the monday.com marketplace, achieving multi-tenant scale by engineering full-stack solutions with TypeScript, Node.js, and MongoDB.",
        "Cut P95 latency and server memory usage by ~40% in high-traffic views by implementing server-side caching, cursor pagination, and streamed responses.",
        "Slashed manual contract preparation time by ~50% through the creation of a custom HTML-to-DOCX-to-PDF pipeline using LibreOffice and Docxtemplater to automate multi-user signing workflows.",
        "Drove adoption of dynamic content insertion features by developing custom CKEditor 5 plugins that expanded rich-text capabilities and interfaced directly with monday.com data.",
      ],
      skills: [
        "TypeScript",
        "Node.js",
        "React",
        "MongoDB",
        "CKEditor 5",
        "Docker",
        "monday.com API",
        "LibreOffice",
        "Docxtemplater",
        "AWS",
        "Redis",
        "BullMQ",
        "System Design",
        "Next.js",
        "NestJS",
      ],
    },
    {
      company: "Wesionary Team",
      role: "Full-Stack Developer",
      location: "Nepal Hybrid",
      dates: "May 2022 - Jan 2023",
      description: [
        "Led a team of 4 developers through agile planning and code reviews to drive an influencer-marketing SaaS from MVP to production, meeting strict release deadlines.",
        "Accelerated frontend velocity by ~30% and improved UI consistency by translating Figma designs into a reusable React component system.",
        "Achieved zero-downtime client upgrades and secure role management by implementing Auth0/OIDC and versioned OpenAPI documentation.",
        "Optimized database queries and integrated product analytics to enhance system responsiveness and funnel tracking, significantly improving application reliability.",
      ],
      skills: [
        "TypeScript",
        "Node.js",
        "React",
        "PostgreSQL",
        "Auth0",
        "OpenAPI",
        "Docker",
        "GraphQL",
        "Elasticsearch",
      ],
    },
    {
      company: "Rumsan Group",
      role: "Junior Software Engineer",
      location: "Nepal Hybrid",
      dates: "Nov 2020 - May 2022",
      description: [
        "Enabled revenue streams for SaaS and NFT platforms by integrating Ethers.js and Web3.js into the Node.js backend to successfully process live third-party payments.",
        "Reduced critical system failures and stabilized backend infrastructure by implementing structured logging, strict input validation, and background workers for heavy computational tasks.",
        "Partnered with QA and design teams to resolve defects pre-release, resulting in improved product usability and a measurable decrease in customer support tickets.",
      ],
      skills: ["Node.js", "React", "MongoDB", "Ethers.js", "Web3.js", "PWA"],
    },
    {
      company: "Kathmandu University",
      role: "Associate AI/ML Researcher",
      location: "Nepal On-site",
      dates: "Oct 2019 - March 2020",
      description: [
        "Co-authored a Tamang-Nepali machine-translation system and built data pipelines, contributing to low-resource language processing research that was accepted and presented at ICON 2020.",
      ],
      skills: ["Node.js", "React", "MongoDB", "Python", "TensorFlow", "Keras"],
    },
  ],
  education: [
    {
      institution: "Victoria University",
      degree: "Master of Applied Information Technology",
      location: "Sydney",
      dates: "Feb 2024 - Nov 2025",
      details:
        "Research: Developed hybrid AI models for intrusion detection using Python and TensorFlow/Keras; co-authored published papers on IoT/5G security.",
    },
    {
      institution: "Kathmandu University",
      degree: "Bachelor's degree of Computer Science",
      location: "Nepal",
      dates: "Feb 2015 - Nov 2019",
      details: "Foundation in Computer Science.",
    },
  ],

  publications: [
    {
      title:
        "Hybrid Deep Learning-Federated Learning Powered Intrusion Detection System for IoT/5G Advanced Edge Computing Network",
      authors: ["Baidar, R.", "Maric, S.", "Abbas, R."],
      conference: "arXiv:2509.15555 [cs.CR]",
      date: "2025",
      url: "https://arxiv.org/abs/2509.15555",
    },
    {
      title:
        "System Security Framework for 5G Advanced/6G IoT Integrated Terrestrial Network–Non-Terrestrial Network (TN-NTN) with AI-Enabled Cloud Security",
      authors: ["Maric, S.", "Baidar, R.", "Abbas, R.", "Reisenfeld, S."],
      conference: "arXiv:2508.05707",
      date: "2025",
      url: "https://arxiv.org/abs/2508.05707",
    },
    {
      title:
        "Efforts towards developing a Tamang–Nepali machine translation system",
      authors: ["Chaudhary, B. K.", "Bal, B. K.", "Baidar, R."],
      conference:
        "Proceedings of the 17th International Conference on Natural Language Processing (ICON 2020)",
      date: "2020",
      url: "https://aclanthology.org/2020.icon-main.37/",
    },
  ],
};
