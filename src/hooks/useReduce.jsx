import TYPES from "../types/types";
//import { CarritoContext } from '../context/carrito';
//import { useContext } from 'react';
//const { carrito, quitarCarrito, clearCarrito } = useContext(CarritoContext)

export const initialState = []
export const reduceCart = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            return {
                ...state,
                carrito: [...state.carrito, action.payload]
            }
        case TYPES.DELETE_ALL_FROM_CART:
            return initialState

        case TYPES.DELETE_PRODUCT_FROM_CART:
            return {
                ...state,
                carrito: state.carrito.filter(item => item.id !== action.payload)
            }
        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART:
            return {
                ...state,
                carrito: state.carrito.map(item => ({
                    ...item,
                    cantidad: item.cantidad + 1
                }))
            }
        default:
            return state
    }
    throw Error("Unknown action: " + action.type);
}

