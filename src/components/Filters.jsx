import CatSelector from "./CatSelector";
import RangeSelector from './RangeSelector';
import FilterRemover from './FilterRemover';
import { useContext } from "react";
import { FiltersContext } from "../context/filters";

function Filters() {
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


    return (
        <div className="grid grid-cols-12 w-full items-center mb-4">

            <RangeSelector handlefuncion={handleChangeMinPrice} />

            <CatSelector />

            {filters.aplicados && <FilterRemover />}
        </div>
    )
}

export default Filters