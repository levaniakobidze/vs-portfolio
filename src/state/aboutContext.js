import { createContext, useState } from "react";
import Cv from "../components/AboutComponents/Cv/Cv";
import Picture from "../components/AboutComponents/Picture/Picture";
import Skills from "../components/AboutComponents/Skills/Skills";
import AboutText from "../components/AboutComponents/AboutText/AboutText";

export const AboutContext = createContext();

const ContextProvider = (props) => {
  const [info, setInfo] = useState(false);
  const [contact, setContact] = useState(false);
  const [skills, setSkills] = useState(false);
  const [education, setEducation] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [cv, setCv] = useState(false);
  // ////////////////////////////////
  const [navData, setNavData] = useState([]);
  const [cvPhoto, setCvPhoto] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(false);
  const [aboutMainContent, setAboutMainContent] = useState(true);
  const [skillsContent, setSkillsContent] = useState(false);
  const [activeComponent, setActiveComponent] = useState("text");

  const [aboutContent, setAboutContent] = useState([
    { id: 1, name: "about_text" },
    { id: 2, name: "cv" },
    { id: 3, name: "picture" },
    { id: 4, name: "skills" },
    { id: 5, name: "about_text" },
  ]);

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
        cvPhoto,
        setCvPhoto,
        profilePhoto,
        setProfilePhoto,
        // //////
        aboutMainContent,
        setAboutMainContent,
        skillsContent,
        setSkillsContent,
      }}>
      {props.children}
    </AboutContext.Provider>
  );
};

export default ContextProvider;
