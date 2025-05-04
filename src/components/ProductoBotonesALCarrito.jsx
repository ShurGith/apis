
import { Icon } from "@iconify/react";
import { useContext } from 'react';
import { CarritoContext } from '../context/carrito';
import Boton from "./elements/BotonTemplate";

function ProductoCarritos({ producto }) {

    const { alCarrito, quitarCarrito, yaExiste } = useContext(CarritoContext)
    const yaExisteProducto = yaExiste(producto);
    const enStock = producto.stock > 0
    const mostrarBoton = !yaExisteProducto && enStock;
    return (
        <div>
            {mostrarBoton &&
                <Boton Icono="f7:cart-fill-badge-plus" texto="Al Carrito" laAccion={() => alCarrito(producto)} addClass="cursor-pointer bg-blue-500 hover:bg-blue-600" />
            }

            {!enStock &&
                <Boton Icono="solar:bag-cross-bold" texto="Sin Stock" laAccion={() => quitarCarrito(producto.id)} addClass="cursor-not-allowed bg-red-500 hover:bg-red-600" />
            }
            {yaExiste(producto) &&
                <Boton Icono="mdi:cart-remove" texto="Quitar" laAccion={() => quitarCarrito(producto.id)} addClass="cursor-pointer bg-red-500 hover:bg-red-600" />
            }
        </div>
    )
}

export default ProductoCarritos