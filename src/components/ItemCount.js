import { useState } from "react"

function ItemCount ({ stockProducto, onAdd  }) {
    console.log(stockProducto)
    const [contador, setContador] = useState(1)


    const aumentarContador = () => {
        if (stockProducto === contador) {
            alert("Ha alcanzado el stock disponible")
        }else{
            setContador(contador + 1)
        }

    }
    const restarContador = () => {
        if (contador=== 0) {
            alert("No hay productos cargados")
        } else {
            setContador(contador - 1)
        }
    }
    const resetearContador = () => {
        setContador(1)
    }

    return (
            <div className="box-contador">
                <button onClick={restarContador}>-</button>
                <p className="p-contador">{contador}</p>
                <button onClick={resetearContador}><span className="material-icons">delete</span></button>
                <button onClick={aumentarContador}>+</button>
                <button onClick={() => onAdd(contador)} className="material-icons">shopping_cart</button>
            </div>
    )
}

export default ItemCount