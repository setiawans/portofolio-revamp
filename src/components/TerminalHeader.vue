<template>
  <header class="fixed top-0 w-full bg-paper-white/95 dark:bg-ink-black/90 backdrop-blur-sm border-b border-gray-300 dark:border-hacker-green/30 z-[90] transition-colors duration-500">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center font-mono text-sm">
      <div class="flex items-center space-x-2 text-black dark:text-hacker-green">
        <span class="text-black dark:text-hacker-green font-bold">root@portfolio:~/</span>
        <span class="text-black dark:text-white">{{ currentRouteName }}</span>
        <span class="animate-blink-caret border-r-2 border-black dark:border-hacker-green h-5 block"></span>
      </div>
      
      <nav class="hidden md:flex items-center space-x-6">
        <router-link to="/" class="nav-link">./home</router-link>
        <router-link to="/about" class="nav-link">./about</router-link>
        <router-link to="/experience" class="nav-link">./experience</router-link>
        <router-link to="/projects" class="nav-link">./projects</router-link>
        <router-link to="/achievements" class="nav-link">./achievements</router-link>
        <router-link to="/contact" class="nav-link">./contact</router-link>
        
        <!-- Hardware Switch Theme Toggle -->
        <button @click="toggleDark()" class="ml-4 w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-800 p-1 relative transition-colors duration-500 focus:outline-none ring-1 ring-black dark:ring-hacker-green">
          <div class="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-500" :class="isDark ? 'translate-x-6 bg-hacker-green' : 'translate-x-0 bg-black'"></div>
        </button>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-black dark:text-hacker-green">
        <component :is="isOpen ? 'X' : 'Menu'" />
      </button>
    </div>

    <!-- Mobile Nav -->
    <div v-if="isOpen" class="md:hidden bg-paper-white dark:bg-ink-black border-b border-black/10 dark:border-hacker-green/30">
      <nav class="flex flex-col p-4 space-y-4 font-mono text-sm">
         <router-link @click="isOpen = false" to="/" class="nav-link-mobile">./home</router-link>
         <router-link @click="isOpen = false" to="/about" class="nav-link-mobile">./about</router-link>
         <router-link @click="isOpen = false" to="/experience" class="nav-link-mobile">./experience</router-link>
         <router-link @click="isOpen = false" to="/projects" class="nav-link-mobile">./projects</router-link>
         <router-link @click="isOpen = false" to="/achievements" class="nav-link-mobile">./achievements</router-link>
         <router-link @click="isOpen = false" to="/contact" class="nav-link-mobile">./contact</router-link>
         <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <span class="text-black dark:text-white text-xs">Theme: {{ isDark ? 'DARK' : 'LIGHT' }}</span>
            <button @click="toggleDark()" class="text-xs border px-2 py-1 rounded border-black dark:border-hacker-green text-black dark:text-hacker-green">TOGGLE</button>
         </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

const route = useRoute()
const isOpen = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)

const currentRouteName = computed(() => {
  return route.name?.toString().toLowerCase() || 'home'
})
</script>

<style scoped>
.nav-link {
  @apply text-black dark:text-gray-400 hover:text-black dark:hover:text-hacker-green hover:underline dark:hover:no-underline transition-colors;
}
.nav-link-mobile {
  @apply text-black dark:text-gray-400 hover:text-black dark:hover:text-hacker-green block;
}
.router-link-active {
  @apply font-bold text-black border-b-2 border-black dark:text-hacker-green dark:border-hacker-green;
}
</style>
