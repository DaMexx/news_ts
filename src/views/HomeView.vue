<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import SingUp from "@/components/home/SingUp.vue";
import Post from "@/components/Post.vue"
import type { userType, registrationType } from "@/types/types";

const authStore = useAuthStore();
const postsStore = usePostsStore();
const { user, getUserName } = storeToRefs(authStore);
const { posts } = storeToRefs(postsStore);
const { validate } = authStore;
const { fetchPosts } = postsStore;

interface Props {
  showSingUp?: boolean,
  showSingIn?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSingUp: false,
  showSingIn: false
})

onMounted(() => {
  validate();
  fetchPosts();
});

</script>

<template>
  <main>
    <div>{{ getUserName }}</div>
    <div>USER {{ user }}</div>
    <div class="posts-container">
      <Post 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
    <SingUp v-if="props.showSingUp" />
    <br>
    <br>
    <br>
  </main>
</template>

<style scoped>

</style>
