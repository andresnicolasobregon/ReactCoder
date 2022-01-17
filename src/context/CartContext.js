import React  from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartArray, setcartArray] = useState([]);

    const addItem = (prod, cant) =>{
        const newObj = {
            item: prod,
            cant
        }
        setcartArray([...cartArray,newObj])

    }
    const removeItem = (id) =>{
        const arrayFiltrado = cartArray.filter(e => (e.id) !== id)
        setcartArray(arrayFiltrado)
    }
    const clear = () =>{
        setcartArray([])
    }
    const isInCart = () =>{
        
    }



    const value = {
        cartArray,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider