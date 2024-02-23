import "./FooterStyle.css"; // Archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer>
      {/* Iconos dentro del footer con enlaces */}
      <a href="/" className="cursor-pointer" data-testid="home-link">
        <i className="fas fa-home footer-icons"></i>
      </a>
      <a href="#" className="cursor-pointer">
        <i className="fas fa-heart footer-icons" data-testid="heart-link"></i>
      </a>
      <a
        href="https://mail.google.com"
        className="cursor-pointer"
        target="_blank"
        data-testid="email-link"
      >
        <i className="fas fa-envelope footer-icons" data-testid="mail-link"></i>
      </a>
      <a className="cursor-pointer" data-testid="user-link">
        <i className="fas fa-user footer-icons"></i>
      </a>
    </footer>
  );
};

export default Footer;
