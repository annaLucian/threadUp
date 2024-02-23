import { useSearchParams } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationSvg from "../../components/svg/Location.jsx";
import HeartToggle from "../../components/HeartToggle";
import Services from "../../components/services";
import NotFound from "../../components/NotFound.jsx";
import SkeletonCardList from "../../components/placeholder/skeletonCardList.jsx";

export default function ListProducts() {
  let [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = searchParams.get("search");
  const type = searchParams.get("type");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await Services.getProducts();
      if (productsData.length > 0) setIsLoading(false);
      setProducts(productsData);
      console.log(productsData);
    };

    fetchProducts();
  }, []);
  const filterProducts = products?.filter((product) => {
    if (type === "form") {
      return (
        product.location.toLowerCase().includes(search.toLowerCase()) ||
        product.productName.toLowerCase().includes(search.toLowerCase())
      );
    }
    return product.gender.toLowerCase() === search.toLowerCase();
  });

  if (filterProducts.length === 0) return <NotFound search={search} />;

  return (
    <>
      <h1 className="text-[1.2rem] mt-[12rem] text-center">{`Todos los productos para: ${search}`}</h1>
      {!isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[2rem] px-[10rem] mb-[5rem]">
          {filterProducts.map((product, index) => (
            <Link to={`/details-product/?id=${product.id}`} key={index}>
              <Card
                key={index}
                className="container-products bg-customWhite  mt-4 max-w-[25rem] rounded-[10px] shadow-x1 "
              >
                <CardBody className="p-8">
                  <>
                    <HeartToggle />
                  </>
                  <img
                    src={`https://threadup-iajq.onrender.com/${product.image}`}
                    alt={`imagen de ${product.productName}`}
                    className="w-48 h-48 mx-auto mb-4"
                  />
                  <Typography className="text-[1.1rem] mb-[0.5rem]  font-bold text-[#274c5b]">
                    {product.productName}
                  </Typography>

                  <Typography className="flex items-center text-[1rem] mb-2 font-bold gap-[0.5rem]">
                    <div className="w-[1.5rem]">
                      <LocationSvg />
                    </div>

                    {product.location}
                  </Typography>

                  <div className="grid grid-cols-2 ">
                    <Typography className="text-[1rem] mb-2 font-bold">
                      Talla:
                      {product.size}
                    </Typography>
                    <Typography className="text-[1rem] font-bold">
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
        <div
          data-testid="skeleton-card-list"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[2rem] px-[10rem] mb-[5rem]"
        >
          <SkeletonCardList />
        </div>
      )}
    </>
  );
}
