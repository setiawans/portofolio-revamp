<template>
  <a 
    :href="href" 
    target="_blank"
    class="relative group inline-block text-center font-black italic uppercase tracking-tighter decoration-0"
    :class="containerClasses"
  >
    <!-- Shadow/Offset Layer -->
    <div 
      class="absolute inset-0 bg-black translate-y-2 translate-x-2 transition-transform duration-200 group-hover:translate-x-3 group-hover:translate-y-3 skew-x-[-10deg]"
      :class="shadowClasses"
    ></div>

    <!-- Main Button Layer -->
    <div 
      class="relative border-4 border-black px-8 py-4 transform skew-x-[-10deg] transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 flex items-center justify-center gap-3 overflow-hidden"
      :class="variantClasses"
    >
      <!-- Unskew Content -->
      <div class="transform skew-x-[10deg] flex items-center gap-2">
         <span class="text-2xl md:text-3xl">{{ text }}</span>
         <slot name="icon"></slot>
      </div>
      
      <!-- Shine Effect -->
      <div class="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[20deg] group-hover:animate-shine"></div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  href: string
  variant?: 'black' | 'blue' | 'white'
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'blue':
      return 'bg-[#0077b5] text-white hover:bg-[#006097]'
    case 'white':
      return 'bg-white text-black hover:bg-gray-100'
    default: // black
      return 'bg-black text-white hover:bg-zinc-900 border-white/20' // border tweak for visibility
  }
})

const containerClasses = computed(() => {
    return 'p-2' // padding for offset
})

const shadowClasses = computed(() => {
    if (props.variant === 'black') return 'shadow-none border-2 border-white/20' // tweak
    return ''
})
</script>

<style scoped>
@keyframes shine {
  0% { transform: translateX(-100%) skewX(20deg); }
  100% { transform: translateX(200%) skewX(20deg); }
}
.animate-shine {
  animation: shine 0.5s linear;
}
</style>
