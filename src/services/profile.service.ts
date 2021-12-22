import RequestManager from './request.manager'

/* const BASE_URL = process.env.API_BASE_URL */
const BASE_URL = 'http://localhost:5000'
console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const ProfileService = {
    /* generateTenantInvitation: (id: string) => {
        return RequestManager.post(withBase(`/communities/invite`), {})
    }, */

    sendProfileData: (data: Record<string, any>) => {
        return RequestManager.post(withBase(`/users/update`), data)
    },

    sendInvitationCode: (code: string) => {
        return RequestManager.post(
            withBase(`/communities/generate-invitation`),
            {}
        )
    },
}
