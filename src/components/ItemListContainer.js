import ItemList from "./ItemList.js"
import {  useState, useEffect } from "react"

const productosIniciales= [
    {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: ""},
    {id: 2, stock: 7, nombre: "Celular", precio: 50000, img: ""},
    {id: 3, stock: 10, nombre: "Mesa", precio: 10000, img: ""}
]

const ItemListContainer = ({ greeting }) => {

    let [lista, setLista] = useState([])

    
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
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

    }, [])

    

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer