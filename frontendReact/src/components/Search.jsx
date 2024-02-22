import "./navBar/NavBarStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Search() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/list-products/?search=${value}&type=form`);
  }
  return (
    <form className="input-search-container h-[2.5rem]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="search-btn">
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </form>
  );
}
