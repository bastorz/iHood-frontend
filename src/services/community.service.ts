import RequestManager from './request.manager'

/* const BASE_URL = process.env.API_BASE_URL */
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.ihood.es/'
console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const CommunityService = {
    /* generateTenantInvitation: (id: string) => {
        return RequestManager.post(withBase(`/communities/invite`), {})
    }, */

    claimTenantInvitation: (id: string) => {
        return RequestManager.post(
            withBase(`/communities/generate-invitation`),
            {}
        )
    },

    sendInvitationCode: (newRecord: Record<any, String>) => {
        return RequestManager.post(
            withBase(`/communities/check-invitation`),
            newRecord
        )
    },
}
