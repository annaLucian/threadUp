import iconDress from "../assets/icon-dress.svg";
import iconShirt from "../assets/icon-shirt.svg";
import { Link } from "react-router-dom";
export default function FilterCategory() {
  return (
    <section className="flex flex-col justify-center items-center pt-[2.5rem]">
      <h1 className="text-[1.8rem] font-bold">¿Qué estás buscando?</h1>
      <span className="text-[1.2rem]">
        Explora nuestra amplia selección de moda para hombres y mujeres
      </span>
      <div className="pt-[2rem] flex gap-[2rem] items-center justify-center">
        <Link
          to="/list-products?search=hombre"
          className="text-center flex flex-col items-center p-[0.5rem] hover:bg-[#efefef]"
        >
          <picture>
            <img
              src={iconShirt}
              alt="icono de camisa"
              className="w-[2.5rem] mb-[0.4rem]"
            />
          </picture>
          <p className="text-[0.8rem]">Hombres</p>
        </Link>
        <Link
          to="/list-products?search=mujer"
          className="text-center flex flex-col items-center p-[0.5rem] hover:bg-[#efefef]"
        >
          <picture>
            <img
              src={iconDress}
              alt="icono de vestido"
              className="w-[2.5rem] mb-[0.4rem]"
            />
          </picture>
          <p className="text-[0.8rem]">Mujeres</p>
        </Link>
      </div>
    </section>
  );
}
