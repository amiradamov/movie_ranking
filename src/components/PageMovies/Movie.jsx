import Moviehtml from "./Moviehtml";
import movies from "../../imdb_top_1000";

function createMovieComp(movie) {
  return (
    <Moviehtml
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

function Movie() {
  return <div>
    <dir>{movies.map(createMovieComp)}</dir>
    </div>;
}

export default Movie;
