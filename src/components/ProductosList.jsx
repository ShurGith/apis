import { Link } from "react-router-dom"
import Filters from "./Filters";
import useFilters from "../hooks/useFilters";

function ProductosList() {

    const { categorias, filtrados, aProductos2, ProductoFiltraCategoria } = useFilters()

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
                            <p onClick={ProductoFiltraCategoria}
                                className="border px-4 py-1 rounded-xl bg-blue-400 capitalize cursor-pointer text-white w-fit mx-auto text-sm">
                                {product.category}
                            </p>
                            <p className="text-gray-500 text-sm">Imágenes: {product.images.length}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductosList