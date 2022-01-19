import  React  from "react";
import {Link} from "react-router-dom"

import CardWidget from "./CardWidget.js"

const NavBar = () =>{
    return (
            <nav className="navbar navbar-expand-lg navbar-light ">
                
                <div className="container-fluid ">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to ="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/mueble">Mueble</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/electro">Electro</Link>
                        </li>
                    </ul>
                    </div>
                    <CardWidget />
                </div>
                
            </nav>
        )
        
    
}

export default NavBar