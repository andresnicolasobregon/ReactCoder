import  React  from "react";
import {Link} from "react-router-dom"

import NavBar from "./NavBar.js"
import Redes from "./Redes.js";

function Header(){
    return (
        <header>
            <div class="box-barrasuperior">
            <a id="idtelefono" href="https://wa.me/5493513325737"><img src="../img/logowhatsapp.png" alt="Logo de whatsapp" height="15"></img> 0351-3325437</a>
            <Link to ="/">
                <img src="../img/logo.png" alt="logo" width={100} ></img>
            </Link>
            <Redes></Redes>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="../img/propaganda1.webp" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="../img/propaganda2.webp" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="../img/propaganda3.webp" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <NavBar />

        </header>
    )     
}
export default Header