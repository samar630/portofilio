import React from "react";
import MainPages from "../../components/MainPage/MainPage";
import Eduction from "../../components/eduction/eduction";
import Experience from "../../components/experience/experience";
import Skills from "../../components/skills/skills";
import Footer from "../../components/footer/footer";


const Home = () =>{
 return(

    <div className="home">
       <MainPages/>
       <Eduction/>
       <Experience/>
       <Skills/>
       <Footer/>
    </div>
 )
}

export default Home;