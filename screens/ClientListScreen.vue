
<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <text
                class="createClientButton"
                @press="goToCreateClientScreen()"
            >Add client</text>
            <text class="clientButton" 
                v-for="client in clients" 
                :key="client.id" 
                :client="client"
                @press="goToClientWorkoutsListScreen(client.id)"
            >{{ client.name }}</text>

            <button title="Go to home screen" @press="goToHomeScreen"></button>
        </view>
    </scroll-view>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('clients', {
                clients: state => state.list
            })
    },
    props: {
        navigation: {
            type: Object
        },
    },
    mounted() {
        this.$store.dispatch('clients/updateClientList')
    },
    methods: {
        goToCreateClientScreen() {
            this.navigation.navigate("CreateClient")
        },
        goToClientWorkoutsListScreen(clientId) {
            this.navigation.navigate("ClientWorkouts", {
                clientId: clientId,
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