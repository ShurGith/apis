import './App.css'
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Paises from './pages/Paises'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="w-full my-10 mx-auto max-w-[1640px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </div>
  )
}

export default App