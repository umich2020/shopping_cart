import { Navbar } from "../navbar/Navbar";
import { Item } from "./item/item";
import { useEffect, useState } from "react";
import './style.css'

import Lottie from "lottie-react";
import animation from "../../components/homepage/images/animations/sadHeart.json";
export function OrderPage() {
  //items
  //entree mac&cheese
  /*
    https://www.themealdb.com/api/json/v1/1/search.php?s=

    */
  const [orders, setOrders] = useState([
    ["Spicy Arrabiata Penne", 1, 2.1],
    ["Vegan Chocolate Cake", 3, 3.5],
  ]);
  const [menuItems, setMenuItems] = useState([

    ["Spicy Arrabiata Penne",12.50],
    ["Vegan Lasagna",12],
    ["Fettuccine Alfredo",10.99],
    ["Lamb Pilaf (Plov)",14],
    ["Big Mac",8.99],
    ["Lamb Tzatziki Burgers",9.50],
        ["Vegan Chocolate Cake",8],
    ["Bread and Butter Pudding",6.50],
    ["Madeira Cake",7],
  ]);

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
  // console.log("the state is")
  // console.log(typeof menuItems)
  function clear(e){
    setOrders([])
    e.target.textContent = "Cart is cleared"
    console.log(e.target.textContent)
  }
  useEffect(()=>{
    const button_text = document.querySelector("#clear")
    if(orders.length !=0){
      button_text.textContent = "Clear Cart"      
    }
  },[orders])
  return (
    <>
      <Navbar data={orders} />
      {/* {orders.map((item) => {
        return (
          <>
            <p>Item is:{item[0]}</p>
            <p>quantity is:{item[1]}</p>
            <p>Price is: ${item[2]}</p>
          </>
        );
      })} */}
      <h1>We got yummy food!</h1>
      <button className="hoverHide" id="clear" type='button' onClick={clear}>Clear cart</button>
      <Lottie
          className="hide"
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{ height: 300, width: 300 }}
        />
      <div id='foods'>
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
      </div>
    </>
  );
}
