import React,{useContext} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Project from "../Project/Project";
import classes from './ProjectSlider.module.css'
////////////////////
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import {AppContext} from "../../state/appContext";


const ProjectSlider = () => {
    const {projects} = useContext(AppContext)

    return (
        <Splide aria-label="My Favorite Images" className={classes.slider}
                options={ {
                    type     : 'loop',
                    width    : '100%',
                    gap      : '40px',
                    perPage  :  3,
                    padding  : '10px',
                    arrows   :  2,
                    lazyLoad : 'nearby',
                    autoplay: true,
                } }
        >
            {projects.map((project, index) => {
                return  <Project key={project.id} indx={index} {...project} />;
            })}


        </Splide>
    )

}


export default ProjectSlider