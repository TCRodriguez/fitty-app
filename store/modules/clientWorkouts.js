import fittyApiClient from '../../axios-http';





export default {
    namespaced: true,
    state: {
        workouts: [],
    },

    actions: {
        updateWorkouts({commit, rootState}, clientId) {
            return new Promise ((resolve, reject) => {
                fittyApiClient.get(`clients/${clientId}/workouts`, {
                    headers: {
                        'Authorization': rootState.login.token
                    }
                }) 
                .then(response => {
                    commit('UPDATE_WORKOUTS', response.data.data)
                    // this.clientWorkouts = response.data.data;
                    console.log("We got the workouts!")
                    // console.log(response.data.data)
                    resolve("Updated workouts.")
                })
                .catch(error => {
                    console.log("we DID NOT get our client workouts")
                    console.log(error)
                    reject(error)
                })
            })

        },
        createClientWorkout({rootState, dispatch}, payload) {
            return new Promise((resolve, reject) => {
                fittyApiClient.post(`clients/${payload.clientId}/workouts`, {
                    client_id: payload.clientId,
                    name: payload.name
                    },
                    { headers: {
                        'Authorization': rootState.login.token
                    },
                })
                .then(response => {
                    // console.log(response)
                    // fittyApiClient.get(`clients/${clientId}/workouts`, {
                    //     headers: {
                    //         'Authorization': rootState.login.token
                    //     }
                    // })
                    // .then(response => {
                    //     const payload = response.data.data
                    //     const workouts = payload.map(workout => {
                    //         return {
                    //             client_id: workout.clientId,
                    //             name: workout.name
                    //         }
                    //     })
                    //     dispatch('updateWorkouts', workouts)
                    // })
                    dispatch('updateWorkouts', payload.clientId)
                    resolve(response)
                })
                .catch(error => {
                    console.log(error.response)
                    reject(error)
                })
            })
        }
    },

    mutations: {
        UPDATE_WORKOUTS(state, workouts) {
            state.workouts = workouts
            // console.log(state.workouts)
        }
    }


}