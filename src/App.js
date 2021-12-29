import  React  from "react";
import "./estilo.css"

import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";


function App(){

    return (
        <>
            <Header />
            <ItemListContainer titulo = "Bienvenidos"/>
            <ItemDetailContainer />
            <Footer /> 
        </>
    )     
}
export default App

