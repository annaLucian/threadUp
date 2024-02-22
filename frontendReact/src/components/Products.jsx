import { Card, CardBody, Typography, } from "@material-tailwind/react";
import { useEffect, useState} from "react"
import Services from "./services.js";
import HeartToggle from "./HeartToggle.jsx";

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
    <div className="container pt-8 mx-auto sm:p-4 lg:p-8  min-h-screen mt-[150px]">
      <img src="/frontendReact/src/assets/images/fondomoda.jpg" alt=""></img>
      <p id="products" className="mt-4 text-bold text-[40px] text-customCobalt sm:text-[10px] text-center">Nuestros productos 'estrella'</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, id) => (
          <Card key={id} className="bg-customWhite  mt-4 max-w-xs rounded-[10px] shadow-x1 ">
            <CardBody className="p-4"> 
              <>
                <HeartToggle />
              </>
              <img src={product.image} alt={product.image} className="w-48 h-48 mx-auto mb-4" />  
                <Typography className="text-xl sm:text-lg mb-2 text-center font-bold">
                    {product.name} 
                </Typography>
                
                <div className="grid grid-cols-2 text-center">
                  <Typography className="text-[16px]sm:text-lg mb-2 font-bold"> Talla:  
                    {product.size}
                  </Typography>
                  <Typography className="text-[16px]text-sm font-bold"> Precio: 
                      {product.price}€
                  </Typography>
                </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;




