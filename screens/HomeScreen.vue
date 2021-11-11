<template>
    <view class="container">
        <text class="button" @press="goToClientListScreen">Clients</text>
        <text class="button" @press="goToExerciseListScreen">Exercises</text>
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        }
    },
    methods: {
        goToClientListScreen() {
            this.navigation.navigate("Clients")
        },
        goToExerciseListScreen() {
            this.navigation.navigate("Exercises")
        },
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
        justify-content: center;
        font-size: 50;
        width: 50%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }

    .inactive {
        text-align: center;
        justify-content: center;
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