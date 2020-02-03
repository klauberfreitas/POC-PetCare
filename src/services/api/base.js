// /* eslint-disable complexity */
// import axios from 'axios'
// import qs from 'qs'
// import defaultsDeep from 'lodash.defaultsdeep'
// import loading from 'commons/utils/loading'
// import { getAuthToken } from 'commons/utils/auth'
// import { validateToken, onResponseError, addTimestampRequest } from './interceptors'

// const getConfig = () => ({
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': getAuthToken(),
//         'Accept-Language': window.localStorage.i18nextLng || 'pt-BR',
//     },
//     // loader: true,
//     paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
// })

// const base = (baseURL, config = {}) => {
//     const axiosApi = axios.create({
//         mode: 'cors',
//         baseURL,
//         ...config,
//     })

//     axiosApi.request = (path, options) => {
//         const mergedOptions = defaultsDeep(options, getConfig())
//         // const loadingId = mergedOptions.loader && loading.show()

//         return axiosApi(path, mergedOptions)
//             .then((resp) => {
//                 if (loadingId) loading.close(loadingId)
//                 return mergedOptions.full ? resp : resp.data
//             })
//             .catch((error) => {
//                 if (loadingId) loading.close(loadingId)
//                 throw error
//             })
//     }

//     // axiosApi.interceptors.request.use(addTimestampRequest)
//     // axiosApi.interceptors.request.use(validateToken)
//     // axiosApi.interceptors.response.use(null, onResponseError)

//     return axiosApi
// }

// export { getConfig }

// export default base
