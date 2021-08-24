import fittyApiClient from '../../axios-http';
import store from '../store.js';


// export const namespaced = true;

// export const state = {
//     list: []
// }

// export const actions = {
//     updateClientList(context) {
//         fittyApiClient.get('clients', {
//             headers: {
//                 Authorization: store.state.token
//             }
//         })
//         .then(response => {
//             console.log("it worked!");
//             console.log(response.data.data);
//             const payload = response.data.data
//             const clients = payload.map(client => {
//                 return {
//                     id: client.id,
//                     text: client.first_name
//                 }
//             })
//             store.commit('clients/updateClientList', clients)
//         })
//         .catch(error => {
//             console.log("it didn't work!")
//             console.log(error)
//         })
//     }
// }

// export const mutations = {
//     updateClientList(state, clients) {
//         state.clients = clients
//     }
// }

export default {
    namespaced: true,
    state: {
        list: []
    },

    actions: {
        updateClientList(context) {
            fittyApiClient.get('clients', {
                headers: {
                    Authorization: store.state.token
                }
            })
            .then(response => {
                console.log("it worked!");
                console.log(response.data.data);
                const payload = response.data.data
                const clients = payload.map(client => {
                    return {
                        id: client.id,
                        text: client.first_name
                    }
                })
                context.commit('updateClientList', clients)
            })
            .catch(error => {
                console.log("it didn't work!")
                console.log(error)
            })
        },
        createClient({commit}) {
            // return new Promise ((resolve, reject) => {
            //     fittyApiClient.get('clients', {
            //         headers: {
            //             Authorization: store.state.token
            //         }
            //     })
            //     .then(response => {
            //         console.log("it worked!");
            //         console.log(response.data.data);
            //         const payload = response.data.data
            //         const clients = payload.map(client => {
            //             return {
            //                 id: client.id,
            //                 text: client.first_name
            //             }
            //         })
            //         context.commit('updateClientList', clients)
            //         resolve(payload)
            //     })
            //     .catch(error => {
            //         console.log("it didn't work!")
            //         console.log(error)
            //         reject(error)
            //     })
            // })
        }
    },
    mutations: {
        updateClientList(state, clients) {
            state.list = clients
        }
    }
}