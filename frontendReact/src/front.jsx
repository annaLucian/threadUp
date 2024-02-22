// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const direccion = 'http://localhost:8000/inicio/';

// export default function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(direccion);
//         setProducts(res.data); // Asumiendo que res.data es un array de productos
//       } catch (error) {
//         console.error("Error al obtener los productos:", error);
//       }
//     };

//     getProducts();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">Lista de Productos</h1>
//       <ul>
//         {products.map((product) => (
//           // Asegúrate de que `product.id` exista y sea único
//           <div key={product.id}>
//             <li>{product.productName}</li> 
//             <li>{product.brand}</li>
//             <img src={`http://localhost:8000/${product.image}`} alt="Imagen del producto" />
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }
