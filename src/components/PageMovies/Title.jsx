import Titlehtml from "./Titlehtml";
import movies from "../../imdb_top_1000";

function createTitleComp(movie) {
  return (
    <Titlehtml
      key={movie.id}
      id={movie.id}
      title={movie.Series_Title}
      img={movie.Series_Title}
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

function Title() {
  return <div>
    <dir>{movies.map(createTitleComp)}</dir>
    </div>;
}

export default Title;
