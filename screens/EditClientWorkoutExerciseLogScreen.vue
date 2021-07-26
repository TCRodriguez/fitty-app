<template>
    <view class="container">
        <text>This is the Edit Exercise Log Screen</text>
        <text>This is the workoutId: {{navigation.getParam('workoutId')}}</text>
        <text-input class="input-field" placeholder="Choose exercise...(ID for now)" v-model="exerciseId"></text-input>
        <text>{{exerciseId}}</text>
        <text-input class="input-field" keyboardType="numeric" placeholder="Sets..." v-model="sets"></text-input>
        <text>{{sets}}</text>
        <text-input class="input-field" keyboardType="numeric" placeholder="Reps..." v-model="reps"></text-input>
        <text>{{reps}}</text>
        <text-input class="input-field" keyboardType="numeric" placeholder="Weight..." v-model="weight"></text-input>
        <text>{{weight}}</text>
        <text-input class="input-field" keyboardType="numeric" placeholder="Duration..." v-model="duration"></text-input>
        <text>{{duration}}</text>

        <touchable-opacity class="save-button">
            <text @press="editClientWorkoutExerciseLog()">Save changes</text>
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
            workoutId: null,
            exerciseId: null,
            sets: 0,
            reps: 0,
            weight: 0,
            duration: 0,
            completedAt: null,
        }
    },
    created() {
        console.log("The information you seek:")
        console.log(this.navigation.getParam('clientId'))
        console.log(this.navigation.getParam('workoutId'))
        console.log(this.navigation.getParam('clientWorkoutExerciseLogId'))
        fittyApiClient.get(`clients/${this.navigation.getParam('clientId')}/workouts/${this.navigation.getParam('workoutId')}/exercise-logs/${this.navigation.getParam('clientWorkoutExerciseLogId')}`, {
            headers: {
                'Authorization': store.state.token
            }
        })
        .then(response => {
            console.log(response)
            this.workoutId = response.data.data.workout_id
            this.exerciseId = response.data.data.exercise_id
            this.sets = response.data.data.sets
            this.reps = response.data.data.reps
            this.weight = response.data.data.weight
            this.duration = response.data.data.duration
            this.completedAt = response.data.data.completed_at
        })
        .catch(error => {
            console.log(error.response)
        })
    },
    methods: {
        editClientWorkoutExerciseLog() {
            fittyApiClient.put(`clients/${this.navigation.getParam('clientId')}/workouts/${this.workoutId}/exercise-logs/${this.navigation.getParam('clientWorkoutExerciseLogId')}`, {
                workout_id: this.workoutId,
                exercise_id: this.exerciseId,
                sets: this.sets,
                reps: this.reps,
                weight: this.weight,
                duration: this.duration,
                completed_at: this.completedAt,
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
                /* background-color: green; */
        /* text-align: center; */
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 35;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        /* border: 2px solid black; */
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
        width: 30%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        /* justify-content: end; */
        margin-top: 10;
    }
</style>