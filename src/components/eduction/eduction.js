import React from "react";
import Aleppo_unverstiy from './../../assests/University_of_Aleppo_Logo.png'
import  './eduction.css'

const Eduction = () =>{
 return(

    <div className="Eduction">
 
      <h1>Edutcation</h1>
      <div className="card__section">
      <div className="card__container">
           <div className="Aleppo_unverstiy">
           <img src={Aleppo_unverstiy} alt="logo"/>
           </div>
           <div className="pragraph">
           <h3>Bachelor's Degree</h3>
           <h6>2017</h6>
           <p>Bachelor's Degree In Computer Engineering.
             University Of Aleppo -
              Electrical And Electronic Engineering Faculty
               – Computer Engineering</p>
           </div>
       </div>

       <div className="card__container">
           <div className="Aleppo_unverstiy">
           <img src={Aleppo_unverstiy} alt="logo"/>
           </div>
           <div className="pragraph">
           <h3>Bachelor's Degree</h3>
           <h6>from 2021 to present</h6>
           <p>Bachelor's Degree In Translation from English into Arabic. University Of Aleppo 
            - Faculty of Arts and Humanities</p>
           </div>
       
       </div>
 
      </div>
    
    </div>
 )
}

export default Eduction;