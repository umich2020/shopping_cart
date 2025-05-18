import { Link } from "react-router-dom"

export function Navbar(data){
    const info = data
    return (
        <>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
                        <li>
            <Link to="/shopping">Order</Link>
            </li>
                        <li>
            <Link to="/checkout" state={info.data}>Checkout</Link>
            </li>
        </ul>
        </>
    )
}