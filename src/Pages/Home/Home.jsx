import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import style from './Home.module.scss'

const Home = ()=>{

    const navigate = useNavigate()

    return(
        <div className={style.conteiner}>
            <div className={style.navbar}>
                <Navbar/>
            </div>
            <div className={style.conteiner2}>
                <div className={style.conteinerTitle}>
                </div>
                <div className={style.login}>
                    <div className={style.textLogin}>
                        <h1>Ingresar</h1>
                    </div>
                    
                    <div>
                        <p className={style.text}>Ingrese su e-mail</p>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="on"
                            >
                            <TextField id="outlined-basic" label="ejemplo@email.com" variant="filled" className={style.textField}/>
                        </Box>
                    </div>
                    
                    <div>
                        <p className={style.text}>Ingrese su contraseña</p>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="on"
                            >
                            <TextField id="outlined-basic" label="contraseña" variant="filled" type="password" className={style.textField} />

                        </Box>
                    </div>
                    <div className={style.buttonLogin}>
                        <Button variant="contained" size="large" style={{backgroundColor:"#BEA062"}}>Entrar</Button>
                    </div>
                    <div className={style.singUp}>
                        <a onClick={()=>navigate('/RecuperarContraseña')}><p className={style.singUpClick}>Recuperar Contraseña</p></a>
                    </div>
                    <div className={style.singUp}>
                        <a onClick={()=>navigate('/Registrarse')}><p className={style.singUpClick}>Registrate</p></a>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default Home
