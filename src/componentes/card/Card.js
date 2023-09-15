import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import './card.css';



export default function Card(props){

    // Cria uma variavel de estado 'livro' que vai receber o arquivo json
    const [livro, setLivro] = useState([]);

    useEffect(() => {
        // Faz a requisição de dados juntando a url base com o encremendo na variavel path e grava os valores em na variavel livro 
        async function lerInfo(){
            const livro = props.livro;
            const path = "/books/" + livro + ".json";

            const resposta = await api.get(path);
            setLivro(resposta.data);
        }

        lerInfo();
    }, [props.livro])

    // Caso a variavel livro não tenha recebido o json vai aparecer a mensagem de carregando
    if (livro.length === 0) {
        <h1>carregando</h1>
    } else {
        // Casó tenha recebido guarda valores especificos do json em novas variaveis
        const titulo = livro.title;
        const capa =  `https://covers.openlibrary.org/b/id/${livro.covers}-M.jpg`;
        const autor = livro.by_statement;
        const id = livro.key;
        id.slice(id.lastIndexOf('/')+ 1)  
        console.log(livro);
          
        // Link com problema de via 
        // https://covers.openlibrary.org/b/olid/OL22449759M-M.jpg 
        // link funcional
        // https://covers.openlibrary.org/b/id/14416194-L.jpg

        // Cria a parte que vai ser renderizada na pagina
        return(
            <div className="card">
                <Link to={`${id}`}>
                <img src={capa} alt='img'/>
                <p><strong>{titulo}</strong></p>
                <p>{autor}</p>
                </Link>
            </div>
        )
    }
} 