import fittyApiClient from '../axios-http'


import Vue from 'vue-native-core';
import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        message: "Can you see me?",
        token: null,
        clients: [],
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        },
        updateClientList(state, clients) {
            state.clients = clients
        }
    },
    actions: {
        updateToken(context, token) {
            context.commit('updateToken', token)
        },
        updateClientList(context) {
            fittyApiClient.get('clients', {
                headers: {
                    Authorization: store.state.token
                }
            })
            .then(response => {
                console.log("it worked!");
                console.log(response.data.data);
                // store.state.clients = response.data.data;
                // this.results = response.data.data;
                const payload = response.data.data
                const clients = payload.map(client => {
                    return {
                        id: client.id,
                        text: client.first_name
                    }
                })
                store.commit('updateClientList', clients)
            })
            .catch(error => {
                console.log("it didn't work!")
                console.log(error)
            })
        }
    }
});

export default store;