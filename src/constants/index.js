import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

export const HERO_CONTENT = `I am a passionate M.E.R.N stack developer with a knack for 
crafting robust and scalable web applications. With 3 years of hands-on experience,
 I have honed my skills in Front-end technologies like JavaScript, React and Next.js, Back-end technologies like Node.js and Express.js, Database technologies like MongoDB, including RESTful APIs.
My goal is to leverage my expertise to create innovative solutions that 
drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for 
creating efficient and user-friendly web applications. With 3 years of self-taught experience in project developments, 
I have worked with a variety of technologies, I also have understanding of syntaxes in C++, Java, and Python.
My journey in web development began with a deep curiosity for how things work, and it has 
evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
 Outside of coding, I enjoy staying active, exploring new technologies, 
 and contributing to projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Freelancing",
    company: "Freelance",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. 
    Implemented RESTful APIs and integrated with MongoDB databases. 
    Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
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
    title: "Blog Website",
    image: project1,
    description: "A fully functional blog website (...in development).",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Bookstore Website",
    image: project2,
    description:
      "A dynamic, full-stack e-commerce bookstore website built using modern technologies to provide a seamless and responsive user experience. It includes features for browsing, shopping, and secure payment processing. Key Features; User Authentication (Secure login and registration), Book Listings (Dynamic display with filtering and search), Shopping Cart & Checkout (Add books to cart and proceed to checkout), Order Management (Admin panel to manage orders and stock, Payment Integration (Secure transactions via Paystack), Responsive Design (Mobile-friendly design for all devices). Technologies Used; React, Redux & RTK Query, MongoDB, Node.js & Express, Paystack, Firebase",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
    url: "https://mern-bookstore-khaki.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A sleek, interactive portfolio website designed to showcase my work and technical expertise, built using modern web technologies for an engaging and responsive user experience. The website features smooth animations, a clean design, and intuitive navigation, all tailored to highlight my projects and skills. Key Features; Personalized Portfolio Showcase (A well-organized display of my projects, skills, and achievements with detailed project descriptions), Smooth Animations (Engaging animations that bring the website to life, offering a dynamic and visually appealing experience), Responsive Design (Fully responsive layout that ensures optimal viewing on all devices, from mobile phones to desktops), Interactive Navigation (A seamless, user-friendly navigation experience for browsing different sections, including About, Projects, and Contact), Contact Form (A direct way for potential clients or collaborators to reach out to me). Technologies Used: JavaScript, React, Framer Motion, Tailwind CSS",
    technologies: ["React.js", "Framer", "TailWind"],
    url: "https://my-portforlio-plum.vercel.app/",
  },
  {
    title: "Hotel Website",
    image: project4,
    description:
      "A frontend modern and user-friendly hotel website designed to offer seamless browsing, booking, and user account management. Built with a focus on intuitive navigation and functionality, this site provides an efficient experience for both potential guests and hotel administrators. Key Features; Hotel Information & Features (Comprehensive details about available rooms, amenities, and services), Room Booking Options (Real-time availability check, booking forms, and confirmation emails), User Authentication (Secure login and registration for users to manage bookings and view history), Responsive Design (Optimized for all devices, ensuring a smooth user experience on mobile, tablet, and desktop), Contact and Support (Easy access to customer support and inquiries), Admin Panel (Management interface for admins to track bookings, manage rooms, and update hotel details) Technologies Used; JavaScript, Html, CSS",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://olat69.github.io/htmlWebsite/",
  },
];

export const CONTACT = {
  address: "Jemi Alade Estate, Isheri, Lagos, Nigeria",
  phoneNo: "07056502162 ",
  email: "olaniyantemitope69@gmail.com",
};
