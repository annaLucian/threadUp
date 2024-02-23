import SearchIcon from "../assets/images/search-icon.png";
export default function NotFound({ search }) {
  return (
    <section
      className="mt-[16rem] flex flex-col  items-center"
      style={{ height: "calc(-20rem + 100vh )" }}
    >
      <div>
        <img src={SearchIcon} alt="icon buscador" className="w-[10rem]" />
      </div>
      <p className="font-bold text-[1.2rem] pt-[2rem]">
        No se encontraron resultados para "{search}"
      </p>
    </section>
  );
}
