import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/lang/spanish");
    return res.data;
};

function Countries() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["spain"],
        queryFn: fetchCountries,
    });

    if (isLoading) return <p>⏳ Cargando países...</p>;
    if (error) return <p>❌ Error al cargar datos: {error.message}</p>;

    const paises = [...data];

    const ordenar = paises.sort((a, b) => a.name.common > b.name.common ? 1 : -1);



    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {ordenar.map((country) => (
                <div key={country.cca3} className="border border-gray-400 p-4 rounded-2xl flex flex-col gap-2" >
                    <img className="w-full max-h-24" src={country.flags.png} alt={country.name.common} />
                    <h3 className="text-gray-600 text-xl">{country.name.common}</h3>
                    <p>🌍 region: {country.region}</p>
                </div>
            ))}
        </div>
    );
}

export default Countries;