import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"


const productosIniciales= {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: "/img/television.jpg", detalle: "Smart TV LED 43 FHD (1920x1080). Frecuencia de barrido 50/60Hz. Wi-Fi. Sintonizador digital (TDA). HDMIx3. USBx2. 2 Salidas de audio de 8W. Sonido : MTS ( ESTEREO / MONO / SAP). Brillo: 200 CD/M2. Netflix. Youtube. Tornillos. Cable de alimentacion. Soporte base."}


const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })

        promesa
            .then((producto) => {
                console.log("Todo bien")
                setProducto(producto)
            })
            .catch(() => {
                console.log("Todo mal")
            })

    }, )


    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer