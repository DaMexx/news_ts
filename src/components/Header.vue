<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user, getUserName, isLogin } = storeToRefs(authStore);
const { logOut,  toogleSingUp, toogleSingIn } = authStore;




</script>
<template>
    <header class="header">
        <nav class="header__links">
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/about">About</RouterLink>
        </nav>
        <div class="login-container">
            <button v-if="!isLogin" class="login-container__item" @click="toogleSingUp(true)">Sing up</button>
            <button v-if="!isLogin" class="login-container__item" @click="toogleSingIn(true)">Sing in</button>
            <button v-if="isLogin" class="log-out" @click="logOut">logOut</button>
        </div>
    </header>
</template>
<style scoped lang="scss">
.header {
    padding: 10px;
    display: flex;
    justify-content: space-between;

    .link {
        padding-right: 10px;
        text-decoration: none;
        font-size: 1.5em;
    }

    .login-container {
        display: flex;
        gap: 5px;

        &__item {
            display: inline-block;
        }
    }
}
</style>