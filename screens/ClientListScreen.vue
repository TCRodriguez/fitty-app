
<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <text>This is the Client index page.</text>

            <text
                class="createClientButton"
                @press="goToCreateClientScreen()"
            >Add client</text>
            <text class="clientButton" 
                v-for="client in clients" 
                :key="client.id" 
                :client="client"
                @press="goToClientWorkoutsListScreen(client.id)"
            >{{ client.text }}</text>

            <button title="Go to details screen" @press="goToDetailsScreen"></button>
            <button title="Go to home screen" @press="goToHomeScreen"></button>
        </view>
    </scroll-view>
</template>

<script>
import store from "../store/store.js"

export default {
    data() {
        return {
            results: [],
            clientId: null,
        }
    },

    computed: {
        clients() {
        // ? We can make use of mapState() here...
            return store.state.clients.clients;
        }
    },

    props: {
        navigation: {
            type: Object
        },
        client: {
            type: Object
        }
    },

    mounted() {
        store.dispatch('clients/updateClientList', null, {root:true})
    },

    methods: {
        goToCreateClientScreen() {
            this.navigation.navigate("CreateClient")
        },
        getClients() {
            axios.get('https://44041ed1744c.ngrok.io/api/clients', {
                headers: {
                    Authorization: 'Bearer 50|fVKzbqOYSlhPzVQsHDw1xtlHfGkBqDSUB6mAVgpD'
                }
            })
            .then(response => {
                this.results = response.data.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        goToClientWorkoutsListScreen(clientId) {
            this.clientId = clientId;
            console.log(this.clientId + "!");
            console.log('Clicent Id: ', this.clientId);
            this.navigation.navigate("ClientWorkouts", {
                clientId: this.clientId,
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
    }
    
    .clientButton {
        text-align: center;
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }

    .createClientButton {
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