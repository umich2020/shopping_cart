import { Navbar } from "../navbar/Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { Item } from "./items/item.jsx"
import './style.css'
export function ShoppingPage(){
    const location = useLocation()
    const [shopping_data,setShopping_Data] = useState(location.state)
    const subTotal = function subTotal(){
            let subTotal = 0
        for(let i=0; i<shopping_data.length;i++){
            subTotal += shopping_data[i][1]*shopping_data[i][2]
        }
        return subTotal
    }()
    const tax=(subTotal*.06).toFixed(2)
    const total=subTotal+parseFloat(tax)
    
    // console.log('info is')
    // console.log(shopping_data)
    // console.log(typeof shopping_data)
    function Pay(){
        alert("you have paid $"+total)
    }
    return(
        <>
                <Navbar/>
                        <h1>Checkout</h1>
        
        {shopping_data.map((item)=>{
            // console.log(item)
            return (
            <Item name={item[0]} quantity={item[1]} price={item[2]}/>
            )
        })}
        <div id='totals'>
        <h3>{"Sub Total: $"+subTotal}</h3>
        <h5>{"Tax: $"+tax}</h5>
        <h2>{"Total: $"+total}</h2>
        </div>
        <button class="button" type="button" onClick={Pay}>{"Pay $"+total}</button>
        </>
    )
}