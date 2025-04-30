import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [datos, setDatos] = useState([])
  // const [ordenados, setOrdenados] = useState([])


  const apiUrl = "https://restcountries.com/v3.1/lang/spanish"
  async function losPaises() {
    try {
      const response = await fetch(apiUrl);
      const res = await response.json();
      if (response.ok) {
        console.log("Todo Bien");
        setDatos(res)
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    }


  }
  useEffect(() => {
    /*fetch(apiUrl)
      .then(response => response.json())
      .then(data => setDatos(data))*/
    losPaises()
  }, [])

  const paises = [...datos];

  const ordenar = paises.sort((a, b) => a.name.common > b.name.common ? 1 : -1);
  console.log(ordenar);


  return (
    <>
      <h1>PAISES</h1>
      <ul>
        {datos.map((pais) => (
          <li key={pais.name.common}>
            <h5><span>{pais.flag}</span>&nbsp; {pais.name.common}</h5>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
