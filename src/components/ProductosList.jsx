import { Link } from "react-router-dom"
import Filters from "./Filters";
import useFilters from "../hooks/useFilters";
import { FiltersContext } from "../context/filters";
import { useContext } from "react";
import ProductoCarritos from "./ProductoBotonesALCarrito";
import Boton from "./elements/BotonTemplate";


function ProductosList() {
    const { categorias, filtrados, aProductos2, ProductoFiltraCategoria } = useFilters()
    const { filtraCategoria } = useContext(FiltersContext)
 console.log('')
    return (
        <>
            <Filters categorias={categorias} />
            <div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
                    {aProductos2 && filtrados.map((product) => (
                        <div key={product.id} className="border border-gray-400 py-10 px-4 rounded-2xl
                        flex flex-col gap-2 justify-between relative" >
                            <div className="absolute -top-px -left-px px-2 py-2 !rounded-none !rounded-tl-2xl !rounded-br-lg p-4 bg-stone-300 border-r border-b border-gray-400">

                                <Boton Icono="" texto={product.category} laAccion={() => filtraCategoria(product.category)}
                                    addClass="cursor-pointer bg-blue-400 hover:bg-blue-600 capitalize
                                px-2 py-2 text-white !rounded-none !rounded-tl-2xl
                                !rounded-br-lg" />
                            </div>
                            <Link to={`/productos/${product.id}`}>
                                <img className="w-full max-h-24" src={product.thumbnail} alt={product.title} />
                                <h3 className="text-gray-600 text-xl">{product.title}</h3>
                            </Link>
                            <p className="text-gray-500 text-sm">{product.price}</p>

                            <p>{product.stock}</p>
                            <ProductoCarritos producto={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductosList