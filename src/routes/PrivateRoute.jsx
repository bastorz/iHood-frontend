import { Navigate } from 'react-router-dom'
import { useMainContext } from '../components/context/Main.context'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const {
        state: { isLoggedIn },
    } = useMainContext()

    return isLoggedIn ? <Component /> : <Navigate to="/sign-in" />
}
