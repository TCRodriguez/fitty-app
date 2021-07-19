<template>
    <view>
        <text-input placeholder="Exercise Name..."></text-input>
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        },
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    .container {
        margin-left: 5;
    }


    .input-field {
                /* background-color: green; */
        /* text-align: center; */
        /* justify-content: center; */
        /* color: yellow; */
        font-size: 35;
        width: 90%;
        margin-top: 5;
        margin-bottom: 5;
        /* border: 2px solid black; */
        border-color: black;
        border-width: 3;
        border-radius: 5;
        padding-left: 5;
        padding-top: 5;
        padding-bottom: 5;
    }

    .save-button {
        border-color: black;
        border-width: 3;
        border-radius: 5;
        width: 17%;
        font-size: 25;
        padding-left: 5;
        padding-right: 5;
        /* justify-content: end; */
        margin-top: 10;
    }
</style>