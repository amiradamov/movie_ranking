import { useParams } from "react-router";
import movies from "../imdb_top_1000";

export default function ProductInfo() {
  const { productId } = useParams();

  return <div>This is the info page for product {movies.id}</div>;
}
