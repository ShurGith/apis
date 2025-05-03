import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
        aplicados: false,
    })
    const [showCat, setShowCat] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null)

    const filtraCategoria = (valor) => {
        setShowCat(valor)
        valor = valor.toLowerCase()
        setFilters({ ...filters, category: valor, aplicados: true });
    }


    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters,
            showCat,
            setShowCat,
            selectedCategory,
            setSelectedCategory,
            filtraCategoria
        }}>
            {children}
        </FiltersContext.Provider>
    )
}