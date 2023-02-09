<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from 'vue';
import { useAuthStore } from "@/stores/auth";
import type { userType, registrationType } from "@/types/types";

const validationErrors = ref([]);
const authStore = useAuthStore();

const { registrationAction } = authStore;
const registrationForm = reactive<registrationType>({
    email: '',
    name: '',
    password: ''
})
const submitForm = (): void => {
    registrationAction(registrationForm)
    registrationForm.email = '';
    registrationForm.password = '';
    registrationForm.name = ''
}
function validateRegistrationForm(): void {
}
</script>
<template>
    <form @submit.prevent="submitForm">
        <label>Email: </label>
        <input v-model.trim="registrationForm.email" type="email">
        <br>
        <label>Name: </label>
        <input v-model.trim="registrationForm.name" type="text">
        <br>
        <label>Password: </label>
        <input v-model.trim="registrationForm.password" type="password">
        <br>
        <button>send</button>
    </form>
</template>