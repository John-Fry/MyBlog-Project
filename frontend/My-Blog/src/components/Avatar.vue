<script setup lang="ts">
defineProps({name: String})
</script>

<template>
  <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
    {{ name?.charAt(0).toUpperCase() }}
  </div>
</template>