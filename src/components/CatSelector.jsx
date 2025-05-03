'use client'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckCircleIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import useFilters from '../hooks/useFilters'

function CatSelector() {

    const { selectedCategory, setSelectedCategory, filtraCategoria, showCat } = useContext(FiltersContext)
    const { categorias } = useFilters()

    return (
        <div className="flex items-center gap-10 text-lg col-start-5 col-end-10">
            <Combobox
                as="div"
                value={selectedCategory}
                onChange={(category) => {
                    filtraCategoria(category.name)
                    setSelectedCategory(category)
                }}
            >
                <div className='flex items-center gap-4 text-lg'>
                    <Label className="block font-medium text-gray-900">Categoría</Label>
                    <div className="relative">
                        <ComboboxInput
                            className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            displayValue={(category) => category?.name}
                        />
                        <ComboboxButton className="cursor-pointer absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
                            <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
                        </ComboboxButton>

                        {categorias.length > 0 && (
                            <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
                                {categorias.map((category) => (
                                    <ComboboxOption
                                        key={category.id}
                                        value={category}
                                        className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                                    >
                                        <span className="block truncate group-data-selected:font-semibold">{category.name}</span>

                                        <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex">
                                            <CheckCircleIcon className="size-5" aria-hidden="true" />
                                        </span>
                                    </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        )}
                    </div>
                </div>
            </Combobox>
            {showCat && <output className="w-fit inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs">{showCat}</output>}
        </div>
    )
}



export default CatSelector