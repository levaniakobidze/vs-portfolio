import React from 'react'
import classes from './Picture.module.css'
import ProfileImg from '../../../assets/profile.png'

function Picture() {
  return (
   <div className={classes.profile_image}>
     <img src={ProfileImg} alt="profile_photo" />
   </div>
  )
}

export default Picture