import React from "react";

function MenuItem({ nome, preco, imagem, quantidade, onQuantidadeChange }) {
  return (
    <div className="menu-item">
      <img src={imagem} alt={nome} className="menu-img" />
      <h3>{nome}</h3>
      <p className="menu-preco">R$ {preco.toFixed(2)}</p>
      <input
        type="number"
        min="0"
        value={quantidade}
        onChange={(e) => onQuantidadeChange(Number(e.target.value))}
      />
    </div>
  );
}

export default MenuItem;