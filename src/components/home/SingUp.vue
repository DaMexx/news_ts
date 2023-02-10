<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from 'vue';
import { useAuthStore } from "@/stores/auth";
import type { userType, registrationType } from "@/types/types";

const validationErrors = ref([]);
const authStore = useAuthStore();
const { registrationAction, toogleSingUp } = authStore;
const registrationForm = reactive<registrationType>({
    email: '',
    name: '',
    password: ''
})
const submitForm = (): void => {
    registrationAction(registrationForm)
    registrationForm.email = '';
    registrationForm.password = '';
    registrationForm.name = '';

}
function validateRegistrationForm(): void {
}
</script>
<template>
    <form class="registration-form" @submit.prevent="submitForm" @blur="toogleSingUp(false)">
        <h1 class="registration-form__title">Registration</h1>
        <div class="registration-form__item">
            <label class="registration-form__lable">Email: </label>
            <input class="registration-form__input" v-model.trim="registrationForm.email" type="email">
        </div>
        <div class="registration-form__item">
            <label class="registration-form__lable">Name: </label>
            <input class="registration-form__input" v-model.trim="registrationForm.name" type="text">
        </div>
        <div class="registration-form__item">
            <label class="registration-form__lable">Password: </label>
            <input class="registration-form__input" v-model.trim="registrationForm.password" type="password">
        </div>
        <button class="registration-form__button">Send</button>
    </form>
</template>
<style scoped lang="scss">
.registration-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 600px;
    background-color: aqua;
    border-radius: 30px;
    gap: 15px;
    position: absolute;
    top: 15%;
    left: 25%;
    box-shadow: rgb(0 0 0 / 94%) 0px 0px 28px;

    &__title {
        text-align: center;
    }

    &__lable {
        display: inline-block;
    }

    &__item {
        display: flex;
        justify-content: space-between;
    }

    &__input {
        display: inline-block;
        justify-self: flex-end;
        width: 80%;
    }

    &__button {
        width: 25%;
        align-self: center;
    }
}
</style>