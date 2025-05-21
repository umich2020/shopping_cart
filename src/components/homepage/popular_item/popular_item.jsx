import './style.css'
import { Link } from 'react-router-dom'

export function PopularItem({name, url}) {

    return (
        <div class='item'>
        <img src={url} alt={name + " Image"}/>
        <h5>{name}</h5>
        <p>Ordered today: <strong>300 times</strong></p>
        <Link className="pop_items" to="/shopping">Order</Link>
        {/* here's a link to order(rediret) */}
        </div>
    )
}