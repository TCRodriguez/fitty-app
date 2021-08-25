<template>
    <view class="container">
        <text class="fitty-title">fitty</text>
        <text>This is the Login Screen.</text>

        <text>{{message}}</text>
        <text-input class="login-field" placeholder="email" v-model="email"/>
        <text>{{email}}</text>
        <text-input class="login-field" placeholder="password" v-model="password"/>
        <text>{{password}}</text>

        <text class="button" @press="login()">Login</text>
    </view>
</template>

<script>
import store from "../store/store.js";
import fittyApiClient from '../axios-http';

export default {
    data() {
        return {
            email: '',
            password: '',
            trainerId: null,
        }
    },
    props: {
        navigation: {
            type: Object
        }
    },
    computed: {
        message() {
            return store.state.message
        },
    },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login/login', payload)
            .then(response => {
                this.navigation.navigate('Home')
            })
            .catch(error => {
                console.log(error.response)
            })

        },
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .fitty-title {
        font-size: 35;
    }

    .button {
        text-align: center;
        font-size: 25;
        width: 55%;
        margin-bottom: 5;
        border-color: black;
        border-width: 1;
        border-radius: 5;
    }

    .login-field {
        height: 5%;
        width: 55%;
        border-color: black;
        border-width: 3;
        border-radius: 5;
        padding-left: 10;
        margin-bottom: 10;
    }
</style>