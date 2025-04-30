import { NavLink } from 'react-router-dom'
import Enlaces from './Enlaces'

function Navbar() {
    return (

        <nav className='py-6 bg-slate-400'>
            <ul className='flex justify-center gap-4'>
                {Enlaces.map((enlace) => (
                    <NavLink to={enlace.url} key={enlace.id}>
                        <li className='py-2 px-6 bg-amber-500 rounded-md min-w-[100px] text-white'>
                            {enlace.nombre}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar