<template>
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Add Workout</text>
        </view>
        
        <text-input class="input-field" placeholderTextColor="#FCFCFC8e" placeholder="Date (YYYY-MM-DD)..." v-model="name"></text-input>
        <text>{{date}}</text>


        <KeyboardAvoidingView style="position: absolute; left: 325; right: 0; top: 650;" behavior="padding">
            <Pressable @press="createClientWorkout()">
                <create-resource-button>Save</create-resource-button>
            </Pressable>
        </KeyboardAvoidingView>
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
            clientId: null,
            name: '',
        }
    },
    created() {
        this.clientId = this.navigation.getParam('clientId')
    },
    methods: {
        createClientWorkout() {
            const payload = {
                clientId: this.clientId,
                name: this.name
            }
            this.$store.dispatch('clientWorkouts/createClientWorkout', payload)
            .then(response => {
                this.navigation.navigate("ClientWorkout", {
                    clientId: this.clientId,
                    workoutId: response.data.data.id,
                    clientWorkoutName: response.data.data.name
                })
            })
        }
    }
}
</script>
<style scoped>
    .container {
        background-color: #080708;
        height: 100%;
        padding-left: 15;
        padding-right: 15;
        padding-bottom: 15;
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

    .input-field {
        font-size: 25;
        width: 90%;
        padding: 10;
        color: #FCFCFC;
        background-color: #161316;
        border-radius: 10;
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