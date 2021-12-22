import { useState } from "react"

function ItemCount ({ titulo }) {
    const [contador, setContador] = useState(0)


    const aumentarContador = () => {

        setContador(contador + 1)
    }
    const restarContador = () => {
        if (contador==0) {
            alert("No hay productos cargados")
        } else {
            setContador(contador - 1)
        }
    }
    const resetearContador = () => {
        setContador(0)
    }

    return (
            <div>
                <button onClick={aumentarContador}>+</button>
                <p>{contador}</p>
                <button onClick={resetearContador}><span className="material-icons">delete</span></button>
                <button onClick={restarContador}>-</button>
            </div>
    )
}

export default ItemCount