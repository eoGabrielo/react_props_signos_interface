import React from 'react';
import './estilo.css';

const ItemLista = ({signo, imagem, dataInicio, dataFim}) => {
  return (
    <div className="boxSigno">
      <div className="nomeSigno">
        {signo}
      </div>
      
      <img className="imagemSigno" src={imagem} alt={signo}/>
      
      <div className="periodoNascimento">
        {dataInicio} - {dataFim}
      </div>
    </div>
  );
}

export default ItemLista;
