<template>
  <div class="flex-1 flex flex-col justify-center items-center h-[calc(100dvh-6rem)] md:min-h-[70dvh] overflow-hidden">
    <div class="text-center space-y-4 md:space-y-6">
      <h1 class="text-4xl md:text-8xl font-bold font-mono text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-hacker-green dark:to-white animate-pulse tracking-tighter">
        WELCOME
      </h1>
      <div class="text-lg md:text-3xl font-mono h-8 md:h-12 flex justify-center items-center">
        <span class="text-gray-400 dark:text-gray-600 mr-2 md:mr-3">&gt;</span>
        <TyperEffect :text="titles[currentTitleIndex] || ''" :key="currentTitleIndex" class="text-black dark:text-hacker-green" />
      </div>
      <p class="max-w-xl mx-auto text-gray-700 dark:text-gray-400 mt-4 md:mt-8 font-mono text-xs md:text-base leading-relaxed px-4">
        I'm Steven, passionate about exploring the ever-evolving world of technology.
      </p>
      
      <div class="mt-8 md:mt-12 flex justify-center gap-4 md:gap-6 flex-wrap px-4">
        <router-link to="/projects" class="px-6 py-2 md:px-8 md:py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black dark:border-hacker-green dark:bg-transparent dark:text-hacker-green dark:hover:bg-hacker-green dark:hover:text-black transition-all font-mono font-bold uppercase tracking-widest shadow-lg hover:shadow-none text-xs md:text-base">
          View Projects
        </router-link>
        <router-link to="/contact" class="px-6 py-2 md:px-8 md:py-3 border-2 border-black text-black hover:bg-black hover:text-white dark:border-gray-500 dark:text-gray-300 dark:hover:border-white dark:hover:text-white transition-all font-mono font-bold uppercase tracking-widest text-xs md:text-base">
          Contact Me
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TyperEffect from '../components/TyperEffect.vue'

const titles = [
  "I am a Developer.",
  "I am a Learner.",
  "I am an Explorer.",
  "I am a Builder."
]

const currentTitleIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
  }, 4000)
})
</script>
