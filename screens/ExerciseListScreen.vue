<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <text>This is the Exercise index page.</text>

            <text
                class="createExerciseButton"
                @press="goToCreateExerciseScreen()"
            >Add Exercise</text>

            <text class="button" 
            v-for="exercise in exercises" 
            :key="exercise.id" 
            :exercise="exercise"
            @press="goToEditExerciseScreen(exercise.exercise_id, exercise.exercise_name)"
            >{{ exercise.exercise_name }}</text>

            <button title="Go to home screen" @press="goToHomeScreen"></button>
        </view>
    </scroll-view>
</template>

<script>
import store from "../store/store.js";
import fittyApiClient from '../axios-http';

export default {
    data() {
        return {
            results: []
        }
    },
    props: {
        navigation: {
            type: Object
        }
    },
    computed: {
        exercises() {
            return this.results.map(exercise => {
                return {
                    exercise_name: exercise.exercise_name,
                    exercise_id: exercise.id
                }
            });
        }
    },
    mounted() {
        fittyApiClient.get('exercises', {
            headers: {
                'Authorization': store.state.token
            }
        })
        .then(response => {
            console.log("We got the exercises!")
            console.log(response)
            this.results = response.data.data
            console.log(this.results)
        })
    },
    methods: {
        goToCreateExerciseScreen() {
            this.navigation.navigate("CreateExercise")
        },
        goToEditExerciseScreen(exerciseId, exerciseName) {
            console.log("This is the exercise id: " + exerciseId)
            this.navigation.navigate("EditExercise", {
                exerciseId: exerciseId,
                exerciseName: exerciseName
            })
        },
        goToHomeScreen() {
            this.navigation.navigate("Home");
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

    .button {
        text-align: center;
        font-size: 50;
        width: 55%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }

    .createExerciseButton {
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