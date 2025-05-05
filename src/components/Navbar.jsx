import { NavLink } from 'react-router-dom'
import Enlaces from './Enlaces'
import { Icon } from "@iconify/react";
import { useContext } from 'react';
import { CarritoContext } from '../context/carrito';
import ModalCarrito from './CarritoElements/ModalCarrito';
function Navbar() {
    const { carrito } = useContext(CarritoContext)
    const countCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <nav className='py-6 bg-slate-400 flex justify-around items-center'>
            <h1 className='text-2xl font-bold'>Ecommerce</h1>
            <ul className='flex justify-center gap-4'>
                {Enlaces.map((enlace) => (
                    <NavLink to={enlace.url} key={enlace.id}>
                        <li className='py-2 px-6 bg-amber-500 rounded-md min-w-[100px] text-white'>
                            {enlace.nombre}
                        </li>
                    </NavLink>
                ))}
            </ul>
            <div className='relative group'>
                {countCarrito > 0 && <NavLink to={'/carrito'} className='relative'>
                    <Icon icon="solar:cart-large-broken" width="40" height="40" color="white" />
                    <output className='absolute -top-2 -right-2 bg-black text-white w-6 h-6 rounded-full flex justify-center items-center'>
                        {countCarrito}
                    </output>
                </NavLink>}
                <ModalCarrito />

            </div>

        </nav>
    )
}
export default Navbar

