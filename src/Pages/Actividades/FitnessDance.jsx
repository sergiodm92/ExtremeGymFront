import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './Actividades.module.scss'



const Fitness = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>Fitness</h1>
        </div>
    )
}
export default Fitness