
<template>
    <view class="container">
        <text class="button" @press="goToClientListScreen">Clients</text>
        <text class="button" @press="goToExerciseListScreen">Exercises</text>
        <text class="inactive">Settings</text>
        <!-- Temp button while authentication is yet to be in place -->
        <!-- <text class="button" @press="goToLoginScreen">Login</text> -->
        <button title="Go to details screen" @press="goToDetailsScreen"></button>
        <button title="Go to client workout screen" @press="goToClientWorkoutScreen"></button>
    </view>
</template>

<script>
import ClientButton from "../components/clientButton.vue";
export default {
    components: { ClientButton },
    data() {
        return {

        }
    },
    // Declare `navigation` as a prop
    props: {
        navigation: {
            type: Object
        }
    },
    created() {

    },
    methods: {
        goToLoginScreen() {
            this.navigation.navigate("Login")
        },
        goToClientListScreen() {
            this.navigation.navigate("Clients")
        },
        goToExerciseListScreen() {
            this.navigation.navigate("Exercises", {
                // trainerId: 
            })
        },
        goToDetailsScreen() {
            this.navigation.navigate("Details");
        },
        goToClientWorkoutScreen() {
            this.navigation.navigate("ClientWorkout")
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
                /* background-color: green; */
            text-align: center;
            justify-content: center;
            /* color: yellow; */
            font-size: 50;
            width: 50%;
            margin-top: 5;
            margin-bottom: 5;
            /* border: 2px solid black; */
            border-color: black;
            border-width: 3;
            border-radius: 5;
    }

    .inactive {
        /* background-color: green; */
        text-align: center;
        justify-content: center;
        /* color: yellow; */
        font-size: 50;
        width: 50%;
        margin-top: 5;
        margin-bottom: 5;
        color: gray;
        border-color: gray;
        border-width: 3;
        border-radius: 5;
    }
</style>