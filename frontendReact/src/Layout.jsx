import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
