import ItemCount from "./ItemCount";

const producto= [
    {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: ""},
    {id: 2, stock: 7, nombre: "Celular", precio: 50000, img: ""},
    {id: 3, stock: 10, nombre: "Mesa", precio: 10000, img: ""}
]

const Item = () => {

    return (
            producto.map((elemento, indice)=>{
                return(
                    <div key={indice}> 
                         <p>{elemento.nombre}</p>
                         <p>{elemento.precio}</p>
                         <p>{elemento.stock}</p>
                         <ItemCount stockProducto=  {elemento.stock}  initial = {1} />
                    </div>
                )
            }

            )


    )
}

export default Item