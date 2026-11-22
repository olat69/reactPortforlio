import project5 from "../assets/project-5.jpg";
import project7 from "../assets/project-7.jpg";
import project8 from "../assets/project-8.png";
import project9 from "../assets/project9.png";
import antroph from "../assets/antroph.jpeg";
import anzen from "../assets/anzen.webp";
import cashdrive from "../assets/cashdrive.png";
import notwaiting from "../assets/notwaiting.webp";
import prodculator from "../assets/prodculator.png";
import studio14 from "../assets/studio14.webp";
import tenTrials from "../assets/10trials.webp";

export const projects = [
  {
    title: "10Trials",
    focus: "Personalized exam practice",
    image: tenTrials,
    imageFit: "contain",
    imageBackground: "#fdfdfd",
    description:
      "10Trials helps learners prepare for exams with targeted practice using a defined curriculum. It uses AI to find the exam described and creates questions on the relevant topics. Questions with set answers are graded, and the results show which weak areas to revisit helping learners focus their study efforts.",
    technologies: ["OpenAI", "FastAPI", "Next.js", "PostgreSQL"],
    url: "https://10trials.vercel.app/",
  },
  {
    title: "Prodculator",
    focus: "Film budgeting and planning",
    image: prodculator,
    description:
      "Prodculator helps film crews plan production and prepare budget report for investors. Production teams upload their scripts and prodculator leverages AI with internal data and tools to read scripts, pull out details affecting the budget and generate financial reports. The report brings crew costs, tax incentives, and comparable productions together so producers can weigh where to shoot and what it might cost.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Anthropic",
      "OpenAI",
      "Stripe",
      "AWS",
    ],
    url: "https://app.prodculator.com/",
    git: "https://github.com/DeoMediaProjects/prodculator_frontend",
  },
  {
    title: "Aura by Antroph",
    focus: "Spoken replies and expressions",
    image: antroph,
    description:
      "Aura is built as a companion to interact with. Using AI voice generation, it is able to reply around a given context of gamified storytelling. It uses visual expressions to move in time with the words, so talking to it feels more natural.",
    technologies: [
      "FastAPI",
      "OpenAI",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Sentry",
    ],
    url: "https://apps.apple.com/ng/app/aura-by-antroph/id6758225797",
    git: "https://github.com/Pledre/antroph-backend",
  },
  {
    title: "Studio14",
    focus: "AI portraits from one photo",
    image: studio14,
    description:
      "Studio14 is a virtual photography studio. It leverages a combination of AI tools to create studio portraits from photos of oneself. Each shoot starts with reviewed poses, outfits, and lighting, and each result is checked for quality so the portraits is consistent and realistic for users.",
    technologies: ["Next.js", "FastAPI", "Black Forest Labs", "AWS"],
    url: "https://studio14-beta.vercel.app/",
    linkLabel: "Product site",
  },
  {
    title: "Magical Docs",
    focus: "Answers backed by source code",
    image: project8,
    description:
      "Magical Docs is a GitHub app that helps technical and non technical users understand code without having to go through the hassle of running the codebase itself . AI writes documentation and answers questions using the project's files. Answers point back to the source, so users can understand and make decisions based on the explanations .",
    technologies: [
      "LangChain",
      "OpenAI",
      "RAG",
      "React",
      "Node.js",
      "Embeddings",
    ],
    url: "https://magicaldocstesting.nitoons.com",
    git: "https://github.com/Pledre/magical_docs_frontend",
  },
  {
    title: "Anzen",
    focus: "Security findings explained",
    image: anzen,
    imageBackground: "#101d2c",
    description:
      "Anzen is a product that helps software teams review security issues and risks before launch. Anzen uses AI internally and a set of guidelines, to explain what the checks found and why each issue and risk matters. Findings are linked to the evidence from the checks, so teams can confirm what was found and decide what to fix first before launch.",
    technologies: ["OpenAI", "Next.js", "Fastify", "PostgreSQL"],
    url: "https://anzen-landing-one.vercel.app/",
    linkLabel: "Product site",
  },
  {
    title: "#NotWaiting",
    focus: "AI-assisted storytelling",
    image: notwaiting,
    imageFit: "contain",
    imageBackground: "#06543b",
    description:
      "#NotWaiting helps African creators and changemakers share their stories. It asks a few questions about what they built and why it matters, then uses AI to turn those answers into a draft they can edit and share. That gives people a starting point based on their own experience.",
    technologies: ["Anthropic", "React", "Express", "Supabase"],
    url: "https://www.notwaiting.africa/",
    linkLabel: "Campaign site",
  },
  {
    title: "Nitoon's Scriptwriter",
    focus: "Screenwriting and AI storytelling",
    image: project7,
    description:
      "Nitoons Scriptwriter is a mobile app for writing and editing screenplays. In the wider Nitoons suite, AI can analyze scripts, read text aloud, and create images. Writers can use those tools to hear dialogue and explore the look of a scene while the script is still taking shape.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "OpenAI",
      "FFmpeg",
    ],
    url: "https://apps.apple.com/ng/app/scripts-by-nitoons/id6748554295",
    git: "https://github.com/Pledre/scriptwriter-mobile-app",
  },
  {
    title: "CashDrive AirTag Fleet Monitor",
    focus: "Vehicle locations and alerts",
    image: cashdrive,
    imageFit: "scale-down",
    imageBackground: "#092c27",
    description:
      "Fleet Monitor is a business internal tool that gives operators dashboard infomation of vehicle locations and alerts. An automated pilot uses AI to read AirTag details from the Apple Find My app and turn them into records operators can review and take actions on. That saves them from retyping each reading and gives them a chance to take corrective measures as regards to the business use case.",
    technologies: ["Python", "FastAPI", "React", "Tauri"],
  },
  {
    title: "TradeByBartr",
    focus: "Trading goods and services",
    category: "software",
    image: project9,
    description:
      "TradeByBartr is a marketplace where people swap goods, services, and skills. Listings, chat, and live trade updates keep the conversation and the offer together, so both people can see what they agreed to and where the exchange stands.",
    technologies: [
      "NestJS",
      "MongoDB",
      "React",
      "TypeScript",
      "Socket.IO",
      "Redis",
      "Paystack",
    ],
    url: "https://app.tradebybartr.com/",
    git: "https://github.com/tradebybartr",
  },
  {
    title: "OneTake Admin Dashboard",
    focus: "Casting platform management",
    category: "software",
    image: project5,
    description:
      "The OneTake Admin Dashboard helps casting teams manage actor profiles, auditions, and uploaded videos. It brings registrations, submissions, and recent activity into one view so administrators can see what needs their attention.",
    technologies: ["React", "Node.js", "MongoDB", "Material UI"],
    url: "https://admindashboard.onetake.pro/",
    git: "https://github.com/Pledre/onetake-admin-dashboard",
  },
];
