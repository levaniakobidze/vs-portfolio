import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Container className={classes.navbar_container}>
        <div className={classes.left}>
          <div className={classes.logo}> Levan - Iakobidze</div>
          <ul className={classes.navbar_menu}>
            <li>
              {" "}
              <Link to={"/"}>_hello</Link>
            </li>
            <li>
              <Link to={"/_about"}>_about-me</Link>{" "}
            </li>
            <li>
              <Link to={"/_projects"}>_projects</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <Link
            className={`${classes.contact_btn} ${classes.active_link}`}
            to={"/contact"}>
            _contact-me
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
