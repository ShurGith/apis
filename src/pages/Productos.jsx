import { useParams } from 'react-router-dom';
import ProductosList from '../components/ProductosList';
import Producto from '../components/Producto';
//import PedirProductos from '../data/PedirProductos';


function Productos() {
    const id = useParams().id
    return (
        <>
            {id ? <Producto /> : <ProductosList />}

        </>
    )
}

export default Productos