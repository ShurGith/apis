import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Countries from './Countries'


const queryClient = new QueryClient();

function App() {
    const [datos, setDatos] = useState([])
    // const [ordenados, setOrdenados] = useState([])
    //const apiUrl = "https://restcountries.com/v3.1/independent?status=false"

    const apiUrl = "https://restcountries.com/v3.1/region/europe"
    async function losPaises() {
        try {
            const response = await fetch(apiUrl);
            const res = await response.json();
            if (response.ok) {
                //console.log("Todo Bien");
                setDatos(res)
            } else {
                console.log('Respuesta de red OK pero respuesta de HTTP no OK');
            }
        } catch (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    }
    useEffect(() => {
        losPaises()
    }, [])

    const paises = [...datos];
    const ordenar = paises.sort((a, b) => a.name.common > b.name.common ? 1 : -1); 1

    return (
        <>
            <h1 className='text-3xl  text-gray-500'>🌎 Lista de Países</h1>
            <QueryClientProvider client={queryClient}>
                <Countries />
            </QueryClientProvider>
            <h1 className='text-3xl m-10  text-gray-500'>PAISES</h1>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {ordenar.slice(5).map((pais) => (
                    <li className="border border-gray-400 p-4 rounded-2xl flex flex-col items-center justify-centergap-2" key={pais.name.common}>
                        {pais.flag} <h5>{pais.name.common}</h5>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
