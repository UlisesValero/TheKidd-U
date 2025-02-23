import React from "react";
import"./main.css"
import { HiMiniShoppingCart } from "react-icons/hi2";


function Header(){
    return (
<div id="headerContainer">
    <a href=""><img id="kidduLogo" src="/kiddu-logo.png" alt="Imagen del logotipo" /></a>
    <button id="shoppingCart" onClick={() => alert("Clickeado!")}>
    <HiMiniShoppingCart className="shoppingCart"/>
</button>

</div>
    )
}

export default Header