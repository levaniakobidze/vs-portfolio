import React,{useContext} from "react";
import Container from "../../components/Container/Container";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";
import classes from "./Projects.module.css";
import x from "../../assets/x.svg";
import { AppContext } from "../../state/appContext";
import Project from '../../components/Project/Project'

function Projects() {
  const {projects} = useContext(AppContext)
  return (
    <section className={classes.projects}>
      <Container className={classes.projects_container}>
        <div className={classes.left}>
          <LeftSideBarCont />
        </div>
        <div className={classes.right}>
          <div className={classes.top_bar}>
            <p
              className={classes.top_bar_contact}
              data-aos='fade-left'
              data-aos-duration='2000'>
              Projects <img src={x} alt='x' />
            </p>
          </div>
          <div className={classes.projects_list}>
          {projects.map((project, index) => {
                return  <Project key={index} indx={index} {...project} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
