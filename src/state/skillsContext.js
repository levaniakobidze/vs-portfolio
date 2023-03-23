import { createContext, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import classes from "../components/AboutComponents/Skills/Skills.module.css";
const skillset = [
  {
    id: 1,
    name: "html",
    class: classes.html,
    icon: AiFillHtml5,
    description:
      "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
    def_class: classes.def_html,
  },
  {
    id: 2,
    name: "css",
    class: classes.css,
    icon: IoLogoCss3,
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML)..",
    def_class: classes.def_css,
  },
  {
    id: 3,
    name: "sass",
    class: classes.sass,
    icon: DiSass,
    description:
      "Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.",
    def_class: classes.def_sass,
  },
  {
    id: 4,
    name: "bootstrap",
    class: classes.bootstrap,
    icon: SiBootstrap,
    description:
      "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.",
    def_class: classes.def_bootstrap,
  },
  {
    id: 5,
    name: "js",
    class: classes.js,
    icon: SiJavascript,
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    def_class: classes.def_js,
  },
  {
    id: 7,
    name: "typescript",
    class: classes.router,
    icon: SiTypescript,
    description:
      "TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
    def_class: classes.def_router,
  },
  {
    id: 6,
    name: "react",
    class: classes.react,
    icon: DiReact,
    description: "A JavaScript library for building user interfaces",
    def_class: classes.def_react,
  },
  {
    id: 8,
    name: "redux",
    class: classes.redux,
    icon: SiRedux,
    description: "Redux is a predictable state container for JavaScript apps.",
    def_class: classes.def_redux,
  },
  {
    id: 36,
    name: "vue",
    class: classes.vue,
    icon: FaVuejs,
    description:
      "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.",
    def_class: classes.def_vue,
  },
  {
    id: 9,
    name: "git",
    class: classes.git,
    icon: DiGit,
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    def_class: classes.def_git,
  },
  {
    id: 10,
    name: "figma",
    class: classes.figma,
    icon: CgFigma,
    description: "Figma is a cloud-based design tool",
    def_class: classes.def_figma,
  },
  {
    id: 11,
    name: "xd",
    class: classes.xd,
    icon: SiAdobexd,
    description:
      "Adobe XD is a powerful and easy-to-use vector-based experience design platform that gives teams the tools they need to craft the world’s best experiences collaboratively.",
    def_class: classes.def_xd,
  },
  {
    id: 12,
    name: "node",
    class: classes.node,
    icon: IoLogoNodejs,
    description:
      "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code.",
    def_class: classes.def_node,
  },
  {
    id: 13,
    name: "express",
    class: classes.express,
    icon: SiExpress,
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    def_class: classes.def_express,
  },
  {
    id: 14,
    name: "mongoDb",
    class: classes.mongodb,
    icon: SiMongodb,
    description:
      "MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases.",
    def_class: classes.def_mongodb,
  },
];

export const SkillsContext = createContext();

const ContextProvider = (props) => {
  const [skillDetails, setSkillDetails] = useState({
    id: 6,
    name: "react",
    class: classes.react,
    icon: DiReact,
    description: "A JavaScript library for building user interfaces",
    def_class: classes.def_react,
  });
  const getSkill = (id) => {
    const filteredSkill = skillset.find((skill) => skill.id === id);
    setSkillDetails(filteredSkill);
  };
  return (
    <SkillsContext.Provider value={{ skillset, getSkill, skillDetails }}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export default ContextProvider;
