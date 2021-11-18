
<template>
<safe-area-view :style="styles">
    <scroll-view :style="styles" :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <view class="screen-header-container">
                <text class="screen-header-text">Clients</text>
            </view>

            <view class="client-list">

                <!-- <text
                    class="createClientButton"
                    @press="goToCreateClientScreen()"
                >Add client</text> -->
                <view class="clientButton" 
                    v-for="client in clients" 
                    :key="client.id" 
                    :client="client"

                >
                    <text class="text-color-primary" style="font-size: 25" @press="goToClientWorkoutsListScreen(client.id, client.name)">{{ client.name }}</text>
                    <!-- <text style="justify-content: end;">></text> -->


                    <!-- This is where the chevron will go once I figure out how to make svgs work -->
                    <!-- <SvgUri
                        width="200"
                        height="200"
                        source="{require('../assets/homer.svg')}"
                    ></SvgUri> -->

                </view>


            </view>


            <!-- <button title="Go to home screen" @press="goToHomeScreen"></button> -->
        </view>
    </scroll-view>
</safe-area-view>

</template>

<script>
import { mapState } from 'vuex'



import SvgUri from 'react-native-svg-uri';

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
    data() {
        return {
            styles: {
                backgroundColor: '#000000'
            }
        }
    },
    mounted() {
        this.$store.dispatch('clients/updateClientList')
    },
    methods: {
        goToCreateClientScreen() {
            this.navigation.navigate("CreateClient")
        },
        goToClientWorkoutsListScreen(clientId, clientName) {
            this.navigation.navigate("ClientWorkouts", {
                clientId: clientId,
                clientName: clientName
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

    .client-list {
        background-color: #161316;
        padding: 10;
        border-radius: 10;
        width: 100%;
    }
    
    .clientButton {
        display: flex;
        flex-direction: row;
        text-align: left;
        font-size: 25;
        width: 90%;
        padding-top: 15;
        padding-bottom: 15;
        /* border-color: #FCFCFC;

        border-radius: 5;
        border-width: 3; */
        border-bottom-width: 1;
        border-bottom-color: #fcfcfc1b;
        color: #FCFCFC;
    }

    .chevron {
        justify-content: flex-end;
    }

    .client-divider {
        border-bottom-width: 10;
        border-bottom-color: #FCFCFC;
        width: 100;
        height: 100;
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

    .text-color-primary {
        color: #FCFCFC;
    }
</style>