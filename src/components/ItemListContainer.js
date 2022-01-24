import ItemList from "./ItemList.js"
import {  useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

//const productosIniciales= [
//    {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: "/img/television.jpg", categoria: "electro"},
//    {id: 2, stock: 7, nombre: "Celular", precio: 50000, img: "/img/celular.jpg", categoria: "electro"},
//    {id: 3, stock: 10, nombre: "Mesa", precio: 10000, img: "/img/mesa.jpg", categoria: "mueble"},
//    {id: 4, stock: 8, nombre: "Silla", precio: 5000, img: "/img/silla.jpg", categoria: "mueble"}
//]

const ItemListContainer = ({ titulo }) => {

    const [lista, setLista] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        if(id){
            const coleccionProductos = collection(db,"productos")
            const filtro = where("categoria","==",id)
            const consulta = query(coleccionProductos,filtro)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setLista(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                })
                .catch((error)=>{
                    console.log(error)
                })
        
        }else {
            const coleccionProductos = collection(db,"productos")
            const pedido = getDocs(coleccionProductos)
            pedido
                .then((resultado)=>{
                    setLista(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    },[id])

        return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer