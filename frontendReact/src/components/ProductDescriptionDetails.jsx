import { Link } from "react-router-dom";
import iconHeart from "../assets/icon-heart.svg";
export default function ProductDescriptionDetails({ product }) {
  return (
    <div
      className="basis-[40%] mt-[4rem] fixed pr-[10rem]"
      style={{ left: "calc(55%)" }}
    >
      <div className="border-b-zinc-200 border-b-[0.1rem]">
        <h1 className="text-[1.5rem] font-bold pb-[1rem]">
          {product.productName?.toUpperCase()}
        </h1>
        <p className="text-[1.8rem] pb-[1rem]">{`${product.price} €`}</p>
      </div>
      <div className="mt-[1rem] pb-[1rem] border-b-zinc-200 border-b-[0.1rem]">
        <p className="text-[1rem]">COLOR: {product.color}</p>
        <p className="text-[1rem]">TALLA: {product.size}</p>
        <p className="text-[1rem]">MARCA: {product.brand}</p>
      </div>
      <div>
        <p className="mt-[2rem] pb-[2rem] text-[0.9rem] border-b-zinc-200 border-b-[0.1rem]">
          {product.description}
        </p>
      </div>
      <div className="mt-[2rem] ">
        <Link
          to="/"
          className="rounded w-[70%] flex gap-[1rem] items-center bg-[#09BCE3] py-[0.6rem] justify-center text-[0.9rem] text-white"
        >
          <img src={iconHeart} alt="icon corazon" />
          <p>AÑADIR A MIS FAVORITOS</p>
        </Link>
      </div>
    </div>
  );
}
