import { createContext, useState, useEffect } from "react";
import { dummyData } from "../components/Project/ProjectsData";
import useFetchData from "../hooks/useFetchData";
import react from "../assets/react.svg";
import vue from "../assets/vue.svg";
import typescript from "../assets/typescript.svg";
import nodejs from "../assets/nodejs.svg";
import redux from "../assets/redux.svg";
const filters = [
  {
    id: "react",
    name: "react",
    htmlFor: "react",
    alt: "react",
    img: react,
    text: "React",
  },
  {
    id: "redux",
    name: "redux",
    htmlFor: "redux",
    alt: "redux",
    img: redux,
    text: "Redux",
  },
  {
    id: "vue",
    name: "vue",
    htmlFor: "vue",
    alt: "vue",
    img: vue,
    text: "Vue",
  },
  {
    id: "typescript",
    name: "typescript",
    htmlFor: "typescript",
    alt: "typescript",
    img: typescript,
    text: "Typescript",
  },
  {
    id: "node",
    name: "node",
    htmlFor: "node",
    alt: "node",
    img: nodejs,
    text: "Node.js",
  },
];

const colors = [
  "#27855a",
  "rgb(148, 39, 39)",
  "rgb(87, 87, 18)",
  "rgb(114, 66, 21)",
  "rgb(114, 21, 52)",
  "rgb(72, 21, 114)",
  "rgb(21, 92, 114)",
  "rgb(21, 23, 114)",
  "rgb(21, 114, 91)",
];

export const ProjectsContext = createContext();

const ContextProvider = (props) => {
  const PROJECTS_URL = "https://portfolio-projects.onrender.com/projects";
  const [showToolsFilter, setShowToolsFilter] = useState(true);
  const [projects, setProjects] = useState(dummyData);
  const [initialProjects, setInitialProjects] = useState(dummyData);
  const [selectedStack, setSelectedStack] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedStack((prev) => [...prev, name]);
    } else {
      setSelectedStack((prev) => prev.filter((stack) => stack !== name));
    }
    const filtered = initialProjects.filter((project) => {
      return project.stack.toLowerCase().includes("react   ty".toLowerCase());
    });
    setProjects(filtered);
  };

  const { data } = useFetchData(PROJECTS_URL);
  // data.length ? data :
  useEffect(() => {
    setProjects(dummyData);
    setInitialProjects(dummyData);
  }, [data]);

  useEffect(() => {
    if (window.innerWidth < 1023) {
      setShowToolsFilter(false);
    }
  }, []);
  return (
    <ProjectsContext.Provider
      value={{
        showToolsFilter,
        setShowToolsFilter,
        projects,
        selectedStack,
        handleChange,
        filters,
        initialProjects,
        setProjects,
        colors,
      }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ContextProvider;
