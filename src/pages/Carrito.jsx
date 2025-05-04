import { useContext } from "react"
import { CarritoContext } from "../context/carrito"
import { Link } from "react-router-dom"


function Carrito() {
    const { carrito, quitarCarrito, clearCarrito } = useContext(CarritoContext)
    let totaless = 0
    //console.log(carrito)
    const totalesse = carrito.map((item) => {
        console.log(item.price);
        console.log(item.cantidad);
        totaless = totaless + item.price * item.cantidad
    })
    console.log(totaless);



    if (carrito.length === 0) {
        return (
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-2xl text-gray-600">Tu carrito está vacío</h1>
                <Link to="/" className="text-blue-500">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap w-full border rounded-2xl border-gray-400 p-8">
            {carrito && carrito.map((item) => (
                <div key={item.id}
                    className="flex gap-2 items-center justify-between border-b-1 border-gray-400 p-2" >
                    <div className="flex gap-2 items-center">
                        <img className="w-24" src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.cantidad}</p>
                        <p>{item.price}</p>
                        <p className="font-bold">{(item.price * item.cantidad).toFixed(2)}</p>
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/productos/${item.id}`}
                            className="px-4 py-1 rounded-xl bg-blue-500 capitalize cursor-pointer text-white w-fit mx-auto text-sm hover:bg-blue-600"
                        >Ver
                        </Link>
                        <button onClick={() => quitarCarrito(item.id)}
                            className="px-4 py-1 rounded-xl bg-red-500 capitalize cursor-pointer text-white w-fit mx-auto text-sm hover:bg-red-600"
                        >Quitar</button>
                    </div>
                </div>
            ))}
            <div className="flex gap-2 items-center justify-between border-t-2 border-gray-400 p-8">
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
                        className="px-4 py-1 rounded-xl bg-blue-500 cursor-pointer text-white w-fit mx-auto text-sm hover:bg-blue-600">
                        Pagar
                    </button>
                    <button
                        onClick={() => clearCarrito()}
                        className="px-4 py-1 rounded-xl bg-red-500 cursor-pointer text-white w-fit mx-auto text-sm hover:bg-red-600">
                        Eliminar Carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carrito