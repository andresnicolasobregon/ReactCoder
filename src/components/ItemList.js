import { useEffect } from "react"
import Item from "./Item"



function ItemList({items}){
    useEffect(() => {
        const promesa = new Promise((res, rej)=>{
            setTimeout(() =>{
                res(<Item />)
            }, 2000)
        })
        promesa.then((producto)=>{
            console.log(producto)
        })
    },[])
    return(
        <Item />
    )

} 

export default ItemList