import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import style from './SingUp.module.scss'


const Register = ()=>{

        //Form Venta
    var formRegister = {
        firstName:'',
        lastName:'',
        date: new Date().toLocaleDateString(),
        email:'',
        password:'',
        repeatPassword:'',
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState(formRegister);

    return(
        <div className={style.conteiner}>
        <Navbar/>
            <div className={style.conteinerForm}>
                <h1 className={style.title}>Creat your account</h1>
                <div className={style.email}>
                    <p className={style.text}>Ingrese su Nombre</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        >
                        <TextField 
                        id="outlined-basic" 
                        label="nombre" 
                        variant="filled" 
                        type="text" 
                        name="firstName" 
                        value={form.firstName}
                        className={style.textFieldEmail}/>
                    </Box>
                </div>
                
                <div>
                    <p className={style.text}>Ingrese su Apellido</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        >
                        <TextField 
                        id="outlined-basic" 
                        label="apellido" 
                        variant="filled" 
                        type="text" 
                        name="lastName" 
                        value={form.lastName}
                        className={style.textField} />
                    </Box>
                </div>
                <div>
                    <p className={style.text}>Fecha de Nacimiento</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        >
                        <TextField 
                        id="outlined-basic" 
                        label="10-05-1998" 
                        variant="filled" 
                        type="email" 
                        name="email" 
                        value={form.email}
                        className={style.textField} />

                    </Box>
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
                        <TextField 
                        id="outlined-basic" 
                        label="example@email.com" 
                        variant="filled" 
                        type="email" 
                        name="email" 
                        value={form.email}
                        className={style.textField} />

                    </Box>
                </div>
                <div>
                    <p className={style.text}>Ingrese Contraseña</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        >
                        <TextField 
                        id="outlined-basic" 
                        label="contraseña" 
                        variant="filled" 
                        type="password"
                        name="password" 
                        value={form.password}
                        className={style.textField} />

                    </Box>
                </div>
                <div>
                    <p className={style.text}>Repetir Contraseña</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        >
                        <TextField
                        id="outlined-basic"
                        label="contraseña" 
                        variant="filled" 
                        type="password" 
                        name="repeatPassword" 
                        value={form.repeatPassword}
                        className={style.textField} />

                    </Box>
                </div>
                <div className={style.buttonLogin}>
                    <Button 
                    variant="contained" 
                    size="large" 
                    >Registrarse</Button>
                </div>
            </div>
        </div>
    )
}
export default Register