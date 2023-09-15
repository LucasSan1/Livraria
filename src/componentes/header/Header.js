import React from "react";
import "./style.css";
import foto from "../../img/logo.png"


// Cria o header que vai ser mostrado na pagina
export default function Header(){
    return(
        <a href="/">
            <header className="header">
                <img src={foto} alt="logo"/>
                <h2>Sóraiva</h2>
            </header>
        </a>
    );
}