import { Link } from "react-router-dom"

function ProductosList({ productos }) {
    return (
        <>
            <div>Productos</div>
            <div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    {productos && productos.map((product) => (
                        <div key={product.id} className="border border-gray-400 p-4 rounded-2xl flex flex-col gap-2" >
                            <Link to={`/productos/${product.id}`}>
                                <img className="w-full max-h-24" src={product.thumbnail} alt={product.title} />
                                <h3 className="text-gray-600 text-xl">{product.title}</h3>
                                <p className="text-gray-500 text-sm">{product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductosList