<script setup lang="ts">
import { RouterView } from 'vue-router'
import MatrixBackground from './components/MatrixBackground.vue'
import TerminalHeader from './components/TerminalHeader.vue'
import GlobalTerminal from './components/GlobalTerminal.vue'
</script>

<template>
  <div class="min-h-screen relative font-sans transition-colors duration-300">
    <MatrixBackground />
    <TerminalHeader />

    <main class="relative z-10 pt-20 px-4 min-h-[calc(100vh-80px)] container mx-auto flex flex-col">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <GlobalTerminal />
    
    <footer class="relative z-10 text-center py-4 text-xs font-mono opacity-50 dark:text-gray-500 text-gray-800">
      Steven Setiawan &copy; 2026
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
