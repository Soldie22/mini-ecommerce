import React from 'react';

function Header({ quantidadeItens }) {
  return (
    <header>
      <h1>Valfenda Store | Carrinho ({quantidadeItens})</h1>
    </header>
  );
}

export default Header;