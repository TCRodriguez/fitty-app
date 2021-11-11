<template>
    <view>
        <text>This is the Create Workout Screen</text>
        
        <text-input class="input-field" placeholder="Date (YYYY-MM-DD)..." v-model="name"></text-input>
        <text>{{date}}</text>
        <touchable-opacity>
            <text class="save-button" @press="createClientWorkout()">Save</text>
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