<template>
    <view style="">
        <view class="container">
            <view class="screen-header-container">
                <text class="screen-header-text">Add Exercise</text>
            </view>

            <text-input class="input-field" placeholder="Exercise Name..." placeholderTextColor="#FCFCFC8e" v-model="exerciseName"></text-input>

            <KeyboardAvoidingView style="position: absolute; left: 325; right: 0; top: 650;" behavior="padding">
                <Pressable @press="createExercise()">
                    <create-resource-button class="save-button">Save</create-resource-button>
                </Pressable>
            </KeyboardAvoidingView>
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
            exerciseName: ''
        }
    },
    methods: {
        createExercise() {
            this.$store.dispatch('trainerExercises/createExercise', this.exerciseName)
            .then(() => {
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