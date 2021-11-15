<template>

        <!-- <view class="container">
            <text class="fitty-title text-color-primary">Sets</text>
            <text class="fitty-title text-color-primary">&</text>
            <text class="fitty-title text-color-primary" style="margin-bottom: 50">Reps</text>

            <text-input class="login-field" placeholder="email" placeholderTextColor="#FCFCFC" v-model="email"/>
            <text-input class="login-field" placeholder="password" placeholderTextColor="#FCFCFC" v-model="password"/>

            <text class="button" @press="login()">Login</text>
        </view> -->
        <KeyboardAvoidingView class="container" behavior="padding">
            <text class="fitty-title text-color-primary">Sets</text>
            <text class="fitty-title text-color-primary">&</text>
            <text class="fitty-title text-color-primary" style="margin-bottom: 50">Reps</text>

            <text-input class="login-field" placeholder="email" placeholderTextColor="#FCFCFC" v-model="email"/>
            <text-input class="login-field" placeholder="password" placeholderTextColor="#FCFCFC" v-model="password"/>

            <text class="button" @press="login()">Login</text>
            <View style="height: 60"></View>
        </KeyboardAvoidingView>

</template>

<script>



export default {
    data() {
        return {
            email: '',
            password: '',
            trainerId: null,
        }
    },
    props: {
        navigation: {
            type: Object
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login/login', payload)
            .then(() => {
                this.navigation.navigate('Clients')
            })
            .catch(error => {
                console.log(error.response)
            })

        },
    }
}
</script>

<style scoped>
    ::placeholder {
        color: #FCFCFC;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #080708;
    }

    .fitty-title {
        font-size: 75;
        font-family: 'ArchivoBlack-Regular';

        font-weight: bold;
    }

    .button {
        text-align: center;
        font-size: 25;
        width: 55%;
        margin-bottom: 5;
        border-color: #FCFCFC;
        border-width: 1;
        border-radius: 5;
        color: #FCFCFC;
    }

    .login-field {
        height: 5%;
        width: 55%;
        border-color: #FCFCFC;
        border-width: 3;
        border-radius: 5;
        padding-left: 10;
        margin-bottom: 10;
        color: #FCFCFC;
    }

    .text-color-primary {
        color: white;
    }
</style>