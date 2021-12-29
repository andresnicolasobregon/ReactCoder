

import ItemCount from "./ItemCount"

const ItemDetail  = ({item}) => {
    return (
    <article>
        <h1>Detalle de producto</h1>
        <img src={item.img} alt={item.nombre} width={100} ></img>
        <p>Nombre: { item.nombre}</p>
        <p>Precio: ${item.precio}</p>
        <p>Detalle: ${item.detalle}</p>
        <ItemCount stockProducto= {item.stock}  />
    </article>
    )
}

export default ItemDetail 