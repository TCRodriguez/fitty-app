<template>
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Edit Client</text>
        </view>

        <text-input placeholder="First name" class="input-field" v-model="firstName"/>
        <text-input placeholder="Last name" class="input-field" v-model="lastName"/>
        <text-input placeholder="Starting weight" keyboardType="numeric" class="input-field" v-model="startingWeight"/>
        <text-input placeholder="Email" class="input-field" v-model="email"/>
        <text-input placeholder="Phone number" class="input-field" v-model="phoneNumber"/>

        <touchable-opacity>
            <text class="save-button" @press="editClient()">Save changes</text>
        </touchable-opacity>
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            clientId: null,
            firstName: '',
            lastName: '',
            startingWeight: null,
            email: '',
            phoneNumber: '',
        }
    },
    mounted() {
        this.$store.dispatch('clients/getClient', this.navigation.getParam('clientId'))
        .then(response => {
            this.clientId = response.id
            this.firstName = response.first_name
            this.lastName = response.last_name
            this.startingWeight = response.starting_weight
            this.email = response.email
            this.phoneNumber = response.phone_number
        })
    },
    methods: {
        editClient() {
            const payload = {
                clientId: this.clientId,
                first_name: this.firstName,
                last_name: this.lastName,
                starting_weight: this.startingWeight,
                email: this.email,
                phone_number: this.phoneNumber
            }
            this.$store.dispatch('clients/editClient', payload)
            this.navigation.navigate("ClientWorkouts", {
                clientId: this.clientId
            })
        },
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        background-color: #080708;
        padding-left: 15;
        padding-right: 15;
        padding-bottom: 15;
        height: 100%;
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

    .input-fields {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .input-field {
        font-size: 25;
        width: 100%;
        padding: 10;
        color: #FCFCFC;
        background-color: #161316;
        border-radius: 10;
        margin-bottom: 15;
    }

    .save-button {
        font-size: 25;
        color:#FCFCFC;
    }
</style>