<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
      <view class="container">
        <text
          class="optionsButton"
          @press="goToClientEditScreen()"
        >Edit Client</text>
        <text
          class="optionsButton"
          @press="goToCreateClientWorkoutScreen()"
        >Add Workout</text>
        <text
          class="clientWorkoutButton"
          v-for="clientWorkout in clientWorkouts"
          :key="clientWorkout.id"
          :clientWorkout="clientWorkout"
          @press="goToClientWorkoutScreen(clientWorkout.id, clientWorkout.name)"
        >{{clientWorkout.date}}</text>

        <button title="Go to Client List screen" @press="goToClientListScreen"></button>
        <button title="Go to Home screen" @press="goToHomeScreen"></button>
      </view>
    </scroll-view>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        navigation: {
            type: Object
        },
    },
    computed: {
      ...mapState('clientWorkouts', {
        clientWorkouts: state => state.workouts
      })
    },
    mounted() {
      this.$store.dispatch('clientWorkouts/updateWorkouts', this.navigation.getParam('clientId'))
    },
    methods: {
      goToClientEditScreen() {
        this.navigation.navigate('EditClient', {
          clientId: this.navigation.getParam('clientId')
        })
      },
      goToCreateClientWorkoutScreen() {
        this.navigation.navigate('CreateClientWorkout', {
            clientId: this.navigation.getParam('clientId')
        })
      },
      goToClientWorkoutScreen(clientWorkoutId, clientWorkoutName) {
        this.navigation.navigate('ClientWorkout', {
          clientId: this.navigation.getParam('clientId'),
          workoutId: clientWorkoutId,
          clientWorkoutName: clientWorkoutName
        });
      },
      goToClientListScreen() {
          this.navigation.navigate("Clients");
      },
      goToHomeScreen() {
          this.navigation.navigate("Home")
      }
    }
}
</script>
<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
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

    .clientWorkoutButton {
        text-align: center;
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }
</style>