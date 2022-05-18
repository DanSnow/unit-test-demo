<template>
  <button class="bg-sky-700 p-2 text-white" @click="$emit('click', $event)"><slot /></button>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

defineEmits<{ (event: 'click', e: MouseEvent): void }>()
</script>
