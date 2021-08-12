<template>
  <view class="container">
    <text>This is the App Details screen</text>
    
    <button title="Go to Client List screen" @press="goToClientListScreen"></button>
    <button title="Go to Home screen" @press="goToHomeScreen"></button>
  </view>
</template>

<script>
export default {
    props: {
        navigation: {
          type: Object
        }
    },
    methods: {
        goToClientListScreen() {
          this.navigation.navigate("Clients");
        }
    }
}
</script>