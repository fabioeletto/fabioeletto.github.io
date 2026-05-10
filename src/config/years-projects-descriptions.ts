import type { YearProjectDescription } from "@/types";

export const yearsProjectsDescriptions: YearProjectDescription[] = [
  {
    title: "HelixScripts",
    description:
      "Founded and shipped a commercial limited-release automation product, including a Chrome extension and Node.js licensing/auth backend for 1,000+ monthly paying users.",
    year: "2021",
    blogUrl: "blogs/helix-scripts",
    techStack: ["JavaScript", "Node.js", "Chrome Extension", "MySQL"],
  },
  {
    title: "Self Ordering System",
    description:
      "Delivered a restaurant and bar ordering platform to a paying customer, with digital menu management, full order lifecycle processing, and RBAC for staff/admin roles.",
    year: "2023",
    techStack: ["Vue.js", "TypeScript", "Go", "PostgreSQL"],
  },
  {
    title: "Supply Chain Tracking",
    description:
      "Built a blockchain supply chain prototype with Ethereum smart contracts for immutable event traceability and a Node.js REST API for client-friendly integration.",
    year: "2022",
    techStack: ["Vue.js", "Nest.js", "TypeScript", "Solidity", "MongoDB"],
  },
  {
    title: "NFT Smart Contract",
    description:
      "Implemented an ERC-721 smart contract stack with Solidity and Hardhat, including contract development, testing, and on-chain interaction workflows.",
    year: "2022",
    techStack: ["Solidity", "Hardhat", "Ethers.js"],
    githubUrl: "https://github.com/0xfabdav/erc721b",
  },
  {
    title: "Smartfarming Hackathon",
    description:
      "Built a hackathon prototype to improve communication between farmers and workers using AI-assisted workflows and a full-stack TypeScript architecture.",
    year: "2024",
    techStack: ["Vue.js", "Nest.js", "TypeScript", "OpenAI API"],
  },
  {
    title: "Local Clipboard",
    description:
      "Built a lightweight cross-platform clipboard workflow to simplify local file and text sharing between devices.",
    year: "2024",
    techStack: ["Go", "Apple Shortcuts"],
  },
  {
    title: "REST API for Managing Food Products",
    description:
      "Implemented a Nest.js API to ingest external product data, transform schemas, and persist normalized records for downstream usage.",
    year: "2022",
    techStack: ["TypeScript", "Nest.js", "MongoDB"],
  },
  {
    title: "Accounting script",
    description:
      "Automated Stripe payout invoice booking in sevDesk to reduce repetitive accounting work and manual reconciliation.",
    year: "2021",
    techStack: ["Python", "Stripe API", "sevDesk API"],
    githubUrl:
      "https://github.com/fabioeletto/stripe_sevdesk_accounting_script",
  },
  {
    title: "Image uploader",
    description:
      "Automated a Discord-to-Twitter publishing pipeline for image content using Node.js integrations.",
    year: "2021",
    techStack: ["Node.js", "Discord.js", "Twitter API"],
    githubUrl: "https://github.com/fabioeletto/discord_twitter_image_uploader",
  },
  {
    title: "ESP32 Breakout Game",
    description:
      "Developed a playable Breakout game on ESP32 with TFT rendering and joystick input handling.",
    year: "2024",
    githubUrl: "https://github.com/fabioeletto/esp32_breakout_game",
    techStack: ["C++", "Arduino"],
  },
  {
    title: "Portfolio Website v2",
    description:
      "Redesigned and rebuilt my portfolio website with Vue, TypeScript, and Tailwind for a cleaner UX and maintainable structure.",
    year: "2023",
    githubUrl: "https://github.com/fabioeletto/fabioeletto.github.io",
    techStack: ["Vue.js", "Tailwind CSS", "Vite", "TypeScript"],
  },
  {
    title: "Portfolio Website v1",
    description:
      "First personal portfolio website created to present projects, technical skills, and experience.",
    year: "2023",
    githubUrl: "https://github.com/fabioeletto/portfolio_website_v1",
    techStack: ["Vue.js", "Tailwind CSS", "Vite", "TypeScript"],
  },
];
