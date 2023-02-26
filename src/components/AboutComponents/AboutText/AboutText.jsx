import React from "react";
import classes from "./AboutText.module.css";
import profileImg from "../../../assets/profile.png";
import github from "../../../assets/github.png";

function AboutText() {
  return (
    <div
      className={classes.about_text}
      data-aos="fade-up"
      data-aos-duration="800">
      <div className={classes.text_cont}>
        <p className={classes.comment}>{"/**"}</p>
        <p>
          <img src={profileImg} alt="profile" />
          I'm an enthusiastic and detail-oriented Front-end / React.js developer
          with more than one year experience working on personal and group
          (voluntary) React.js projects. I believe that my technical skills and
          knowledge of Html, Css, JavaScript and React.js will render me a
          valuable addition to your web development team.
        </p>
        <p className={classes.comment}>{"/**"}</p>
      </div>
      <div className={classes.code_snippet}>
        <img src={github} alt="code" />
      </div>
    </div>
  );
}

export default AboutText;
