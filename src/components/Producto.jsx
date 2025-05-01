import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Datos from '../data/Datos'

function Producto({ itemId }) {
    const [producto, setProducto] = useState([])
    const params = useParams()
    itemId = params.id
    const apiUrl = Datos().apiUrl + '/' + itemId

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setProducto(res))
    }, [])


    return (
        <div key={producto.id} className="border border-gray-400 p-4 rounded-2xl flex flex-col gap-2 items-center justify-center" >
            <img className="w-92" src={producto.thumbnail} alt={producto.title} />
            <h3 className="text-gray-600 text-xl">{producto.title}</h3>
            <p className="text-gray-500 text-sm">{producto.price}</p>
            <p className="text-gray-500 text-sm">{producto.description}</p>
        </div>
    )
}

export default Producto