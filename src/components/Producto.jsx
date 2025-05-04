import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Datos from '../data/Datos'
import { useContext } from "react"
import { CarritoContext } from "../context/carrito"

function Producto() {
    const [producto, setProducto] = useState([])
    const { alCarrito } = useContext(CarritoContext)
    let itImages = 0

    const apiUrl = Datos().apiUrl + '/' + useParams().id

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setProducto(res))
    }, [apiUrl])

    function handleClick(e) {
        document.querySelector('#principal').src = e.target.src
    }


    if (!producto) {
        return <div>Cargando...</div>
    }
    if (producto.images) {
        itImages = producto.images.length
    }

    return (
        <div key={producto.id}
            className="flex mx-auto items-center justify-center max-w-fit border rounded-2xl border-gray-400 p-8" >
            <div className="flex flex-col gap-2 items-center justify-center" >
                <div className="flex gap-2 items-center justify-center">
                    <img id="principal" className="w-92" src={producto.thumbnail} alt={producto.title} />
                    {itImages > 0 &&
                        <div
                            className="flex flex-col gap-2 items-start justify-center min-h-full " >
                            {producto.images.map((image) => (
                                <img onClick={handleClick} key={image} className="w-24 cursor-pointer" src={image} alt={producto.title} />
                            ))}
                        </div>}
                </div>
                <h3 className="text-gray-600 text-xl">{producto.title}</h3>
                <p className="text-gray-500 text-sm">{producto.price}</p>
                <p className="max-w-[50%] mx-auto text-gray-500 text-sm">{producto.description}</p>
                <button
                    onClick={() => alCarrito(producto)}
                    type="button"
                    className="cursor-pointer inline-flex items-center gap-x-2 rounded-md 
                    transition-all duration-300 ease-in-out
                    bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs
                     hover:bg-indigo-500 hover:shadow-sm hover:shadow-black"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Producto


