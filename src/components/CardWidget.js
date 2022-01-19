import  React  from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CardWidget(){

    const {cantTotalProducto} = useContext(CartContext)
    return (
        <div className="box-Contador">
            <span className="material-icons">shopping_cart</span>
            {cantTotalProducto > 0 && <p className="contador-carrito">{cantTotalProducto}</p>}
        </div>
    )     
}
export default CardWidget