import FilterCategory from "./components/FilterCategory.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <FilterCategory />
      <Products />
      <Footer />
    </>
  );
}
