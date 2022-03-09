import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from './Context/CartContext'
import { db } from "./firebase"
import { collection, getDoc , doc } from "firebase/firestore"
import Swal from 'sweetalert2'


const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ({})
    const [loadingDetalle, setLoadingDetalle] = useState([false])
    const [added, setAdded] = useState(false);
    const { id } = useParams()
    const { addItem } = useContext(CartContext);

    useEffect(() => {

        const coleccionProductos = collection(db,"productos")
        const docRef = doc(coleccionProductos,id)
        const pedido = getDoc(docRef)


        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setProducto({...producto, id})
            setLoadingDetalle(false)

        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se ha producido un error'
              })
        })
    }, [id])

    const onAdd = (stock, precioTotal) => {
        addItem(producto, stock, precioTotal);
        setAdded(true); 
      }
      
    return (
        <div>
            {loadingDetalle ? <span className="Loader"></span> : <ItemDetail onAdd={onAdd} item={producto} added={added}/>}
        </div>
    )
}

export default ItemDetailContainer