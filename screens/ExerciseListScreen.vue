<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <!-- <text>This is the Exercise index page.</text> -->
            <view class="screen-header-container">
                <text class="screen-header-text">Exercises</text>
            </view>

            <!-- <text
                class="createExerciseButton"
                @press="goToCreateExerciseScreen()"
            >Add Exercise</text> -->
                    <!-- @press="goToEditExerciseScreen(exercise.id, exercise.exercise_name)" -->
            <view class="exercise-list">
                <view class="exerciseButton"
                    v-for="exercise in exercises" 
                    :key="exercise.id" 
                    :exercise="exercise"
                >
                    <text class="text-color-primary" style="font-size: 25;">
                        {{ exercise.exercise_name }}
                    </text>
                </view>

            </view>


            <!-- <button title="Go to home screen" @press="goToHomeScreen"></button> -->
        </view>
    </scroll-view>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        navigation: {
            type: Object
        }
    },
    computed: {
        ...mapState('trainerExercises', {
            exercises: state => state.exercises
        })
    },
    mounted() {
        this.$store.dispatch('trainerExercises/updateExercises')
        .then(response => {
            console.log("Wait, what did we actually get?")
            console.log(response)
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
        background-color: #080708;
        padding-left: 15;
        padding-right: 15;
        padding-bottom: 15;
    }

    .exercise-list {
        background-color: #161316;
        padding: 10;
        border-radius: 10;
        width: 100%;
    }

    .exerciseButton {
        display: flex;
        flex-direction: row;
        text-align: left;
        font-size: 25;
        width: 90%;
        padding-top: 15;
        padding-bottom: 15;
        border-bottom-width: 1;
        border-bottom-color: #fcfcfc1d;
        color: #FCFCFC;
    }



    .screen-header-container {
        display: flex;
        width: 100%;
        justify-content: center;
        padding-top: 25;
        padding-bottom: 25;
    }

    .screen-header-text {
        font-size: 50;
        color: #FCFCFC;
        font-weight: bold;
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

    .text-color-primary {
        color: #FCFCFC;
    }
</style>