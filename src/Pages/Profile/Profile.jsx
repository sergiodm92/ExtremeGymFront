import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import style from './Profile.module.scss'

const Profile = ()=>{
    return(
        <div className={style.conteiner}>
            <Navbar></Navbar>
            <div className={style.conteiner2}>
                <div className={style.profile}>
                    <div className={style.foto}>
              
                    </div>
                    <div className={style.data}>
                        <p>nombre</p>
                        <p>apellido</p>
                        <p>e-mail</p>
                        <p>total clases: 25</p>
                        <p>fecha inicio: 25-01-2018</p>
                        <p>descuento hnos: NO</p>


                    </div>
                </div>
                <div className={style.stats}>
                    <div className={style.activities}>
                        <p>actividad:Yoga</p>
                        <p>creditos: 10</p>
                        <p>creditos/clase: 1</p>
                        <p>asistencia: 5</p>
                        <p>vencimiento: 10/10/2023</p>
                    </div>
                    <div className={style.activities}>
                        <p>actividad:Yoga</p>
                        <p>creditos: 10</p>
                        <p>creditos/clase: 1</p>
                        <p>asistencia: 5</p>
                        <p>vencimiento: 10/10/2023</p>
                    </div>
                    <div className={style.credits}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile