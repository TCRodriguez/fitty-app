
<template>
    <view class="container">
        <text>This is the Exercise index page.</text>
        <text class="button" 
            v-for="exercise in exercises" 
            :key="exercise.text" 
            :exercise="exercise" 
        >{{ exercise.text }}</text>
        <button title="Go to details screen" @press="goToDetailsScreen"></button>
        <button title="Go to home screen" @press="goToHomeScreen"></button>
    </view>
</template>

<script>

export default {
    data() {
        return {
            exercises: [
                { id: 1, text: "Exercise 1" },
                { id: 2, text: "Exercise 2" },
                { id: 3, text: "Exercise 3" }, 
            ]
        }
    },
    // Declare `navigation` as a prop
    props: {
        navigation: {
            type: Object
        }
    },
    methods: {
        goToClientWorkoutsListScreen() {
            this.navigation.navigate("ClientWorkouts", {
                client: this.clients[0]
            })
        },
        goToDetailsScreen() {
            this.navigation.navigate("Details");
        },
        goToHomeScreen() {
            this.navigation.navigate("Home");
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

    .button {
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 50;
        width: 55%;
        margin-top: 5;
        margin-bottom: 5;
        /* border: 2px solid black; */
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }
</style>