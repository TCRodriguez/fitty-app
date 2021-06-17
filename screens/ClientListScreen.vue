
<template>
    <view class="container">
        <text>This is the Client index page.</text>
        <text class="clientButton" 
            v-for="client in clients" 
            :key="client.text" 
            :client="client" 
            @press="goToClientWorkoutsListScreen"
        >{{ client.text }}</text>
        <button title="Go to details screen" @press="goToDetailsScreen"></button>
        <button title="Go to home screen" @press="goToHomeScreen"></button>
    </view>
</template>

<script>
import axios from 'axios';

import ClientButton from "../components/clientButton.vue";

export default {
    components: { ClientButton },
    data() {
        return {
            results: [],
        }
    },

    computed: {
        clients() {
            return this.results.map(client => {
                    return {
                        id: client.id,
                        text: client.first_name
                    }
                });
        }
    },

    // Declare `navigation` as a prop
    props: {
        navigation: {
            type: Object
        }
    },

    created() {
        this.getClients();
    },

    methods: {
        getClients() {
            axios.get('https://59f98774b7f7.ngrok.io/api/clients', {
                headers: {
                    Authorization: 'Bearer 1|QnAnLNwjSzsxYjW1UPcg2cwh4WobtjLVSzYUMvnQ'
                }
            })
            .then(response => {
                this.results = response.data.data;
            })
            .catch(error => {
                console.log(error)
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
/* .container {
    font-size: 100px;
} */

    .container {
        /* flex: 4; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 25%; */
    }
    .clientButton {
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
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
</style>