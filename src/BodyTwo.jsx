import React from "react"
import"./main.css"

function BodyTwo(){
    const menu = [
        {
         burgerName:"Melvin",
         description:"carne (180grs), queso, panceta ahumada y cebolla crispy",
         price:"$12.000",
         img: "./melvinBurger.png"
        },
        {
            burgerName:"Oklahoma",
            description:"Carne (180grs), queso dambo, lechuga, cebolla morada, tomate y salsa especial Kiddu",
            price:"$14.500",
            img: "./oklahomaBurger.png"    
        },
        {
            burgerName:"Kiddu",
            description:"Carne (180grs), queso provolone, bacon bites y aro de cebolla",
            price:"$15.000",
            img: "./kidduBurger.png"
        }
]

    return(
        <section className="bodyTwo">
            <div className="menuContainer">
                {menu.map((item, index) => (
                <div key={index} className={`menuItem menuItem-${index}`}>
                    <div className="menuText">
                <h1>{item.burgerName}</h1>
                <h3>{item.description}</h3>
                <p>{item.price}</p>
                </div>
                <img src={item.img} className="menuImg" alt="Imagenes de las hamburguesas del menú" />
                </div>
                ))}
            </div>
        </section>
    )
};

export default BodyTwo