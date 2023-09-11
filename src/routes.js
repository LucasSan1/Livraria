import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Livro from "./pages/Livro/Livro";
import Header from "./componentes/header/Header";

const Rotas = () => {
    return (
        <BrowserRouter>
        
            <Header />
            
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="books/key" element={ <Livro/> } />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;