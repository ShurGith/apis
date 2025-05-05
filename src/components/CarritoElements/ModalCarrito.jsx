import { useContext, useState } from "react"
import { CarritoContext } from "../../context/carrito"
import { Icon } from "@iconify/react/dist/iconify.js"


function ModalCarrito() {
    const { carrito } = useContext(CarritoContext)
    //console.log(carrito)
    return (
        <div className="absolute top-16 right-4 flex-col flex gap-2 bg-white min-w-fit py-4 px-2 rounded-xl z-12">
            {carrito && carrito.map((item) => (
                <div key={item.id} className="flex gap-2 items-center justify-start border-1 border-gray-400 w-full" >
                    <Icon icon="solar:cart-cross-broken" width="24" height="24" />
                    <p>{item.cantidad}- {item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default ModalCarrito