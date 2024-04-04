
// +++++++++++++++++++++++++++++++++++++++
// ++++++usando fetchData con promises++++
// +++++++++++++++++++++++++++++++++++++++


import React, { Suspense }  from "react";
import { fetchData } from "../fetchData.js"

const apiData = fetchData("https://jsonplaceholder.typicode.com/post/1/comments");

export function Bici() {
  const data = apiData.read();
  return (
    <div>
        <h1>Ciclismo</h1>
        <p>El ciclismo es el deporte que se desarrolla sobre una bicicleta. De acuerdo a sus características, existen diferentes modalidades o especialidades de ciclismo. Se conoce como ciclismo de competición a la disciplina que consiste en tratar de recorrer una cierta distancia en el menor tiempo posible.
        <br></br>
        <br></br>
        Se dice que una de las primeras apariciones de la bicicleta se dio en 1817 en Alemania y era más conocida como “Caballo de diversión” o también “máquina de correr”. Sin embargo, la historia del ciclismo tiene lugar desde 1870 en Italia, donde se llevó a cabo una de las primeras competiciones oficiales.
        </p>
          <h2>
            Comentarios de algunos fanaticos sobre la ultima carrera:
          </h2>
          <ul>
            {data?.map((user) => (
              <li key={user.id}> {user.email} dijo: "{user.name}"</li>
            ) ) }
          </ul>
          <Suspense fallback={<div>Loading...</div>}></Suspense>

        <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Military_cyclists_in_pace_line.jpg/1200px-Military_cyclists_in_pace_line.jpg" />
        <p>Los maximos exponentes del ciclismo son Bernard Hinault, Miguel Induráin y Fausto Coppi.</p>
    </div>
  )
}

export default Bici;