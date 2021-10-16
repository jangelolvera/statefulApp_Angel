import React from "react";
import './App.css'

function Input(props){


    function handleChange(event){
        props.setNombre({
            ...props.nombre.name,
            [event.target.name] : event.target.value
        });
        localStorage.setItem("name", JSON.stringify(props.nombre.name));
    }
    const saved= localStorage.getItem("name");

    return(

        <div id="toaa">
            <input id="elinput" placeholder="Your name" onChange={handleChange} name="name"/>
            <p id="bottomtext">Hello {saved}!</p>
        </div>
        
    );
}

export default Input;