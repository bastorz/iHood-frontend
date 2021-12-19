import { Link } from "react-router-dom";
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <div className="navbar">
      <div className="block-right-nav">
        <Link className="links" to="/sign-up">Contacta con nosotros</Link>
        <Link className="links" to="/generate-invitation">Privacidad</Link>
      </div>
    </div>
  );
}
