import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import classes from "./Navbar.module.css";
import { AppContext } from "../../state/appContext";
function Navbar() {
  const { activeNav, changeActiveNav } = useContext(AppContext);

  console.log(activeNav);

  return (
    <nav className={classes.navbar}>
      <Container className={classes.navbar_container}>
        <div className={classes.left}>
          <div className={classes.logo}> Levan - Iakobidze</div>
          <ul className={classes.navbar_menu}>
            <li data-aos='fade-left' data-aos-duration='700'>
              {" "}
              <Link
                to={"/"}
                className={
                  activeNav === "_hello" ? `${classes.active_link}` : ""
                }
                onClick={changeActiveNav}>
                _hello
              </Link>
            </li>
            <li data-aos='fade-left' data-aos-duration='900'>
              <Link
                to={"/_about"}
                className={
                  activeNav === "_about-me" ? `${classes.active_link}` : ""
                }
                onClick={changeActiveNav}>
                _about-me
              </Link>{" "}
            </li>
            <li data-aos='fade-left' data-aos-duration='1200'>
              <Link
                to={"/_projects"}
                onClick={changeActiveNav}
                className={
                  activeNav === "_projects" ? `${classes.active_link}` : ""
                }>
                _projects
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <Link
            className={
              activeNav === "_contact-me" ? `${classes.active_link}` : ""
            }
            to={"/contact"}
            onClick={changeActiveNav}>
            _contact-me
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
