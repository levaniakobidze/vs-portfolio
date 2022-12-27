import React from 'react'
import classes from './Cv.module.css'
import CvImg from '../../../assets/cv.png'

function Cv() {
  return (
    <div className={classes.cv_cont}>
        <img src={CvImg} alt="cv" />
    </div>
  )
}

export default Cv   