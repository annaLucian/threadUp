import ProductImageDetails from "../../components/ProductImageDetails.jsx";
import ProductDescriptionDetails from "../../components/ProductDescriptionDetails.jsx";
import { useSearchParams } from "react-router-dom";
export default function Details() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");
  return (
    <>
      {/* TODO
    armar la url 
    hacer el fecth
    useEffect yel filtro por id
    pasare por props 
     */}
      <section className="w-[80%]  m-auto flex mt-[4rem] gap-[4rem]">
        <ProductImageDetails />
        <ProductDescriptionDetails />
        {query}
      </section>
    </>
  );
}
