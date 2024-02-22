import "./FooterStyle.css"; // Archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer>
      {/* Iconos dentro del footer con enlaces */}
      <a href="casa.html">
        <i className="fas fa-home footer-icons"></i>
      </a>
      <a href="corazon.html">
        <i className="fas fa-heart footer-icons"></i>
      </a>
      <a href="sobre.html">
        <i className="fas fa-envelope footer-icons"></i>
      </a>
      <a href="persona.html">
        <i className="fas fa-user footer-icons"></i>
      </a>
    </footer>
  );
};

export default Footer;
