import React from "react";

function Cart({ itens }) {
    return (
        <div className="cart">
            <h2>Carrinho</h2>
            {itens.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>
                           {item.nome} - R$ {item.preco.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;