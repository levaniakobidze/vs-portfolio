import React from "react";
import classes from "./RightCont.module.css";
import profileImg from "../../../assets/profile.png";
import codeSnippet from "../../../assets/code_snippet.svg";
import comment from "../../../assets/comment.svg";
import star from "../../../assets/star.svg";

function RightCont() {
  return (
    <div className={classes.right_cont}>
      <div
        className={classes.user_cont}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className={classes.user_header}>
          <div className={classes.user_info}>
            <div className={classes.user_image}>
              <img src={profileImg} alt="profile_img" />
            </div>
            <div className={classes.user_details}>
              <p className={classes.user_name}>@LevanIakobidze</p>
              <p className={classes.created_at}>Created 5 months ago</p>
            </div>
          </div>
          <div className={classes.user_right}>
            <span className={classes.right_content}>
              <img src={comment} alt="comment" />
              details
            </span>
            <span className={classes.right_content}>
              <img src={star} alt="comment" />3 starts
            </span>
          </div>
        </div>
        <div className={classes.code_snippet1}>
          <img src={codeSnippet} alt="code_template" />
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <div
        className={classes.user_cont}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className={classes.user_header}>
          <div className={classes.user_info}>
            <div className={classes.user_image}>
              <img src={profileImg} alt="profile_img" />
            </div>
            <div className={classes.user_details}>
              <p className={classes.user_name}>@LevanIakobidze</p>
              <p className={classes.created_at}>Created 5 months ago</p>
            </div>
          </div>
          <div className={classes.user_right}>
            <span className={classes.right_content}>
              <img src={comment} alt="comment" />
              details
            </span>
            <span className={classes.right_content}>
              <img src={star} alt="comment" />3 starts
            </span>
          </div>
        </div>
        <div className={classes.code_snippet2}>
          <img src={codeSnippet} alt="code_template" />
        </div>
      </div>
    </div>
  );
}

export default RightCont;
