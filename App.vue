<template>
  <app-navigator></app-navigator>
</template>


<script>
  // import fittyApiClient from 'axios-https.js';
  // console.disableYellowBox = true;
  import { LogBox } from 'react-native';
  LogBox.ignoreAllLogs();

  import {
    createAppContainer,
    createStackNavigator,
  } from "vue-native-router";

  // console.disableYellowBox = true;
  import LoginScreen from "./screens/LoginScreen.vue";
  import HomeScreen from "./screens/HomeScreen.vue";
  import ClientListScreen from "./screens/ClientListScreen.vue";
  import CreateClientScreen from "./screens/CreateClientScreen.vue";
  import ExerciseListScreen from "./screens/ExerciseListScreen.vue";
  import ClientWorkoutsListScreen from "./screens/ClientWorkoutsListScreen.vue";
  import ClientWorkoutScreen from "./screens/ClientWorkoutScreen.vue";
  import DetailsScreen from "./screens/DetailsScreen.vue";

  const StackNavigator = createStackNavigator(
    {
      Login: LoginScreen,
      Home: HomeScreen,
      Clients: ClientListScreen,
      CreateClient: CreateClientScreen,
      Exercises: ExerciseListScreen,
      ClientWorkouts: ClientWorkoutsListScreen,
      ClientWorkout: ClientWorkoutScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Login',
    }
  );

  const AppNavigator = createAppContainer(StackNavigator);

  export default {
    components: { AppNavigator },
    data() {
      return {
        message: "Can you see me?"
      }
    }
  }
</script>





<style>
body {
  overflow-y: scroll;
}
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
