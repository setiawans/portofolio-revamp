<template>
  <a 
    :href="href" 
    target="_blank"
    class="group inline-flex items-center justify-center gap-3 px-6 py-3 font-mono font-bold tracking-wider transition-all duration-300 relative overflow-hidden"
    :class="[
       String(variant).startsWith('pill') ? 'rounded-full border dark:border-hacker-green hover:shadow-md' : 'border-2 uppercase',
       variantClasses
    ]"
  >
    <!-- Hover Background Fill (Only for block variants) -->
    <div 
      v-if="!String(variant).startsWith('pill')"
      class="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
      :class="fillClasses"
    ></div>

    <!-- Hover Background (Simple Fade for Pill) -->
    <div 
      v-if="String(variant).startsWith('pill')"
      class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      :class="variant === 'linkedin' ? 'bg-blue-600' : 'bg-black dark:bg-hacker-green'"
    ></div>

    <!-- Content -->
    <span class="relative z-10 transition-colors duration-300 flex items-center gap-2"
       :class="[
          !String(variant).startsWith('pill') ? 'group-hover:text-black dark:group-hover:text-black' : '',
       ]"
    >
       <span v-if="!String(variant).startsWith('pill')" class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-4">></span>
       {{ text }}
       <slot name="icon"></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  href: string
  variant?: 'default' | 'linkedin' | 'pill'
}>()

const variantClasses = computed(() => {
  if (props.variant === 'linkedin') {
    return 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
  }
  // Default / Pill (Always Green in Dark Mode)
  return 'border-black text-black dark:border-hacker-green dark:text-hacker-green'
})

const fillClasses = computed(() => {
  if (props.variant === 'linkedin') {
    return 'bg-blue-600 dark:bg-blue-400'
  }
  return 'bg-black dark:bg-hacker-green'
})
</script>
