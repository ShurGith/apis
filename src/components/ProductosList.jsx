import { Link } from "react-router-dom"
import Filters from "./Filters";
import useFilters from "../hooks/useFilters";
import { FiltersContext } from "../context/filters";
import { useContext } from "react";
import Carritos from "./Carritos";


function ProductosList() {

    const { categorias, filtrados, aProductos2, ProductoFiltraCategoria } = useFilters()
    const { filtraCategoria } = useContext(FiltersContext)



    return (
        <>
            <Filters categorias={categorias} />

            <div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    {aProductos2 && filtrados.map((product) => (
                        <div key={product.id} className="border border-gray-400 p-4 rounded-2xl 
                        flex flex-col gap-2 justify-between" >
                            <Link to={`/productos/${product.id}`}>
                                <img className="w-full max-h-24" src={product.thumbnail} alt={product.title} />
                                <h3 className="text-gray-600 text-xl">{product.title}</h3>
                            </Link>
                            <p className="text-gray-500 text-sm">{product.price}</p>
                            <p onClick={() => filtraCategoria(product.category)}
                                className="px-4 py-1 rounded-xl bg-blue-400 capitalize cursor-pointer text-white w-fit mx-auto text-sm">
                                {product.category}
                            </p>
                            <Carritos producto={product} />

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductosList