import ItemList from "./ItemList.js"
import {  useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const productosIniciales= [
    {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: "/img/television.jpg", categoria: "electro"},
    {id: 2, stock: 7, nombre: "Celular", precio: 50000, img: "/img/celular.jpg", categoria: "electro"},
    {id: 3, stock: 10, nombre: "Mesa", precio: 10000, img: "/img/mesa.jpg", categoria: "mueble"},
    {id: 4, stock: 8, nombre: "Silla", precio: 5000, img: "/img/silla.jpg", categoria: "mueble"}
]

const ItemListContainer = ({ titulo }) => {

    let [lista, setLista] = useState([])
    const {id} = useParams()
    console.log(id)

    
  
    useEffect(() => {
        if(id){
            console.log("Aca pediria los productos de la categoria " + id)
            const filterCategoria = productosIniciales.filter(e => e.categoria === id);
            console.log(filterCategoria)
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(filterCategoria)
                }, 2000)
            })
            promesa
                .then((lista) => {
                    console.log("Todo bien")
                    setLista(lista)
                })
                .catch(() => {
                    console.log("Todo mal")
                })
        }else{
            console.log("Aca pediria todos los productos")
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(productosIniciales)
                }, 200)
            })
            promesa
                .then((lista) => {
                    console.log("Todo bien")
                    setLista(lista)
                })
                .catch(() => {
                    console.log("Todo mal")
                })
        }

    }, [id])

        return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer