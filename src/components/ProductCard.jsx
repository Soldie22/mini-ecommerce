import React from 'react';
import '../App.css';

function ProductCard({ nome, preco, imagem, aoAdicionar }) {
  return (
    <div className="product-card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
      <button onClick={aoAdicionar}>Adicionar ao Carrinho</button>
    </div>
  );
}



export default ProductCard;
