<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <text>The workoutId is: {{workoutId}}</text>
            <text>This is the Client Workout Screen, and these are the logs</text>
            <text
                class="optionsButton"
                @press="goToClientWorkoutsListScreen()"
            >Go back to Workout screen</text>
            <text
                class="optionsButton"
                @press="goToEditClientWorkoutScreen()"
            >Edit Workout Date</text>
            <text>
                {{clientWorkoutName}}
            </text>

            <text
                class="clientWorkoutExerciseLog"
                v-for="clientWorkoutExerciseLog in clientWorkoutExerciseLogs"
                :key="clientWorkoutExerciseLog.id"
                :clientWorkoutExerciseLog="clientWorkoutExerciseLog"
                @press="goToEditClientWorkoutExerciseLogScreen(clientWorkoutExerciseLog.id)"
            >
                {{clientWorkoutExerciseLog.exercise_name}}
                sets: {{clientWorkoutExerciseLog.sets}}
                reps: {{clientWorkoutExerciseLog.reps}}
                weight: {{clientWorkoutExerciseLog.weight}}
            </text>

            <touchable-opacity>
                <text class="optionsButton" @press="goToCreateClientWorkoutExerciseLogScreen">Add Log</text>
            </touchable-opacity>
            <button title="Go to Home screen" @press="goToHomeScreen"></button>
        </view>
    </scroll-view>
</template>

<script>
import store from '../store/store'
import fittyApiClient from '../axios-http.js';

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
            clientWorkoutName: null,
            clientWorkoutExerciseLogs: []
        }
    },
    computed: {
        clientWorkoutExerciseLogs() {
            return this.clientWorkoutExerciseLogs.map(clientWorkoutExerciseLog => {
                return {
                    id: clientWorkoutExerciseLog.id,
                    exerciseName: clientWorkoutExerciseLog.exercise_name,
                    sets: clientWorkoutExerciseLog.sets,
                    reps: clientWorkoutExerciseLog.reps,
                    weight: clientWorkoutExerciseLog.weight,
                    duration: clientWorkoutExerciseLog.duration,
                    notes: clientWorkoutExerciseLog.notes
                }
            });
        }
    },
    mounted() {
        this.workoutId = this.navigation.getParam('workoutId')
        this.clientId = this.navigation.getParam('clientId')
        this.clientWorkoutName = this.navigation.getParam('clientWorkoutName')


        // * Don't need this API call anymore...
        // fittyApiClient.get(`clients/${this.navigation.getParam('clientId')}/workouts/${this.navigation.getParam('workoutId')}`, {
        //     headers: {
        //         'Authorization': store.state.token
        //     }
        // })
        // .then(response => {
        //     console.log(response.data.data.logs)
        //     this.clientWorkoutExerciseLogs = response.data.data.logs
        // })
        // .catch(error => {
        //     console.log(error.response)
        // })
        this.$store.dispatch('clientWorkouts/getClientWorkoutExerciseLogs', this.workoutId)
        .then(response => {
            console.log("RESPONSE IS HERE")
            console.log(response)
            this.clientWorkoutExerciseLogs = response;
        })
        console.log("We've got the logs!")
        console.log(this.clientWorkoutExerciseLogs)
    },
    methods: {
        goToEditClientWorkoutScreen() {
            this.navigation.navigate('EditClientWorkout', {
                clientId: this.clientId,
                workoutId: this.workoutId,
                clientWorkoutName: this.clientWorkoutName
            })
        },
        goToEditClientWorkoutExerciseLogScreen(clientWorkoutExerciseLogId) {
            console.log("This is the client id: " + this.clientId)
            console.log("This is the workout id: " + this.workoutId)
            console.log("This is the log id: " + clientWorkoutExerciseLogId)
            this.navigation.navigate('EditClientWorkoutExerciseLog', {
                clientId: this.clientId,
                workoutId: this.workoutId,
                clientWorkoutExerciseLogId: clientWorkoutExerciseLogId
            })
        },
        goToCreateClientWorkoutExerciseLogScreen() {
            console.log("This is the workoutId: " + this.workoutId)
            this.navigation.navigate('CreateClientWorkoutExerciseLog', {
                clientId: this.clientId,
                workoutId: this.workoutId,
            })
        },
        goToClientWorkoutsListScreen() {
            this.navigation.navigate('ClientWorkouts', {
                clientId: this.clientId
            })
        },
        goToHomeScreen() {
            this.navigation.navigate("Home")
        }
    }
}
</script>
<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .clientWorkoutExerciseLog {
        text-align: left;
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }

    .optionsButton {
        text-align: center;
        background-color: green;
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }
</style>