import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { FiltersContext } from "../context/filters";
import { useContext } from "react";
function FilterRemover() {
    const { setFilters, setShowCat, setSelectedCategory } = useContext(FiltersContext)

    function quitarFiltros() {
        setFilters(prevState => ({
            ...prevState,
            category: "all",
            minPrice: 0,
            aplicados: false,
        }))
        setShowCat('')
        setSelectedCategory(null)

    }


    return (
        <button
            onClick={quitarFiltros}
            type="button"
            className="col-start-11 col-end-13 w-fit inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
            <CheckCircleIcon aria-hidden="true" className="-ml-0.5 size-5" />
            Quitar Filtros
        </button>
    )
}

export default FilterRemover