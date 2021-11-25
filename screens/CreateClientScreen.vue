<template lang="pug">
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Add Client</text>
        </view>
        <view class="input-fields">
            <text-input placeholder="First name" placeholderTextColor="#FCFCFC2a" class="input-field" v-model="firstName"/>
            <text-input placeholder="Last name" placeholderTextColor="#FCFCFC2a" class="input-field" v-model="lastName"/>
            <text-input placeholder="Starting weight" placeholderTextColor="#FCFCFC2a" class="input-field" v-model="startingWeight"/>
            <text-input placeholder="Email" placeholderTextColor="#FCFCFC2a" class="input-field" v-model="email"/>
            <text-input placeholder="Phone number" placeholderTextColor="#FCFCFC2a" class="input-field" v-model="phoneNumber"/>
        
        </view>


        <view style="position: absolute; left: 325; right: 0; top: 650;">
            <Pressable @press="createClient()">
                <create-resource-button></create-resource-button>
            </Pressable>
        </view>
        
    </view>
</template>

<script>
import CreateResourceButton from '../components/CreateResourceButton.vue'

export default {
    components: {
        CreateResourceButton
    },
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
            const payload = {
                first_name: this.firstName,
                last_name: this.lastName,
                starting_weight: this.startingWeight,
                email: this.email,
                phone_number: this.phoneNumber
            }
            this.$store.dispatch('clients/createClient', payload)
            .then(() => {
                this.navigation.navigate("Clients")
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