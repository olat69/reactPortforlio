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
    role: "Freelance",
    company: "Freelancing",
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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Book Store Website ",
    image: project2,
    description:
      "A responsive application for displaying books for sale and their prices, including other features",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
    url: "https://mern-bookstore-khaki.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Node.js", "React", "TailWind"],
    url: "https://my-portforlio-plum.vercel.app/",
  },
  {
    title: "Hotel Website",
    image: project4,
    description:
      "An hotel website showing features, booking options, and a login and signup page and other features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://olat69.github.io/htmlWebsite/",
  },
];

export const CONTACT = {
  address: "Jemi Alade Estate, Isheri, Lagos, Nigeria",
  phoneNo: "07056502162 ",
  email: "olaniyantemitope69@gmail.com",
};
