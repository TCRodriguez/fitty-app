<template>
    <view class="button">
        <text style="color: #FCFCFC; text-align: center; font-size: 50;">+</text>
    </view>
</template>

<script>
export default {
    props: {
        characters: {
            type: String,
            default: "+",
            required: false
        }
    }
}
</script>

<style>
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FCFCFC;
        border-width: 1;
        border-color: #7D80DA;
        background-color: #7D80DA;
        border-radius: 10;
        width: 75%;
        /* height: 100%; */
        /* padding-bottom: 5; */
    }
</style>