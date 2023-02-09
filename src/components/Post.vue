<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePostsStore } from "@/stores/posts";
import type { postType } from "@/types/types";

interface Props {
    post: postType;
}

const props = defineProps<Props>()



</script>

<template>
    <div class="post">
        <img class="post__img" :src="props.post.image ?? ''" alt="post.image">
        <div class="post__title">{{ props.post.title }}</div>
        <div class="post__content">{{ props.post.content }}</div>
    </div>
</template>
<style scoped lang="scss">
.post {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding: 10px 20px;

    &__img {
        max-width: 100%;
    }

    &__title {
        font-size: 2em;
    }
}
</style>

