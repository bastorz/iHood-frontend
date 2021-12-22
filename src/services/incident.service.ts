import RequestManager from './request.manager'

/* const BASE_URL = process.env.API_BASE_URL */
const BASE_URL = 'http://localhost:5000'
console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const IncidentService = {
    getIncidentData: (data: string) => {
        return RequestManager.get(withBase(`/incidents/get-incidents`), {
            data,
        })
    },
    postIncidentData: (data: Record<string, any>) => {
        return RequestManager.post(withBase(`/incidents/post-incidents`), {
            data,
        })
    },
}
