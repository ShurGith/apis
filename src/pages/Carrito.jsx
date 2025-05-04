import { useContext } from "react"
import { CarritoContext } from "../context/carrito"
import { Link } from "react-router-dom"
import CarritoProducto from "../components/CarritoElements/CarritoProducto"
import CarritoFooter from "../components/CarritoElements/CarritoFooter"


function Carrito() {
    const { carrito } = useContext(CarritoContext)

    if (carrito.length === 0) {
        return (
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-2xl text-gray-600">Tu carrito está vacío</h1>
                <Link to="/" className="text-blue-500">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap w-full ">
            <h1 className="rounded-t-2xl  text-white text-4xl text-gray-600 w-full bg-amber-500 p-4">Carrito</h1>
            {carrito && carrito.map((item) => (
                <CarritoProducto key={item.id} item={item} />
            ))}
            <CarritoFooter />
        </div>
    )
}

export default Carrito