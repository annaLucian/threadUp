import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ListProducts() {
  let [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const query = searchParams.get("search");

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filterProducts = products.filter((product) => {
    return product.genero.toLowerCase() === query.toLowerCase();
  });

  return <h1>listaaaa {filterProducts[0]?.name}</h1>;
}
