import { Link } from "react-router-dom";
import iconHeart from "../assets/icon-heart.svg";
export default function ProductDescriptionDetails() {
  return (
    <div
      className="basis-[40%] mt-[4rem] fixed pr-[10rem]"
      style={{ left: "calc(55%)" }}
    >
      <div className="border-b-zinc-200 border-b-[0.1rem]">
        <h1 className="text-[1.5rem] font-bold pb-[1rem]">
          CAMISA DENIM OVERSIZE
        </h1>
        <p className="text-[1.8rem] pb-[1rem]">19,99 €</p>
      </div>
      <div className="mt-[1rem] pb-[1rem] border-b-zinc-200 border-b-[0.1rem]">
        <p className="text-[1rem]">COLOR: Kaki</p>
        <p className="text-[1rem]">TALLA: L</p>
        <p className="text-[1rem]">MARCA: Bershka</p>
      </div>
      <div>
        <p className="mt-[2rem] pb-[2rem] text-[0.9rem] border-b-zinc-200 border-b-[0.1rem]">
          Sobrecamisa denim de corte holgado con cuello camisero. Tiene cierre
          frontal con botones metálicos. Dispone de dos bolsillos grandes en los
          laterales de la parte delantera. Está confeccionada en un cómodo y
          agradable tejido 100% de algodón.
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
