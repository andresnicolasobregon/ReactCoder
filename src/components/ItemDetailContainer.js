import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const productosIniciales= [
    {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: "/img/television.jpg", categoria: "electro", detalle: ""},
    {id: 2, stock: 7, nombre: "Celular", precio: 50000, img: "/img/celular.jpg", categoria: "electro", detalle: ""},
    {id: 3, stock: 10, nombre: "Mesa", precio: 10000, img: "/img/mesa.jpg", categoria: "mueble", detalle: ""},
    {id: 4, stock: 8, nombre: "Silla", precio: 5000, img: "/img/silla.jpg", categoria: "mueble", detalle: ""}
]

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        if(id){
            const ProductoSeleccionado = productosIniciales.filter(e => e.id === id)
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(ProductoSeleccionado )
                }, 1000)
            })
            promesa
                .then((producto) => {
                    console.log("Todo bien")
                    setProducto(producto)
                })
                .catch(() => {
                    console.log("Todo mal")
                })
        }
        

    }, [id])
    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer