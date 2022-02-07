import {Link} from "react-router-dom"
import Redes from "./Redes"

const Footer = () => {
    return (
        <footer>
        <div>
            <Link to ="/">
                <img src="../img/logo.png" alt="logo" width={100} ></img>
            </Link>
        </div>
        <div class="footer-link">
            <h3>LINK ÚTILES</h3>
            <Link className="nav-link active" aria-current="page" to ="/">Inicio</Link>
            <Link className="nav-link" to ="/categoria/mueble">Mueble</Link>
            <Link className="nav-link" to ="/categoria/electro">Electro</Link>
        </div>
        <div class="footer-logos">
            <div>
                <h3>Contacto</h3>
                <p>appcresi@gmail.com</p>
                <p> <a href="https://wa.me/5493513325737">+54 9 351 3325737</a></p>
            </div>
            <Redes></Redes>
        </div>
        <a href="https://wa.me/5493513325737"><img class="botonwhatsapp" src="../img/whatsapplogo.png" alt=""></img></a>
        </footer>
    )
}

export default Footer