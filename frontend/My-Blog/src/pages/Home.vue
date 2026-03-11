<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PostListItem from '../components/PostListItem.vue'
import CreatePost from '../components/CreatePost.vue';
import { fetchPosts } from "../services/api/postApi"
import { PostSummary } from "../services/models/postSummaryModel"
import EmptyState from '../components/EmptyState.vue';

const posts = ref<PostSummary[]>([])

async function loadPosts() {
  posts.value = await fetchPosts()
  posts.value.sort((a, b) => b.id - a.id)
}

onMounted(loadPosts)
</script>

<template>
  <div class="max-w-5xl mx-auto mt-8">

    <CreatePost @postCreated="loadPosts" />

    <EmptyState v-if="posts.length === 0" />

    <PostListItem
      v-else
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :createdAt="post.createdAt"
      :commentCount="post.commentCount"
    />

  </div>
</template>