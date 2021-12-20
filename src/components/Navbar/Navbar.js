import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import { Icon } from '@iconify/react';
import { useMainContext } from "../context/Main.context"

export const Navbar = () => {
  const { state: { user, isLoggedIn }, logout } = useMainContext()
  return (
    <div className="navbar">
      <div className="block-left-nav">
        <p className="ihood-title">iHood</p>
        <Icon className="iconhouse" icon="noto:house-with-garden" />
      </div>
      <div>{user?.name}</div>
      <div className="block-right-nav">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/create-notification">Notificaciones</Link>
        <Link className="links" to="/create-incidents">Incidencias</Link>
        <Link className="links" to="/enter-invitation">colocar código</Link>
        {!isLoggedIn && (<>
          <Link className="links" to="/sign-in">Logearse</Link>
          <Link className="links" to="/sign-up">Registrarse</Link>
        </>)}
        {isLoggedIn ? <><button onClick={logout}>Logouyt</button></> : null}
        {/* {user.role === "admin" ? (<>
          <Link className="links" to="/sign-in">Logearse</Link>
        </>) : null} */}
        <Link className="links" to="/generate-invitation">Generar código</Link>
      </div>
    </div>
  );
}

export default Navbar;
