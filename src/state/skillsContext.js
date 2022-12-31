import { createContext, useState } from "react";
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
import {FaVuejs} from 'react-icons/fa'
import classes from '../components/AboutComponents/Skills/Skills.module.css'

const skillset = [
  {id:1, name:'html',class:classes.html,icon:AiFillHtml5, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:2, name:'css',class:classes.css,icon:IoLogoCss3, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:3, name:'sass',class:classes.sass,icon:DiSass, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:4, name:'bootstrap',class:classes.bootstrap,icon:SiBootstrap, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:5, name:'js',class:classes.js,icon:SiJavascript, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:6, name:'react',class:classes.react,icon:DiReact, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:7, name:'router',class:classes.router,icon:SiReactrouter, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:8, name:'redux',class:classes.redux,icon:SiRedux, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:36, name:'vue',class:classes.vue,icon:FaVuejs, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:9, name:'git',class:classes.git,icon:DiGit, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:10, name:'figma',class:classes.figma,icon:CgFigma, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:11, name:'xd',class:classes.xd,icon:SiAdobexd, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:12, name:'node',class:classes.node,icon:IoLogoNodejs, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:13, name:'express',class:classes.express,icon:SiExpress, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
  {id:14, name:'mongoDb',class:classes.mongodb,icon:SiMongodb, description:'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.'},
]

export const SkillsContext = createContext();

const ContextProvider  = (props) => {
     const [skillDetails,setSkillDetails] = useState(null); 
     const getSkill = (id) => {
        const filteredSkill = skillset.find(skill => skill.id === id)
        setSkillDetails(filteredSkill)
    }
    return (
        <SkillsContext.Provider value={{skillset,getSkill,skillDetails}}>
            {props.children}
        </SkillsContext.Provider>
    )
}

export default ContextProvider