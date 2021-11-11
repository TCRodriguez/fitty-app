<template>
    <view class="container">
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
        width: 30%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        margin-top: 10;
    }
</style>