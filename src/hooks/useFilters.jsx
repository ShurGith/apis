import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import PedirProductos from '../data/PedirProductos';

function useFilters() {
    const productos = PedirProductos()
    const { filters, setFilters } = useContext(FiltersContext)
    const aProductos2 = [...productos]

    const categorias = Array.from(
        new Set(productos.map(producto => producto.category))
    ).map((categoria, index) => ({
        id: index + 1,
        name: categoria.charAt(0).toUpperCase() + categoria.slice(1)
    }));

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    };


    function ProductoFiltraCategoria(e) {
        setFilters({ ...filters, category: e, aplicados: true });
    }



    const filtrados = filterProducts(aProductos2)

    return { categorias, filtrados, aProductos2, ProductoFiltraCategoria }

}

export default useFilters;