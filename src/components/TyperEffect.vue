<template>
  <span class="font-mono text-neon-green inline-block">
    {{ displayedText }}<span class="animate-blink-caret border-r-2 border-neon-blue ml-0.5">&nbsp;</span>
  </span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  text: string
  speed?: number
  delay?: number
}>()

const displayedText = ref('')

const typeText = async () => {
  displayedText.value = ''
  if (props.delay) await new Promise(r => setTimeout(r, props.delay))
  
  for (let i = 0; i < props.text.length; i++) {
    displayedText.value += props.text[i]
    await new Promise(r => setTimeout(r, props.speed || 50 + Math.random() * 50))
  }
}

onMounted(typeText)

watch(() => props.text, typeText)
</script>
