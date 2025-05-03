import { useId, useContext } from 'react'
import { FiltersContext } from '../context/filters'

function RangeSelector({ handlefuncion }) {
    const minPriceFilterId = useId()
    const { filters } = useContext(FiltersContext)


    return (
        <div className="flex col-start-1 col-end-4 gap-2 items-center text-lg text-gray-600">
            <label htmlFor={minPriceFilterId} className="cursor-pointer">Precio a partir de:</label>
            <input className="cursor-pointer"
                type='range'
                id={minPriceFilterId}
                min='0'
                max='10000'
                onChange={handlefuncion}
                value={filters.minPrice}
            />
            <output className="text-lg text-gray-600">${filters.minPrice}</output>
        </div>
    )
}

export default RangeSelector