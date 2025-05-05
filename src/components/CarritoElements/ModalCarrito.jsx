import { useContext } from "react"
import { CarritoContext } from "../../context/carrito"
import { Icon } from "@iconify/react/dist/iconify.js"


function ModalCarrito() {
    const { carrito, quitarCarrito } = useContext(CarritoContext)
    //console.log(carrito)
    return (
        <div className="hidden group-hover:flex absolute top-16 right-4 flex-col flex gap-2 bg-white min-w-fit py-4 px-2 rounded-xl z-12">
            {carrito && carrito.map((item) => (
                <div key={item.id} className="flex gap-2 items-center justify-start text-gray-400 w-full" >
                    <Icon icon="solar:cart-cross-broken"
                        onClick={() => quitarCarrito(item.id)}
                        width="24" height="24" className="cursor-pointer hover:text-red-500" />
                    <h4 className="text-sm">{item.cantidad}- {item.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default ModalCarrito