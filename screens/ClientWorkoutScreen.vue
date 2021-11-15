<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <view class="container">
            <!-- <text>The workoutId is: {{workoutId}}</text>
            <text>This is the Client Workout Screen, and these are the logs</text> -->

            <!-- <text
                class="optionsButton"
                @press="goToClientWorkoutsListScreen()"
            >Go back to Workout screen</text>
            <text
                class="optionsButton"
                @press="goToEditClientWorkoutScreen()"
            >Edit Workout Date</text> -->

            <text>
                {{clientWorkoutName}}
            </text>

            <view class="screen-header-container">
                <text class="screen-header-text">Logs</text>
                <text class="text-color-primary">{{clientName}}</text>
            </view>

            <view class="workout-logs">
                <text
                    class="clientWorkoutExerciseLog"
                    v-for="clientWorkoutExerciseLog in clientWorkoutExerciseLogs"
                    :key="clientWorkoutExerciseLog.id"
                    :clientWorkoutExerciseLog="clientWorkoutExerciseLog"
                    @press="goToEditClientWorkoutExerciseLogScreen(clientWorkoutExerciseLog.id)"
                >
                    {{clientWorkoutExerciseLog.exercise_name}}
                    sets: {{clientWorkoutExerciseLog.sets}}
                    reps: {{clientWorkoutExerciseLog.reps}}
                    weight: {{clientWorkoutExerciseLog.weight}}
                </text>
            </view>



            <touchable-opacity>
                <text class="optionsButton" @press="goToCreateClientWorkoutExerciseLogScreen">Add Log</text>
            </touchable-opacity>
            <button title="Go to Home screen" @press="goToHomeScreen"></button>
        </view>
    </scroll-view>
</template>

<script>
import { mapState } from 'vuex'
import { DataTable } from 'react-native-paper'

export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            clientId: null,
            clientName: null,
            workoutId: null,
            clientWorkoutName: null,
        }
    },
    computed: {
        ...mapState('clientWorkouts', {
            clientWorkoutExerciseLogs: state => state.logs
        })
    },
    mounted() {
        this.workoutId = this.navigation.getParam('workoutId')
        this.clientId = this.navigation.getParam('clientId')
        this.clientName = this.navigation.getParam('clientName')
        this.clientWorkoutName = this.navigation.getParam('clientWorkoutName')

        this.$store.dispatch('clientWorkouts/getClientWorkoutExerciseLogs', this.workoutId)
    },
    methods: {
        goToEditClientWorkoutScreen() {
            this.navigation.navigate('EditClientWorkout', {
                clientId: this.clientId,
                workoutId: this.workoutId,
                clientWorkoutName: this.clientWorkoutName
            })
        },
        goToEditClientWorkoutExerciseLogScreen(clientWorkoutExerciseLogId) {
            this.navigation.navigate('EditClientWorkoutExerciseLog', {
                clientId: this.clientId,
                workoutId: this.workoutId,
                clientWorkoutExerciseLogId: clientWorkoutExerciseLogId
            })
        },
        goToCreateClientWorkoutExerciseLogScreen() {
            this.navigation.navigate('CreateClientWorkoutExerciseLog', {
                clientId: this.clientId,
                workoutId: this.workoutId,
            })
        },
        goToClientWorkoutsListScreen() {
            this.navigation.navigate('ClientWorkouts', {
                clientId: this.clientId
            })
        },
        goToHomeScreen() {
            this.navigation.navigate("Home")
        }
    }
}
</script>
<style scoped>

    .text-color-primary {
        color: #FCFCFC;
    }


    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #080708;
        padding-left: 15;
        padding-right: 15;
        padding-bottom: 15;
    }


    .workout-logs {
        /* background-color: #161316; */
        padding: 10;
        border-radius: 10;
        /* width: 100%; */
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


    .clientWorkoutExerciseLog {
        text-align: left;
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        /* border-color: #FCFCFC;
        border-width: 3;
        border-radius: 5; */
        color: #FCFCFC;
        background-color: #161316;
        padding: 10;
        border-radius: 10;
        width: 100%;
    }

    .optionsButton {
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