import Posterhtml from "./Posterhtml";
import movies from "../../imdb_top_1000";

function createPosterComp(movie) {
  return (
    <Posterhtml
      key={movie.id}
      id={movie.id}
      title={movie.Series_Title}
      img={movie.Poster_Link}
      year={movie.Released_Year}
      runtime={movie.Runtime}
      genre={movie.Genre}
      rating={movie.IMDB_Rating}
      desc={movie.Overview}
      score={movie.Meta_score}
      director={movie.Director}
    />
  );
}

function Poster() {
  return <div>
    <dir>{movies.map(createPosterComp)}</dir>
    </div>;
}

export default Poster;
