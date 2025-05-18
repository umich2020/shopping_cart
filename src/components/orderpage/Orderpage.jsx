import { Navbar } from "../navbar/Navbar";
import { Item } from "./item/item";
import { useState } from "react";
export function OrderPage() {
  //items
  //entree mac&cheese
  /*
    https://www.themealdb.com/api/json/v1/1/search.php?s=

    */
  const [orders, setOrders] = useState([["temp", 2]]);
  function click() {
    setOrders([...orders, ["number2", 1]]);
  }
  return (
    <>
      <Navbar data={orders} />
      <button onClick={click}>Click me!</button>
      {orders.map((item) => {
        return (
          <>
            <p>Item is:{item[0]}</p>
            <p>quantity is:{item[1]}</p>
          </>
        );
      })}
      <h1>We got yummy food!</h1>
      <Item url_param="Vegan%20Chocolate%20Cake" />
    </>
  );
}
