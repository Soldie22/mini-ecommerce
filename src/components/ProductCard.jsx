import React from 'react';

function ProductCard({ nome, preco, imagem }) {
  return (
    <div style={{ width: '200px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
      <img src={imagem} alt={nome} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
    </div>
  );
}

export default ProductCard;
