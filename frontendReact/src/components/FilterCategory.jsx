import iconDress from "../assets/icon-dress.svg";
import iconShirt from "../assets/icon-shirt.svg";
import { Link } from "react-router-dom";
export default function FilterCategory() {
  return (
    <section>
      <h1>
        ¿Qué estás buscando? Explora nuestra amplia selección de moda para
        hombres y mujeres
      </h1>
      <div>
        <Link to="/">
          <picture>
            <img src={iconShirt} alt="icono de camisa" />
          </picture>
          <p>Hombres</p>
        </Link>
        <Link to="/">
          <picture>
            <img src={iconDress} alt="icono de vestido" />
          </picture>
          <p>Mujeres</p>
        </Link>
      </div>
    </section>
  );
}
