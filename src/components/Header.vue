<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user, getUserName, isLogin } = storeToRefs(authStore);
const { logOut, toggleSingUp, toggleSingIn } = authStore;

</script>
<template>
    <header class="header">
        <nav class="header__links">
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/about">About</RouterLink>
        </nav>
        <div v-if="!isLogin" class="login-container">
            <button class="login-container__item" @click="toggleSingUp(true)">Sing up</button>
            <button class="login-container__item" @click="toggleSingIn(true)">Sing in</button>
        </div>
        <div v-if="isLogin" class="login-container">
            <div>Hello, {{ getUserName }}</div>
            <button class="log-out" @click="logOut">logOut</button>
        </div>
    </header>
</template>
<style scoped lang="scss">
.header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link {
        padding-right: 10px;
        text-decoration: none;
        font-size: 1.5em;
    }

    .login-container {
        display: flex;
        gap: 5px;
        align-items: center;

        &__item {
            display: inline-block;
        }
    }
}
</style>