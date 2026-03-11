<script setup lang="ts">
import { ref } from "vue"
import { createPost } from "../services/api/postApi"

const emit = defineEmits(["postCreated"])

const title = ref("")
const content = ref("")
const isOpen = ref(false)
const isLoading = ref(false)

function openEditor() {
  isOpen.value = true
}

function cancel() {
  isOpen.value = false
  title.value = ""
  content.value = ""
}

async function publish() {
  if (!title.value.trim() || !content.value.trim()) return

  try {
    isLoading.value = true

    await createPost(title.value, content.value)

    emit("postCreated")

    cancel()
  } catch (error) {
    console.error("Failed to create post", error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="mb-8">

    <!-- Botão -->
    <div v-if="!isOpen" class="flex justify-end">
      <button
        @click="openEditor"
        class="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        <span class="text-lg">+</span>
        Escrever post
      </button>
    </div>

    <!-- Editor -->
    <div
      v-if="isOpen"
      class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
    >
      <!-- Title -->
      <input
        v-model="title"
        placeholder="Título"
        class="w-full text-lg font-semibold border-b border-gray-200 pb-2 mb-4 outline-none focus:border-blue-500"
      />

      <!-- Content -->
      <textarea
        v-model="content"
        placeholder="Escreva seu post..."
        rows="5"
        class="w-full resize-none border border-gray-200 rounded-lg p-3 mb-4 outline-none focus:border-blue-500"
      ></textarea>

      <!-- Actions -->
      <div class="flex justify-end gap-3">

        <button
          @click="cancel"
          class="px-4 py-2 text-gray-600 hover:text-black"
        >
          Cancelar
        </button>

        <button
          @click="publish"
          :disabled="isLoading"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {{ isLoading ? "Publicando..." : "Publicar" }}
        </button>

      </div>
    </div>

  </div>
</template>