import React, { useState } from "react";
import "./Styles.css";
import Menu from "./components/Menu";

function App() {
  const [pedido, setPedido] = useState({});

  // Atualiza o pedido
  const handleQuantidadeChange = (key, preco, quantidade) => {
    setPedido((prev) => {
      const novo = { ...prev };
      if (quantidade > 0) novo[key] = { preco, quantidade };
      else delete novo[key];
      return novo;
    });
  };

  // Calcula o total
  const totalPrice = Object.values(pedido)
    .reduce((sum, item) => sum + item.preco * item.quantidade, 0)
    .toFixed(2);

  // Finaliza pedido
  const finalizarPedido = () => {
    if (Object.keys(pedido).length === 0) {
      alert("Seu pedido está vazio!");
      return;
    }
    if (!window.confirm("Tem certeza que seu pedido está completo?")) return;

    // Monta mensagem com quebras de linha reais
    let msg = "Olá, seu pedido foi confirmado. Obrigado por escolher a Lanchonete do Tony!\n\n";
    Object.entries(pedido).forEach(([key, { preco, quantidade }]) => {
      const nomeFormatado = key
        .replace(/([A-Z])/g, " $1")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      msg += `${nomeFormatado} x${quantidade} = R$ ${(preco * quantidade).toFixed(2)}\n`;
    });
    msg += `\nTotal: R$ ${totalPrice}`;

    const telefone = "5521975287327";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Ícones das redes sociais */}
      <div className="social-icons">
        {/* ... seu HTML de ícones ... */}
        <a href="https://www.linkedin.com/in/tony-s-freitas/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://sammyfreitas.github.io/portfolioSite/" target="_blank"><i className="fas fa-globe"></i></a>
        <a href="https://github.com/sammyfreitas" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.instagram.com/anthony_tijuduke" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="mailto:tonysdefreitas@gmail.com?subject=Fale%20Conosco"><i className="far fa-envelope"></i></a>
        <a href="https://wa.me/5521975287327" target="_blank" className="whatsapp-link"><i className="fab fa-whatsapp"></i></a>
      </div>

      <div className="container">
        <h1 className="cardapio-titulo">Cardápio da Lanchonete do Tony</h1>
        <div className="conteudo">
          <Menu
            pedido={pedido}
            onQuantidadeChange={handleQuantidadeChange}
          />

          <div className="order-summary">
            <h2>Resumo do Pedido</h2>
            <ul>
              {Object.keys(pedido).length === 0 ? (
                <li>Nenhum item selecionado</li>
              ) : (
                Object.entries(pedido).map(([key, { preco, quantidade }]) => {
                  const nomeFormatado = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <li key={key}>
                      {nomeFormatado} x{quantidade} = R$ {(preco * quantidade).toFixed(2)}
                    </li>
                  );
                })
              )}
            </ul>
            <h3>Total: R$ {totalPrice}</h3>
            <div className="botoes">
              <button id="finalizarPedido" onClick={finalizarPedido}>
                Finalizar Pedido
              </button>
              <button
                id="limparPedido"
                onClick={() => window.location.reload()}
              >
                Limpar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>© 2025 Anthony Freitas - Lanchonete do Tony. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;