import ItemCount from "./ItemCount"

const List = () => {

    const producto = {
        nombre: "Tele", 
        stock: 10

    }

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p>{producto.stock}</p>
            <ItemCount stockProducto= {producto.stock}/>
        </div>


    )
}

export default List