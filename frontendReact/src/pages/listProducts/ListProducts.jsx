import { useSearchParams } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import HeartToggle from "../../components/HeartToggle";
import Services from "../../components/services";
import NavBar from "../../components/navBar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function ListProducts() {
  let [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const query = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await Services.getProducts();
      setProducts(productsData);
      console.log(productsData);
    };

    fetchProducts();
  }, []);
  const filterProducts = products?.filter((product) => {
    return product.gender.toLowerCase() === query.toLowerCase();
  });

  return (
    <>
      <NavBar />
      <h1 className="text-[1.2rem] mt-[12rem] text-center">{`Todos los productos para: ${query}`}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[2rem] px-[10rem] mb-[5rem]">
        {filterProducts.map((product, id) => (
          <Card
            key={id}
            className="bg-customWhite container-card-product mt-4 max-w-xs rounded-[10px] shadow-x1 "
          >
            <CardBody className="p-4">
              <>
                <HeartToggle />
              </>

              <img
                src={`https://threadup-iajq.onrender.com/${product.image}`}
                alt={product.title}
                className="w-48 h-48 mx-auto mb-4"
              />
              <Typography className="text-xl sm:text-lg mb-2 text-center font-bold">
                {product.productName}
              </Typography>
              <div className="grid grid-cols-2 text-center mt-[1.2rem]">
                <Typography className="text-[1rem] mb-2 font-bold">
                  {" "}
                  Talla:
                  {product.size}
                </Typography>
                <Typography className="text-[1rem]  font-bold">
                  {" "}
                  Precio:
                  {product.price}€
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
