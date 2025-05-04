import { useContext } from "react"
import { CarritoContext } from "../../context/carrito"
import { Icon } from "@iconify/react";

function CarritoFooter() {
    const { carrito, clearCarrito, pagarCarrito } = useContext(CarritoContext)
    return (
        <div className="flex gap-2 items-center justify-between border--2 border-gray-400 p-8 rounded-b-2xl text-2xl text-gray-600 w-full bg-amber-500">
            <div className="flex gap-2 items-center justify-between p-2">
                <p>Total:</p>
                <p>{carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0).toFixed(2)} €</p>
            </div>
            <div className="flex gap-2 items-center justify-between p-2">
                <p>Cantidad:</p>
                <p>{carrito.reduce((acc, item) => acc + item.cantidad, 0)}</p>
            </div>
            <div className="flex gap-2 items-center justify-between p-2">
                <button
                    onClick={() => pagarCarrito()}
                    className="flex items-center gap-2 px-4 py-1 rounded-xl bg-blue-500 cursor-pointer text-white w-fit mx-auto text-sm hover:bg-blue-600">
                    <Icon icon="hugeicons:payment-02" width="24" height="24" />
                    Pagar
                </button>
                <button
                    onClick={() => clearCarrito()}
                    className="flex items-center gap-2 px-4 py-1 rounded-xl bg-red-500 cursor-pointer text-white w-fit mx-auto text-sm hover:bg-red-600">
                    <Icon icon="hugeicons:shopping-cart-remove-02" width="24" height="24" />
                    Eliminar Carrito
                </button>
            </div>
        </div>
    )
}

export default CarritoFooter