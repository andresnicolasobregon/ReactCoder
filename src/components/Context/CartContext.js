import React  from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartArray, setcartArray] = useState([]);
    const [cantTotalProducto, setcantTotalProducto] = useState(0);

    

    const addItem = (producto, stock, precioTotal) =>{
        
        if (isInCart (producto.id)){
            const indexActualizar = cartArray.findIndex(element => element.item.id === producto.id)
            cartArray[indexActualizar].stock = cartArray[indexActualizar].stock + stock
            cartArray[indexActualizar].precioTotal = cartArray[indexActualizar].stock * producto.precio
            
        }else{
            const newObj = {
                item: producto,
                stock,
                precioTotal: producto.precio * stock
            }
            setcartArray([...cartArray,newObj])
            
        }
        setcantTotalProducto(cantTotalProducto + stock)
    }
    
    const removeItem = (id, stock) =>{
        const arrayFiltrado = cartArray.filter(e => (e.item.id) !== id)
        setcantTotalProducto(cantTotalProducto - stock)
        setcartArray(arrayFiltrado)

    }
    const calculoTotal = () => {
        return (
            cartArray
            .map(item => item.precioTotal) 
            .reduce((a, b) => a + b)
          )
      }

    const clear = () =>{
        setcartArray([])
        setcantTotalProducto(0)
    }
    const isInCart = (id) =>{
        return cartArray.some(e => e.item.id === id)
        
    }

    const value = {
        cartArray,
        cantTotalProducto,
        calculoTotal,
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