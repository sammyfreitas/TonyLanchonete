import React from "react";
import MenuItem from "./MenuItem";

const precos = {
  cachorroQuente: 7.0,
  bauruSimples: 10.3,
  hamburguer: 7.0,
  batataFrita: 5.0,
  bauruComOvo: 15.0,
  cheeseburger: 9.0,
  jarraSuco: 15.0,
  refrigerante: 7.0,
};

function Menu({ pedido, onQuantidadeChange }) {
  return (
    <div className="menu-container">
      {Object.keys(precos).map((key) => {
        const nomeFormatado = key
          .replace(/([A-Z])/g, " $1")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const quantidade = pedido[key]?.quantidade || 0;

        return (
          <MenuItem
            key={key}
            nome={nomeFormatado}
            preco={precos[key]}
            imagem={`/images/${key}.png`}
            quantidade={quantidade}
            onQuantidadeChange={(qtd) => onQuantidadeChange(key, precos[key], qtd)}
          />
        );
      })}
    </div>
  );
}

export default Menu;