import './style.css'

export function PopularItem({name, url}) {

    return (
        <div class='item'>
        <img src={url} alt={name + " Image"}/>
        <h5>{name}</h5>
        <p>Ordered today: <strong>300 times</strong></p>
        {/* here's a link to order(rediret) */}
        </div>
    )
}