import React from 'react';
import './style.css';
import Card from '../../componentes/card/Card';


export default function Home(){
    return(
        <div className='containerH'>

           <div className='item'><Card livro = "OL22449759M" ></Card></div>
           <div className='item'><Card livro = "OL31912565M" ></Card></div>
           <div className='item'><Card livro = "OL26455544M" ></Card></div>
           <div className='item'><Card livro = "OL26277845M" ></Card></div>
           <div className='item'><Card livro = "OL25276083M" ></Card></div>
           <div className='item'><Card livro = "OL24382144M" ></Card></div>

        </div>
    )
}