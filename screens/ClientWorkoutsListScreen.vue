<template>
  <safe-area-view :style="styles">
      <scroll-view :style="styles" :content-container-style="{contentContainer: {
          paddingVertical: 20
      }}">
        <view class="container">

            <view class="screen-header-container">
              <text class="screen-header-text">{{clientName}}</text>
            </view>
          <view class="workout-list">
            <view
              class="client-workout-button"
              v-for="clientWorkout in clientWorkouts"
              :key="clientWorkout.id"
              :clientWorkout="clientWorkout"
            >
              <text class="client-workout-date" @press="goToClientWorkoutScreen(clientWorkout.id, clientWorkout.name)">YYYY-MM-DD</text>
            </view>
          </view>



        </view>
      </scroll-view>
        <view style="position: absolute; left: 325; right: 0; top: 650;">
          <Pressable @press="goToCreateClientWorkoutScreen()">
              <create-resource-button></create-resource-button>
          </Pressable>
        </view>
  </safe-area-view>

</template>

<script>
import { mapState } from 'vuex';

import CreateResourceButton from '../components/CreateResourceButton.vue'

export default {
  components: {
    CreateResourceButton
  },
    data() {
      return {
        clientName: null,
      }
    },
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
    data() {
      return {
          styles: {
              backgroundColor: '#080708',
              height: '100%'
          }
      }
    },
    mounted() {
      this.clientName = this.navigation.getParam('clientName')
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
          clientName: this.clientName,
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
        background-color: #080708;
        padding-left: 15;
        padding-right: 15;
        padding-bottom: 15;
        height: 100%;
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

    .workout-list {
      background-color: #161316;
      padding: 10;
      border-radius: 10;
      width: 100%;
    }

    .client-workout-button {
        text-align: center;
        font-size: 50;
        width: 100%;
        margin-top: 5;
        margin-bottom: 5;
        /* border-color: #FCFCFC;
        border-width: 3;
        border-radius: 5; */
        color: #FCFCFC;
    }

    .client-workout-date {
      color: #FCFCFC;
      font-size: 25;
    }


</style>