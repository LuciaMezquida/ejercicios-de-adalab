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
    const listItems = arrayOfItems.filter((item) => item.price < 10);
    const newListItems = listItems.map((item) => (
      <>
        <li>
          <Item
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            category={item.category}
            price={item.price}
          />
        </li>
        <li>
          <Item
            name={8}
            description="mantequilla de cacahuete"
            quantity={1}
            category="Snack"
            price="8"
          />
        </li>
      </>
    ));
    return <ul className="item-list">{newListItems}</ul>;
  }
}
export default ItemList;
