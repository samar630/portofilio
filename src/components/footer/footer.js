import React from "react";
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
const Footer = () =>{
     

    return(
        <div className="footer"> 
         <div className="footer__container">
         <div className="rights__reserved">
             All rights reserved
            </div>
            <div className="social__media">
                <a href="https://www.linkedin.com/in/samar-qaddour-b45481248"> <FaLinkedin/></a>
                <a href="https://www.facebook.com/profile.php?id=100075826476135&mibextid=ZbWKwL"><FaFacebookSquare/></a>
                <a href="https://x.com/SamarKaddo17863?t=x-OpSYuGUyxzZl-07U8BIA&s=09"><BsTwitterX/></a>
                <a href="https://github.com/SamarQaddour"><IoLogoGithub/></a>
            </div>
          
         </div>
        </div>
    )
}

export default Footer