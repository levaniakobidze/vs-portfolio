import React,{useContext} from 'react'
import classes from './Skills.module.css'
import { SkillsContext } from '../../../state/skillsContext'

function Skills() {
  const { skillset, getSkill,skillDetails} = useContext(SkillsContext)
  return (
    <div className={classes.skills}>
    <div className={classes.skills_list}>
      {skillset.map((skill,index) => {
        return <div key={index} className={classes.skill} onMouseOver={() => getSkill(skill.id)}>
        <skill.icon className={`${classes.skill_icon} ${skill.class}`} />  
        <span  className={classes.skill_name}>{skill.name}</span>
        </div>
      })}
    </div>
    {skillDetails && <div className={classes.skill_description_wrapper}>
      <div className={classes.description_header}>
        <p>{skillDetails.name}</p>
        <p>.-.-.-.-.-.-.-</p>
      <skillDetails.icon className={`${classes.skill_icon}  ${classes.description_icon}`} />
      </div>
      <div className={classes.description_text}>
      <p>{skillDetails.description}</p>
      </div>
      </div>}
    </div>
  )
}

export default Skills