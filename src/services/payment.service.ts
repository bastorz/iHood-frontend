import RequestManager from './request.manager'

/* const BASE_URL = process.env.API_BASE_URL */
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.ihood.es'
console.log(BASE_URL)
const withBase = (url: string) => `${BASE_URL}${url}`

export const PaymentsService = {
    getPaymentsData: (data: string) => {
        return RequestManager.get(withBase(`/payments/get-payments`), { data })
    },
}
