import React from 'react'
import classes from './Skills.module.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import { DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import {SiBootstrap} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'

function Skills() {
  return (
    <div className={classes.skills}>
    <div className={classes.skills_list}>
      <div className={classes.skill}>
      <AiFillHtml5 className={`${classes.skill_icon} ${classes.html}`} />  
      <span  className={classes.skill_name}>html</span>
      </div>
      {/* ////////////////////////// */}
      <div className={classes.skill}>
      <IoLogoCss3 className={`${classes.skill_icon} ${classes.css}`} />
      <span className={classes.skill_name}>css</span>
      </div>
       {/* ////////////////////////// */}
       <div className={classes.skill}>
      <DiSass className={`${classes.skill_icon} ${classes.sass}`} />
      <span className={classes.skill_name}>sass</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
      <SiBootstrap className={`${classes.skill_icon} ${classes.bootstrap}`} />
      <span className={classes.skill_name}>bootstrap</span>
      </div>
      <div className={classes.skill}>
      <SiJavascript className={`${classes.skill_icon} ${classes.js}`} />
      <span className={classes.skill_name}>javascript</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
      <DiReact className={`${classes.skill_icon} ${classes.react}`} />
      <span className={classes.skill_name}>react</span>
      </div> {/* ////////////////////////// */}
      {/* ////////////////////////// */}
      <div className={classes.skill}>
      <SiReactrouter className={`${classes.skill_icon} ${classes.router}`} />
      <span className={classes.skill_name}>router</span>
      </div>
      {/* ////////////////////////// */}
      <div className={classes.skill}>
      <SiRedux className={`${classes.skill_icon} ${classes.redux}`} />
      <span className={classes.skill_name}>redux</span>
      </div>
      <div className={classes.skill}>
      <DiGit className={`${classes.skill_icon} ${classes.git}`} />
      <span className={classes.skill_name}>git</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
      <CgFigma className={`${classes.skill_icon} ${classes.figma}`} />
      <span className={classes.skill_name}>figma</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
      <SiAdobexd className={`${classes.skill_icon} ${classes.xd}`} />
      <span className={classes.skill_name}>xd</span>
      </div>
       {/* ////////////////////////// */}
       <div className={classes.skill}>
      <IoLogoNodejs className={`${classes.skill_icon} ${classes.node}`} />
      <span  className={classes.skill_name}>node</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
      <SiExpress className={`${classes.skill_icon} ${classes.express}`} />
      <span className={classes.skill_name}>express</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
        <p className={classes.mongoose}>Mongoose</p>
      <span className={classes.skill_name}>mongoose</span>
      </div> {/* ////////////////////////// */}
      <div className={classes.skill}>
      <SiMongodb className={`${classes.skill_icon} ${classes.mongodb}`} />
      <span className={classes.skill_name}>mongoDb</span>
      </div>
       {/* ////////////////////////// */}
    </div>
    </div>
  )
}

export default Skills