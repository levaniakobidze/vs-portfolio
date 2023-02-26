import { createContext, useState } from "react";

export const ProjectsContext = createContext();

const ContextProvider = (props) => {
  const [showToolsFilter, setShowToolsFilter] = useState(false);
  return (
    <ProjectsContext.Provider value={{ showToolsFilter, setShowToolsFilter }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ContextProvider;
