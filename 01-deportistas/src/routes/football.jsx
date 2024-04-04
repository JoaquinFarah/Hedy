
// ++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++ useFetch y abort++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++




import React from "react";
import { useFetch } from "../useFetch.js";

export function Futbol() {
  const {data, loading, error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users")

    return (
      <div>
          <h1>Futbol</h1>
        <p>Juego entre dos equipos de once jugadores cada uno, cuyo objetivo es hacer entrar en la portería contraria un balón que no puede ser tocado con las manos ni con los brazos, salvo por el portero en su área de meta.
          <br></br>
          <br></br>
          La fecha de nacimiento oficial del fútbol, es la de 1848, aunque las reglas tomasen tiempo en ser adoptadas por el resto de Inglaterra. En 1863 un grupo de 11 escuelas y clubes de Londres adoptaron un reglamento en común, y para 1877 la Asociación de Fútbol había sido creada con 43 clubes ingleses registrados.
        </p>
          <div>
            <h2>Futbolistas famosos fallecidos:</h2>
            <button onClick={handleCancelRequest}>Cancelar peticion</button>
              <ul>
                {error && <li>{error}</li> }
                {loading && <li>Loading...</li>}
                {data?.map((user) => (<li key={user.id}>{user.name}, " {user.username} ".
                <br></br> 
                Fallecio en: {user.address.city}</li>))}                
              </ul>
          </div>

        <img src="https://cdn.forbes.pe/2022/10/futbolistas.jpg" />
        <p>Los maximos exponentes del futbol son Cristiano Ronaldo, Lionel Messi y Killian Mbape.
        <br></br>
        <br></br>
        </p>
      </div>
    )
  }
  
  export default Futbol;