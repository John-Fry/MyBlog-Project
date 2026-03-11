<script setup lang="ts">
import emptyState from "../assets/emptyState.svg"
</script>

<template>
  <div class="text-center mt-20">

    <img
      :src="emptyState"
      class="w-80 mx-auto mb-6 opacity-90"
    />

    <h2 class="text-xl font-semibold text-gray-700">
      Nenhum post ainda
    </h2>

    <p class="text-gray-500 mt-2">
      Seja o primeiro a publicar algo.
    </p>

  </div>
</template>