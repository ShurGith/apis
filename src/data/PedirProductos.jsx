import { useEffect, useState } from 'react'
import Datos from './Datos'
function PedirProductos() {
    const apiUrl = Datos().apiUrl
    const [productos, setProductos] = useState([])

    async function getProductos() {
        try {
            const response = await fetch(apiUrl);
            const res = await response.json();
            if (response.ok) {
                setProductos(res.products)
            } else {
                console.log('Respuesta de red OK pero respuesta de HTTP no OK');
            }
        } catch (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    }
    useEffect(() => {
        getProductos()
    }, [])
    // return { datos, productos }
    return productos

}
export default PedirProductos
