import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { userType, registrationType } from "@/types/types";
import axios from "axios";

const REGISTRATION_ENDPOINT: string = "/register";
const LOGIN_ENDPOINT: string = "/login";
const VALIDATE_ENDPOINT: string = "/validate";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(localStorage.getItem("user_token") || null);

  const user = ref<userType | null>(null);

  const getUserName = computed(() => user.value?.name);

  async function registrationAction(authForm: registrationType) {
    await axios.post(REGISTRATION_ENDPOINT, authForm).then((response) => {
      user.value = response.data.user;
      localStorage.setItem("user_token", response.data.token);
      token.value = response.data.token;
    });
  }

  async function fetchPosts() {
    await axios.get("/posts").then((response) => {});
  }

  async function validate() {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    };
    if (token.value) {
      await axios
        .post(VALIDATE_ENDPOINT, {}, { headers })
        .then((response) => (user.value = response.data));
    }
  }

  return {
    token,
    user,
    getUserName,
    registrationAction,
    fetchPosts,
    validate,
  };
});
