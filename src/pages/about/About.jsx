import React,{useContext} from "react";
import Container from "../../components/Container/Container";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";
import classes from "./About.module.css";
import light_arrow from '../../assets/light_arrow.svg';
import dark_arrow from '../../assets/dark_arrow.svg';
import pink_folder from '../../assets/pink_folder.svg';
import blue_folder from '../../assets/green_folder.svg';
import red_folder from '../../assets/red_folder.svg';
import green_folder from '../../assets/blue_folder.svg';
import profileImg from '../../assets/profile.png';
import cvImg from '../../assets/cv.png';
import Cv from "../../components/AboutComponents/Cv/Cv";


import {AboutContext} from '../../state/aboutContext'
import Picture from "../../components/AboutComponents/Picture/Picture";
import AboutText from "../../components/AboutComponents/AboutText/AboutText";
import RightCont from "../../components/AboutComponents/RightCont/RightCont";


function About() {
  const {
    info,
    contact,
    skills,
    education,
    photo,
    cv,
    navData,
    setNavData,
    cvPhoto,
    setCvPhoto,
    profilePhoto,
    setProfilePhoto,
    aboutMainContent,
    setAboutMainContent,
    makeSectionActive} = useContext(AboutContext)

    const removeFromNav = (id) => {
      setNavData(navData.filter(item => item.id !== id));
      setAboutMainContent(true)
      setProfilePhoto(false)
      setCvPhoto(false)
    }
  return (
    <section className={classes.about}>
      <Container className={classes.about_container}>
        <div className={classes.left}>
          <LeftSideBarCont>
            <div className={classes.left_wrapper}>
              <div 
              className={info ? `${classes.section} ${classes.active_section}`: classes.section }
               onClick={() => makeSectionActive('info')}>
                <img src={light_arrow} alt="arrow" />
                <span>personal-info</span>
              </div>
              { info && 
                 <div className={classes.sub_section_wrapper}>
                 <div className={classes.sub_section}
                  onClick={() => makeSectionActive('skills')}>
                   <img className={skills ? classes.active_sub_section : ''} src={dark_arrow} alt="arrow" />
                   <img className={classes.folder} src={pink_folder} alt="arrow" />
                   <span className={skills ? classes.active_span : ""}>skills</span>
                 </div>
                 {/* // */}
                 <div className={classes.sub_section}
                  onClick={() => makeSectionActive('education')}>
                   <img className={education ? classes.active_sub_section : ''} src={dark_arrow} alt="arrow" />
                   <img className={classes.folder} src={blue_folder} alt="arrow" />
                   <span className={education ? classes.active_span : ""}>education</span>
                 </div>
                 {/* // */}
                 <div className={classes.sub_section}
                  onClick={() => makeSectionActive('photo')}>
                   <img className={photo ? classes.active_sub_section : ''} src={dark_arrow} alt="arrow" />
                   <img className={classes.folder} src={green_folder} alt="arrow" />
                   <span className={photo ? classes.active_span : ""}>picture</span>
                 </div>
                { photo && 
                 <div className={classes.photo_cont}>
                 <img src={profileImg} alt="profile" onClick={() =>{
                  setNavData([{id:3,name:'profile_photo'}]) 
                   setCvPhoto(false)
                   setAboutMainContent(false)
                   setProfilePhoto(true)
                  }
                  } />
                </div>
                 }
           </div>}
              {/* /////////////// */}
              <div 
              className={contact ? `${classes.section} ${classes.active_section}` : classes.section }
               onClick={() => makeSectionActive('contact')}>
                <img src={light_arrow} alt="arrow" />
                <span>contact</span>
              </div>
              {
                contact && 
                <div className={classes.sub_section_wrapper}>
                <div className={classes.sub_section}
                 onClick={() => makeSectionActive('cv')}>
                  <img className={cv ? classes.active_sub_section : ''} src={dark_arrow} alt="arrow" />
                  <img className={classes.folder} src={red_folder} alt="arrow" />
                  <span className={cv ? classes.active_span : ""}>Cv</span>
                </div>
                { cv && 
                 <div className={classes.photo_cont}>
                 <img src={cvImg} alt="profile" onClick={() =>{
                  setNavData([{id:2,name:'cv'}]) 
                   setCvPhoto(true)
                   setAboutMainContent(false)
                   setProfilePhoto(false)
                  }
                  }
                   />
                  
                </div>
                 }
                </div>
              }
              
            </div>
          </LeftSideBarCont>
        </div>
        <div className={classes.right_main}>
        <div className={classes.top_bar}>
            <p
              className={classes.top_bar_contact}
              data-aos='fade-left'
              data-aos-duration='2000'>
              about <span onClick={() => window.location = '/'}>x</span>
            </p>
            {navData && navData.map(navItem => {
            return  <p key={navItem.id} onClick={() => removeFromNav(navItem.id)}
              className={classes.top_bar_contact}
              data-aos='fade-left'
              data-aos-duration='2000'>
              {navItem.name} <span>x</span>
            </p>
          })}
          </div>
          <div className={classes.right_main_content}>
        <div className={classes.middle}>

          {
          aboutMainContent &&
        <AboutText />
        }
         {
          cvPhoto && 
          <Cv />
          }
          {
            profilePhoto && 
           <Picture />
          }
        </div>
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
