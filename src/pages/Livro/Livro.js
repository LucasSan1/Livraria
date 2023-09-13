import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import api from "../../services/api";
import "./style.css";

export default function Livro(){
    const { key } = useParams();
    const [livro, setLivros] = useState([]);

    useEffect(() => {
        async function carregarLivro(){
            
            const resposta = await api.get(`/books/${key}.json`)
            setLivros(resposta.data)
        };

        carregarLivro()
    }, [key]);

    return(
        <div className="container">
            <img src={`https://covers.openlibrary.org/b/id/${livro.covers}-L.jpg`} alt={`img`} />
            <div className='conteudo'>
                <h1>{livro.title}</h1>
                <p><strong>Autor(a): {livro.by_statement}</strong></p>
                <p><strong>Ano de lançamento: {livro.publish_date}</strong></p>
                <p><strong>Numero de páginas: {livro.number_of_pages}</strong></p>
                {/* <p><strong>Assuntos: {}</strong></p> */}
            </div>

            <div className='descricao'>
                <h4>Descrição: </h4>
                <p>{livro.description}</p>
            </div> 
       </div>   
    );
}