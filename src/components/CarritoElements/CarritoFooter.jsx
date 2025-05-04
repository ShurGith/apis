import { useContext } from "react"
import { CarritoContext } from "../../context/carrito"
import { Icon } from "@iconify/react";
import Boton from "../elements/BotonTemplate";

function CarritoFooter() {
    const { carrito, clearCarrito, pagarCarrito } = useContext(CarritoContext)
    return (
        <div className="flex gap-2 items-center justify-between border--2 border-gray-400 p-8 rounded-b-2xl text-2xl text-gray-600 w-full bg-amber-500">
            <div className="flex gap-2 items-center justify-between p-2 text-white">
                <p>Total:</p>
                <p>{carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0).toFixed(2)} €</p>
            </div>
            <div className="flex gap-2 items-center justify-between p-2 text-white">
                <p>Cantidad:</p>
                <p>{carrito.reduce((acc, item) => acc + item.cantidad, 0)}</p>
            </div>
            <div className="flex gap-2 items-center justify-between p-2">
                <Boton Icono="hugeicons:payment-02" texto="Pagar" laAccion={() => pagarCarrito()} addClass="cursor-pointer bg-green-600 hover:bg-green-500" />
                <Boton Icono="hugeicons:shopping-cart-remove-02" texto="Vaciar Carrito" laAccion={() => clearCarrito()} addClass="cursor-pointer bg-red-500 hover:bg-red-600" />
            </div>
        </div>
    )
}

export default CarritoFooter