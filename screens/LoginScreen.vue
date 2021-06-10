
<template>
    <view class="container">
        <text>This is the Login Screen.</text>
        <text-input class="login-field" placeholder="username"/>
        <text-input class="login-field" placeholder="password"/>
    </view>
</template>

<script>

export default {
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
        height: 100%;
    }

    .button {
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 50;
        width: 55%;
        /* margin-top: 5; */
        margin-bottom: 5;
        /* border: 2px solid black; */
        border-color: black;
        border-width: 1;
        border-radius: 5;
    }

    .login-field {
        /* background-color: green; */
        height: 5%;
        width: 55%;
        border-color: black;
        border-width: 3;
        border-radius: 5;
        padding-left: 10;
        margin-bottom: 10;
    }
</style>