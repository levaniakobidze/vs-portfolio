import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./state/appContext";
import AboutContext from "./state/aboutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));


const Context = (props) =>  (
  <AppContext>
    <AboutContext>
      {props.children}
    </AboutContext>
  </AppContext>
) 



root.render(
  <BrowserRouter>
  <Context>
      <App />
  </Context>
  </BrowserRouter>
);
