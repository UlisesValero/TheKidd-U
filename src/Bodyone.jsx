import React from "react"
import"./main.css"


function Bodyone() {
    return (
        <React.Fragment>
        <section className="bodyOne">
        <nav id="buttonMenu">
        <button id="landingButton">Inicio</button>
        <button className="button">Menú</button>
        <button className="button">Promociones</button>
        <button className="button">Donde encontrarnos</button>
        <button className="button">Sobre nosotros</button>
        </nav>
        <span>
        <h1 className="h1">THE KIDD U</h1>
        <p className="p">Deluxe smash burgers</p>
        </span>
        </section>
        </React.Fragment>
    )
}

export default Bodyone