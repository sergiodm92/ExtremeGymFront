import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './Escuelas.module.scss'

const Taekwondo = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>Taekwondo</h1>
        </div>
    )
}
export default Taekwondo