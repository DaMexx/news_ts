<script setup lang="ts">
import { ref, reactive, nextTick, onMounted, type Ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import type { userType, registrationType } from "@/types/types";

const a = ref();
const validationErrors: Ref<any[]> = ref([]);
const authStore = useAuthStore();
const { registrationAction, toggleSingUp } = authStore;
const registrationForm = reactive<registrationType>({
  email: "",
  name: "",
  password: "",
});
const submitForm = (): void => {
  registrationAction(registrationForm);
  registrationForm.email = "";
  registrationForm.password = "";
  registrationForm.name = "";
  setTimeout(() => {
    toggleSingUp(false);
  }, 1000);
};
function validateRegistrationForm(): void {}
</script>
<template>
  <form
    class="registration-form"
    @submit.prevent="submitForm"
    @blur="toggleSingUp(false)"
  >
    <h1 class="registration-form__title">Registration</h1>
    <button class="registration-form__close" @click="toggleSingUp(false)">
      close
    </button>

    <div class="registration-form__item">
      <label class="registration-form__label">Email: </label>
      <input
        class="registration-form__input"
        v-model.trim="registrationForm.email"
        type="email"
      />
    </div>
    <div class="registration-form__item">
      <label class="registration-form__label">Name: </label>
      <input
        class="registration-form__input"
        v-model.trim="registrationForm.name"
        type="text"
      />
    </div>
    <div class="registration-form__item">
      <label class="registration-form__label">Password: </label>
      <input
        class="registration-form__input"
        v-model.trim="registrationForm.password"
        type="password"
      />
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

  &__label {
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
  .registration-form__close {
    position: absolute;
    top: 10%;
    right: 4%;
  }
}
</style>
