import React from 'react'
import './cardhome.css'

function Home() {
    return (
        <div className='flex justify-center items-start mt-6 h-screen'>
            <div class="card-container">
                <div class="card-tag">Nuevo</div>
                <div class="card-content">
                    <h2>Encabezado del card</h2>
                    <p>Este es un ejemplo de contenido del card.</p>
                </div>
            </div>
        </div>
    )
}

export default Home