import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        // Cargar carrito desde localStorage al inicio
        const datosGuardados = localStorage.getItem('carrito');
        return datosGuardados ? JSON.parse(datosGuardados) : [];

    });

    const alCarrito = (producto, quantity = 1) => {
        setCarrito((prev) => {
            const yaExiste = prev.find((item) => item.id === producto.id);
            if (yaExiste) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + quantity }
                        : item
                );
            } else {
                return [...prev, { ...producto, cantidad: quantity }];
            }
        });
    }


    const yaExiste = (product) => {
        return carrito.find(item => item.id === product.id);
    };


    const clearCarrito = () => {
        setCarrito([]);
    }
    const navigate = useNavigate();
    const pagarCarrito = () => {
        if (carrito.length > 0) {
            navigate('/pagar');
            clearCarrito();
        } else {
            console.log('El carrito está vacío. No se puede realizar el pago.');
        }
    }
    const quitarCarrito = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CarritoContext.Provider value={{
            carrito, setCarrito, alCarrito, quitarCarrito,
            yaExiste, clearCarrito, pagarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )

}