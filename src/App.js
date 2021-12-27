import  React  from "react";
import "./estilo.css"

import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";


function App(){

    return (
        <>
            <Header />
            <ItemListContainer titulo = "Bienvenidos"/>
            <Footer /> 
        </>
    )     
}
export default App

