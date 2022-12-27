import { createContext, useState } from "react";


export const AboutContext = createContext();

const ContextProvider  = (props) => {

    const [info,setInfo] = useState(false)
    const [contact,setContact] = useState(false)
    const [skills,setSkills] = useState(false)
    const [education,setEducation] = useState(false)
    const [photo,setPhoto] = useState(false)
    const [cv,setCv] = useState(false)
    // ////////////////////////////////
    const [navData, setNavData] = useState([])
    const [cvPhoto,setCvPhoto] = useState(false)
    const [profilePhoto,setProfilePhoto] = useState(false)
    const [aboutMainContent,setAboutMainContent] = useState(true)





    const makeSectionActive = (value) => {
        switch (value) {
            case 'info':
                setInfo(prev => !prev)
                break;
            case 'contact':
                    setContact(prev => !prev)
                break;
            case 'skills':
                setSkills(prev => !prev)
                 break;
            case 'education':
                setEducation(prev => !prev)
                 break;
            case 'photo':
                setPhoto(prev => !prev)
                break;  
            case 'cv':
                setCv(prev => !prev)
                 break;           
              default:
                return null;
        }
    }


    return (
        <AboutContext.Provider value={{
            info,
            contact,
            makeSectionActive,
            skills,
            education,
            photo,
            cv,
            ////////
            navData,
            setNavData,
            cvPhoto,
            setCvPhoto,
            profilePhoto,
            setProfilePhoto,
            // //////
            aboutMainContent,
            setAboutMainContent
            
        }}>
            {props.children}
        </AboutContext.Provider>
    )
}

export default ContextProvider