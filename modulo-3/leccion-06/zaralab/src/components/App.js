import React from "react";
import "./App.scss";
import Header from "./Header";
import Article from "./Article";
import datos from "./datos/datos.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datos,
    };
  }
  render() {
    const articles = this.state.data.map((item, index) => (
      <li key={index}>
        <Article name={item.name} price={item.price} src={item.src} />
      </li>
    ));
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Zaralab" />
        <main className="container">
          <h2>Zaralab</h2>
          <div class="store">
            <section class="shelves">
              <h3 class="shelves__title">Lista de productos</h3>
              {articles}
            </section>
            <section class="cart">
              <h3 class="cart__title">Cesta de la compra</h3>
              <ul class="cart__list">
                <li class="cart__list--item">
                  <span class="cartListItem__concept">Camiseta</span>
                  <span class="cartListItem__amount">x 1</span>
                  <span class="cartListItem__price">69€</span>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
