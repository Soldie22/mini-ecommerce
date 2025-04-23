import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const produtos = [
    { id: 1, nome: 'Camiseta Nerd', preco: 49.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+1' },
    { id: 2, nome: 'Caneca Personalizada', preco: 29.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+2' },
    { id: 3, nome: 'Mouse Gamer', preco: 99.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+3' },
  ];

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Produtos</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {produtos.map(produto => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
