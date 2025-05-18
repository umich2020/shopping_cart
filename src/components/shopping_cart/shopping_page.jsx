import { Navbar } from "../navbar/Navbar"
import { useLocation } from "react-router-dom"
export function ShoppingPage(){
    const location = useLocation()
    let info = location.state
    console.log('info is')
    console.log(info)
    return(
        <>
                <Navbar/>
        
        <h1>Checkout</h1>
        <h2>Data: {info}</h2>
        </>
    )
}