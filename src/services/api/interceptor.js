// /* eslint-disable complexity */
// /* eslint-disable prefer-promise-reject-errors */

// import at from 'lodash/at'
// import toast from 'commons/utils/toast'
// import { updateToken, getAuthToken, isAuthenticated, logout } from 'commons/utils/auth'
// import moment from 'commons/utils/moment'

// const STATUS = {
//     400: 'BAD_REQUEST',
//     401: 'UNAUTHORIZED',
//     403: 'FORBIDDEN',
//     500: 'FATAL',
//     503: 'UNAVAILABLE',
//     504: 'TIMEOUT',
// }

// const throwToast = (message) => message && toast.error(message, { toastId: message })

// const onPermissionError = (message) => {
//     if (!isAuthenticated()) {
//         logout(() => console.log('Permission Error', message))
//     }

//     throwToast(message)
// }

// const errors = {
//     BAD_REQUEST: throwToast,
//     UNAUTHORIZED: onPermissionError,
//     FORBIDDEN: onPermissionError,
//     FATAL: throwToast,
//     UNAVAILABLE: throwToast,
//     TIMEOUT: throwToast,
//     UNKNOWN: throwToast,
// }

// const buildError = (status, message) => {
//     const errorCode = STATUS[status]
//     const error = errors[errorCode] || errors.UNKNOWN

//     error(message)
// }

// const onResponseError = (error) => {
//     const [responseStatus] = at(error, 'response.status')
//     const [responseMessage] = at(error, 'response.data.message')
//     const [responseDetails] = at(error, 'response.data.details')
//     const [errorMessage] = at(error, 'response.data.errors.message')

//     let message

//     if (responseMessage) {
//         message = responseMessage
//     } else {
//         message = error.message || 'Generic error'
//     }

//     if (responseDetails instanceof Object) {
//         Object.keys(responseDetails).forEach((key) => {
//             responseDetails[key].map((msg) => buildError(responseStatus, msg))
//         })
//     } else {
//         buildError(responseStatus, errorMessage || responseDetails || responseMessage)
//     }

//     return Promise.reject({ ...error, message })
// }

// const appendTokenSSO = (config) => {
//     config.headers.Authorization = getAuthToken()
//     return config
// }

// const validateToken = async (data) => {
//     await updateToken()
//     return appendTokenSSO(data)
// }

// const addTimestampRequest = (config) => ({
//     ...config,
//     axiosRequestTimestamp: moment().toJSON(),
// })

// export { validateToken, onResponseError, addTimestampRequest }
