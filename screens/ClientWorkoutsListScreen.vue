<template>
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
      <view class="container">
        <text>This is the Workouts List screen.</text>
        <text>client id is: {{ navigation.getParam('clientId')}}</text>
          <text
            class="createClientWorkoutButton"
            @press="goToCreateClientWorkoutScreen()"
          >Add Workout</text>
        <text
          class="clientWorkoutButton"
          v-for="clientWorkout in clientWorkouts"
          :key="clientWorkout.id"
          :clientWorkout="clientWorkout"
          @press="goToClientWorkoutScreen(clientWorkout.id)"
        >{{clientWorkout.date}}</text>
        <button title="Go to Client List screen" @press="goToClientListScreen"></button>
        <button title="Go to Home screen" @press="goToHomeScreen"></button>
      </view>
    </scroll-view>

</template>

<script>


import store from '../store/store'
import fittyApiClient from '../axios-http.js';


export default {
  // Declare `navigation` as a prop
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
      return {
        // workoutId: 
        clientWorkouts: [],
        // ! Get's filled in when a Client is selected (button with the Client name is pressed)
        clientWorkoutExerciseLogs: null,
      }
    },

    computed: {
      clientWorkouts() {
        return this.clientWorkouts.map(clientWorkout => {
          return {
              id: clientWorkout.id, 
              date: clientWorkout.date,
              logs: clientWorkout.logs
          }
        });
      }
    },
    created() {
      // console.log(this.navigation.getParam('clientId'))
      fittyApiClient.get(`clients/${this.navigation.getParam('clientId')}/workouts`, {
        headers: {
          'Authorization': store.state.token
        }
      }) 
      .then(response => {
        // console.log("We've got the workouts!")

        this.clientWorkouts = response.data.data;

        // this.clientWorkoutExerciseLogs = this.clientWorkouts.logs;
        // console.log(this.clientWorkouts);
        // console.log(this.clientWorkoutExerciseLogs);
        // console.log(this.clientWorkoutExerciseLogs);
      })
      .catch(error => {
        console.log("we DID NOT get our client workouts")
        console.log(error)
      })
    },
    methods: {
      goToCreateClientWorkoutScreen() {
        console.log(this.navigation.getParam('clientId'))
      this.navigation.navigate('CreateClientWorkout', {
          clientId: this.navigation.getParam('clientId')
      })
        },
        goToClientWorkoutScreen(clientWorkoutId) {
          this.clientWorkoutExerciseLogs = [];
          // // console.log(clientWorkoutId);
          // ! Review this/make note of how this is more efficient
          // ! How is it accomplishing the same thing as those 'for' loops?
          this.clientWorkoutExerciseLogs = 
            this.clientWorkouts.find(clientWorkout => clientWorkout.id == clientWorkoutId).logs;
          // for (let i = 0; i < this.clientWorkouts.length; i++) {
          //   const workout = this.clientWorkouts[i];
          //   if(workout.id === clientWorkoutId) {
          //     console.log(this.clientWorkouts[i]);

          //     for (let j = 0; j < workout.logs.length; j++) {
          //       if(clientWorkoutId === workout.logs[j].workout_id){
          //         // console.log("This is a log for the workout selected")
          //         const log = workout.logs[j];

          //         this.clientWorkoutExerciseLogs.push(log)
          //       }
          //     }
          //   }

          
          // }
          // console.log(this.clientWorkoutExerciseLogs);
          this.navigation.navigate('ClientWorkout', {
            // clientWorkoutExerciseLogs: this.clientWorkoutExerciseLogs
            clientId: this.navigation.getParam('clientId'),
            workout_id: clientWorkoutId
          });
          // this.navigation.navigate('ClientWorkout');
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
        /* flex: 4; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 25%; */
    }

    .createClientWorkoutButton {
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
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 50;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        /* border: 2px solid black; */
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }
</style>