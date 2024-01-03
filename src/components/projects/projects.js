import React from "react";
import './projects.css';
import '../MainPage/mainpage.css';
import Card from "./card";
import Footer from './../footer/footer'
const Project = () =>{


    return(
       <>
        <div style={{backgroundColor:'black',color:'#fff',height:'5rem'}}>
             <nav className="nav__section " >
             <div className="logo">
            <h2> Front-End</h2>
             </div>
            <ul className="ul__section">
            <li className='button__menu'
             >
            <button className=''>
                <a href="/" className="">Main</a>
               </button>   
            </li>
            <li  className='button__menu' > 
            <button>
                <a href="projects" >Projects</a>
             </button>
            </li>
            <li className='button__menu'>   
            <button>
                <a href="contact" >Contact me</a>
               </button>
            </li>  
            </ul>
        <div className="siderBar">
            <ul className="flex gap-8 text-lg">
              <li><a className="a_element" href="projects">Project</a></li>
              <li><a className="a_element" href="contact">contact me</a></li>
            </ul>
        </div>    
      </nav>
        </div>
        <div className="card">
        <Card />
        </div>
        <div>
          <Footer />
        </div>
       </>
    )
}

export default Project