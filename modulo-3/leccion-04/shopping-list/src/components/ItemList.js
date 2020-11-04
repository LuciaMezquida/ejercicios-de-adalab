import React from "react";
import Item from "./Item";

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
  render() {
    const listItems = arrayOfItems.map((item) => (
      <li>
        <Item
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          category={item.category}
          price={item.price}
        />
      </li>
    ));
    // const array = arrayOfItems.filter((item) => item.price < 10);
    // const name = array.map((item) => item.name);
    // const description = array.map((item) => item.description);
    // const quantity = array.map((item) => item.quantity);
    // const category = array.map((item) => item.category);
    // const price = array.map((item) => item.price);
    return <ul className="item-list">{listItems}</ul>;
  }
}
export default ItemList;
