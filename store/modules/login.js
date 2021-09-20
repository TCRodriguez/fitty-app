import fittyApiClient from '../../axios-http'

export default {
    namespaced: true,
    state: {
        token: null
    },

    actions: {
        login(context, payload) {
            return new Promise ((resolve, reject) => {
                console.log(payload.email)
                console.log(payload.password)
                fittyApiClient.post('login', {
                    email: payload.email,
                    password: payload.password
                })
                .then(response => {
                    console.log("Login route hit");
                    console.log(response.data.data)
                    // this.$store.dispatch('updateToken', `Bearer ${response.data.data.token}`)
                    console.log(response.data.data.token)
                    context.commit('UPDATE_TOKEN', `Bearer ${response.data.data.token}`)
                    // console.log(state.token);
                    // this.navigation.navigate('Home')
                    resolve(response.data.data.token)
                })
                .catch(error => {
                    console.log(error.response)
                    console.log("There was a problem logging in.")
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