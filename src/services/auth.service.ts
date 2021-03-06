import RequestManager from './request.manager'

const BASE_URL = 'http://localhost:5000'

/* process.env.REACT_APP_BASE_URL || 'https://api.ihood.es' */

console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const AuthService = {
    signUp: (user: Record<string, any>) => {
        return RequestManager.post(withBase(`/auth/sign-up`), user)
    },

    signIn: (user: { user: string; password: string }) => {
        return RequestManager.post(withBase(`/auth/sign-in`), user)
    },

    whoami: () => {
        return RequestManager.get(withBase(`/auth/whoami`))
    },

    createCommunity: (community: { community: string }) => {
        return RequestManager.post(withBase(`/communities`), community)
    },
}
