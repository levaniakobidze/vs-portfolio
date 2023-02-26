import React, { useContext } from "react";
import classes from "./ToolsFilter.module.css";
import light_arrow from "../../../assets/light_arrow.svg";
import { ProjectsContext } from "../../../state/projectsContext";
import react from "../../../assets/react.svg";

function ToolsFilter() {
  const { showToolsFilter, setShowToolsFilter } = useContext(ProjectsContext);
  console.log(showToolsFilter);
  return (
    <div className={classes.tools_filter}>
      <div
        className={classes.header}
        onClick={() => setShowToolsFilter(!showToolsFilter)}>
        <img
          className={!showToolsFilter ? classes.active : ""}
          src={light_arrow}
          alt=""
        />
        <span>Projects</span>
      </div>
      {showToolsFilter && (
        <div className={classes.filters_list}>
          <div className={classes.filter}>
            <input
              className={classes.filter_input}
              type="checkbox"
              name="react"
              id="react"
            />
            <label className={classes.filter_label} htmlFor="react"></label>
            <img src={react} alt="react" />
            <span>React</span>
          </div>
          {/* /////////// */}
          <div className={classes.filter}>
            <input
              className={classes.filter_input}
              type="checkbox"
              name="vue"
              id="vue"
            />
            <label className={classes.filter_label} htmlFor="vue"></label>
            <img src={react} alt="vue" />
            <span>Vue</span>
          </div>
          {/* /////////// */}{" "}
          <div className={classes.filter}>
            <input
              className={classes.filter_input}
              type="checkbox"
              name="typescript"
              id="typescript"
            />
            <label
              className={classes.filter_label}
              htmlFor="typescript"></label>
            <img src={react} alt="typescript" />
            <span>Typescript</span>
          </div>
          {/* /////////// */}
        </div>
      )}
    </div>
  );
}

export default ToolsFilter;
