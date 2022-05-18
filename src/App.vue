<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  @apply font-sans antialiased text-cyan-900 mt-16;

  text-align: center;
}
</style>
