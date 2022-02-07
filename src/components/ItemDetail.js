import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

const ItemDetail  = ({item, onAdd, added}) => {
    return (
    <div className="box-detalleproducto">
        <div>
            <h1>Detalle de producto</h1>
            <img src={item.img} alt={item.nombre} width={400} ></img>
        </div>
        <div className="box-detalleproductohijo">
            <p>Nombre: { item.nombre}</p>
            <p className="precio">$ {item.precio}</p>
            <p>Detalle: {item.detalle}</p>
        </div>
        <div>
        {added ? <Link to='/cart'><button className="btnvermas">Ver carrito</button></Link> : <ItemCount stockProducto= {item.stock} onAdd={onAdd} /> }
        </div>
    </div>
    )
}

export default ItemDetail 