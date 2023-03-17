import { Button } from "@mui/material";
import React from "react";
import swal from "sweetalert";
import emailjs from 'emailjs-com';
import Navbar from "../../Components/Navbar/Navbar";
import style from './Contact.module.scss';
import ButtonNetworks from "../../Components/Buttons/Button_Networks/Button_Networks";

const Contact = ()=>{

    function sendEmail(e){
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_1zzrsap','template_sd7i4ud',e.target,'3a9e4Pbixa8e2m3R_').then(res=>{
          
            swal({
                title: "Mensaje enviado",
                text: "Su mensaje se envió correctamente",
                icon: "success",
                button: "ok",
            })
        })
      }

    return(
        <div className={style.conteiner}>
            <Navbar/>
            <div>
                <div className={style.title}>
                    <h1 className={style.bigOne}>Contáctate con nosotros</h1>
                    <p className={style.coment}>Envia tu comentario, duda o sugerencia, te contestaremos a la brevedad...</p>
                </div>
                <div className={style.contact}>
                    <div className={style.boxEmail}>
                        <form onSubmit={sendEmail} >
                            <div className={style.formEmail}>
                                <div>
                                    <div className={style.formEmail}>
                                        <div>
                                            <input className={style.finp} type="text" name="name" placeholder="Su nombre" required/>
                                        </div>
                                        <div>
                                            <input className={style.finp} type="email" name="email" placeholder="Su e-mail"  required/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <textarea className={style.fText} placeholder="Mensaje" name="message" required></textarea>
                                </div>
                                <div className={style.button}>
                                    <Button variant="contained" size="large" style={{backgroundColor:"#BEA062"}} type="submit">Enviar</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={style.info}>
                        <div className={style.bigOne}><h2>Información de contacto</h2></div>
                        <div><p className={style.coment}>📱 +54 9 387 683-3158</p></div>
                        <div className={style.links}>
                            <a href="https://wa.me/+5493876833158" >
                                <ButtonNetworks
                                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"}
                                />
                            </a>
                            <a href="https://www.instagram.com/extremegym.salta/" >
                                <ButtonNetworks
                                    img={"https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/033fd-logo-instagram-icon.png?fit=512%2C512&ssl=1"}
                                />
                            </a>
                            <a href="https://www.facebook.com/extremegym08" >
                                <ButtonNetworks
                                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact