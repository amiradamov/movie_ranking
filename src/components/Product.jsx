// import { NavLink } from "react-router-dom";
import "./Movies.css";
import Movie from "./PageMovies/Movie";

export default function Product() {
  return (
    <div>
      <h2>IMDb Top 1000 Movies</h2>
      <p>IMDb Top 1000 as rated by regular IMDb voters.</p>
      <div id="head_parent">
        <div id="head_child1">
          <p><b>Rank & Title</b></p>
        </div>
        <div id="head_child2">
          <p><b>IMDb Rating</b></p>
        </div>
      </div>
      <Movie />
      {/* <NavLink className="product-item" to="/product/1">
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
      </NavLink> */}
    </div>
  );
}
