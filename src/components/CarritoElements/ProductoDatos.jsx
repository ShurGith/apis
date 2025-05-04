import { useContext } from "react"
import { CarritoContext } from "../../context/carrito"

import { Icon } from "@iconify/react";

function ProductoDatos({ item }) {
    const { alCarrito } = useContext(CarritoContext)

    return (
        <div className="grid grid-cols-8 items-center gap-2 w-full">
            <div className="flex gap-2 items-center col-start-1 col-end-4">
                <img className="w-24" src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
            </div>
            <p className='ml-6'>€ {item.price}</p>
            <div className="flex gap-2 justify-center items-center col-start-5 col-end-7">
                <input
                    className=" block w-20 rounded-md bg-white py-1.5 pr-10 pl-3 
                    text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                    focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    type="number"
                    id="quantity"
                    name="quantity"
                    value="1" />
                <button
                    onClick={() => alCarrito(item, quantity.value)}
                    className="flex items-center gap-2 px-4 py-1 rounded-xl bg-green-500 capitalize 
                    cursor-pointer text-white w-fit text-sm hover:bg-green-600">
                    <Icon icon="mdi:cart-plus" width="24" height="24" />
                </button>
            </div>
            <div className="flex gap-8 justify-center  items-center col-start-7 col-end-9">
                <p>{item.cantidad}</p>
                <p className="font-bold">{(item.price * item.cantidad).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductoDatos