import { createContext, useEffect, useState } from "react";
import Cv from "../components/AboutComponents/Cv/Cv";
import Picture from "../components/AboutComponents/Picture/Picture";
import Skills from "../components/AboutComponents/Skills/Skills";
import AboutText from "../components/AboutComponents/AboutText/AboutText";

export const AboutContext = createContext();

const ContextProvider = (props) => {
  const [info, setInfo] = useState(true);
  const [contact, setContact] = useState(true);
  const [skills, setSkills] = useState(false);
  const [education, setEducation] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [cv, setCv] = useState(false);
  const [activeSection, setActiveSection] = useState([
    { id: 1, name: "text", active: false },
    { id: 2, name: "contact", active: false },
    { id: 3, name: "skills", active: false },
    { id: 4, name: "education", active: false },
    { id: 5, name: "photo", active: false },
    { id: 6, name: "cv", active: false },
    { id: 7, name: "info", active: false },
  ]);
  // ////////////////////////////////
  const [navData, setNavData] = useState([]);
  const [activeComponent, setActiveComponent] = useState("text");
  useEffect(() => {
    if (window.innerWidth < 1023) {
      setContact(false);
      setInfo(false);
    }
  }, []);
  /// Render About components
  const renderComponent = () => {
    switch (activeComponent) {
      case "cv":
        return <Cv />;
      case "skills":
        return <Skills />;
      case "text":
        return <AboutText />;
      case "photo":
        return <Picture />;
      default:
        break;
    }
  };

  const makeSectionActive = (value) => {
    const activated = activeSection.map((section) => {
      if (section.name === value) {
        const activatedSection = {
          id: section.id,
          name: section.name,
          active: !section.active,
        };
        return activatedSection;
      } else {
        return section;
      }
    });
    console.log(activated);

    switch (value) {
      case "info":
        setInfo((prev) => !prev);
        break;
      case "contact":
        setContact((prev) => !prev);
        break;
      case "skills":
        setSkills((prev) => !prev);
        break;
      case "education":
        setEducation((prev) => !prev);
        break;
      case "photo":
        setPhoto((prev) => !prev);
        break;
      case "cv":
        setCv((prev) => !prev);
        break;
      default:
        return null;
    }
  };
  return (
    <AboutContext.Provider
      value={{
        info,
        contact,
        skills,
        education,
        photo,
        cv,
        setActiveComponent,
        makeSectionActive,
        renderComponent,
        ////////
        navData,
        setNavData,
      }}>
      {props.children}
    </AboutContext.Provider>
  );
};

export default ContextProvider;
