<template>
  <div class="max-w-4xl mx-auto py-12">
    <h2 class="text-3xl font-mono text-black dark:text-hacker-green mb-12 border-b border-black dark:border-gray-800 pb-2">
      <span class="text-gray-500 dark:text-white mr-2">$</span>history | grep experience
    </h2>
    
    <div class="relative border-l border-gray-400 dark:border-gray-700 ml-4 space-y-12">
      <div v-for="(exp, index) in experiences" :key="index" class="pl-8 relative group">
        <!-- Dot -->
        <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-black dark:group-hover:bg-hacker-green transition-colors"></div>
        
        <div class="bg-white dark:bg-white/5 p-6 rounded border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-hacker-green/50 transition-all shadow-sm">
          <span class="text-xs font-mono text-gray-500 dark:text-hacker-green mb-1 block">{{ exp.period }}</span>
          <h3 class="text-xl font-bold text-black dark:text-white mb-1">{{ exp.role }}</h3>
          <h4 class="text-blue-600 dark:text-blue-400 mb-4 text-sm font-mono">{{ exp.company }}</h4>
          <p class="text-gray-600 dark:text-gray-400 text-sm">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = [
  {
    period: "2024 - Present",
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    description: "Leading the frontend team in building next-gen web applications using Vue 3 and TypeScript."
  },
  {
    period: "2022 - 2024",
    role: "Web Developer",
    company: "Creative Studio",
    description: "Developed interactive websites for various clients, focusing on animations and user experience."
  },
  {
    period: "2020 - 2022",
    role: "Junior Developer",
    company: "StartUp Inc",
    description: "Assisted in the development of the company's main product. Learned the ropes of full-stack development."
  }
]
</script>
