<template>
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Edit Workout</text>
        </view>

        <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Date (YYYY-MM-DD)..." v-model="name"/>
        <text>{{name}}</text>

        <!-- <touchable-opacity>
            <text class="save-button" @press="editClientWorkout()">Save changes</text>
        </touchable-opacity> -->
        <KeyboardAvoidingView style="position: absolute; left: 325; right: 0; top: 650;" behavior="padding">
            <Pressable @press="editClientWorkout()">
                <edit-resource-button class="save-button"></edit-resource-button>
            </Pressable>
        </KeyboardAvoidingView>
    </view>
</template>

<script>
import EditResourceButton from '../components/EditResourceButton.vue'

export default {
    components: {
        EditResourceButton
    },
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            clientId: null,
            workoutId: null,
            name: null,
        }
    },
    mounted() {
        this.clientId = this.navigation.getParam('clientId')
        this.workoutId = this.navigation.getParam('workoutId')
        this.name = this.navigation.getParam('clientWorkoutName')
    },
    methods: {
        editClientWorkout() {
            const payload = {
                clientId: this.clientId,
                workoutId: this.workoutId,
                name: this.name
            }
            this.$store.dispatch('clientWorkouts/editClientWorkout', payload)
            .then(response => {
                console.log("ARE WE HERE?!")
                console.log(response)
            })
            this.navigation.navigate('ClientWorkout', {
                client_id: this.clientId,
                workoutId: this.workoutId
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
        color: #FCFCFC;
        font-size: 25;
    }
</style>