import React, { useContext, useEffect, useState } from "react";
import classes from "./ToolsFilter.module.css";
import light_arrow from "../../../assets/light_arrow.svg";
import { ProjectsContext } from "../../../state/projectsContext";

function ToolsFilter() {
  const {
    showToolsFilter,
    setShowToolsFilter,
    setProjects,
    initialProjects,
    selectedStack,
    handleChange,
    filters,
  } = useContext(ProjectsContext);

  useEffect(() => {
    setProjects(
      initialProjects.filter((project) => {
        if (selectedStack.length === 0) {
          return true;
        }
        return selectedStack.every((stack) => project.stack.includes(stack));
      })
    );
  }, [selectedStack]);

  console.log(selectedStack);
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
        <span>Filters</span>
      </div>
      {showToolsFilter && (
        <div className={classes.filters_list}>
          {filters.map((filter) => {
            return (
              <div className={classes.filter}>
                <input
                  className={classes.filter_input}
                  type="checkbox"
                  name={filter.name}
                  id={filter.id}
                  onChange={handleChange}
                />
                <label
                  className={classes.filter_label}
                  htmlFor={filter.htmlFor}></label>
                <img src={filter.img} alt={filter.alt} />
                <span>{filter.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ToolsFilter;
