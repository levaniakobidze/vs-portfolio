import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import classes from "./Navbar.module.css";
import { AppContext } from "../../state/appContext";
import profile from "../../assets/profile.png";
import burger_menu from "../../assets/burger_menu.svg";
import x_menu from "../../assets/x_menu.svg";

function Navbar() {
  const { activeNav, changeActiveNav, showMenu, onShowMobileMenu } =
    useContext(AppContext);

  return (
    <nav className={classes.navbar}>
      <Container className={classes.navbar_container}>
        <div className={classes.left_main}>
          <div className={classes.logo}> Levan - Iakobidze</div>
          <div className={classes.left}>
            <ul
              className={
                !showMenu
                  ? classes.navbar_menu
                  : `${classes.navbar_menu} ${classes.navbar_menu_active}`
              }
            >
              <div className={classes.close_menu_icon}>
                <img src={x_menu} alt="x" onClick={onShowMobileMenu} />
              </div>
              <li data-aos="fade-left" data-aos-duration="700">
                {" "}
                <Link
                  to={"/"}
                  className={
                    activeNav === "_hello" ? `${classes.active_link}` : ""
                  }
                  onClick={changeActiveNav}
                >
                  _hello
                </Link>
              </li>
              <li data-aos="fade-left" data-aos-duration="900">
                <Link
                  to={"/_about"}
                  className={
                    activeNav === "_about-me" ? `${classes.active_link}` : ""
                  }
                  onClick={changeActiveNav}
                >
                  _about-me
                </Link>{" "}
              </li>
              <li data-aos="fade-left" data-aos-duration="1200">
                <Link
                  to={"/_projects"}
                  onClick={changeActiveNav}
                  className={
                    activeNav === "_projects" ? `${classes.active_link}` : ""
                  }
                >
                  _projects
                </Link>
              </li>
              <li data-aos="fade-left" data-aos-duration="1400">
                <Link
                  className={
                    activeNav === "_contact-me" ? `${classes.active_link}` : ""
                  }
                  to={"/contact"}
                  onClick={changeActiveNav}
                >
                  _contact-me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.mobile_menu_icon} onClick={onShowMobileMenu}>
          <img src={burger_menu} alt="burger menu" />
        </div>
        <div className={classes.right}>
          <div className={classes.profile_avatar}>
            <img src={profile} alt="avatar" />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
