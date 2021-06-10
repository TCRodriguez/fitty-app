<template>
  <view class="container">
    <text>This is the Workouts List screen.</text>
    <text>{{ message }}</text>
    <button title="Go to Client List screen" @press="goToClientListScreen"></button>
    <button title="Go to Home screen" @press="goToHomeScreen"></button>
  </view>
</template>

<script>
export default {
  // Declare `navigation` as a prop
    props: {
        navigation: {
            type: Object
        }
    },
    methods: {
        goToClientListScreen() {
            this.navigation.navigate("Clients");
        },
        goToHomeScreen() {
            this.navigation.navigate("Home")
        }
    }
}
</script>