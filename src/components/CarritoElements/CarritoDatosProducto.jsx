import { useContext, useState } from "react"
import { CarritoContext } from "../../context/carrito"
import Boton from "../elements/BotonTemplate";
import BotonesCarrito from "./BotonesCarrito";

function ProductoDatos({ item }) {
    const { alCarrito, carrito } = useContext(CarritoContext)
    const [inputCantidad, setInputCantidad] = useState(1)
    const [inputCantidadMaxima, setInputCantidadMaxima] = useState(item.stock);


    const handleCantidad = (operacion = false) => {
        const cantidad = parseInt(inputCantidad) || 1;
        alCarrito(item, cantidad, operacion);
        setInputCantidad(1);
    }



    const handleCantidadMaxima = (valor) => {
        setInputCantidad(valor)
        setInputCantidadMaxima(item.stock - item.cantidad);

    }

    return (
        <div className="grid grid-cols-12 items-center gap-2 w-full">
            <div className="flex gap-2 items-center col-start-1 col-end-4">
                <img className="w-24" src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
            </div>

            <p className='ml-6 col-start-4 col-end-5'>€ {item.price}</p>

            <div className="flex flex-col gap-2 justify-center items-center col-start-5 col-end-8">

                <p className="text-center text-xs text-slate-500 px-4 py-2 rounded-xl bg-sky-300 hover:bg-sky-600 hover:text-white">Stock: {inputCantidadMaxima}</p>

                <div className="flex gap-2">
                    <Boton Icono="mdi:cart-minus" texto="" laAccion={() => handleCantidad(true)} addClass="cursor-pointer bg-red-500 hover:bg-red-600" />

                    <input
                        onChange={(e) => handleCantidadMaxima(e.target.value)}
                        type="number"
                        min="1"
                        max={inputCantidadMaxima}
                        value={inputCantidad}
                        className="w-20 p-1 border rounded text-center"
                    />
                    <Boton Icono="mdi:cart-plus" texto="" laAccion={() => handleCantidad()} addClass="cursor-pointer bg-green-500 hover:bg-green-600" />
                </div>
            </div>

            <div className="flex gap-8 justify-center items-center col-start-8 col-end-10">
                <p>{item.cantidad}</p>
                <p className="font-bold">{(item.price * item.cantidad).toFixed(2)}</p>
            </div>
            <div className="flex gap-2 justify-center items-center col-start-10 col-end-13">
                <BotonesCarrito item={item} />
            </div>

        </div>
    )
}

export default ProductoDatos