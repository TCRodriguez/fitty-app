<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <!-- <h1>test</h1> -->
            <text>The workoutId is: {{workoutId}}</text>
            <text>This is the Client Workout Screen, and these are the logs</text>

            <text
                class="clientWorkoutExerciseLog"
                v-for="clientWorkoutExerciseLog in clientWorkoutExerciseLogs"
                :key="clientWorkoutExerciseLog.id"
                :clientWorkoutExerciseLog="clientWorkoutExerciseLog"
            >
            {{clientWorkoutExerciseLog.exercise_name}}
            sets: {{clientWorkoutExerciseLog.sets}}
            reps: {{clientWorkoutExerciseLog.reps}}
            weight: {{clientWorkoutExerciseLog.weight}}
            
            </text>
            <touchable-opacity>
                <text class="createClientWorkoutExerciseLogButton" @press="goToCreateClientWorkoutExerciseLogScreen">Add Log</text>
            </touchable-opacity>
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
            workoutId: null,
            clientWorkoutExerciseLogs: []
        }
    },
    computed: {
        // ? Hm, this currently doesn't get called...
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
    created() {
        // ? Was going to do an Axios call here, but we already have the logs...do they make it here?
        // console.log("The client ID is: " + this.navigation.getParam('clientId'))
        // console.log("The workout ID is: " + this.navigation.getParam('workout_id'))
        this.workoutId = this.navigation.getParam('workout_id')
        fittyApiClient.get(`clients/${this.navigation.getParam('clientId')}/workouts/${this.navigation.getParam('workout_id')}`, {
            headers: {
                'Authorization': store.state.token
            }
        })
        .then(response => {
            console.log(response.data.data.logs)
            this.clientWorkoutExerciseLogs = response.data.data.logs
            // this.workoutId = response.data.data.id
        })
        .catch(error => {
            console.log(error.response)
        })
        // this.clientWorkoutExerciseLogs = this.navigation.getParam('clientWorkoutExerciseLogs')
        console.log("We've got the logs!")
        console.log(this.clientWorkoutExerciseLogs)

    },
    methods: {
        goToCreateClientWorkoutExerciseLogScreen() {
            console.log("This is the workoutId: " + this.workoutId)
            this.navigation.navigate('CreateClientWorkoutExerciseLog', {
                workoutId: this.workoutId,
            })
        }
    }
}
</script>
<style scoped>

    .container {
        /* flex: 4; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 25%; */
    }


    .clientWorkoutExerciseLog {
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        /* border: 2px solid black; */
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }

    .createClientWorkoutExerciseLogButton {
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