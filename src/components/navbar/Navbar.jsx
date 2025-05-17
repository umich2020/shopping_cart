import { Link } from "react-router-dom"

export function Navbar(){

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
            <Link to="/checkout">Checkout</Link>
            </li>
        </ul>
        </>
    )
}