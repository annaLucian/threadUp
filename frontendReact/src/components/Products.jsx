import { Card, CardBody, Typography, } from "@material-tailwind/react";
import { useEffect, useState} from "react"
import Services from "./services.js";

const  cardProduct  = Services;

function Product() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await cardProduct.getProducts();
      setProducts(productsData);
      console.log(productsData);
    };

    fetchProducts();
  }, []);
   
  return (
    <div className="container mx-auto sm:p-4 lg:p-8 bg-customWhite">
      <p id="products" className="mt-4 text-bold text-4xl text-customCobalt sm:text-[25px]">Productos Estrella</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, id) => (
          <Card key={id} className="mt-6 border border-blue-500 bg-gray-200 mt-6 max-w-xs rounded-xl border-solid bg-customCobalt text-customWhite">
            <CardBody className="p-4"> 
                
                <img src={product.image} alt={product.image} className="w-10 h-10 mx-auto mb-4" />   
                
                <Typography className="text-xl sm:text-lg mb-2">
                    {product.marca}
                </Typography>
                <Typography className="text-xl sm:text-lg mb-2">
                {product.size}
                </Typography>
                <Typography className="text-sm">
                {product.price}
                </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;




