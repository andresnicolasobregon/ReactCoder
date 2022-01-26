import ItemList from "./ItemList.js"
import {  useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import Swal from 'sweetalert2'

const ItemListContainer = () => {

    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(true)
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
                    setLoading(false) 
                })
                .catch((error)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Se ha producido un error'
                      })
                })
        
        }else {
            const coleccionProductos = collection(db,"productos")
            const pedido = getDocs(coleccionProductos)
            pedido
                .then((resultado)=>{
                    setLista(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Se ha producido un error'
                      })
                })
        }
    },[id])

        return (
        <div>
            {loading ? <span className="Loader"></span>: <ItemList lista={lista} />}     
        </div>
    )
}

export default ItemListContainer