import { useState } from "react"
import Swal from 'sweetalert2'

function ItemCount ({ stockProducto, onAdd  }) {
    const [contador, setContador] = useState(1)

    const aumentarContador = () => {
        if (stockProducto === contador) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha alcanzado el stock disponible'
              })
        }else{
            setContador(contador + 1)
        }

    }
    const restarContador = () => {
        if (contador=== 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay productos cargados'
              })
        } else {
            setContador(contador - 1)
        }
    }
    const resetearContador = () => {
        setContador(1)
    }

    return (
            <div className="box-contador">
                <p>Seleccionar la cantidad</p>
                <div className="box-contadorcontador">
                    <button onClick={restarContador}>-</button>
                    <p className="p-contador">{contador}</p>
                    <button onClick={aumentarContador}>+</button>
                </div>
                <div>
                    <button className="buttoncarritovacio" onClick={resetearContador}>Borrar</button>
                </div>
                <div>
                    <button onClick={() => onAdd(contador)} className="btnvermas">Cargar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount