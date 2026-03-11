<script setup lang="ts">
import { useRouter } from "vue-router"
import { timeAgo } from "../utils/timeAgo"
const router = useRouter()

const props = defineProps({
  id: Number,
  title: String,
  createdAt: Date,
  commentCount: Number
})

function openPost(id:number){
  router.push(`/post/${id}`)
}
</script>

<template>
  <div
    @click="openPost(id!)"
    class="cursor-pointer flex items-center justify-between py-6 border-b border-gray-200 hover:bg-gray-50 transition"
  >

    <div>
      <h2 class="text-lg font-semibold text-gray-900 hover:text-blue-600 transition cursor-pointer">
        {{ title }}
      </h2>

      <p class="text-sm text-gray-500">
        {{ timeAgo(createdAt!) }}
      </p>
    </div>

    <div class="text-gray-500">
      💬 {{ commentCount }}
    </div>

  </div>
</template>