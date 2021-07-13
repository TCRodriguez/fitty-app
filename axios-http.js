import axios from 'axios'


// const fittyApiClient = axios.create({
//     baseURL: 'https://44041ed1744c.ngrok.io',
//     headers: {
//         Authorization: 'Bearer 50|fVKzbqOYSlhPzVQsHDw1xtlHfGkBqDSUB6mAVgpD'
//     }
// });

// export default {
    
//     auth: {
//         getClients() {
//             return fittyApiClient.get('/clients')
//         }

//     }
// };
export default axios.create({
    baseURL: 'https://022b4dca51e3.ngrok.io/api/',
    headers: {
        Authorization: 'Bearer 51|pauKktIO3qZOwFC0cVWSuxmownzHLRGuCYwi2AIa'
    }
});
