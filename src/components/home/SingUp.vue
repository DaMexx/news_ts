<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from 'vue';
import { useAuthStore } from "@/stores/auth";
import type { userType, registrationType } from "@/types/types";

const authStore = useAuthStore();

const { registrationAction } = authStore

const submitForm = (): void => {
    registrationAction(authForm)
    authForm.email = '';
    authForm.password = '';
    authForm.name = ''
}
const authForm = reactive<registrationType>({
    email: '',
    name: '',
    password: ''
})

</script>
<template>
    <form @submit.prevent="submitForm">
        <label>Email: </label>
        <input v-model="authForm.email" type="email">
        <br>
        <label>Name: </label>
        <input v-model="authForm.name" type="text">
        <br>
        <label>Password: </label>
        <input v-model="authForm.password" type="password">
        <br>
        <button>send</button>
    </form>
</template>