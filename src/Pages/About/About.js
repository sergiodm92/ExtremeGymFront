import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './About.module.scss'

const About = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>About</h1>
        </div>
    )
}
export default About