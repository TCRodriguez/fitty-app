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
            clientWorkoutExerciseLogId: null,
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
        this.workoutId = this.navigation.getParam('workoutId')
        this.clientWorkoutExerciseLogId = this.navigation.getParam('clientWorkoutExerciseLogId')
        // fittyApiClient.get(`clients/${this.navigation.getParam('clientId')}/workouts/${this.navigation.getParam('workoutId')}/exercise-logs/${this.navigation.getParam('clientWorkoutExerciseLogId')}`, {
        //     headers: {
        //         'Authorization': rootState.login.token
        //     }
        // })
        this.clientWorkoutExerciseLogId = this.navigation.getParam('clientWorkoutExerciseLogId')
        const ids = {
            clientWorkoutId: this.workoutId,
            clientWorkoutExerciseLogId: this.clientWorkoutExerciseLogId
        }
        this.$store.dispatch('clientWorkouts/getClientWorkoutExerciseLog', ids)
        .then(response => {
            console.log("Ichikuni")
            console.log(response)
            // this.clientWorkoutExerciseLogId = response.clientWorkoutExerciseLogId
            // this.workoutId = response.workout_id
            this.exerciseId = response.exercise_id
            this.sets = response.sets
            this.reps = response.reps
            this.weight = response.weight
            this.duration = response.duration
            this.completedAt = response.completed_at
        })
        .catch(error => {
            console.log(error.response)
        })
    },
    methods: {
        editClientWorkoutExerciseLog() {
            // fittyApiClient.put(`clients/${this.navigation.getParam('clientId')}/workouts/${this.workoutId}/exercise-logs/${this.navigation.getParam('clientWorkoutExerciseLogId')}`, {
            //     workout_id: this.workoutId,
            //     exercise_id: this.exerciseId,
            //     sets: this.sets,
            //     reps: this.reps,
            //     weight: this.weight,
            //     duration: this.duration,
            //     completed_at: this.completedAt,
            //     },
            //     { headers: {
            //         'Authorization': store.state.token
            //     },
            // })
            // .then(response => {
            //     console.log(response)
            //     this.navigation.navigate('ClientWorkout', {
            //         client_id: this.clientId
            //     })
            // })
            // .catch(error => {
            //     console.log(error.response)
            // })
            const payload = {
                workoutId: this.workoutId,
                clientWorkoutExerciseLogId: this.clientWorkoutExerciseLogId,
                exerciseId: this.exerciseId,
                sets: this.sets,
                reps: this.reps,
                weight: this.weight,
                duration: this.duration,
                completed_at: this.completedAt,
            }

            this.$store.dispatch('clientWorkouts/editClientWorkoutExerciseLog', payload)
            // .then(response => {
            //     console.log(response)
            // })
            this.navigation.navigate('ClientWorkout', {
                // clientWorkoutName
                clientWorkoutId: this.workoutId
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

    .save-button,
    .delete-button {
        border-color: black;
        border-width: 3;
        border-radius: 5;
        width: 30%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        margin-top: 10;
    }
    
    .delete-button {
        background-color: red;
    }
</style>