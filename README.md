<h1 text align="center"> 📚 Projeto SóRaiva</h1>

<h2>Objetivo</h2>
Esse projeto foi uma proposta de sprint realizada em sala de aula, onde o objetivo era criar um site utilizando a biblioteca React consumindo uma API.


![image](https://github.com/LucasSan1/Livraria/assets/131712297/833f9e6a-0849-4d53-bbfb-8fb799ad41b4)

<h3>Funcionalidades</h3>
<li>Home;</li>
<li>Página de informações sobre o livro com ano de lançamento, autor, número de páginas e descrição;</li>
<li>Página de erro</li>


<h2>Sobre a API</h2>
A API utilizada foi a <a href="https://openlibrary.org/dev/docs/api/books">OpenLibraryAPI</a>, uma API pública que fornece informações sobre livros dentro do site <a href="https://openlibrary.org">OpenLibrary</a>. 


<ul>
  <li>Essa é a URL padrão para acessar um livro no site base:</li>
  <code>https://openlibrary.org/works/OL21177W/Wuthering_Heights</code>

  <li>Para acessar as informações dos livros (API generic) em formato de arquivo, é só escrever '.json' ou 'yml' logo após o ID do livro na url. </li>
  <code>https://openlibrary.org/works/OL21177W.json</code>
  
  <li>Para acessar as capas, que estão em outra API, deve-se estabelecer o tamanho da imagem colocando o sufixo 'S-jpg'(pequena), 'M-jpg'(média) ou 'L-jpg'(grande), logo depois de chamar o atributo "covers" na requisição.
  </li>
  <code>const capa =  `https://covers.openlibrary.org/b/id/${livro.covers}-M.jpg`;</code>
</ul>

<h2>Tecnologias utilizadas</h2>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="logo">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="logo">
<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="logo">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo">
