import React from "react";
import classes from "./LeftSideBarCont.module.css";

function LeftSideBarCont(props) {
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default LeftSideBarCont;
