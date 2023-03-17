import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './About.module.scss'

const About = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
        <div className={style.title}>
            <h1 className={style.bigOne}>Sobre nosotro</h1>
            <p className={style.coment}>Extreme Gym nace en la provincia de Salta - Argentina en julio del año 2008.</p>
            <h1 className={style.bigOne}>Ubicación</h1>
        </div>
        </div>
    )
}
export default About