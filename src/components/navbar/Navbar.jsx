import { Link } from "react-router-dom";
import "./style.css";

export function Navbar(data) {
  const info = data;
  return (
    <>
      <ul className="navbar">
        <li className="Link">
          <Link to="/">Home</Link>
        </li>
        <li className="Link">
          <Link to="/shopping">Order</Link>
        </li>
        {/* {checkout ? <div>this is showing</div> : <div>This isn't</div>} */}
        <li className="Link">
          <Link to="/checkout" state={info.data}>
            Checkout
          </Link>
        </li>
      </ul>
    </>
  );
}
