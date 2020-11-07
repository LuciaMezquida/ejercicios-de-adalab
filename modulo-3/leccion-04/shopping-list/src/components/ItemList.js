import React from "react";
import Item from "./Item";
import CategoryButton from "./CategoryButton";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
];

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.btnInfo = "";
    this.handleEachButton = this.handleEachButton.bind(this);
  }
  handleEachButton(info) {
    this.btnInfo = info.currentTarget.innerHTML;
    this.forceUpdate();
  }
  render() {
    const listCategories = arrayOfItems.map((item, index) => (
      <CategoryButton key={index} category={item.category} handleClick={this.handleEachButton} />
    ));
    const listItems = arrayOfItems.filter((item) => item.category === this.btnInfo);
    const newListItems = listItems.map((item, index) => (
      <li key={index}>
        <Item
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          category={item.category}
          price={item.price}
        />
      </li>
    ));
    return (
      <>
        {listCategories}
        <ul className="item-list">{newListItems}</ul>
      </>
    );
  }
}
export default ItemList;
