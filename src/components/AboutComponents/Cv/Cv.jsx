import React from "react";
import classes from "./Cv.module.css";
import CvImg from "../../../assets/cv.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";

function Cv() {
  return (
    <div className={classes.cv_cont}>
      <img src={CvImg} alt="cv" />
      <div className={classes.download_btn_cont}>
        <button>
          <a href="../../../assets/cv.pdf" download>
            Download
          </a>

          <AiOutlineDownload className={classes.download_icon} />
        </button>
        <button>
          <a
            href="https://drive.google.com/file/d/1yYqeq7aqJMp2AA8PM4nU8skist9NpKcI/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Google Drive
          </a>

          <FaGoogleDrive className={classes.download_icon} />
        </button>
      </div>
    </div>
  );
}

export default Cv;
