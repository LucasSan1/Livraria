import React from 'react';
import './style.css';
import Card from '../../componentes/card/Card';


export default function Home(){
    return(
        <div className='containerH'>

           <div className='item'><Card livro = "OL22449759M" ></Card></div>
           <div className='item'><Card livro = "OL6796442M" ></Card></div>
           <div className='item'><Card livro = "OL26455544M" ></Card></div>
           <div className='item'><Card livro = "OL26277845M" ></Card></div>
           <div className='item'><Card livro = "OL1734386M" ></Card></div>
           <div className='item'><Card livro = "OL22334004M" ></Card></div>

        </div>
    )
}