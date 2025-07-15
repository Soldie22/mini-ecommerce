import React from "react";

function Cart({ itens, onRemove }) {
    const total = itens.reduce((acc, item) => acc + item.preco, 0);

    return (
        <div className="cart">
            <h2>Carrinho</h2>
            {itens.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>
                           {item.nome} ({item.quantidade}x) - R$ {(item.preco * item.quantidade).toFixed(2)}
                            <button onClick={() => onRemove(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}

            {itens.length > 0 && (
                <div className="total">
                    <h3>Total: R$ {total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;