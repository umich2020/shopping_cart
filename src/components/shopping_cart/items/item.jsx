import "./style.css";

export function Item({ name, quantity, price }) {
  const subTotal = quantity * parseFloat(price);
  return (
    <>
      <div class="items">
        <div class="top">
          <h2>{name}</h2>
          <div class="hr"></div>
          <h3>{"Quantity: " + quantity}</h3>
        </div>
        {/* <h5>X</h5> */}
        <div class="bottom">
          <h3>{"Price: " + price}</h3>
          <h3>{"Subtotal: " + subTotal}</h3>
        </div>
      </div>
      <div class="br"></div>
    </>
  );
}
