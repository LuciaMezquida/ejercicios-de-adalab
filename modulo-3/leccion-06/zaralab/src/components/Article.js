import React from "react";

class Article extends React.Component {
  render() {
    return (
      <article class="shelves__article">
        <div class="shelves__article--imgContainer">
          <img class="shelves__article--img" src={this.props.src} />
        </div>
        <h3 class="shelves__article--title">{this.props.name}</h3>
        <div class="shelves__article--buyPanel">
          <div class="buyPanel__size">
            <h4 class="buyPanel__section--title">Talla:</h4>
            <select name="" id="" class="buyPanel__size--select">
              <option value="" disabled selected>
                Escoge:
              </option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="S">S</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div class="buyPanel__amount">
            <h4 class="buyPanel__section--title">Cantidad:</h4>
            <button class="buyPanel__amount--add">+</button>
            <input type="text" name="" id="" class="buyPanel__amount--number" value="2" />
            <button class="buyPanel__amount--sub">-</button>
          </div>
          <div class="buyPanel__price">
            <h4 class="buyPanel__section--title">Precio:</h4>
            <span class="buyPanel__price--number">{this.props.price}</span>€
          </div>
          <button class="buyPanel__buy">Comprar</button>
        </div>
      </article>
    );
  }
}

export default Article;
