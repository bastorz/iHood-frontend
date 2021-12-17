import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="block-left-nav">
    <p>TE VEO MUY ENCHICHADO</p></div>
    <div className="block-right-nav">
        <Link className= "links" to="/">Home  </Link>
        <Link className= "links" to="/create-notification">Crear notificacion</Link>
        <Link className= "links" to="/create-incidents">Crear incidencia</Link>
        <Link className= "links" to="/enter-invitation">mete la invasionsilla</Link>
        <Link className= "links" to="/sign-in">Metete</Link>
        <Link className= "links" to="/sign-up">animate pibe</Link>
        <Link className= "links" to="/generate-invitation">Invitaciones</Link></div>

    </nav>
  );
}
 
export default Navbar;