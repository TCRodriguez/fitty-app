<template>
    <safe-area-view :style="styles">
        <scroll-view :content-container-style="{contentContainer: {
            paddingVertical: 20
        }}">
            <view class="container">

                <view class="screen-header-container">
                    <Pressable @press="goToEditClientWorkoutScreen()">
                        <text class="screen-header-text">{{clientWorkoutDate}}</text>
                    </Pressable>
                    <text class="text-color-primary">{{clientName}}</text>
                </view>


                <!-- <view> -->
                    <Pressable @press="goToEditClientWorkoutExerciseLogScreen()">
                        <view
                            style="width: 100%; margin-bottom: 25;"
                            v-for="clientWorkoutExerciseLog in clientWorkoutExerciseLogs"
                            :key="clientWorkoutExerciseLog.id"
                            :clientWorkoutExerciseLog="clientWorkoutExerciseLog"
                            @press="goToEditClientWorkoutExerciseLogScreen(clientWorkoutExerciseLog.id)"
                        >
                            <text style="color: #FCFCFC; padding-bottom: 5; padding-top: 5; font-size: 35;">{{clientWorkoutExerciseLog.exercise_name}}</text>
                            <view class="workout-logs">
                                <view class="table-header">
                                    <text style="font-size: 25;" class="text-color-primary bold">Set</text>
                                    <text style="font-size: 25;" class="text-color-primary bold">Reps</text>
                                    <text style="font-size: 25;" class="text-color-primary bold">Weight</text>
                                </view>
                                <view class="table-row"
                                    v-for="set in clientWorkoutExerciseLog.sets" 
                                    :key="set.id"
                                    :set="set"
                                >
                                    <text class="workout-log">{{setNumber}}</text>
                                    <text class="workout-log">{{clientWorkoutExerciseLog.reps}}</text>
                                    <text class="workout-log">{{clientWorkoutExerciseLog.weight}}</text>
                                </view>
                            </view>
                        </view>
                    </Pressable>

                <!-- </view> -->

                <!-- <DataTable
                        class="clientWorkoutExerciseLog"
                        v-for="clientWorkoutExerciseLog in clientWorkoutExerciseLogs"
                        :key="clientWorkoutExerciseLog.id"
                        :clientWorkoutExerciseLog="clientWorkoutExerciseLog"

                >
                    <DataTableHeader>
                    </DataTableHeader>

                </DataTable> -->


                <!-- <touchable-opacity>
                    <text class="optionsButton" @press="goToCreateClientWorkoutExerciseLogScreen">Add Log</text>
                </touchable-opacity>
                <button title="Go to Home screen" @press="goToHomeScreen"></button> -->

            </view>
        </scroll-view>
        <view style="position: absolute; left: 325; right: 0; top: 650;">
            <Pressable @press="goToCreateClientWorkoutExerciseLogScreen()">
                <create-resource-button></create-resource-button>
            </Pressable>
        </view>
    </safe-area-view>

</template>

<script>
import { mapState } from 'vuex'

import CreateResourceButton from '../components/CreateResourceButton.vue'
// import { DataTable, DataTableHeader } from 'react-native-paper';

export default {
    // components: {DataTable},
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
            clientName: null,
            workoutId: null,
            clientWorkoutName: null,
            clientWorkoutDate: null,
            setNumber: 1,
            styles: {
                backgroundColor: "#080708",
                height: "100%"
            }
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
        this.clientWorkoutDate = this.navigation.getParam('clientWorkoutDate')

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

    .bold {
        font-weight: bold;
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
        display: flex;
        flex-direction: column;
        background-color: #161316;
        padding: 10;
        border-radius: 10;
        color: #FCFCFC;
        width: 100%;
    }

    .workout-log {
        font-size: 25;
        /* text-align: left;

        margin-top: 5;
        margin-bottom: 5; */
        color: #FCFCFC;
        /* background-color: #161316; */
        /* padding: 10; */
        /* border-radius: 10; */
        /* width: 100%; */
    }

    .table-header {
        display: flex;
        flex-direction: row;
        width: 75%;
        justify-content: space-around;
        text-align: center;
        border-bottom-width: 2;
        border-bottom-color: #fcfcfc1d;
    }

    .table-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-bottom-width: 1;
        border-bottom-color: #fcfcfc1d;
        padding-top: 5;
        padding-bottom: 5;
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