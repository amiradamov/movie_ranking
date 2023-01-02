import "./Titlehtml.css";

function Titlehtml(props) {
    return (
        <div className="movie-info">
            {/* <img src={props.img} alt="Poster_Link" /> */}
            <h4 className="movie-info">{props.title} ({props.year})</h4>
            {/* <p className="movie-info">{props.year}</p> */}
        </div> 
    );
}

export default Titlehtml;