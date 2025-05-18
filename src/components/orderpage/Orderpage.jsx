import { Navbar } from "../navbar/Navbar";
import { Item } from "./item/item";
import { useState } from "react";
export function OrderPage() {
  //items
  //entree mac&cheese
  /*
    https://www.themealdb.com/api/json/v1/1/search.php?s=

    */
  const [orders, setOrders] = useState([
    ["temp", 2],
    ["temp2", 0],
    ["Vegan Chocolate Cake", 3],
  ]);
  const [menuItems, setMenuItems] = useState([
    "Vegan Chocolate Cake",
    "Chocolate Bread",
  ]);
  function increaseCount(name) {
    const newOrders = orders.map((order) => {
      if (order[0] === name) {
        return [order[0], order[1] + 1];
      } else {
        return order;
      }
    });
    setOrders(newOrders);
  }
  function decreaseCount(name) {
    const newOrders = orders.map((order) => {
      if (order[0] === name) {
        if(order[1]<=0){
            alert("you can't decrease more than 0")
            return order
        } else {
            return [order[0], order[1] - 1];
        }
      } else {
        return order;
      }
    });
    setOrders(newOrders);
  }
  return (
    <>
      <Navbar data={orders} />
      {orders.map((item) => {
        return (
          <>
            <p>Item is:{item[0]}</p>
            <p>quantity is:{item[1]}</p>
          </>
        );
      })}
      <h1>We got yummy food!</h1>
      {menuItems.map((item) => {
        return (
          <Item
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            url_param={encodeURI(item)}
            name={item}
          />
        );
      })}
    </>
  );
}
