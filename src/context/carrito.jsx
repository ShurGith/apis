import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        // Cargar carrito desde localStorage al inicio
        const datosGuardados = localStorage.getItem('carrito');
        return datosGuardados ? JSON.parse(datosGuardados) : [];

    });

    const alCarrito = (producto) => {
        setCarrito((prev) => {
            const yaExiste = prev.find((item) => item.id === producto.id);
            if (yaExiste) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prev, { ...producto, cantidad: 1 }];
            }
        });
    }


    const yaExiste = (product) => {
        return carrito.find(item => item.id === product.id);
    };


    const clearCarrito = () => {
        setCarrito([]);
    }


    const quitarCarrito = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    }

    useEffect(() => {
        // Guardar el carrito en localStorage cada vez que cambia
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CarritoContext.Provider value={{
            carrito,
            setCarrito,
            alCarrito,
            quitarCarrito,
            yaExiste,
            clearCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )

}