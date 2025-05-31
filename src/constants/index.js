import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import project7 from "../assets/project-7.jpg";

export const HERO_CONTENT = `As a Full-Stack Developer & Mobile Solutions Architect, transforming ideas into scalable digital experiences across web and mobile platforms. 
With 3+ years of specialized experience in the M.E.R.N ecosystem, I architect and develop high-performance applications that bridge the gap between innovative design and robust functionality. My expertise spans the complete development lifecycle—from responsive web interfaces built with React and Next.js to cross-platform mobile applications using React Native.
Core Competencies
-Frontend Excellence: JavaScript (ES6+), React, Next.js, React Native
-Backend Mastery: Node.js, Express.js, RESTful API design
-Database Solutions: MongoDB, data modeling and optimization
-Mobile Development: Native iOS/Android experiences via React Native
I specialize in creating seamless user experiences while maintaining clean, maintainable codebases that scale with business growth. My approach combines technical precision with strategic thinking to deliver solutions that not only meet current requirements but anticipate future needs.
Ready to turn your vision into reality through code.`;

export const ABOUT_TEXT = `My journey into software development started with a simple question: "How does this work?" That curiosity has driven me through 3+ years of self-directed learning and hands-on project development, transforming from someone who wondered about code to someone who crafts solutions with it. What sets me apart is my adaptability—I'm equally productive working independently on focused coding sessions and collaborating in team environments where ideas flow freely. I'm a natural problem-solver who thrives on breaking down complex challenges into manageable components, and I've learned that great software emerges from clear communication, active listening, and the ability to translate technical concepts into language that stakeholders understand.

When faced with new technologies or frameworks, I don't just learn the syntax—I dive deep to understand the underlying principles. This approach has served me well as I've expanded my toolkit beyond the M.E.R.N stack to include Java and Python, allowing me to choose the right tool for each project's unique requirements. Whether I'm leading a sprint, pair programming, or heads-down in solo development, I adapt my communication style to what the situation demands. I believe in writing clean, documented code not just for myself, but for the next developer who might work on the project, and my enthusiasm for continuous learning means I'm always exploring emerging technologies to improve the quality and efficiency of my solutions., 
 and contributing to projects.`;

export const EXPERIENCES = [
  {
    year: "2024-2025",
    role: "Software Engineer",
    company: "Nitoons",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. 
    Implemented RESTful APIs and integrated with MongoDB databases. 
    Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    year: "2024-2025",
    role: "Frontend Developer",
    company: "Anthill Studio",
    description: `Developing and maintaining web applications using Nextjs and React. 
    Implemented RESTful APIs and integrated with MongoDB databases. 
    Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.js", "Next", "Material UI", "MongoDB"],
  },
  {
    year: "2022 - Present",
    role: "Freelancing",
    company: "Freelance",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. 
    Implemented RESTful APIs and integrated with MongoDB databases. 
    Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.js", "Express.js", "Node.js", "Tailwind"],
  },
  {
    year: "2021 - 2022",
    role: "IT Intern",
    company: "Adekunle Ajasin University",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, JavaScript. 
    Worked closely with backend developers to integrate frontend components with Node.js APIs. 
    Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
export const PROJECTS = [
  {
    title: "Nitoons Scriptwriter",
    image: project7,
    description:
      "Developed a comprehensive mobile scriptwriting application designed to empower writers with professional-grade tools for creating scripts on-the-go. Built specifically for scriptwriters and creative writers who need more than basic note-taking apps, the application features industry-standard script formatting, character development tools, scene organization, and collaborative editing capabilities. Leading the frontend development using React Native over 3-4 months, I collaborated closely with backend engineers utilizing Node.js to deliver a seamless cross-platform experience. The app successfully launched with positive user feedback from beta testers, addressing the genuine need for mobile-first scriptwriting tools that maintain professional formatting standards while offering the flexibility of anywhere-access writing.",
    technologies: ["React", "Node.js", "MongoDB", "Material Ui"],
    git: "https://github.com/Pledre/scriptwriter-mobile-app",
  },
  {
    title: "OneTake Admin-Dashboard",
    image: project5,
    description:
      "Developed a comprehensive content management system for the acting industry, featuring an intuitive admin dashboard for monitoring platform activity and user engagement. The platform manages actors, producers, and their monologue content through a centralized interface that tracks user registrations, script uploads, and post performance metrics. Built with modern web technologies, the dashboard provides real-time analytics including signup activity tracking, engagement metrics visualization, and comprehensive user management tools. I architected the frontend interface with responsive design principles, implementing interactive charts and data visualization components that enable administrators to monitor platform growth and user behavior patterns effectively. The system successfully supports content creators in the entertainment industry with robust analytics and streamlined content management capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Material Ui"],
    git: "https://github.com/Pledre/onetake-admin-dashboard",
  },
  {
    title: "OneTake Web-App",
    image: project6,
    description:
      "Developed a dynamic social media platform connecting actors and producers through short-form video content showcasing auditions and script monologues. Built with Next.js frontend and Node.js backend, the platform enables actors to upload performance videos while providing producers with streamlined talent discovery tools. I led the complete frontend development, collaborating closely with backend engineers to ensure seamless video upload, user authentication, and content management functionality. The project deepened my expertise in Next.js architecture and complex state management. Successfully launched with positive user feedback from both actors and industry professionals, demonstrating strong product-market fit in the entertainment industry.",
    technologies: ["Nextjs", "Node.js", "Tailwind"],
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
      "A frontend modern and user-friendly hotel website designed to offer seamless browsing, booking, and user account management. Built with a focus on intuitive navigation and functionality, this site provides an efficient experience for both potential guests and hotel administrators. Key Features; Hotel Information & Features (Comprehensive details about available rooms, amenities, and services), Room Booking Options (Real-time availability check, booking forms, and confirmation emails), User Authentication (Secure login and registration for users to manage bookings and view history), Responsive Design (Optimized for all devices, ensuring a smooth user experience on mobile, tablet, and desktop), Contact and Support (Easy access to customer support and inquiries), Admin Panel (Management interface for admins to track bookings, manage rooms, and update hotel details) Technologies Used; JavaScript, Html, CSS",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://olat69.github.io/htmlWebsite/",
    git: "https://github.com/olat69/htmlWebsite",
  },
];

export const CONTACT = {
  address: "Jemi Alade Estate, Isheri, Lagos, Nigeria",
  phoneNo: "+234 7056502162 ",
  email: "olaniyantemitope69@gmail.com",
};
