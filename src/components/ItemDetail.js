import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

const ItemDetail  = ({item, onAdd, added}) => {
    return (
    <article>
        <h1>Detalle de producto</h1>
        <img src={item.img} alt={item.nombre} width={100} ></img>
        <p>Nombre: { item.nombre}</p>
        <p>Precio: ${item.precio}</p>
        <p>Detalle: {item.detalle}</p>
        {added ? <Link to='/cart'>Ver carrito</Link> : <ItemCount stockProducto= {item.stock} onAdd={onAdd} /> }

    </article>
    )
}

export default ItemDetail 