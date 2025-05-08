import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {  
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Camiseta Nerd', preco: 49.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+1' },
    { id: 2, nome: 'Caneca Personalizada', preco: 29.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+2' },
    { id: 3, nome: 'Mouse Gamer', preco: 99.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+3' },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto]);
    setMensagem('✅ Produto adicionado ao carrinho!');
    setTimeout(() => setMensagem(''), 2000);
  };

  const removerDoCarrinho = (indexToRemove) => {
    setCarrinho((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const [mensagem, setMensagem] = useState('');

  return (
    <div>
      <Header quantidadeItens={carrinho.length} />
      <h1 style={{ textAlign: 'center' }}>Produtos</h1>

      {mensagem && (
      <div className="mensagem-sucesso">{mensagem}</div>
      )}

      <ProductList produtos={produtos} aoAdicionar={adicionarAoCarrinho} />

      <Cart itens={carrinho} onRemove={removerDoCarrinho} />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
