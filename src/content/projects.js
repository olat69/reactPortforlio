import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import project7 from "../assets/project-7.jpg";
import project8 from "../assets/project-8.png";
import project9 from "../assets/project9.png";
import antroph from "../assets/antroph.jpeg";
import prodculator from "../assets/prodculator.png";

export const projects = [
  {
    title: "Prodculator",
    image: prodculator,
    description:
      "A production-intelligence platform that turns film scripts into investor-ready reports covering territory strategy, tax incentives, crew costs, grants, and comparable productions. I built the React/TypeScript product and FastAPI/PostgreSQL backend, designed the Anthropic/OpenAI analysis pipeline, integrated Stripe subscriptions and webhooks, and shipped background PDF generation with Redis/RQ, Jinja, WeasyPrint, and AWS S3 delivery.",
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
    url: "https://prodculator-test.vercel.app/",
    git: "https://github.com/DeoMediaProjects/prodculator_frontend",
  },
  {
    title: "Antroph",
    image: antroph,
    description:
      "An embedded companion-AI platform with realtime voice and expression coordination. I architected the FastAPI backend, secure JWT/HMAC authentication, and WebSocket infrastructure; built OpenAI-powered TTS streaming and voice matching; and added Celery/Redis workers, Sentry and Prometheus observability, dependency-aware health checks, and a React operations dashboard.",
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
    title: "TradeByBartr",
    image: project9,
    description:
      "A peer-to-peer marketplace for exchanging goods, services, skills, and time. I built the NestJS/MongoDB platform across listings, trade sessions, messaging, referrals, subscriptions, and admin operations, with realtime Socket.IO updates, Redis-backed WebSocket gateways, Paystack billing and webhooks, Cloudinary media, transactional email, and React/TypeScript user and admin apps.",
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
    title: "Magical Docs",
    image: project8,
    description:
      "A GitHub App that indexes repositories and turns codebases into searchable, living documentation. I built the full-stack product with LangChain and OpenAI, using embeddings and retrieval-augmented generation to create grounded documentation, repository chat, and source-aware answers that help engineering teams understand unfamiliar code faster.",
    technologies: [
      "React",
      "Node.js",
      "LangChain",
      "OpenAI",
      "Embeddings",
      "RAG",
    ],
    url: "https://magicaldocstesting.nitoons.com",
    git: "https://github.com/Pledre/magical_docs_frontend",
  },
  {
    title: "Nitoons Scriptwriter",
    image: project7,
    description:
      "A professional mobile scriptwriting app built with React Native, Expo, and TypeScript. I delivered rich screenplay editing, offline-aware caching, and production EAS build pipelines as part of Nitoons' wider AI storytelling suite, which also included script analysis, TTS, image generation, and FFmpeg-based media workflows.",
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
    title: "OneTake Admin Dashboard",
    image: project5,
    description:
      "An operations dashboard for a casting platform connecting actors and producers. I built responsive tools for user, profile, content, and engagement management, giving administrators a clear view of registrations, auditions, uploads, and platform activity.",
    technologies: ["React", "Node.js", "MongoDB", "Material UI"],
    url: "https://admindashboard.onetake.pro/",
    git: "https://github.com/Pledre/onetake-admin-dashboard",
  },
  {
    title: "OneTake Web App",
    image: project6,
    description:
      "A casting-industry platform where actors publish performance videos and producers discover talent. I led the frontend delivery, building responsive discovery, profile, authentication, media upload, and content-management experiences in close collaboration with the backend team.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "Cloudinary"],
    url: "",
    git: "https://github.com/Pledre/OneTakeWeb",
  },
  {
    title: "Delight Bookstore",
    image: project2,
    description:
      "A full-stack ecommerce bookstore with authentication, searchable inventory, cart and checkout flows, order management, Paystack payments, and an administrative stock-management experience.",
    technologies: ["React", "Express", "MongoDB", "Paystack"],
    url: "https://mern-bookstore-khaki.vercel.app/",
    git: "https://github.com/olat69/mernBookstore",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "An earlier iteration of my personal portfolio, built as a responsive React experience with animated transitions, project case studies, skills, and contact information.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    url: "https://my-portforlio-plum.vercel.app/",
    git: "https://github.com/olat69/reactPortforlio",
  },
  {
    title: "Lincoln Hotels",
    image: project4,
    description:
      "A responsive hotel web experience with room discovery, availability and booking flows, user accounts, contact support, and an administrative interface for managing rooms and reservations.",
    technologies: ["React", "Material UI", "Framer Motion", "GSAP"],
    url: "https://lincoln-hotels.vercel.app/",
    git: "https://github.com/olat69/LincolnHotels",
  },
];
