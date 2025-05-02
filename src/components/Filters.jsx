import CatSelector from "./CatSelector";
import RangeSelector from './RangeSelector';
import FilterRemover from './FilterRemover';
import { useContext } from "react";
import { FiltersContext } from "../context/filters";

function Filters({ categorias }) {
    const { filters, setFilters } = useContext(FiltersContext)

    const chequeaAplicados = (num) => {
        if (filters.category === 'all' && num === '0') {
            setFilters(prevState => ({
                ...prevState,
                aplicados: false
            }))
        } else {
            setFilters(prevState => ({
                ...prevState,
                aplicados: true
            }))
        }
    }

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
        chequeaAplicados(event.target.value)
    }


    function quitarFiltros() {
        setFilters(prevState => ({
            ...prevState,
            category: "all",
            minPrice: 0,
            aplicados: false,
        }))
        document.querySelector('[id*="headlessui-combobox-input-"]').value = ''
    }

    return (
        <div className="grid grid-cols-12 w-full items-center mb-4">

            <RangeSelector handlefuncion={handleChangeMinPrice} />

            <CatSelector categories={categorias} />

            {filters.aplicados && <FilterRemover quitarFiltros={quitarFiltros} />}
        </div>
    )
}

export default Filters