import Gif from "../../img/agnes pistola.gif";
import "./style.css";

// Pagina para mostrar o erro 404, se alguem tentar acessar uma url invalida ira cair nela
export default function Erro(){
    return(
        <div className="erro">
        <p className='erro4'>Erro 404 - Página Perdida no Espaço Sideral</p>
        <p> Oops! Parece que você encontrou um beco sem saída cibernético. A página decidiu tirar umas férias não autorizadas, provavelmente na praia virtual.</p>

        <p>Não temos uma equipe de resgate intergaláctica, mas estamos trabalhando em nossa melhor tentativa de "teletransportá-la" de volta. Enquanto isso, você pode se entreter imaginando o que essa página perdida está fazendo por aí.</p>

        <img src={Gif} alt='agnesPistola'/>
    </div>
    );
}