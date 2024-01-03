import React from "react";
import './mainpage.css'
import cv from './../../assests/cv.pdf'
const MainPages = () =>{

 return(
    <div className="mainpage__section">
       <div className="nav" >
      <nav className="nav__section ">
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
                <a href="/projects" >Projects</a>
             </button>
            </li>
            <li className='button__menu'>   
            <button>
                <a href="/contact" >Contact me</a>
               </button>
            </li>  
        </ul>
        <div className="siderBar">
            <ul className="flex gap-8 text-lg">
              <li><a className="a_element" href="/projects">Project</a></li>
              <li><a className="a_element" href="/contact">contact me</a></li>
            </ul>
        </div>    
      </nav>

      </div>
       <div className="body__home">
        <div className="cv__section text-xl font-bold">
          <h2>Hi!</h2>
           <div className="hi_samar">
            <h1 className="text-3xl ">I'm <span style={{color:'rgb(35, 217, 151)'}}>Samar Qaddour</span></h1>
           </div>
          <p className="flex flex-col">
           <span>
           Contact me for if youy need a software developer
           </span>
            <span>
            I'm professional with amazing skills
            </span>
          </p>
          <div className="button__section">
            <button className="contact__me">
              <a href="contact">Contact me</a>
              </button>
            <button className="download__cv" type="download" >
              <a href={cv} >download cv</a> 
            </button>
          </div>
        </div>
        
       </div>
   </div>
  
 )
}

export default MainPages;