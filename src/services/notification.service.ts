import RequestManager from './request.manager'

/* const BASE_URL = process.env.API_BASE_URL */
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.ihood.es'
console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const NotificationService = {
    getNotificationData: (data: string) => {
        return RequestManager.get(
            withBase(`/notifications/get-notifications`),
            { data }
        )
    },
    postNotificationData: (data: Record<string, any>) => {
        return RequestManager.post(
            withBase(`/notifications/post-notifications`),
            {
                data,
            }
        )
    },
}
