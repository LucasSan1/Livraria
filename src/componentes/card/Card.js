import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import './card.css';
import Livro from '../../pages/Livro/Livro';


export default function Card(props){

    const [livro, setLivro] = useState([]);

    useEffect(() => {
        async function lerInfo(){
            const livro = props.livro;
            const path = "https://openlibrary.org/books/" + livro + ".json";

            const resposta = await api.get(path);
            setLivro(resposta.data);

            
        }

        lerInfo();
    }, [props.livro])

    if (livro.length === 0) {
        <h1>carregando</h1>
    } else {
        const titulo = livro.title;
        const capa =  `https://covers.openlibrary.org/b/id/${livro.covers}-M.jpg`;
        const autor = livro.by_statement;
        const id = "/books/OL22449759M"
        id.slice(id.lastIndexOf('/')+ 1)  
        console.log(livro);
        
        
        // Link com problema de via 
        // https://covers.openlibrary.org/b/olid/OL22449759M-M.jpg 
        // link funcional
        // https://covers.openlibrary.org/b/id/14416194-L.jpg
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