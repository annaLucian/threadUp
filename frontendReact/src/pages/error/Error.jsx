import { useRouteError } from "react-router-dom";
import IconError from "../../assets/images/error.png";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="px-[16rem] py-[4rem] flex flex-col justify-center items-center">
      <div>
        <img src={IconError} alt="icon error" className="w-[20rem]" />
      </div>
      <div id="error-page" className="text-center flex flex-col items-center">
        <p className="font-bold text-[2.5rem] mt-[1rem]">Oops!</p>
        <h1 className="font-bold text-[2rem] mt-[1rem]">
          Lo sentimos, Página no encontrada.
        </h1>
        <p className=" text-[1.1rem] mt-[1rem]">
          Te recomendamos regresar a la página de inicio para continuar
          explorando nuestro sitio:
        </p>

        <a
          href="/"
          className="rounded w-[10%] font-bold flex gap-[1rem] items-center text-[#303b5d] py-[0.6rem] justify-center text-[1.3rem] text-white mt-[1rem] underline"
        >
          Home
        </a>
      </div>
    </section>
  );
}
