<template>
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Edit Log</text>
        </view>

        <text-input class="input-field" placeholderTextColor="#FCFCFC2a" placeholder="Choose exercise...(ID for now)" v-model="exerciseId"></text-input>
        <text-input class="input-field" placeholderTextColor="#FCFCFC2a" keyboardType="numeric" placeholder="Sets..." v-model="sets"></text-input>
        <text-input class="input-field" placeholderTextColor="#FCFCFC2a" keyboardType="numeric" placeholder="Reps..." v-model="reps"></text-input>
        <text-input class="input-field" placeholderTextColor="#FCFCFC2a" keyboardType="numeric" placeholder="Weight..." v-model="weight"></text-input>
        <text-input class="input-field" placeholderTextColor="#FCFCFC2a" keyboardType="numeric" placeholder="Duration..." v-model="duration"></text-input>


        <view style="position: absolute; left: 325; right: 0; top: 650;">
            <Pressable @press="editClientWorkoutExerciseLog()">
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
            clientWorkoutExerciseLogId: null,
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
        this.clientWorkoutExerciseLogId = this.navigation.getParam('clientWorkoutExerciseLogId')
        this.clientWorkoutExerciseLogId = this.navigation.getParam('clientWorkoutExerciseLogId')

        const ids = {
            clientWorkoutId: this.workoutId,
            clientWorkoutExerciseLogId: this.clientWorkoutExerciseLogId
        }
        this.$store.dispatch('clientWorkouts/getClientWorkoutExerciseLog', ids)
        .then(response => {
            this.exerciseId = response.exercise_id
            this.sets = response.sets
            this.reps = response.reps
            this.weight = response.weight
            this.duration = response.duration
            this.completedAt = response.completed_at
        })
        .catch(error => {
            console.log(error.response)
        })
    },
    methods: {
        editClientWorkoutExerciseLog() {
            const payload = {
                workoutId: this.workoutId,
                clientWorkoutExerciseLogId: this.clientWorkoutExerciseLogId,
                exerciseId: this.exerciseId,
                sets: this.sets,
                reps: this.reps,
                weight: this.weight,
                duration: this.duration,
                completed_at: this.completedAt,
            }

            this.$store.dispatch('clientWorkouts/editClientWorkoutExerciseLog', payload)

            this.navigation.navigate('ClientWorkout', {
                clientWorkoutId: this.workoutId
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

</style>