import { NavLink } from "react-router-dom";
import "./Product.css";

export default function Product() {
  return (
    <div>
      <h3>Products page</h3>

      <NavLink className="product-item" to="/product/1">
        Product 1
      </NavLink>
      <NavLink className="product-item" to="/product/10">
        Product 10
      </NavLink>
      <NavLink className="product-item" to="/product/45">
        Product 45
      </NavLink>
      <NavLink className="product-item" to="/product/23">
        Product 23
      </NavLink>
    </div>
  );
}
