import { useParams } from 'react-router-dom';
import ProductosList from '../components/ProductosList';
import Producto from '../components/Producto';
import PedirProductos from '../data/PedirProductos';


function Productos() {
    //  const params = useParams()
    const id = useParams().id
    //const [mostrado, setMostrado] = useState()


    return (
        <>
            {id ? <Producto /> : <ProductosList productos={PedirProductos()} />}


        </>
    )
}

export default Productos