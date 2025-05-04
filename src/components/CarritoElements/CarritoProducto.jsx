import BotonesCarrito from "./BotonesCarrito"
import ProductoDatos from "./CarritoDatosProducto"


function CarritoProducto({ item }) {
    return (
        <div className="flex gap-2 items-center justify-between border-1 border-gray-400 border-b-0" >
            <ProductoDatos item={item} />
        </div>
    )
}

export default CarritoProducto