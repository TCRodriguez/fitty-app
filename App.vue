<template>
  <PaperProvider>
    <app-navigator></app-navigator>
  </PaperProvider>

</template>


<script>
  import store from './store/store'
  import Vue from 'vue-native-core'
  // import { VueNativeBase } from "native-base";
  //   Vue.use(VueNativeBase);
  Vue.prototype.$store = store
  
  import { LogBox } from 'react-native';
  LogBox.ignoreAllLogs();

  

  import { Provider as PaperProvider } from 'react-native-paper'

  import { useFonts } from 'expo-font';
 


  import {
    createAppContainer,
    createStackNavigator,
  } from "vue-native-router";

  import LoginScreen from "./screens/LoginScreen.vue";
  import HomeScreen from "./screens/HomeScreen.vue";

  import ClientListScreen from "./screens/ClientListScreen.vue";
  import CreateClientScreen from "./screens/CreateClientScreen.vue";
  import ClientEditScreen from "./screens/ClientEditScreen.vue";

  import ExerciseListScreen from "./screens/ExerciseListScreen.vue";
  import CreateExerciseScreen from "./screens/CreateExerciseScreen.vue";
  import EditExerciseScreen from "./screens/EditExerciseScreen.vue";

  import ClientWorkoutsListScreen from "./screens/ClientWorkoutsListScreen.vue";
  import ClientWorkoutScreen from "./screens/ClientWorkoutScreen.vue";
  import CreateClientWorkoutScreen from "./screens/CreateClientWorkoutScreen.vue";
  import EditClientWorkoutScreen from "./screens/EditClientWorkoutScreen.vue";

  import CreateClientWorkoutExerciseLogScreen from "./screens/CreateClientWorkoutExerciseLogScreen.vue";
  import EditClientWorkoutExerciseLogScreen from "./screens/EditClientWorkoutExerciseLogScreen.vue";

  import DetailsScreen from "./screens/DetailsScreen.vue";

  const StackNavigator = createStackNavigator(
    {
      Login: {
        screen: LoginScreen,
      },
      Home: HomeScreen,

      Clients: ClientListScreen,
      CreateClient: CreateClientScreen,
      EditClient: ClientEditScreen,

      Exercises: ExerciseListScreen,
      CreateExercise: CreateExerciseScreen,
      EditExercise: EditExerciseScreen,

      ClientWorkouts: ClientWorkoutsListScreen,
      ClientWorkout: ClientWorkoutScreen,
      CreateClientWorkout: CreateClientWorkoutScreen,
      EditClientWorkout: EditClientWorkoutScreen,

      CreateClientWorkoutExerciseLog: CreateClientWorkoutExerciseLogScreen,
      EditClientWorkoutExerciseLog: EditClientWorkoutExerciseLogScreen,

      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#080708"
        }
      }
    },
  );

  const AppNavigator = createAppContainer(StackNavigator);

  // const [loaded] = useFonts({
  //   ArchivoBlack: require('./assets/fonts/ArchivoBlack-Regular.ttf')
  // })

  export default {
    components: {
      AppNavigator,
      PaperProvider
    },
  }
</script>

<style>
  body {
    overflow-y: scroll;
  }
  .container {
    background-color: #080708;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .text-color-primary {
    color: white;
  }
</style>
  