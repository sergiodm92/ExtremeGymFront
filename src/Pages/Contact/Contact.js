import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import style from './Contact.module.scss'

const Contact = ()=>{
    return(
        <div className={style.conteiner}>
        <Navbar/>
            <h1>Contact</h1>
        </div>
    )
}
export default Contact