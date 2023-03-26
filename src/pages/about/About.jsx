import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";
import classes from "./About.module.css";
import light_arrow from "../../assets/light_arrow.svg";
import dark_arrow from "../../assets/dark_arrow.svg";
import pink_folder from "../../assets/pink_folder.svg";
import blue_folder from "../../assets/green_folder.svg";
import red_folder from "../../assets/red_folder.svg";
import green_folder from "../../assets/blue_folder.svg";
import cvImg from "../../assets/cv.png";
import react from "../../assets/react.svg";
import { AboutContext } from "../../state/aboutContext";
import RightCont from "../../components/AboutComponents/RightCont/RightCont";

function About() {
  const {
    info,
    contact,
    skills,
    education,
    photo,
    cv,
    linkedin,
    github,
    navData,
    setNavData,
    makeSectionActive,
    renderComponent,
    setActiveComponent,
  } = useContext(AboutContext);

  const removeFromNav = (id) => {
    setNavData(navData.filter((item) => item.id !== id));
    setActiveComponent("text");
  };

  return (
    <section className={classes.about}>
      <Container className={classes.about_container}>
        <div className={classes.left}>
          <LeftSideBarCont>
            <div className={classes.left_wrapper}>
              <div
                className={
                  info
                    ? `${classes.section} ${classes.active_section}`
                    : classes.section
                }
                onClick={() => makeSectionActive("info")}>
                <img src={light_arrow} alt="arrow" />
                <span>personal-info</span>
              </div>
              {info && (
                <div className={classes.sub_section_wrapper}>
                  <div
                    className={classes.sub_section}
                    onClick={() => makeSectionActive("skills")}>
                    <img
                      className={skills ? classes.active_sub_section : ""}
                      src={dark_arrow}
                      alt="arrow"
                    />
                    <img
                      className={classes.folder}
                      src={pink_folder}
                      alt="arrow"
                    />
                    <span className={skills ? classes.active_span : ""}>
                      skills
                    </span>
                  </div>
                  {skills && (
                    <div
                      className={classes.skills_cont}
                      onClick={() => {
                        setNavData([{ id: 4, name: "skills" }]);
                        setActiveComponent("skills");
                      }}>
                      <img src={react} alt="react" />
                      <p>Skills.jsx</p>
                    </div>
                  )}
                  {/* // */}
                  <div
                    className={classes.sub_section}
                    onClick={() => makeSectionActive("education")}>
                    <img
                      className={education ? classes.active_sub_section : ""}
                      src={dark_arrow}
                      alt="arrow"
                    />
                    <img
                      className={classes.folder}
                      src={blue_folder}
                      alt="arrow"
                    />
                    <span className={education ? classes.active_span : ""}>
                      education
                    </span>
                  </div>
                  {/* // */}
                  <div
                    className={classes.sub_section}
                    onClick={() => makeSectionActive("photo")}>
                    <img
                      className={photo ? classes.active_sub_section : ""}
                      src={dark_arrow}
                      alt="arrow"
                    />
                    <img
                      className={classes.folder}
                      src={green_folder}
                      alt="arrow"
                    />
                    <span className={photo ? classes.active_span : ""}>
                      picture
                    </span>
                  </div>
                  {photo && (
                    <div
                      className={classes.skills_cont}
                      onClick={() => {
                        setNavData([{ id: 12, name: "photo" }]);
                        setActiveComponent("photo");
                      }}>
                      <img src={react} alt="react" />
                      <p>Photo.jsx</p>
                    </div>
                  )}
                </div>
              )}
              {/* /////////////// */}
              <div
                className={
                  contact
                    ? `${classes.section} ${classes.active_section}`
                    : classes.section
                }
                onClick={() => makeSectionActive("contact")}>
                <img src={light_arrow} alt="arrow" />
                <span>contact</span>
              </div>

              {contact && (
                <div className={classes.sub_section_wrapper}>
                  <div
                    className={classes.sub_section}
                    onClick={() => makeSectionActive("cv")}>
                    <img
                      className={cv ? classes.active_sub_section : ""}
                      src={dark_arrow}
                      alt="arrow"
                    />
                    <img
                      className={classes.folder}
                      src={green_folder}
                      alt="arrow"
                    />
                    <span className={cv ? classes.active_span : ""}>Cv</span>
                  </div>
                  {cv && (
                    <div className={classes.photo_cont}>
                      <div
                        className={classes.skills_cont}
                        onClick={() => {
                          setNavData([{ id: 32, name: "cv" }]);
                          setActiveComponent("cv");
                        }}>
                        <img src={react} alt="react" />
                        <p>Cv.jsx</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {contact && (
                <div className={classes.sub_section_wrapper}>
                  <div
                    className={classes.sub_section}
                    onClick={() => makeSectionActive("github")}>
                    <img
                      className={github ? classes.active_sub_section : ""}
                      src={dark_arrow}
                      alt="arrow"
                    />
                    <img
                      className={classes.folder}
                      src={red_folder}
                      alt="arrow"
                    />
                    <span className={github ? classes.active_span : ""}>
                      Github
                    </span>
                  </div>
                  {github && (
                    <div className={classes.photo_cont}>
                      <div
                        className={classes.skills_cont}
                        onClick={() => {
                          setNavData([{ id: 24, name: "github" }]);
                          setActiveComponent("github");
                        }}>
                        <img src={react} alt="react" />
                        <p>Github.jsx</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {contact && (
                <div className={classes.sub_section_wrapper}>
                  <div
                    className={classes.sub_section}
                    onClick={() => makeSectionActive("linkedin")}>
                    <img
                      className={linkedin ? classes.active_sub_section : ""}
                      src={dark_arrow}
                      alt="arrow"
                    />
                    <img
                      className={classes.folder}
                      src={blue_folder}
                      alt="arrow"
                    />
                    <span className={linkedin ? classes.active_span : ""}>
                      LinkedIn
                    </span>
                  </div>
                  {linkedin && (
                    <div className={classes.photo_cont}>
                      <div
                        className={classes.skills_cont}
                        onClick={() => {
                          setNavData([{ id: 3, name: "linkedin" }]);
                          setActiveComponent("linkedin");
                        }}>
                        <img src={react} alt="react" />
                        <p>Linkedin.jsx</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </LeftSideBarCont>
        </div>
        <div className={classes.right_main}>
          <div className={classes.top_bar}>
            <p
              className={classes.top_bar_contact}
              data-aos="fade-left"
              data-aos-duration="2000">
              about <span onClick={() => (window.location = "/")}>x</span>
            </p>
            {navData &&
              navData.map((navItem) => {
                return (
                  <p
                    key={navItem.id}
                    onClick={() => removeFromNav(navItem.id)}
                    className={classes.top_bar_contact}
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    {navItem.name} <span>x</span>
                  </p>
                );
              })}
          </div>
          <div className={classes.right_main_content}>
            <div className={classes.middle}>{renderComponent()}</div>
            <div className={classes.right}>
              <RightCont />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
