import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./state/appContext";
import AboutContext from "./state/aboutContext";
import SkillsContext from "./state/skillsContext";
import ProjectsContext from "./state/projectsContext";
import ContactContext from "./state/contactContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Context = (props) => (
  <AppContext>
    <AboutContext>
      <ProjectsContext>
        <SkillsContext>
          <ContactContext>{props.children}</ContactContext>
        </SkillsContext>
      </ProjectsContext>
    </AboutContext>
  </AppContext>
);

root.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
