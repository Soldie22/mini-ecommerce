import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {  
  const [carrinho, setCarrinho] = useState([]);

    // Carrega o carrinho salvo ao iniciar
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  // Salva o carrinho sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const produtos = [
    { id: 1, nome: 'Camiseta Nerd', preco: 49.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+1' },
    { id: 2, nome: 'Caneca Personalizada', preco: 29.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+2' },
    { id: 3, nome: 'Mouse Gamer', preco: 99.90, imagem: 'https://via.placeholder.com/200x150?text=Produto+3' },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existente = prev.find(item => item.id === produto.id);
      if (existente) {
        return prev.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prev, { ...produto, quantidade: 1 }];
      }
    });

    setMensagem('✅ Produto adicionado ao carrinho!');
    setTimeout(() => setMensagem(''), 2000);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(prev => {
      return prev
        .map(item =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter(item => item.quantidade > 0);
    });
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
