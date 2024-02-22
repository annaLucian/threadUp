import iconBack from "../assets/icon-arrow.svg";
import imgProduct from "../assets/img-2.jpg";
import { Link } from "react-router-dom";
export default function ProductImageDetails() {
  return (
    <div className="relative basis-[50%]">
      <Link to="/" className="absolute top-[2rem] left-[2rem]">
        <img src={iconBack} alt="icono de regreso" className="w-[1rem] " />
      </Link>
      <picture>
        <img src={imgProduct} alt="producto detalle" />
      </picture>
    </div>
  );
}
