import Vue from 'vue-native-core';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: "Can you see me?",
        token: null,
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    },
    actions: {
        updateToken(context, token) {
            context.commit('updateToken', token)
            
        }
    }
});

export default store;