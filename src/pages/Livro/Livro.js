import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import api from "../../services/api";
// import Erro from "../Erro/Erro"
import "./style.css";

export default function Livro(){
    const { key } = useParams();

    const [livro, setLivros] = useState([]);

    // A requisição da api esta sendo feita antes de renderizar a pagina
    useEffect(() => {
        async function carregarLivro(){
            // Recebe a resposta da api puxando pelo restante da url recebendo key como id
            // const resposta = await api.get(`/books/${key}.json`)
            const resposta = await api.get(`/books/${key}.json`)
            setLivros(resposta.data)
        };

        carregarLivro()
    }, [key]);

    // Cria a parte visual da pagina e puxa as informações do arquivo json para serem exibidas  
    return(
        <div className="container">
            <img src={`https://covers.openlibrary.org/b/id/${livro.covers}-L.jpg`} alt={`img`} />
            <div className='conteudo'>
                <h1>{livro.title}</h1>
                <p><strong>Autor(a): </strong>{livro.by_statement}</p>
                <p><strong>Ano de lançamento: </strong>{livro.publish_date}</p>
                <p><strong>Numero de páginas: </strong>{livro.number_of_pages}</p>
            </div>

            <div className='descricao'>
                <h4>Descrição: </h4>
                <p>{livro.description}</p>
            </div> 
       </div>   
    );
}