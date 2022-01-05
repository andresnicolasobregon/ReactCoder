import {  useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const productosIniciales= [
    {id: 1, stock: 5, nombre: "Televisión", precio: 20000, img: "/img/television.jpg", categoria: "electro", detalle: "Smart TV LED 43 FHD (1920x1080). Frecuencia de barrido 50/60Hz. Wi-Fi. Sintonizador digital (TDA). HDMIx3. USBx2. 2 Salidas de audio de 8W. Sonido : MTS ( ESTEREO / MONO / SAP). Brillo: 200 CD/M2. Netflix. Youtube. Tornillos. Cable de alimentacion. Soporte base."},
    {id: 2, stock: 7, nombre: "Celular", precio: 50000, img: "/img/celular.jpg", categoria: "electro", detalle: "Celular 4G LTE. Procesador Oscta Core. Pantalla 6.7 FHD + Super Amoled. Cuadruple camara trasera 64MP + 12Mp + 8MP + 5MP. Camara frontal 32MP. Memoria RAM 6Gb. Almacenamiento 128Gb. Slot para tarjeta Micro SD h/1Tb. Sonido potente con Dolby Atmos ( 2 parlantes integrados ). Desbloqueo con huella dactilar en pantalla. SO Android 11.0. Wi Fi. Bluetooth V5.0. USB 2.0. NFC. Radio. Bateria 5000MAH. Resistente hasta 1mt de profundidad en agua dulce durante 30 minutos."},
    {id: 3, stock: 10, nombre: "Mesa", precio: 10000, img: "/img/mesa.jpg", categoria: "mueble", detalle: "Mesa Nordica Escandinava 60x100 Comedor Cocina Maciza"},
    {id: 4, stock: 8, nombre: "Silla", precio: 5000, img: "/img/silla.jpg", categoria: "mueble", detalle: "Silla Estilo Campo. Modelo Cruz Eco. Alto rendimiento, alta prestación, una silla altamente resistente, ideal para uso domestico o intensivo, Bares, Restaurantes."}
]

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState ({})
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        if(id){
            const ProductoSeleccionado = productosIniciales.find(e => e.id === parseInt(id))
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    res(ProductoSeleccionado )
                }, 1000)
            })
            promesa
                .then((producto) => {
                    console.log("Todo bien")
                    setProducto(producto)
                })
                .catch(() => {
                    console.log("Todo mal")
                })
        }
        

    }, [id])
    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer