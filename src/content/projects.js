import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import project7 from "../assets/project-7.jpg";
import project8 from "../assets/project-8.png";
import project9 from "../assets/project9.png";


export const projects = [
  {
    title: "TradeByBartr",
    image: project9,
    description:
        "Architected and built a revolutionary cash-free barter marketplace connecting Nigerians to exchange goods, services, skills, and time without monetary transactions. The platform reimagines commerce as pure value-for-value trading—from electronics and fashion to graphic design services, tutoring, mentorship, and social media influence. I developed the full-stack solution using React PWA for seamless mobile-first experience and NestJS backend with MongoDB, implementing real-time WebSocket messaging for trade negotiations, location-based matching to connect nearby traders, JWT authentication with email verification, and Paystack-integrated subscription tiers (Basic to Premium plans). Built comprehensive trade session management tracking exchanges from offer to completion, identity verification via Didit for user safety, ratings and review systems fostering trust, Cloudinary media uploads, and admin dashboards for platform oversight. The platform enforces strict no-money policies through validation mechanisms while enabling a creative community-driven economy. Successfully launched serving thousands of users seeking sustainable, cash-free alternatives to traditional commerce.",
    technologies: ["React", "Node.js", "MongoDB", "Vercel", "Render"],
    url:"https://app.tradebybartr.com/",
    git:"https://github.com/tradebybartr",
  },
  {
    title: "Magical Docs",
    image: project8,
    description:
        "Developed an intelligent documentation platform that transforms codebases into living, interactive knowledge hubs for development teams. Magical Docs automatically analyzes repositories, generates architecture diagrams, and provides AI-powered answers to technical questions, eliminating the need for manual documentation. I led the development using React for the front end and Node.js for the back end, focusing on seamless user experience and real-time code analysis visualization. The platform streamlines onboarding, accelerates team productivity, and ensures that technical knowledge remains current and accessible. Successfully adopted by teams seeking to reduce documentation overhead and foster a culture of continuous learning.",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI"],
    url:"https://magicaldocstesting.nitoons.com",
    git:"https://github.com/Pledre/magical_docs_frontend",
  },
  {
    title: "Nitoons Scriptwriter",
    image: project7,
    description:
      "Developed a comprehensive mobile scriptwriting application designed to empower writers with professional-grade tools for creating scripts on-the-go. Built specifically for scriptwriters and creative writers who need more than basic note-taking apps, the application features industry-standard script formatting, character development tools, scene organization, and collaborative editing capabilities. Leading the development using React Native for frontend and Node.js for backend over 3-4 months to deliver a seamless cross-platform experience. The app successfully launched with positive user feedback from beta testers, addressing the genuine need for mobile-first scriptwriting tools that maintain professional formatting standards while offering the flexibility of anywhere-access writing.",
    technologies: ["React", "Node.js", "MongoDB", "Material Ui"],
    git: "https://github.com/Pledre/scriptwriter-mobile-app",
  },
  {
    title: "OneTake Admin-Dashboard",
    image: project5,
    description:
      "Developed a comprehensive content management system for the acting industry, featuring an intuitive admin dashboard for monitoring platform activity and user engagement. The platform manages actors, producers, and their monologue content through a centralized interface that tracks user registrations, script uploads, and post performance metrics. Built with modern web technologies, the dashboard provides real-time analytics including signup activity tracking, engagement metrics visualization, and comprehensive user management tools. I architected the frontend interface with responsive design principles, implementing interactive charts and data visualization components that enable administrators to monitor platform growth and user behavior patterns effectively. The system successfully supports content creators in the entertainment industry with robust analytics and streamlined content management capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Material Ui"],
    url:"https://admindashboard.onetake.pro/",
    git: "https://github.com/Pledre/onetake-admin-dashboard",
  },
  {
    title: "OneTake Web-App",
    image: project6,
    description:
      "Developed a dynamic social media platform connecting actors and producers through short-form video content showcasing auditions and script monologues. Built with Next.js frontend and Node.js backend, the platform enables actors to upload performance videos while providing producers with streamlined talent discovery tools. I led the complete frontend development, collaborating closely with backend engineers to ensure seamless video upload, user authentication, and content management functionality. The project deepened my expertise in Next.js architecture and complex state management. Successfully launched with positive user feedback from both actors and industry professionals, demonstrating strong product-market fit in the entertainment industry.",
    technologies: ["Nextjs", "Node.js", "Tailwind"],
    url:"",
    git: "https://github.com/Pledre/OneTakeWeb",
  },
  {
    title: "Delight Bookstore",
    image: project2,
    description:
      "A dynamic, full-stack e-commerce bookstore website built using modern technologies to provide a seamless and responsive user experience. It includes features for browsing, shopping, and secure payment processing. Key Features; User Authentication (Secure login and registration), Book Listings (Dynamic display with filtering and search), Shopping Cart & Checkout (Add books to cart and proceed to checkout), Order Management (Admin panel to manage orders and stock, Payment Integration (Secure transactions via Paystack), Responsive Design (Mobile-friendly design for all devices). Technologies Used; React, Redux & RTK Query, MongoDB, Node.js & Express, Paystack, Firebase",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
    url: "https://mern-bookstore-khaki.vercel.app/",
    git: "https://github.com/olat69/mernBookstore",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A sleek, interactive portfolio website designed to showcase my work and technical expertise, built using modern web technologies for an engaging and responsive user experience. The website features smooth animations, a clean design, and intuitive navigation, all tailored to highlight my projects and skills. Key Features; Personalized Portfolio Showcase (A well-organized display of my projects, skills, and achievements with detailed project descriptions), Smooth Animations (Engaging animations that bring the website to life, offering a dynamic and visually appealing experience), Responsive Design (Fully responsive layout that ensures optimal viewing on all devices, from mobile phones to desktops), Interactive Navigation (A seamless, user-friendly navigation experience for browsing different sections, including About, Projects, and Contact), Contact Form (A direct way for potential clients or collaborators to reach out to me). Technologies Used: JavaScript, React, Framer Motion, Tailwind CSS",
    technologies: ["React.js", "Framer", "TailWind"],
    url: "https://my-portforlio-plum.vercel.app/",
    git: "https://github.com/olat69/reactPortforlio",
  },
  {
    title: "Lincoln Hotels",
    image: project4,
    description:
      "A frontend modern and user-friendly hotel website designed to offer seamless browsing, booking, and user account management. Built with a focus on intuitive navigation and functionality, this site provides an efficient experience for both potential guests and hotel administrators. Key Features; Hotel Information & Features (Comprehensive details about available rooms, amenities, and services), Room Booking Options (Real-time availability check, booking forms, and confirmation emails), User Authentication (Secure login and registration for users to manage bookings and view history), Responsive Design (Optimized for all devices, ensuring a smooth user experience on mobile, tablet, and desktop), Contact and Support (Easy access to customer support and inquiries), Admin Panel (Management interface for admins to track bookings, manage rooms, and update hotel details) Technologies Used; React, Material UI, Framer Motion, GSAP",
    technologies: ["React", "MaterialUi", "FramerMotion", "GSAP"],
    url: "https://lincoln-hotels.vercel.app/",
    git: "https://github.com/olat69/LincolnHotels",
  },
];