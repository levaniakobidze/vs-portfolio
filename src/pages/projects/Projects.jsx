import React from "react";
import Container from "../../components/Container/Container";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";
import classes from "./Projects.module.css";
import x from "../../assets/x.svg";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";

function Projects() {
  return (
    <section className={classes.projects}>
      <Container className={classes.projects_container}>
        <div className={classes.left}>
          <LeftSideBarCont />
        </div>
        <div className={classes.right}>
          <div className={classes.top_bar}>
            {" "}
            <p
              className={classes.top_bar_contact}
              data-aos='fade-left'
              data-aos-duration='2000'>
              Projects <img src={x} alt='x' />
            </p>
          </div>
          <div className={classes.projects_list}>
          <ProjectSlider />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
