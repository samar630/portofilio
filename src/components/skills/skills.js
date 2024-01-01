import React from "react";
import node from './../../assests/skills/nodejs.png';
import stylecomponent from './../../assests/skills/style_component.png';
import html from './../../assests/skills/html.png';
import css from './../../assests/skills/css-3.png';
import JAVASCRIPT from './../../assests/skills/java-script.png';
import rest from './../../assests/skills/api.png';
import Bootstrap from './../../assests/skills/bootstrap.png';
import TypeScript from './../../assests/skills/typescript.png';
import react from './../../assests/skills/library.png';
import Redux from './../../assests/skills/Redux.png';
import MongoDB from './../../assests/skills/database-storage.png';
import Material from './../../assests/skills/matariel_ui.jfif';
import next from  './../../assests/skills/next.jfif';
import scss from './../../assests/skills/scss.jfif';
import './skills.css'
const Skills = () =>{
  const skills = [
        {
            name: 'HTML',
            percentage:'99%',
            icon:html
        },
        {
            name: 'CSS',
            percentage:'99%',
            icon:css
        },
        {
            name: 'SASS',
            percentage:'99%',
            icon:scss
        },
        {
            name: 'Bootstrap',
            percentage:'95%',
            icon:Bootstrap
        },
        {
            name: 'Material-ui',
            percentage:'93%',
            icon:Material
        },
        {
            name: 'JAVASCRIPT',
            percentage:'95%',
            icon:JAVASCRIPT
        },
        {
            name: 'TypeScript',
            percentage:'90%',
            icon:TypeScript
        },
        {
            name: 'React.js',
            percentage:'98%',
            icon:react
        },
        {
            name: 'Next.js',
            percentage:'93%',
            icon:next
        },
        {
            name: 'Redux',
            percentage:'95%',
            icon:Redux
        },
        {
            name: 'Node.js',
            percentage:'90%',
            icon:node
        },
        {
            name: 'Styled components',
            percentage:'93%',
            icon:stylecomponent
        },
        {
            name: 'REST',
            percentage:'95%',
            icon:rest
        },
        {
            name: 'MongoDB',
            percentage:'90%',
            icon:MongoDB
        },
     

    ]
    return (
      <div className="skills__container" >
         {skills.map((skill,index) =>{
           return(
               <div className="skills__content" >
               <img className="image__skills" src={skill.icon} alt="test"/>
                 <div className="bar">
                 <h3 style={{margin:'0px 0.5rem', color:'rgb(119, 119, 119)',fontWeight:'bold'}}>{skill.name}</h3>
                 <div class="h-1 w-[200px] h-[8px] bg-orange-200 dark:bg-orange-500">
                  <div class="h-1 w-[200px] h-[8px]" style={{width:`${skill.percentage}`,background:'rgb(254, 136, 0)'}}></div>
                </div>
                <span style={{color:'rgb(254, 136, 0)', fontWeight:'bold'}}>{skill.percentage}</span>
                </div>
             </div>
           )
        })}
     
  </div> 
    )
}

export default Skills