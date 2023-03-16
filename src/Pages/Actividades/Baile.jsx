import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './Actividades.module.scss'



const Baile = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>Baile</h1>
        </div>
    )
}
export default Baile