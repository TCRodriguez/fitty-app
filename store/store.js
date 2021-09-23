import login from '../store/modules/login';
import clients from '../store/modules/clients';
import clientWorkouts from '../store/modules/clientWorkouts';

import Vue from 'vue-native-core';
import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
    modules: {
        login,
        clients,
        clientWorkouts,
    },
    state: {
        message: "Can you see me?",
    },
});

export default store;