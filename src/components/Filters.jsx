import CatSelector from "./CatSelector";
import RangeSelector from './RangeSelector';
import FilterRemover from './FilterRemover';
import { useContext } from "react";
import { FiltersContext } from "../context/filters";

function Filters() {
    const { filters } = useContext(FiltersContext)


    return (
        <div className="grid grid-cols-12 w-full items-center mb-4 min-h-12">

            <RangeSelector />

            <CatSelector />

            {filters.aplicados && <FilterRemover />}
        </div>
    )
}

export default Filters