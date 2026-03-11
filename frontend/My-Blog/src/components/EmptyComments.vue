<script setup lang="ts">
import emptyComments from "../assets/emptyComments.svg"
</script>

<template>
  <div class="text-center py-10">

    <img
      :src="emptyComments"
      class="w-40 mx-auto mb-4 opacity-80"
    />

    <h3 class="text-lg font-semibold text-gray-700">
      Nenhum comentário ainda
    </h3>

    <p class="text-gray-500 mt-1">
      Seja o primeiro a comentar neste post.
    </p>

  </div>
</template>