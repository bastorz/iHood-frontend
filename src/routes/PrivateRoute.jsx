import { Navigate } from 'react-router-dom'
import { useMainContext } from '../components/context/Main.context'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const {
        state: { user, isLoggedIn },
    } = useMainContext()

    const { setUser } = useMainContext()

    console.log(setUser)

    return isLoggedIn ? <Component /> : <Navigate to="/sign-in" />
}
