import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './RecoveryPassword.module.scss'

const RecoveryPassword = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>RecoveryPassword</h1>
        </div>
    )
}
export default RecoveryPassword