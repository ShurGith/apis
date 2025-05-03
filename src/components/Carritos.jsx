import { BsCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import { useContext } from 'react';
import { CarritoContext } from '../context/carrito';



function Carritos({ producto }) {

    const { alCarrito, quitarCarrito, yaExiste } = useContext(CarritoContext)

    return (
        <div>
            <p onClick={() => alCarrito(producto)}
                className={`${yaExiste(producto) ? 'hidden' : ''} flex gap-2 px-4 py-1 rounded-xl bg-blue-500 capitalize cursor-pointer text-white w-fit mx-auto text-sm hover:bg-blue-600"`}>
                <BsCartPlusFill className="size-5" />
                Al Carrito
            </p>

            <p onClick={() => quitarCarrito(producto.id)}
                className={`${yaExiste(producto) ? '' : 'hidden'} flex gap-2 px-4 py-1 rounded-xl bg-red-500 capitalize cursor-pointer text-white w-fit mx-auto text-sm hover:bg-red-600`}>
                <BsFillCartDashFill className="size-5" />
                Quitar
            </p>
        </div>
    )
}

export default Carritos