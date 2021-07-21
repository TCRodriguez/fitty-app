import axios from 'axios'
import store from "./store/store.js";

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

// const config = {
//     headers: {
        
//     }
// }







console.log("Token: " + store.state.token)
export default axios.create({
    baseURL: 'https://46fa6041ae02.ngrok.io/api/',

});
