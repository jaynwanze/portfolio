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
    krypto,
    fitness,
    banksystem,
    budget,
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
        "Examples include a high-quality fitness web app which implements responsive design and ensures cross-browser compatibility.",
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
        "Examples include a budget tracker GUI application and banking system application using Swing/AWT which is menu driven GUI and implements a responsive design."
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
      
      name: "Crypto Tracker Website",
      description:
        "Web-based platform Cryptocurrency web platform developed for providing the latest updates, value statistics, market cap, supply and news regarding the Cryptocurrency market. Through the utilization of API's to provide real-time market data and news updates. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: krypto,
      source_code_link: "https://kryptomesh.netlify.app/",
    },
    {
      
      name: "Fitness Website",
      description:
        "Web-based platform that allows users to gather information about fitness, by enabling the viewing and searching of information of gym/fitness exercises and videos. Providing all your information in a convenient place and also an efficient solution for fitness needs.                                  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      source_code_link: "https://upbuild.netlify.app/",
    },
    {
      name: "Banking System",
      description:
        "Java Swing/AWT application that enables customers to store a set of associated bank account records, including functionality to add, modify and delete records, carry out appropriate transactions on those records and produce bank statements both for individual accounts/collection of accounts.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Swing",
          color: "green-text-gradient",
        },
        {
          name: "AWT",
          color: "pink-text-gradient",
        },
      ],
      image: banksystem,
      source_code_link: "https://github.com/jaynwanze/BankingSystem",
    },
    /*
    {
      
      name: "Budget Tracker System",
      description:
        "Java Swing/AWT application that enables user to track income and expenditure. Which includes functionality to budget, by adding the inflow and outflow of money to different income and expenses catergories and viewing this budget .",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Swing",
          color: "green-text-gradient",
        },
        {
          name: "AWT",
          color: "pink-text-gradient",
        },
      ],
      image: budget,
      source_code_link: "https://github.com/jaynwanze/BudgetTrackerJN",
    },
*/

    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };