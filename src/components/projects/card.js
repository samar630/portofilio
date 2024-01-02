import React from "react";
import './projects.css';
import react from './../../assests/skills/library.png';
import css from './../../assests/skills/css-3.png';
import html from './../../assests/skills/html.png';
import firebase from './../../assests/skills/firebase.png';
import node from './../../assests/skills/nodejs.png';
import bootstrap from './../../assests/skills/bootstrap.png';
import rest from './../../assests/skills/api.png';
import matariel from './../../assests/skills/Redux.png';
const Card = () =>{
    return(
     <div className="area__cart">
         <div className="card__of__project">
          <div className="image__section">
            <h1 className="name__of__project">
                chat Application</h1>
          </div>
          <div>
            <div className="section__bottom">
                <h1>FrontEnd</h1>
                <p>
                The application is for conversations between two people and contains a SignUp and login 
                and information
                 User profile
                </p>
                <div className="icon__project">
                   <div className="icon">  
                     <img src={`${react}`}  alt="no photo"/>
                     <h5>React.js</h5>
                   </div>
                   <div className="icon">
                     <img src={css} alt="no photo" />
                     <h5>CSS</h5>
                   </div>
                   <div className="icon">
                     <img src={html} alt="no photo" />
                     <h5>HTML</h5>
                   </div>
                   <div className="icon" style={{padding:'0rem 0rem 0.3rem 0.6rem'}}>
                     <img src={firebase} alt="no photo" />
                     <h5>Firebase</h5>
                   </div>
                </div>
              
            </div>
            <div className="button__details">
                    <button>Details</button>
             </div>
          </div>
        </div>
        <div className="card__of__project">
          <div className="image__section_1">
            <h1 className="name__of__project">
                eCommerce</h1>
          </div>
          <div>
            <div className="section__bottom">
                <h1>Front End</h1>
                <p>
                The application enters a large number of products and calculates the amount of raw materials
                Their prices
                </p>
                <div className="icon__project">
                   <div className="icon">  
                     <img src={`${react}`}  alt="no photo"/>
                     <h5>React.js</h5>
                   </div>
                   <div className="icon">
                     <img src={css} alt="no photo" />
                     <h5>CSS</h5>
                   </div>
                   <div className="icon">
                     <img src={html} alt="no photo" />
                     <h5>HTML</h5>
                   </div>
                   <div className="icon" style={{padding:'0rem 0rem 0.3rem 0.6rem'}}>
                     <img src={node} alt="no photo" />
                     <h5>NodeJs</h5>
                   </div>
                </div>
              
            </div>
            <div className="button__details">
                    <button>Details</button>
             </div>
          </div>
        </div>
        <div className="card__of__project">
          <div className="image__section_2">
            <h1 className="name__of__project">
                Shipping</h1>
          </div>
          <div>
            <div className="section__bottom">
                <h1>Front End</h1>
                <p>
                The application is dedicated to shipping orders, 
                delivering the order, and tracking its status
                </p>
                <div className="icon__project">
                   <div className="icon">  
                     <img src={react}  alt="photo"/>
                     <h5>React.js</h5>
                   </div>
                   <div className="icon">
                     <img src={matariel} alt="photo" />
                     <h5>Materiel</h5>
                   </div>
                   <div className="icon">
                     <img src={bootstrap} alt="photo" />
                     <h5>Bootstrap</h5>
                   </div>
                   <div className="icon" style={{padding:'0rem 0rem 0.3rem 0.6rem'}}>
                     <img src={rest} alt="photo" />
                     <h5>Rest API</h5>
                   </div>
                </div>
              
            </div>
            <div className="button__details">
                    <button>Details</button>
             </div>
          </div>
        </div>
     </div>
    )
}

export default Card