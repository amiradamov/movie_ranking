import { useParams } from "react-router";

export default function ProductInfo() {
  const { productId } = useParams();

  return <div>This is the info page for product {productId}</div>;
}
