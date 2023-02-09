import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { userType, registrationType, loginType } from "@/types/types";
import axios from "axios";

const REGISTRATION_ENDPOINT: string = "/register";
const LOGIN_ENDPOINT: string = "/login";
const VALIDATE_ENDPOINT: string = "/validate";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(localStorage.getItem("user_token") || null);
  const user = ref<userType | null>(null);

  const getUserName = computed(() => user.value?.name);
  const isLogin = computed(() => token.value);

  async function registrationAction(authForm: registrationType) {
    await axios.post(REGISTRATION_ENDPOINT, authForm).then((response) => {
      user.value = response.data.user;
      localStorage.setItem("user_token", response.data.token);
      token.value = response.data.token;
    });
  }

  async function validate() {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    };
    if (isLogin) {
      await axios
        .post(VALIDATE_ENDPOINT, {}, { headers })
        .then((response) => (user.value = response.data));
    }
  }
  async function loginRequest(loginForm: loginType) {
    axios.post(LOGIN_ENDPOINT, loginForm).then((response) => {
      user.value = response.data.user;
      token.value = response.data.token;
    });
  }

  async function logOut() {
    user.value = null;
    localStorage.removeItem("user_token");
  }

  return {
    token,
    user,
    getUserName,
    loginRequest,
    registrationAction,
    validate,
    logOut,
  };
});
