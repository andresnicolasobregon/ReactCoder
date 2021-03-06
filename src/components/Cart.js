import React from 'react'
import { useContext } from "react"
import { CartContext } from './Context/CartContext'
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import {db} from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";




const Cart = () => {

  const {cartArray, removeItem, borrarTodo, calculoTotal } = useContext(CartContext)
  const crearOrden = () => {

    const coleccionProductos = collection(db,"ordenes")
    const usuario = {
        nombre: "Andres",
        email: "mail@gmail.com",
        telefono: "0113325737"
    }

    const orden = {
        usuario,
        cartArray,
        total: calculoTotal(),
        fechaPedido: Timestamp.fromDate(new Date())
    }

    const pedido = addDoc(coleccionProductos,orden)

    pedido
    .then((resultado)=>{
        return Swal.fire (
            'N° de Orden ' + (resultado.id),
            `
            El monto a pagar es $${orden.total}.
            ¡Gracias por la compra, volvé pronto!
            `,
            'success',
            borrarTodo()
        )
    })
    .catch((error)=>{
        return Swal.fire(error)
    })
}


  return (
    <div>
      {cartArray.length > 0 ? (
        <div>
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio por Unidad</th>
              <th scope="col">Precio por Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          {cartArray.map(prod => <tbody key={prod.item.id}>
                                  <tr>
                                    <td>{prod.item.nombre}</td>
                                    <td>{prod.stock}</td>
                                    <td>${prod.item.precio}</td>
                                    <td>${prod.precioTotal}</td>
                                    <td><button className="material-icons" onClick={() => removeItem(prod.item.id, prod.stock )}><span className="material-icons">delete</span></button></td>
                                  </tr>
                                  </tbody>)}
        
          </table>
          <div className='box-buttonFinalizarCompra'>
          <p className='preciofinal'>Total: ${calculoTotal()}</p>
          <div>
            <button className='buttonFinalizarCompra'aria-label="Show SweetAlert2 success message" onClick={crearOrden}>Finalizar Compra</button>
          </div>
          <br></br>
          <div>
            <button className='buttonvaciarcarrito' onClick={() => borrarTodo()}>Vaciar carrito</button>
          </div>
          </div> 
        </div>  
        
      ) : 
      
      <div className='box-carrito'>
        <h3>Carrito</h3>
        <hr></hr>
        <p>No hay productos en el carrito</p> 
        <Link to="/">
          <button className='buttoncarritovacio'>Ir a inicio</button>
        </Link>
      </div>
        
        
      }

    </div>
  
    
  )
}

export default Cart