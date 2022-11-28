import { useState } from "react";
import { Children, createContext } from "react";
import {data} from '../components/Project/ProjectsData'
export const AppContext = createContext();

const ContextProvier = (props) => {
  const [projects,setProjects] = useState(data);
  // NAVBAR STATES AND FUNCTIONS
  const [activeNav, setActiveNav] = useState("_hello");
  const changeActiveNav = (e) => {
    console.log(e.target.innerText);
    setActiveNav(e.target.innerText);
  };
  //////////////////////////////////

  return (
    <AppContext.Provider value={{ activeNav, changeActiveNav,projects}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvier;
