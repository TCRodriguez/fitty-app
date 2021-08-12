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
        updateClientList(context, clients) {
            
            context.commit('updateClientList', clients)
        }
    }
});

export default store;