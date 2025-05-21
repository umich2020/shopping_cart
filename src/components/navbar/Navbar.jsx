import { Link } from "react-router-dom";
import "./style.css";

export function Navbar(data) {
  const info = data;
  return (
    <>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shopping">Order</Link>
        </li>
        {/* {checkout ? <div>this is showing</div> : <div>This isn't</div>} */}
        <li>
          <Link to="/checkout" state={info.data}>
            Checkout
          </Link>
        </li>
      </ul>
    </>
  );
}
