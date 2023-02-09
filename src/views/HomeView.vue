<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";
import SingUp from "@/components/home/SingUp.vue"
import type { userType, registrationType } from "@/types/types";

const authStore = useAuthStore();
const { user, getUserName } = storeToRefs(authStore);
const { fetchPosts, validate } = authStore;

onMounted(()=>{
  validate();
});

</script>

<template>
  <main>
 <div>{{ getUserName }}</div>
 <div>USER {{ user }}</div>
    <SingUp />
    <br>
    <br>
    <br>
    <button @click="fetchPosts">POSTS</button>
  </main>
</template>
