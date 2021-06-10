<template>
<!-- Client name will be the text put in here -->
    <view class="container">
        <text class="clientButton">{{ client.text }}</text>
    </view>


</template>

<script>
export default {
    props: {
        client: {
            Type: Object
        }
    }
};
</script>

<style scoped>
    .container {
        /* flex: 4; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 25%; */
    }
    .clientButton {
        /* background-color: green; */
        text-align: center;
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 50;
        width: 50%;
        margin-top: 5;
        margin-bottom: 5;
        /* border: 2px solid black; */
        border-color: black;
        border-width: 3;
        border-radius: 5;
    }
</style>