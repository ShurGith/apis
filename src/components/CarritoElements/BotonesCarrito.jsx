import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/carrito"
import { useContext } from "react"
import { Icon } from "@iconify/react";

function BotonesCarrito({ item }) {
    const { quitarCarrito } = useContext(CarritoContext)

    return (
        <div className="flex gap-2">
            <Link to={`/productos/${item.id}`}
                className="flex items-center gap-2 px-4 py-1 rounded-xl bg-blue-500 capitalize cursor-pointer text-white w-fit mx-auto text-sm hover:bg-blue-600">
                <Icon icon="healthicons:eye" width="24" height="24" />
                Ver
            </Link>
            <button onClick={() => quitarCarrito(item.id)}
                className="flex items-cente gap-2 px-4 py-1 rounded-xl bg-red-500 capitalize cursor-pointer text-white w-fit mx-auto text-sm hover:bg-red-600">
                <Icon icon="mdi:cart-remove" width="24" height="24" />
                Quitar
            </button>
        </div>
    )
}

export default BotonesCarrito