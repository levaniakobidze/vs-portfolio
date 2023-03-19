import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";
import classes from "./Projects.module.css";
import x from "../../assets/x.svg";
import Project from "../../components/Project/Project";
import ToolsFilter from "../../components/Filters/ToolsFilter/ToolsFilter";
import { ProjectsContext } from "../../state/projectsContext";

function Projects() {
  const { projects } = useContext(ProjectsContext);
  return (
    <section className={classes.projects}>
      <Container className={classes.projects_container}>
        <div className={classes.left}>
          <LeftSideBarCont>
            <ToolsFilter />
          </LeftSideBarCont>
        </div>
        <div className={classes.right}>
          <div className={classes.top_bar}>
            <p
              className={classes.top_bar_contact}
              data-aos="fade-left"
              data-aos-duration="2000">
              Projects <img src={x} alt="x" />
            </p>
          </div>
          <div className={classes.projects_list}>
            {projects.length ? (
              projects.map((project, index) => {
                return <Project key={index} indx={index} {...project} />;
              })
            ) : (
              <p>Sorry, I don't have projects with selected stacks</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
