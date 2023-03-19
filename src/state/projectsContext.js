import { createContext, useState, useEffect } from "react";
import { dummyData } from "../components/Project/ProjectsData";
import useFetchData from "../hooks/useFetchData";
import react from "../assets/react.svg";

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
    id: "vue",
    name: "vue",
    htmlFor: "vue",
    alt: "vue",
    img: react,
    text: "Vue",
  },
  {
    id: "typescript",
    name: "typescript",
    htmlFor: "typescript",
    alt: "typescript",
    img: react,
    text: "Typescript",
  },
  {
    id: "node",
    name: "node",
    htmlFor: "node",
    alt: "node",
    img: react,
    text: "Node.js",
  },
];

export const ProjectsContext = createContext();

const ContextProvider = (props) => {
  const PROJECTS_URL = "https://portfolio-projects.onrender.com/projects";
  const [showToolsFilter, setShowToolsFilter] = useState(false);
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
      }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ContextProvider;
