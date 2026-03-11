<script setup lang="ts">
import Avatar from "./Avatar.vue"
import { timeAgo } from "../utils/timeAgo"

defineProps({
  author: String,
  content: String,
  createdAt: Date
})
</script>

<template>
  <div class="flex justify-between items-start py-4 border-b border-gray-200">

    <div class="flex gap-3">

      <Avatar :name="author" />

      <div>
        <p class="font-semibold text-gray-800">
          {{ author }}
        </p>

        <p class="text-gray-600">
          {{ content }}
        </p>
      </div>

    </div>

    <div class="text-sm text-gray-400 whitespace-nowrap">
      {{ timeAgo(createdAt!) }}
    </div>

  </div>
</template>