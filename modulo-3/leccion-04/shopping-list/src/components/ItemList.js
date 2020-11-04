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
    // const listItems = arrayOfItems.map((item) => (
    //   <li>
    //     name={item.name}
    //     description={item.description}
    //     quantity={item.quantity}
    //     category={item.category}
    //     price={item.price}
    //   </li>
    const array = arrayOfItems.filter((item) => item.price < 10);
    const name = array.map((item) => item.name);
    const description = array.map((item) => item.description);
    const quantity = array.map((item) => item.quantity);
    const category = array.map((item) => item.category);
    const price = array.map((item) => item.price);
    return (
      <ul className="item-list">
        <li>
          <Item
            name={name[0]}
            description={description[0]}
            quantity={quantity[0]}
            category={category[0]}
            price={price[0]}
          />
        </li>
        <li>
          <Item
            name={name[1]}
            description={description[1]}
            quantity={quantity[1]}
            category={category[1]}
            price={price[1]}
          />
        </li>
        <li>
          <Item
            name={name[2]}
            description={description[2]}
            quantity={quantity[2]}
            category={category[2]}
            price={price[2]}
          />
        </li>
      </ul>
    );
  }
}
export default ItemList;
