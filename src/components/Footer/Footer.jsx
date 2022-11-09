import React from "react";
import Container from "../Container/Container";
import classes from "./Footer.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.footer_container}>
        <div className={classes.contact_left}>
          <span className={classes.contact_title}>find me in:</span>
          <div className={classes.social_icon_cont}>
            <AiFillLinkedin className={classes.icon} />
          </div>
        </div>
        <div className={classes.contact_right}>
          <p className={classes.github_username}>@levaniakobidze</p>
          <div className={classes.social_icon_cont}>
            <AiFillGithub className={classes.icon} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
