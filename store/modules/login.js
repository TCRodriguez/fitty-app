import fittyApiClient from '../../axios-http'

export default {
    namespaced: true,
    state: {
        token: null
    },

    actions: {
        login(context, payload) {
            return new Promise ((resolve, reject) => {
                fittyApiClient.post('login', {
                    email: payload.email,
                    password: payload.password
                })
                .then(response => {
                    context.commit('UPDATE_TOKEN', `Bearer ${response.data.data.token}`)
                    resolve(response.data.data.token)
                })
                .catch(error => {
                    console.log(error.response)
                    reject(error)
                })
            })
        },
    },

    mutations: {
        UPDATE_TOKEN(state, token) {
            state.token = token
        },
    },
}