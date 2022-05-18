<template>
  <div>
    <input type="text" v-model="value" @focus="dirty = true" />
    <span v-show="dirty && !value">field is required</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
const value = useVModel(props, 'modelValue', emit)
const dirty = ref(false)
</script>
