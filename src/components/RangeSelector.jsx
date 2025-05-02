import { useId, useContext } from 'react'
import { FiltersContext } from '../context/filters'

function RangeSelector({ handlefuncion }) {
    const minPriceFilterId = useId()
    const filtros = useContext(FiltersContext)
    return (
        <div className="flex col-start-1 col-end-4 gap-2 items-center text-lg text-gray-600">
            <label htmlFor="filtroPrecio">Precio a partir de:</label>
            <input className="cursor-pointer"
                type='range'
                id={minPriceFilterId}
                min='0'
                max='10000'
                onChange={handlefuncion}
                value={filtros.minPrice}
            />
            <span className="text-lg text-gray-600">${filtros.minPrice}</span>
        </div>
    )
}

export default RangeSelector