import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../context/CartContext'
import {Link} from "react-router-dom"



const Cart = () => {

  const {cartArray, removeItem,calculoTotal } = useContext(CartContext)



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
          <p>Total: ${calculoTotal()}</p>
          <button className='buttonFinalizarCompra'>Finalizar Compra</button>
          </div> 
        </div>  
        
      ) : 
      
      <div>
        <p>No hay productos en el carrito</p> 
        <Link to="/">Ir a inicio</Link>
      </div>
        
        
      }

    </div>
  
    
  )
}

export default Cart