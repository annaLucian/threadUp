import "./FooterStyle.css"; // Archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer>
      {/* Iconos dentro del footer con enlaces */}
      <a href="/" className="cursor-pointer">
        <i className="fas fa-home footer-icons"></i>
      </a>
      <a href="#" className="cursor-pointer">
        <i className="fas fa-heart footer-icons"></i>
      </a>
      <a
        href="https://mail.google.com"
        className="cursor-pointer"
        target="_blank"
      >
        <i className="fas fa-envelope footer-icons"></i>
      </a>
      <a className="cursor-pointer">
        <i className="fas fa-user footer-icons"></i>
      </a>
    </footer>
  );
};

export default Footer;
