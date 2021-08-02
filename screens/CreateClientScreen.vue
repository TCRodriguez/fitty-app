<template lang="pug">
    <view class="container">
        <text>This is the Create Client Screen</text>

        <text-input placeholder="First name" class="input-field" v-model="firstName"/>
        <text-input placeholder="Last name" class="input-field" v-model="lastName"/>
        <text-input placeholder="Starting weight" class="input-field" v-model="startingWeight"/>
        <text-input placeholder="Email" class="input-field" v-model="email"/>
        <text-input placeholder="Phone number" class="input-field" v-model="phoneNumber"/>

        <touchable-opacity>
            <text class="save-button" @press="createClient()">Save</text>
        </touchable-opacity>
    </view>
</template>

<script>
import store from '../store/store.js'
import fittyApiClient from '../axios-http';

export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            startingWeight: null,
            email: '',
            phoneNumber: null,
        }
    },
    methods: {
        createClient() {
            fittyApiClient.post('clients', {
                first_name: this.firstName,
                last_name: this.lastName,
                starting_weight: this.startingWeight,
                email: this.email,
                phone_number: this.phoneNumber
                },
                { headers: {
                    'Authorization': store.state.token
                },
            })
            .then(response => {
                console.log("Client saved.")
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
                console.log("Client NOT saved")
            });
            this.navigation.navigate("Clients")
        },
    }
}
</script>

<style scoped>
    .container {
        margin-left: 5;
    }

    .input-field {
        font-size: 35;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
        padding-left: 5;
        padding-top: 5;
        padding-bottom: 5;
    }

    .save-button {
        border-color: black;
        border-width: 3;
        border-radius: 5;
        width: 17%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        margin-top: 10;
    }
</style>