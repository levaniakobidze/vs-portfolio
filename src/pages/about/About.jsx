import React from "react";
import Container from "../../components/Container/Container";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";
import classes from "./About.module.css";
function About() {
  return (
    <section className={classes.about}>
      <Container className={classes.about_container}>
        <div className={classes.left}>
          <LeftSideBarCont></LeftSideBarCont>
        </div>
        <div className={classes.midlle}></div>
        <div className={classes.right}></div>
      </Container>
    </section>
  );
}

export default About;
