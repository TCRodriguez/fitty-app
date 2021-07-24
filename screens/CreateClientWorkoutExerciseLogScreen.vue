<template>
    <view class="container">
        <text>This is the Create Exercise Log Screen</text>
        <text>This is the workoutId: {{navigation.getParam('workoutId')}}</text>
        <text-input class="input-field" placeholder="Choose exercise...(ID for now)" v-model="exerciseId"></text-input>
        <!-- <text>{{date}}</text> -->
        <text-input class="input-field" placeholder="Sets..." v-model="sets"></text-input>
        <text-input class="input-field" placeholder="Reps..." v-model="reps"></text-input>
        <text-input class="input-field" placeholder="Weight..." v-model="weight"></text-input>
        <text-input class="input-field" placeholder="Duration..." v-model="duration"></text-input>

        <touchable-opacity>
            <text class="save-button" @press="createClientWorkoutExerciseLog()">Save</text>
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
        console.log("This is the workoutId that came from ClientWorkout: " + this.navigation.getParam('workoutId'))
        this.workoutId = this.navigation.getParam('workoutId')
    },
    methods: {
        createClientWorkoutExerciseLog() {
            fittyApiClient.post(`clients/${this.navigation.getParam('clientId')}/workouts/${this.workoutId}/exercise-logs`, {
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
                // this.navigation.navigate('ClientWorkout', {
                //     client_id: this.clientId
                // })
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
        width: 17%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        /* justify-content: end; */
        margin-top: 10;
    }
</style>