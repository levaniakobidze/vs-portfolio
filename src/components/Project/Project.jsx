import React from "react";
import { useState } from "react";
import classes from "./Project.module.css";

function Projects({ img, indx, title, host, github }) {
  const [isHover, setIsHover] = useState(false);
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const onProjectMouseOver = () => {
    setIsHover(true);
  };
  const onProjectMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={classes.project} data-aos='fade-up' data-aos-duration='500'>
      <div className={classes.num_and_title}>
        <p className={classes.project_num}>Project {indx + 1}</p>
        <p className={classes.project_title}>
          {" "}
          {"//"} _{title.substr(0, 15)}
        </p>
      </div>
      <div
        className={classes.image_and_description}
        // style={{
        //   boxShadow: `0 0px 7px 0.01px ${
        //     isHover ? `#${randomColor}` : "transparent"
        //   } `,
        // }}
        onMouseOver={onProjectMouseOver}
        onMouseLeave={onProjectMouseLeave}>
        <div className={classes.project_image_cont}>
          <img src={img} alt='project_image' />
        </div>
        <p className={classes.project_description}>{title}</p>
        <div className={classes.view_project_btn_cont}>
          <a href={github} target='_blank' rel='noreferrer'>
            view-code
          </a>
          <a href={host} target='_blank' rel='noreferrer'>
            view-live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
