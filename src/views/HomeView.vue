<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import SingUp from "@/components/home/SingUp.vue";
import SingIn from "@/components/home/SingIn.vue";
import Post from "@/components/Post.vue"
import type { userType, registrationType } from "@/types/types";

const authStore = useAuthStore();
const postsStore = usePostsStore();
const { user, getUserName, showSingUp, showSingIn } = storeToRefs(authStore);
const { posts } = storeToRefs(postsStore);
const { validate } = authStore;
const { fetchPosts } = postsStore;

interface Props {
  showSingUp?: boolean,
  showSingIn?: boolean
}

// const props = withDefaults(defineProps<Props>(), {
//   showSingUp: true,
//   showSingIn: false
// })

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
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <SingUp v-if="showSingUp" />
    <SingIn v-if="showSingIn" />
    <br>
    <br>
    <br>
  </main>
</template>

<style scoped lang="scss">
.posts-container {

  display: grid;
  grid-template-columns: repeat(3fr);
}
</style>
