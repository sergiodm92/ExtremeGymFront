import React from "react";
import styleBR from './Button_Networks.module.scss';

const ButtonNetworks = ({ img, onClick}) => {
    return (
        <div className={styleBR.cont} onClick={onClick}>
            <img src={img} alt="img" className={styleBR.imagen}/>
        </div>
    );
};

export default ButtonNetworks;