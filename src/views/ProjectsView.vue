<template>
  <div class="max-w-6xl mx-auto py-12">
    <h2 class="text-3xl font-mono text-black dark:text-hacker-green mb-12 border-b border-black dark:border-gray-800 pb-2">
      <span class="text-gray-500 dark:text-white mr-2">$</span>ls ./projects
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(project, index) in projects" :key="index" class="group bg-paper-white dark:bg-black border border-black dark:border-gray-800 hover:border-black dark:hover:border-hacker-green transition-all overflow-hidden relative shadow-sm hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[0_0_10px_#0f0]">
        <div class="h-48 bg-gray-100 dark:bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-black dark:border-gray-800">
          <div class="text-gray-400 font-mono text-xs">
            [IMG_{{ index }}]
          </div>
          <div class="absolute inset-0 bg-black/0 dark:bg-hacker-green/0 group-hover:bg-black/5 dark:group-hover:bg-hacker-green/10 transition-colors"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-lg font-bold text-black dark:text-white mb-2 font-mono group-hover:text-black dark:group-hover:text-hacker-green transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" class="text-[10px] px-2 py-1 bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-300 rounded font-mono border border-transparent dark:border-gray-700">
              {{ tag }}
            </span>
          </div>
          <a href="#" class="inline-block text-xs font-mono text-black dark:text-hacker-green hover:underline uppercase tracking-wider">
            View Source &gt;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Portfolio Website",
    description: "The website you are looking at right now. Built with Vue 3, Tailwind CSS, and a touch of cyber magic.",
    tags: ["Vue", "Tailwind", "TypeScript"]
  },
  {
    title: "CTF Tool",
    description: "A set of tools for solving Capture The Flag challenges. Includes decoders, encoders, and common exploit scripts.",
    tags: ["Python", "Bash", "Security"]
  },
  {
    title: "Anime Tracker",
    description: "A web application to track watched anime, integrated with public APIs.",
    tags: ["React", "API", "Node.js"]
  },
  {
    title: "Cyber Visualizer",
    description: "Visualizing network traffic in a cool 3D interface.",
    tags: ["Three.js", "WebGL"]
  }
]
</script>
