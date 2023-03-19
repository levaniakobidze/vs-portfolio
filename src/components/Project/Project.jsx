import React from "react";
import classes from "./Project.module.css";

function Projects({ image, indx, title, live, github }) {
  return (
    <div className={classes.project}>
      <div className={classes.num_and_title}>
        <p className={classes.project_num}>Project {indx + 1}</p>
        <p className={classes.project_title}>
          {" "}
          {"//"} _{title.substr(0, 15)}
        </p>
      </div>
      <div className={classes.image_and_description}>
        <div className={classes.project_image_cont}>
          <img src={image} alt="project_image" />
        </div>
        <p className={classes.project_description}>{title.substr(0, 15)}</p>
        <div className={classes.view_project_btn_cont}>
          <a href={github} target="_blank" rel="noreferrer">
            view-code
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            view-live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
