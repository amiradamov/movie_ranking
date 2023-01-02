import { NavLink } from "react-router-dom";
import "./Movies.css";

export default function Product() {
  return (
    <div>
      <h2>IMDb Top 1000 Movies</h2>
      <p>IMDb Top 1000 as rated by regular IMDb voters.</p>

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
