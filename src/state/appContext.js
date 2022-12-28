import { useEffect, useState } from "react";
import { createContext } from "react";
import useFetchData from '../hooks/useFetchData'
import { dummyData } from "../components/Project/ProjectsData";


export const AppContext = createContext();

const ContextProvier = (props) => {
  const PROJECTS_URL = 'https://projects-api-production.up.railway.app/projects';
  const [projects,setProjects] = useState(dummyData);
  const [activeNav, setActiveNav] = useState("_hello");
  const changeActiveNav = (e) => {
    setActiveNav(e.target.innerText);
  };

 const {data} = useFetchData(PROJECTS_URL)

 useEffect(() => {
  setProjects(data.length ? data : dummyData) 
 },[data])

 console.log(data);

  return (
    <AppContext.Provider value={{ activeNav, changeActiveNav,projects}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvier;
