<template>
    <view>
        <text>This is the Create Workout Screen</text>
        <text>This is the clientId: {{navigation.getParam('clientId')}}</text>
        
        <text-input class="input-field" placeholder="Date (YYYY-MM-DD)..." v-model="name"></text-input>
        <text>{{date}}</text>
        <touchable-opacity>
            <text class="save-button" @press="createClientWorkout()">Save</text>
        </touchable-opacity>
    </view>
</template>

<script>
import store from "../store/store.js"
import fittyApiClient from '../axios-http'
export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            clientId: this.navigation.getParam('clientId'),
            name: ''
        }
    },
    created() {
        this.clientId = this.navigation.getParam('clientId')
    },
    methods: {
        createClientWorkout() {
            fittyApiClient.post(`clients/${this.navigation.getParam('clientId')}/workouts`, {
                client_id: this.clientId,
                name: this.name
                },
                { headers: {
                    'Authorization': store.state.token
                },
            })
            .then(response => {
                console.log(response)
                this.navigation.navigate('ClientWorkout', {
                    client_id: this.clientId
                })
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
}
</script>
<style scoped>
    .container {
        margin-left: 5;
    }

    .input-field {
        font-size: 35;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
        padding-left: 5;
        padding-top: 5;
        padding-bottom: 5;
    }

    .save-button {
        border-color: black;
        border-width: 3;
        border-radius: 5;
        width: 17%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        margin-top: 10;
    }
</style>