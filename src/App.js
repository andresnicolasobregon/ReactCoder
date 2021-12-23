import  React  from "react";
import "./estilo.css"

import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";


function App(){

    return (
        <>
            <Header />
            <ItemListContainer titulo = "Bienvenidos"/> 
        </>
    )     
}
export default App

