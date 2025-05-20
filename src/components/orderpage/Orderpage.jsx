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
    ["temp", 2, 1.99],
    ["temp2", 0, 2.1],
    ["Vegan Chocolate Cake", 3, 3.5],
  ]);
  const [menuItems, setMenuItems] = useState([
    ["Vegan Chocolate Cake",3.5],
    ["Chocolate Bread",2]
  ]);
  function increaseCount(name) {
    //this is for shopping cart
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
    //this is for shopping cart
    const newOrders = orders.map((order) => {
      if (order[0] === name) {
        if (order[1] <= 0) {
          alert("you can't decrease more than 0"); //yes you can you just remove it
          return order;
        } else {
          return [order[0], order[1] - 1];
        }
      } else {
        return order;
      }
    });
    setOrders(newOrders);
    //update I realized this is for the checkout, not really for increasing the
    //submit count
  }
  function submitCount(name, quantity,price) {
    // console.log('this is orders before anything')
    // console.log(orders)
    const valueInArr = orders.find((item) => item[0] === name);
    if (valueInArr) {
      if(quantity <= 0) {
        const newFilter = orders.filter((item) => {
        if (item[0] === name) {
          return false;
        }
        return true;
      });
      setOrders(() => newFilter);
      return
      }

      const newFilter = orders.filter((item) => {
        // console.log('item is')
        // console.log(item)
        if (item[0] === name) {
          return false;
        }
        return true;
      });
      newFilter.push([name, quantity,price]);
      // console.log('new filter is')
      // console.log(newFilter)
      setOrders(() => newFilter);
      // console.log('true is finsied')
    } else {
      // console.log('this adding it')
      // console.log(orders)
      // console.log('setting orders')
      setOrders((prev) => [...prev, [name, quantity,price]]);
      // console.log('false is finsiihed')
      // console.log(orders)
    }
  }

  return (
    <>
      <Navbar data={orders} />
      {orders.map((item) => {
        return (
          <>
            <p>Item is:{item[0]}</p>
            <p>quantity is:{item[1]}</p>
            <p>Price is: ${item[2]}</p>
          </>
        );
      })}
      <h1>We got yummy food!</h1>
      {menuItems.map((item) => {
        return (
          <Item
            submitFn={submitCount}
            url_param={encodeURI(item[0])}
            name={item[0]}
            price={item[1]}
          />
        );
      })}
    </>
  );
}
