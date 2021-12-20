import RequestManager from './request.manager'

/* const BASE_URL = process.env.API_BASE_URL */
const BASE_URL = 'http://localhost:5000'
console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const NotificationService = {
    getNotificationData: (data: string) => {
        return RequestManager.get(
            withBase(`/notifications/get-notifications`),
            { data }
        )
    },
}
