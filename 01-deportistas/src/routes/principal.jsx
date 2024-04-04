import React from "react";
import deportes from '../assets/img/deportes.jpg'



export function Ppal (){
    return(
        <div>
            <h1>Pagina Deportiva</h1>
            <p>Este es un espacio donde vamos a mostrar los principales deportes que se practican a nivel mundial, 
                algunos famosos por su gran popularidad y otros por su gran acaparamiento en las distintas regiones del mundo.
                
            </p>
            <img src={deportes} />
        </div>
    ) 
}

export default Ppal;