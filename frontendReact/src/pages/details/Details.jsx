import ProductImageDetails from "../../components/ProductImageDetails.jsx";
import ProductDescriptionDetails from "../../components/ProductDescriptionDetails.jsx";
import { useSearchParams } from "react-router-dom";
import Services from "../../components/services.js";
import { useState, useEffect } from "react";
export default function Details() {
  const [product, setProduct] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchProducts = async (id) => {
      const productsData = await Services.getProductById(id);
      setProduct(productsData);
      console.log(productsData);
    };

    fetchProducts(id);
  }, [id]);
  return (
    <>
      {product && (
        <section className="w-[80%]  m-auto flex mt-[10rem] gap-[4rem] h-[90vh]  my-[4rem]">
          <ProductImageDetails product={product} />
          <ProductDescriptionDetails product={product} />
        </section>
      )}
    </>
  );
}
