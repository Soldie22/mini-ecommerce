import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ produtos, aoAdicionar }) {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          aoAdicionar={() => aoAdicionar(produto)}
        />
      ))}
    </div>
  );
}

export default ProductList;