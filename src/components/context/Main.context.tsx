import * as React from 'react'

interface MainContext {
    state: {
        user?: Record<string, any>
        isLoggedIn: boolean
    },
    setState: React.Dispatch<React.SetStateAction<MainContext>>
}

const Context = React.createContext<MainContext | null>(null)

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = React.useState<MainContext["state"]>({
        user: undefined,
        isLoggedIn: false
    })

    // @ts-ignore
    return <Context.Provider value={{state, setState}}>{children}</Context.Provider>
}

function useMainContext() {
    const ctx = React.useContext(Context)
    if (!ctx) {
        throw new Error(
            'useMainContext should be used inside a MainContextProvider'
        )
    }

    const setUser = (user) => {
        ctx.setState(oldState => ({...oldState, user: user, isLoggedIn: true}))
    }

    const logout = () => {
        ctx.setState(oldState => ({...oldState, user: undefined, isLoggedIn: false}))
    }

    return { state: ctx.state, setUser, logout }
}

export { MainContextProvider, useMainContext }
