import ItemCount  from "./ItemCount.js"

const Item = ({ item }) => {
    return (
        <article>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} width={100} ></img>
            <p>Precio : ${item.precio}</p>
            <ItemCount  stockProducto= {item.stock} />
        </article>
    )
}

export default Item