<template>
  <app-navigator></app-navigator>
</template>


<script>
  import {
    createAppContainer,
    createStackNavigator,
  } from "vue-native-router";


  import LoginScreen from "./screens/LoginScreen.vue";
  import HomeScreen from "./screens/HomeScreen.vue";
  import ClientListScreen from "./screens/ClientListScreen.vue";
  import ExerciseListScreen from "./screens/ExerciseListScreen.vue";
  import ClientWorkoutsListScreen from "./screens/ClientWorkoutsListScreen.vue";
  import DetailsScreen from "./screens/DetailsScreen.vue";

  const StackNavigator = createStackNavigator(
    {
      Login: LoginScreen,
      Home: HomeScreen,
      Clients: ClientListScreen,
      Exercises: ExerciseListScreen,
      ClientWorkouts: ClientWorkoutsListScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
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
