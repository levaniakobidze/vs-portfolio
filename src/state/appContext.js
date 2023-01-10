import { useEffect, useState } from "react";
import { createContext } from "react";
import useFetchData from '../hooks/useFetchData'
import { dummyData } from "../components/Project/ProjectsData";


export const AppContext = createContext();

const ContextProvier = (props) => {
  const PROJECTS_URL = 'https://portfolio-projects.onrender.com/projects';
  const [projects,setProjects] = useState(dummyData);
  const [activeNav, setActiveNav] = useState("_hello");
  const [showMenu,setShowMenu] = useState(false)
  const changeActiveNav = (e) => {
    setActiveNav(e.target.innerText);
    setShowMenu(false);
  };
  const onShowMobileMenu = () => {
    setShowMenu(prev => !prev)
}

 const {data} = useFetchData(PROJECTS_URL)

 useEffect(() => {
  setProjects(data.length ? data : dummyData) 
  console.log(data);
 },[data])

  return (
    <AppContext.Provider value={{ activeNav, changeActiveNav,projects,showMenu,onShowMobileMenu}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvier;
