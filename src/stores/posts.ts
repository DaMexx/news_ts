import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { postType } from "@/types/types";
import axios from "axios";

const RESOURCE_NAME = "/posts";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref<postType[]>([]);

  //   const test = computed(() => {});

  async function fetchPosts() {
    await axios.get(RESOURCE_NAME).then((response) => {
      posts.value = response.data;
    });
  }

  return {
    posts,
    fetchPosts,
  };
});
