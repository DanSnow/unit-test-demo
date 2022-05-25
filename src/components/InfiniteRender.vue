<template>
  <div>{{ count++ }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
</script>
