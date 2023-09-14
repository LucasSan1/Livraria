import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Livro from "./pages/Livro/Livro";
import Header from "./componentes/header/Header";
import Erro from "./pages/Erro/Erro"

// Setando as rotas da pagina
const Rotas = () => {
    return (
        <BrowserRouter>
            {/* Indica que o header vai estar presente em todas as paginas */}
            <Header />
            {/* Define os caminhos(urls) das paginas */}
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="books/:key" element={ <Livro/> } />
                <Route path="/books/*"  element={ <Erro/> } />
                <Route path="*" element={ <Erro/> } />
                
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;