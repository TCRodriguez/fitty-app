<template>
    <view>
        <text>This is the Edit Workout Screen</text>
        <text>This is the clientId: {{navigation.getParam('clientId')}}</text>

        <text-input class="input-field" placeholder="Date (YYYY-MM-DD)..." v-model="name"/>
        <text>{{name}}</text>

        <touchable-opacity>
            <text class="save-button" @press="editClientWorkout()">Save changes</text>
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
            clientId: null,
            workoutId: null,
            name: ''
        }
    },
    mounted() {
        this.clientId = this.navigation.getParam('clientId')
        this.workoutId = this.navigation.getParam('workoutId')
        this.name = this.navigation.getParam('clientWorkoutName')
    },
    methods: {
        editClientWorkout() {
            const payload = {
                clientId: this.clientId,
                workoutId: this.workoutId,
                name: this.name
            }
            this.$store.dispatch('clientWorkouts/editClientWorkout', payload)
            .then(response => {
                console.log("ARE WE HERE?!")
                console.log(response)
                // this.navigation.navigate('ClientWorkout', {
                //     client_id: response.data.data.client_id
                // })
            })
            this.navigation.navigate('ClientWorkout', {
                client_id: this.clientId,
                workoutId: this.workoutId
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