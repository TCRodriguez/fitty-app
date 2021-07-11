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
    baseURL: 'https://a61358cccea8.ngrok.io/api/',
    headers: {
        Authorization: 'Bearer 50|fVKzbqOYSlhPzVQsHDw1xtlHfGkBqDSUB6mAVgpD'
    }
});
