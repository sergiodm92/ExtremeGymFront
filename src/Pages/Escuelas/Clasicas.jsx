import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './Escuelas.module.scss'


const Clasicas = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>Clasicas</h1>
        </div>
    )
}
export default Clasicas