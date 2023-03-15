import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    sql,
    java,
    wriggle,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React.js / Native Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
    name: "SQL",
    icon: sql,
    },
    {
      name: "Java",
      icon: java,
    },
    
  

  ];
  
  const experiences = [
    {
      title: "React.js / React Native Web Development",
      company_name: "",
      icon: reactjs,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Examples include a high-quality fitness web app and cryptocurrency app which implements responsive design and ensures cross-browser compatibility.",
      ],
    },
    {
      title: "Java Developement",
      company_name: "",
      icon: java,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing practical real world applications using Java swing/AWT frameworks and other related technologies.",
        "Examples include responsive menu-driven GUI bank application using Swing/AWT which will stores a set of bank account records associated with customers (with the ability to add, modify and delete records) to carry out appropriate transactions on those records and produce reports both for individual bank accounts (e.g. bank statements) and for the collection of accounts.",
      ],
    },
    {
      title: "SQl Development",
      company_name: "",
      icon: sql,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and creating practical and real-world database applications for businesses using SQL and other related technologies.",
        "Examples inculde a database for a Book shop called BookStop. This application controls and manages customer orders, queries and restocks inventory. Created using MS Access, SQL, and MS Forms and Reports."
      ],
    },
    {
      title: "Junior IT Engineer / Purchasing and Logistics Administrator",
      company_name: "Wriggle Learning Limited",
      icon: wriggle,
      iconBg: "#E6DEDD",
      date: "August 2022 to Present",
      points: [
        "Setting up 1:1 devices and builds with appropriate and essential software updates/educational software apps to be used by consumers." ,     
        "Prepare devices by resetting/upgrading them with a key and test devices software for quality control ensuring they’re ready for use/delivery for customers" ,
        "Check for missing items or damaged items and update ticket on online system with corresponding engineers/administrators.",
        "Keep records of stock, keep paperwork up to date and ensure work areas are clean."
      ],
      
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:"",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:"",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };