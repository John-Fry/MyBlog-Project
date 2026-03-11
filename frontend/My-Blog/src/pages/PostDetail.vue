<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import CommentItem from "../components/CommentItem.vue"
import { fetchPost, addComment as apiAddComment } from "../services/api/postApi"
import type { PostDetail } from "../services/models/postDetailModel"
import { timeAgo } from "../utils/timeAgo"
import EmptyComments from "../components/EmptyComments.vue"

const route = useRoute()
const router = useRouter()

const post = ref<PostDetail | null>(null)

const author = ref("")
const newComment = ref("")

async function loadPost() {
  const id = Number(route.params.id)

  post.value = await fetchPost(id)
}

async function addComment() {
  if (!author.value || !newComment.value || !post.value) return

  const comment = await apiAddComment(
    post.value.id,
    author.value,
    newComment.value
  )

  post.value.comments.push(comment)

  author.value = ""
  newComment.value = ""
}

function goBack() {
  router.back()
}

onMounted(loadPost)
</script>

<template>
  
  <div class="max-w-3xl mx-auto mt-10" v-if="post">
    <div class="mb-6">
      <button @click="goBack"
        class="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ← Voltar
      </button>
    </div>

    <div class="mb-10">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">
        {{ post.title }}
      </h1>

      <p class="text-gray-700 leading-relaxed">
        {{ post.content }}
      </p>

      <p class="text-sm text-gray-500 mt-2">
        {{ timeAgo(post.createdAt) }}
      </p>
    </div>

    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      Comentários
    </h2>

    <EmptyComments v-if="post.comments.length === 0" />

    <CommentItem
      v-else
      v-for="comment in post.comments"
      :key="comment.id"
      :author="comment.author"
      :content="comment.content"
      :createdAt="comment.createdAt"
    />

    <div class="mt-8 bg-white border border-gray-200 rounded-xl p-4">

      <input
        v-model="author"
        placeholder="Seu nome"
        class="w-full border border-gray-200 rounded-lg p-2 mb-3 outline-none focus:border-blue-500"
      />

      <textarea
        v-model="newComment"
        placeholder="Escreva um comentário..."
        rows="3"
        class="w-full resize-none border border-gray-200 rounded-lg p-3 mb-3 outline-none focus:border-blue-500"
      ></textarea>

      <div class="flex justify-end">
        <button
          @click="addComment"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Comentar
        </button>
      </div>

    </div>

  </div>
</template>