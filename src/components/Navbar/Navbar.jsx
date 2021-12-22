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
                                    <a href="/">Home</a>
                                </ul>
                                <ul>
                                    <a href="/sign-in">Logearse</a>
                                </ul>
                                <ul>
                                    <a href="/sign-up">Registrarse</a>
                                </ul>
                            </ul>
                        </div>
                    </>
                )}
            </div>

            <div className="navegador">
                <ul className="ysi">
                    <ul>
                        <a href="/generate-invitation">Home</a>
                    </ul>
                    <ul>
                        <a href="/create-notification">Logearse</a>
                    </ul>
                    <ul>
                        <a href="/sign-up">Registrarse</a>
                    </ul>
                </ul>
            </div>

            <div>
                {isLoggedIn && (
                    <>
                        <button onClick={logout}>Logout</button>
                        <Link className="links" to="/generate-invitation">
                            codigo
                        </Link>
                        <Link className="links" to="/create-notification">
                            Notificaciones
                        </Link>
                        <Link className="links" to="/create-incidents">
                            Incidencias
                        </Link>
                        <Link className="links" to="/enter-invitation">
                            colocar código
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar
