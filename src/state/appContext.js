import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

const ContextProvier = (props) => {
  const [activeNav, setActiveNav] = useState("_hello");
  const [showMenu, setShowMenu] = useState(false);
  const changeActiveNav = (e) => {
    setActiveNav(e.target.innerText);
    setShowMenu(false);
  };
  const onShowMobileMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        activeNav,
        changeActiveNav,
        showMenu,
        onShowMobileMenu,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvier;
