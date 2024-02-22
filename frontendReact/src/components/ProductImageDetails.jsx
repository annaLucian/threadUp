import iconBack from "../assets/icon-arrow.svg";
import { Link } from "react-router-dom";
export default function ProductImageDetails({ product }) {
  return (
    <div className="relative basis-[50%]">
      <Link to="/" className="absolute top-[2rem] left-[2rem]">
        <img src={iconBack} alt="icono de regreso" className="w-[1rem] " />
      </Link>
      <picture>
        <img
          src={`https://threadup-iajq.onrender.com/${product.image}`}
          alt="producto detalle"
        />
      </picture>
    </div>
  );
}
