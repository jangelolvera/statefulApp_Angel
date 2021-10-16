import React, {useState, useRef, useEffect} from "react";
import App from "./App";
import { render } from '@testing-library/react';

function Input(props){


    function handleChange(event){
        props.setNombre({
            ...props.nombre.name,
            [event.target.name] : event.target.value
        });
    }


    return(

        <div>
            <input id="elinput" placeholder="Ingresa tu nombre" onChange={handleChange} name="name"/>
            <p>Hola {props.nombre.name}</p>
        </div>
        
    );
}

export default Input;