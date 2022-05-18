<template>
  <div>
    <button @click="handleClick">fetch data</button>
    <div v-if="res" data-testid="output">
      <pre>{{ res }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const res = ref<any>()

function handleClick() {
  fetch('https://api.github.com/repos/vuejs/vue')
    .then((res) => res.json())
    .then((data) => {
      res.value = data
    })
}
</script>
