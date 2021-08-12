<template>
    <view>
        <text>This is the Create Exercise Screen</text>

        <text-input class="input-field" placeholder="Exercise Name..." v-model="exerciseName"></text-input>
        <text>{{exerciseName}}</text>

        <touchable-opacity>
            <text class="save-button" @press="createExercise()">Save</text>
        </touchable-opacity>
    </view>
</template>

<script>
import store from "../store/store.js"
import fittyApiClient from '../axios-http'

export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            exerciseName: ''
        }
    },
    methods: {
        createExercise() {
            fittyApiClient.post('exercises', {
                exercise_name: this.exerciseName
                },
                { headers: {
                    'Authorization': store.state.token
                },
            })
            .then(response => {
                console.log(response)
                this.navigation.navigate('Exercises')
            })
            .catch(error => {
                console.log(error.response)
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