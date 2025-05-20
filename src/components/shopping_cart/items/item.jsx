export function Item({name, quantity,price}){
    console.log('item is linking')
    const subTotal = quantity * parseFloat(price)
    return (
        <>
        <p>help</p>
        <div class="items">
            <h2>{name}</h2>
            <h3>{"Quantity: "+quantity}</h3>
            <h5>X</h5>
            <h3>{"Price: "+price}</h3>
            <h3>{"Subtotal: "+subTotal}</h3>
        </div>
        </>
    )
}