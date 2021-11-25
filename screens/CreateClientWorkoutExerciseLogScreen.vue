<template>
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Add Log</text>
        </view>
        <view class="input-fields">
            <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Choose exercise...(ID for now)" v-model="exerciseId"></text-input>
            <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Sets..." v-model="sets"></text-input>
            <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Reps..." v-model="reps"></text-input>
            <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Weight..." v-model="weight"></text-input>
            <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Duration..." v-model="duration"></text-input>
        </view>

        <view style="position: absolute; left: 325; right: 0; top: 650;">
            <Pressable @press="createClientWorkoutExerciseLog()">
                <create-resource-button></create-resource-button>
            </Pressable>
        </view>

    </view>
</template>

<script>
import CreateResourceButton from '../components/CreateResourceButton.vue';



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
            workoutId: null,
            exerciseId: null,
            sets: 0,
            reps: 0,
            weight: 0,
            duration: 0,
            completedAt: null,
        }
    },
    created() {
        this.workoutId = this.navigation.getParam('workoutId')
        this.clientId = this.navigation.getParam('clientId')
    },
    methods: {
        createClientWorkoutExerciseLog() {
            const payload = {
                clientId: this.clientId,
                workoutId: this.workoutId,
                exerciseId: this.exerciseId,
                sets: this.sets,
                reps: this.reps,
                weight: this.weight,
                duration: this.duration,
                completedAt: this.completedAt
            }
            this.$store.dispatch('clientWorkouts/createClientWorkoutExerciseLog', payload)
            .then(() => {
                this.navigation.navigate('ClientWorkout')
            })
        }
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