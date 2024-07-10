import poke from "@/public/poke.png";
import con from "@/public/connect.png";
import thread from "@/public/thread.png";
import ex from "@/public/expense.png";
import shadcn from "@/public/shadcn.png";
import codzy from "@/public/codzy.png";
import portfolio from "@/public/portfolio.png";
import demo from "@/public/demo.gif";
import cart from "@/public/cart.png";
import insta from "@/public/instagram.png";
import leet from"@/public/leetcode.png";
import linked from"@/public/linkedin.png";
import git from"@/public/github.png";
import code from"@/public/code-forces.png";


export const projectList = [
  {
    id: 1,
    tag: "top",
    title: "Pokedex",
    category: "frontend",
    image: poke,
    description:
      "Discover Pokémon effortlessly with our sleek, user-friendly React app!",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://poke-app-three-psi.vercel.app/",
    github: "https://github.com/trefferrr/Poke_App",
    detailedDescription:
"Explore the world of Pokémon with our React app, offering comprehensive information on all your favorite creatures. Enjoy a visually appealing design and intuitive user interface, making navigation a breeze. Perfect for Pokémon enthusiasts and newcomers alike!"  },
  {
    id: 2,
    tag: "top",
    title: "Connect",
    category: "frontend",
    image: con,
    description:
      "Connect effortlessly with our seamless video conferencing app, featuring screen sharing for enhanced remote collaboration and social interaction.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      
    ],
    url: "https://connect-six-eta.vercel.app/",
    github: "https://github.com/trefferrr/Connect.",
    detailedDescription:
    "A Connect.. app facilitates seamless video conferencing, allowing users to connect remotely for meetings, webinars, or social gatherings. It offers features like screen sharing that enhance communication and collaboration among participants from different locations.",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "frontend",
    image: portfolio,
    description:
      "Sleek personal portfolio website made with NextJs, ShadcnUI and Framer Motion.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: undefined,
    github: "https://github.com/trefferrr/portfolio",
    detailedDescription:
      "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  },

  {
    id: 5,
    title: "thread",
    category: "fullstack",
    tag: "top",
    image: thread,
    description:"Create a stunning Thread app with Next.js 14+, transforming Figma designs into an interactive, feature-rich community platform.",
    tech: [
      shadcn,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ],
    url: "https://thread-f0k49sfie-adityas-projects-6d993e50.vercel.app/",
    github: "https://github.com/trefferrr/thread_app",
    detailedDescription:
    "Build a full stack webapp using Next.js 14+ with a redesigned look transformed from a Figma design, user interaction to community management, technical implementation, and various features, including nested deep comments, notifications, real-time-search, and more.",
  },
  {
    id: 6,
    title: "Codzy",
    category: "fullstack",
    image: codzy,
    description: " Codzy: A Code Editor",
    tech: [
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    ],
    url: "https://codzy.vercel.app/",
    github: "https://github.com/trefferrr/Codzy",
    detailedDescription:
      "A fully functional Code Editor using judge0 rapid-api.It compiles the code of more than 40 programming languages and is able to execute a program for a different test case using custom input",
  },
  {
    id: 7,
    title: "Kilogram",
    category: "fullstack",
    image: demo,
    description: "Real-time chat application with integrated voice and video calling functionality",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/browser-search-automation",
    detailedDescription:
      "Experience seamless communication with our real-time chat app, featuring integrated voice and video calling. Enjoy secure user registration and authentication, instant messaging via websockets, and effortless real-time phone and video chat capabilities. Perfect for staying connected anytime, anywhere!",
  },
  {
    id: 8,
    tag: "top",
    title: "Expense",
    category: "fullstack",
    image: ex,
    description: "Expense Tracker is a full-stack web application built using the MERN stack.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    url: "https://expense-jun9b14k2-adityas-projects-6d993e50.vercel.app/",
    github: "https://github.com/trefferrr/Expense_traser",
    detailedDescription:
      "The Expense Tracker is a full-stack web application built with the MERN stack, allowing users to efficiently manage and monitor their financial activities. It features a robust backend with MongoDB and Express.js, and a dynamic frontend using React and Node.js for real-time expense tracking and management.",
  },
  {
    id: 9,
    title: "Cartify",
    category: "frontend",
    image: cart,
    description: "A fashion clothes store",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
    url: "https://cartify-main.vercel.app/",
    github: "https://github.com/trefferrr/Cartify",
    detailedDescription:
      "Curated repository of HTML, CSS, and JS projects showcasing my web development journey.",
  },
];

//////////////////////////////

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    name: "Prisma",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "Postgresql",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    name: "Socketio",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "Mongodb",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    name: "express",
  },
  // {
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  //   name: "Figma",
  // },
  // {
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  //   name: "GitLab",
  // },
];
///////
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type Social = {
  name: string;
  url: string;
  icon: string | StaticImageData;
};

export const socials: Social[] = [
  {
    name: "Github",
    url: "https://github.com/trefferrr",
    icon: git,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/adityatrivedii/",
    icon: leet,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adityatrivedii/",
    icon: linked,
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Treffer",
    icon: code,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adeetyatrivedi/",
    icon: insta,

  },
];