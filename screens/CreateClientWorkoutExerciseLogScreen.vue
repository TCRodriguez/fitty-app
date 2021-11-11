<template>
    <view class="container">
        <text>This is the Create Exercise Log Screen</text>

        <text-input class="input-field" placeholder="Choose exercise...(ID for now)" v-model="exerciseId"></text-input>
        <text-input class="input-field" placeholder="Sets..." v-model="sets"></text-input>
        <text-input class="input-field" placeholder="Reps..." v-model="reps"></text-input>
        <text-input class="input-field" placeholder="Weight..." v-model="weight"></text-input>
        <text-input class="input-field" placeholder="Duration..." v-model="duration"></text-input>

        <touchable-opacity>
            <text class="save-button" @press="() => createClientWorkoutExerciseLog()">Save</text>
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