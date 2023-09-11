import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import api from "../../services/api";
import "./style.css";

export default function Livro(){
    const { key } = useParams();
    const [livro, setLivros] = useState([]);

    useEffect(() => {
        async function carregarLivro(){
            const resposta = await api.get(`${key}.json`)
            setLivros(resposta.data)
        };

        carregarLivro()
    }, [key]);

    return(
        <div className="container">
            <img src={`https://covers.openlibrary.org/b/id/14416194-L.jpg`} alt={`img`} />
            <div className='conteudo'>
                <h1>Titulo Livro</h1>
                <p><strong>Autor(a): </strong></p>
                <p><strong>Ano de lançamento: </strong></p>
                <p><strong>Numero de páginas: </strong></p>
                <p><strong>Assuntos: </strong></p>
            </div>

            <div className='descricao'>
                <h4>Descrição: </h4>
                <p>qualquer coisa   </p>
            </div> 

       </div>   
    );
}