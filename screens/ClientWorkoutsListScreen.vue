<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
      <view class="container">
        <text>client id is: {{ navigation.getParam('clientId')}}</text>
        
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
import store from '../store/store'
import fittyApiClient from '../axios-http.js';

export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
      return {
        // clientWorkouts: [],
        // clientWorkoutExerciseLogs: null,
      }
    },
    computed: {
      // clientWorkouts() {
        // return this.clientWorkouts.map(clientWorkout => {
        //   return {
        //       id: clientWorkout.id, 
        //       date: clientWorkout.date,
        //       name: clientWorkout.name,
        //       logs: clientWorkout.logs
        //   }
        // });
      ...mapState('clientWorkouts', {
        clientWorkouts: state => state.workouts
      })
    },
    mounted() {
      // fittyApiClient.get(`clients/${this.navigation.getParam('clientId')}/workouts`, {
      //   headers: {
      //     'Authorization': store.state.token
      //   }
      // }) 
      // .then(response => {
      //   this.clientWorkouts = response.data.data;
      // })
      // .catch(error => {
      //   console.log("we DID NOT get our client workouts")
      //   console.log(error)
      // })
      this.$store.dispatch('clientWorkouts/updateWorkouts', this.navigation.getParam('clientId'))
    },
    methods: {
      goToClientEditScreen() {
        this.navigation.navigate('EditClient', {
          clientId: this.navigation.getParam('clientId')
        })
      },
      goToCreateClientWorkoutScreen() {
        console.log(this.navigation.getParam('clientId'))
      this.navigation.navigate('CreateClientWorkout', {
          clientId: this.navigation.getParam('clientId')
      })
        },
        goToClientWorkoutScreen(clientWorkoutId, clientWorkoutName) {
          this.clientWorkoutExerciseLogs = [];
          this.clientWorkoutExerciseLogs = 
            this.clientWorkouts.find(clientWorkout => clientWorkout.id == clientWorkoutId).logs;

          this.navigation.navigate('ClientWorkout', {
            clientId: this.navigation.getParam('clientId'),
            workoutId: clientWorkoutId,
            workoutName: clientWorkoutName
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