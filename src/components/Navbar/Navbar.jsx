import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import { Icon } from '@iconify/react'
import { useMainContext } from '../context/Main.context'

export const Navbar = () => {
    const {
        state: { user, isLoggedIn },
        logout,
    } = useMainContext()
    return (
        <div className="navbar">
            <div className="block-left-nav">
                <p className="ihood-title">iHood</p>
                <Icon className="iconhouse" icon="noto:house-with-garden" />
            </div>

            <div>
                {!isLoggedIn && (
                    <>
                        <div className="navegador">
                            <ul className="ysi">
                                <ul>
                                    <a className="links" href="/">
                                        Home
                                    </a>
                                </ul>
                                <ul>
                                    <a className="links" href="/sign-in">
                                        Acceder
                                    </a>
                                </ul>
                                <ul>
                                    <a className="links" href="/sign-up">
                                        Registrarse
                                    </a>
                                </ul>
                            </ul>
                        </div>
                    </>
                )}
            </div>

            {isLoggedIn && user.communityRole === 'user' ? (
                <>
                    <div className="registeredNavbar">
                        <Link className="links" to="/general-payments"></Link>
                        <Link
                            className="links"
                            to="/community-service-payments"
                        ></Link>
                        <Link className="links" to="/extra-payments"></Link>
                        <Link className="links" to="/check-notifications">
                            Notificaciones
                        </Link>
                        <Link className="links" to="/payments">
                            Pagos
                        </Link>
                        <Link className="links" to="/create-incidents">
                            Incidencias
                        </Link>
                        <Link className="links" to="/user-profile">
                            Mi perfil
                        </Link>

                        <button className="logoutBtn" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </>
            ) : null}

            {isLoggedIn && user.communityRole === 'admin' ? (
                <>
                    <div className="registeredNavbar">
                        <Link className="links" to="/general-payments"></Link>
                        <Link
                            className="links"
                            to="/community-service-payments"
                        ></Link>
                        <Link className="links" to="/extra-payments"></Link>
                        <Link className="links" to="/create-notifications">
                            Crear notificaciones
                        </Link>
                        <Link className="links" to="/payments">
                            Pagos
                        </Link>
                        <Link className="links" to="/generate-invitation">
                            Generar código
                        </Link>
                        <Link className="links" to="/check-incidents">
                            Incidencias
                        </Link>
                        <Link className="links" to="/master-profile">
                            Mi perfil
                        </Link>

                        <button className="logoutBtn" onClick={logout}>
                            Salir
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Navbar
