import { useContext } from "react"
import Boton from "../elements/BotonTemplate";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../../context/carrito"

function BotonesCarrito({ item }) {
    const { quitarCarrito } = useContext(CarritoContext)
    const navigate = useNavigate();

    const alProducto = () => {
        navigate(`/productos/${item.id}`);
    };
    return (
        <div className="flex gap-2">

            <Boton Icono="healthicons:eye" texto="Ver" laAccion={() => alProducto()} addClass="cursor-pointer bg-blue-500 hover:bg-blue-600" />

            <Boton Icono="mdi:cart-remove" texto="Quitar" laAccion={() => quitarCarrito(item.id)} addClass="cursor-pointer bg-red-500 hover:bg-red-600" />
        </div>
    )
}

export default BotonesCarrito