import  React  from "react";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import {Link} from "react-router-dom"

function CardWidget(){

    const {cantTotalProducto} = useContext(CartContext)
    return (
        <div className="box-Contador">
            <Link to ='/cart'>
            <span className="material-icons">shopping_cart</span>
            {cantTotalProducto > 0 && <p className="contador-carrito">{cantTotalProducto}</p>}
            </Link>
        </div>
    )     
}
export default CardWidget