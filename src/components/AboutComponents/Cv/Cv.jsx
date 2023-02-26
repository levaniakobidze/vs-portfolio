import React from "react";
import classes from "./Cv.module.css";
import CvImg from "../../../assets/cv.png";
import { AiOutlineDownload } from "react-icons/ai";

function Cv() {
  return (
    <div className={classes.cv_cont}>
      <img src={CvImg} alt="cv" />
      <div className={classes.download_btn_cont}>
        <button>
          <span>Download</span>
          <AiOutlineDownload className={classes.download_icon} />
        </button>
      </div>
    </div>
  );
}

export default Cv;
