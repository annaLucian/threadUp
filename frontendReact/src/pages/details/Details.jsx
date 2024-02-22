import ProductImageDetails from "../../components/ProductImageDetails.jsx";
import ProductDescriptionDetails from "../../components/ProductDescriptionDetails.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { useSearchParams } from "react-router-dom";
import Services from "../../components/services.js";
import { useState, useEffect } from "react";
export default function Details() {
  const [product, setProduct] = useState(null);
  // const [loading, setLoading]
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
      <NavBar />
      {product && (
        <section className="w-[80%]  m-auto flex mt-[8rem] gap-[4rem] h-[90vh] ">
          <ProductImageDetails product={product} />
          <ProductDescriptionDetails product={product} />
        </section>
      )}

      <Footer />
    </>
  );
}
