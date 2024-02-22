import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Services from "./services.js";
import HeartToggle from "./HeartToggle.jsx";
import SkeletonCardList from "./placeholder/skeletonCardList.jsx";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await Services.getProducts();
      if (productsData.length > 0) setIsLoading(false);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className=" pt-8  sm:p-4 lg:p-8 mt-[1rem] mx-[12rem] mb-[6rem]">
      <img src="/frontendReact/src/assets/images/fondomoda.jpg" alt=""></img>
      <p id="products" className="mt-[4rem] font-bold text-[1.8rem] pb-[4rem]">
        Nuestros productos estrella
      </p>
      {!isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link to={`/details-product/?id=${product.id}`} key={index}>
              <Card
                key={index}
                className="container-products bg-customWhite  mt-4 max-w-xs rounded-[10px] shadow-x1 "
              >
                <CardBody className="p-4">
                  <>
                    <HeartToggle />
                  </>
                  <img
                    src={`https://threadup-iajq.onrender.com/${product.image}`}
                    alt={`imagen de ${product.productName}`}
                    className="w-48 h-48 mx-auto mb-4"
                  />
                  <Typography className="text-[1.1rem] mb-[0.5rem] text-center font-bold text-[#274c5b]">
                    {product.productName}
                  </Typography>

                  <div className="grid grid-cols-2 text-center">
                    <Typography className="text-[1rem] mb-2 font-bold">
                      {" "}
                      Talla:
                      {product.size}
                    </Typography>
                    <Typography className="text-[1rem] font-bold">
                      {" "}
                      Precio:
                      {product.price}€
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkeletonCardList />
        </section>
      )}
    </div>
  );
}

export default Product;
