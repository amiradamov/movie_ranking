import { NavLink } from "react-router-dom";
import "./Moviehtml.css";

function Moviehtml(props) {
    return (
        <ul id="movie_list">
            <NavLink className="product-item" to={`/product/${props.id}`} >
                <li>
                    <div id="parent">
                        <div id="child1">
                            <img src={props.img} alt="Poster_Link" />
                        </div>
                        <div id="child2">
                            <h4 className="movie-info">{props.id} <span className="bar"></span>  {props.title} ({props.year})</h4>
                        </div>
                        <div id="child3">
                            <div id="subchild1">
                                <img src="https://www.pngall.com/wp-content/uploads/9/Golden-Star-PNG-Image-File.png" alt="gold_star" />
                            </div>
                            <div id="subchild2">
                                {props.rating}
                            </div>
                        </div>
                    </div>  
                </li>
            </NavLink>
        </ul>
    );
}

export default Moviehtml;