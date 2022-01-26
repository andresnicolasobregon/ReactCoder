import {Link} from "react-router-dom"

const Item = ({ item }) => {
    return (
        <article>
            <div className="box-imagenproducto">
                <h3>{item.nombre}</h3>
                <img src={item.img} alt={item.nombre} width={100} ></img>
            </div>
            <p className="precio">$ {item.precio}</p>
            <p className="enviogratis">Envio Gratis</p>
            <Link to ={"/item/"+item.id}>
                <button className="btnvermas">Ver Más</button>
            </Link>
        </article>
    )
}

export default Item