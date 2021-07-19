
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
        }
    },
    // Declare `navigation` as a prop
    props: {
        navigation: {
            type: Object
        }
    },
    computed: {
        message() {
            return store.state.message
        },
        // token() {
        //     return store.state.token
        // }
    },
    methods: {
        login() {
            fittyApiClient.post('login', {
                email: this.email,
                password: this.password,
            })
            .then(response => {
                console.log("Login route hit");
                // console.log(response.data.data.token)
                // this.token = `Bearer ${response.data.data.token}`
                store.dispatch('updateToken', `Bearer ${response.data.data.token}`)
                // store.state.token = `Bearer ${response.data.data.token}`
                // console.log(this.token)
                console.log(store.state.token);
                this.navigation.navigate('Clients')
                // Authorization: 'Bearer 51|pauKktIO3qZOwFC0cVWSuxmownzHLRGuCYwi2AIa'
            })
            .catch(error => {
                console.log(error.response)
                console.log("There was a problem logging in.")
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
        /* flex: 4; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 25%; */
        height: 100%;
    }

    .fitty-title {
        font-size: 35;
    }

    .button {
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 25;
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