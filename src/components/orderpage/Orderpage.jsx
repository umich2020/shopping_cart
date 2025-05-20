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
    // ["temp2", 0],
    // ["Vegan Chocolate Cake", 3],
  ]);
  const [menuItems, setMenuItems] = useState([
    "Vegan Chocolate Cake",
    "Chocolate Bread",
  ]);
  function increaseCount(name) {//this is for shopping cart
    const newOrders = orders.map((order) => {
      if (order[0] === name) {
        return [order[0], order[1] + 1];
      } else {
        return order;
      }
    });
    setOrders(newOrders);
  }
  function decreaseCount(name) {//this is for shopping cart
    const newOrders = orders.map((order) => {
      if (order[0] === name) {
        if(order[1]<=0){
            alert("you can't decrease more than 0")//yes you can you just remove it
            return order
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
  function submitCount(name,quantity) {
    console.log('this is orders before anything')
    console.log(orders)
    const valueInArr=orders.find((item)=>item[0]===name)
    if (valueInArr){
      console.log('this returns trueeee')
      // setOrders(orders.filter((item)=>item[0]!=name))
      const newFilter = orders.filter((item)=>{
        console.log('item is')
        console.log(item)
        if(item[0]===name)
        {
          return false
        }
        return true
      })
      newFilter.push([name,quantity])
      console.log('new filter is')
      console.log(newFilter)
      setOrders(()=>(newFilter))
      console.log('true is finsied')
      console.log(orders)
    //   const newOrders = orders.map((order) => {
    //     console.log('order is')
    //     // console.log(order[0])
    //     console.log(name)
    //   console.log(order[0] === name)
    //   console.log([order[0], quantity])
    //   if (order[0] === name) {
    //     return [name, quantity]
    //     // return [order[0], quantity];
    //   } else {
    //     return order;
    //   }
    // });
    // setOrders(newOrders);
    //   console.log(orders)
    }
    // } else {
    //   console.log('this returns flsae')
    //   setOrders((prev)=>([...prev,[name,quantity]]))
    //   console.log('false is finsiihed')
    //   console.log(orders)
    // }
    else {
    console.log('this adding it')
    console.log(orders)
    console.log('setting orders')
      setOrders((prev)=>([...prev,[name,quantity]]))
    // setOrders(()=>[
    //     ...orders,[name,quantity]])
    
        // setOrders((n)=>{
          
        //   // let temp = orders
        //   n.push([name,quantity])
        //   console.log('n is')
        //   console.log(n)
        //   // setOrders(temp)
        // }
        // )
      console.log('false is finsiihed')
      console.log(orders)
      }
    //if yes then update it's value
    //if no then set up a new value
    //we're running into an infinite loop issue
  }


  // submitCount("temp2dsaf",3)
  // submitCount('bigsigma',3)
  // submitCount('temp',2)
  // submitCount("temp",69)
  return (
    <>
      <Navbar data={orders} />
      {console.log("orders is")}
      {console.log({orders})}
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
            submitFn={submitCount}
            url_param={encodeURI(item)}
            name={item}
          />
        );
      })}
    </>
  );
}
