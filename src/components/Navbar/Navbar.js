import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="block-left-nav">
        <p className="ihood-title">iHood</p>
        <Icon className="iconhouse" icon="noto:house-with-garden" />
      </div>
      <div className="block-right-nav">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/create-notification">Notificaciones</Link>
        <Link className="links" to="/create-incidents">Incidencias</Link>
        <Link className="links" to="/enter-invitation">colocar código</Link>
        <Link className="links" to="/sign-in">Logearse</Link>
        <Link className="links" to="/sign-up">Registrarse</Link>
        <Link className="links" to="/generate-invitation">Generar código</Link>
      </div>

    </div>
  );
}

export default Navbar;
