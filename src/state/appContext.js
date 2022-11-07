import { useState } from "react";
import { Children, createContext } from "react";

export const AppContext = createContext();

const ContextProvier = (props) => {
  // NAVBAR STATES AND FUNCTIONS
  const [activeNav, setActiveNav] = useState("_hello");
  const changeActiveNav = (e) => {
    console.log(e.target.innerText);
    setActiveNav(e.target.innerText);
  };
  //////////////////////////////////

  return (
    <AppContext.Provider value={{ activeNav, changeActiveNav }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvier;
