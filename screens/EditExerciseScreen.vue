<template>
    <view class="container">
        <view class="screen-header-container">
            <text class="screen-header-text">Edit Exercise</text>
        </view>

        <text-input class="input-field" placeholder="Exercise Name..." v-model="exerciseName"></text-input>

        <KeyboardAvoidingView style="position: absolute; left: 325; right: 0; top: 650;" behavior="padding">
            <Pressable @press="editExercise()">
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
            exerciseId: null,
            exerciseName: ''
        }
    },
    created() {
        this.exerciseId = this.navigation.getParam('exerciseId')
        this.exerciseName = this.navigation.getParam('exerciseName')
    },
    methods: {
        editExercise() {

            console.log("The exerciseId is: " + this.exerciseId)

            const payload = {
                exerciseId: this.exerciseId,
                exerciseName: this.exerciseName,
            }

        this.$store.dispatch('trainerExercises/editExercise', payload)
        .then(response => {
            this.navigation.navigate('Exercises')
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

</style>