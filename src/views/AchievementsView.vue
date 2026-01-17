<template>
  <div class="max-w-6xl mx-auto py-12">
    <h2 class="text-3xl font-mono text-black dark:text-hacker-green mb-12 border-b border-black dark:border-gray-800 pb-2">
      <span class="text-gray-500 dark:text-white mr-2">$</span>cat achievements.log
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(item, index) in achievements" :key="index" class="group bg-paper-white dark:bg-black border border-black dark:border-gray-800 hover:border-black dark:hover:border-hacker-green transition-all shadow-sm hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[0_0_10px_#0f0] flex flex-col justify-between h-full overflow-hidden">
        
        <!-- Image Placeholder -->
        <div class="h-48 bg-gray-100 dark:bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-black dark:border-gray-800">
          <div class="text-gray-400 font-mono text-xs">
            [CERT_{{ index }}]
          </div>
          <div class="absolute inset-0 bg-black/0 dark:bg-hacker-green/0 group-hover:bg-black/5 dark:group-hover:bg-hacker-green/10 transition-colors"></div>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <div class="flex items-start justify-between mb-4">
             <h3 class="text-lg font-bold text-black dark:text-white font-mono group-hover:text-black dark:group-hover:text-hacker-green transition-colors leading-tight">
               {{ item.title }}
             </h3>
             <span class="text-[10px] font-mono border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded whitespace-nowrap ml-2">
               {{ item.date }}
             </span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
            {{ item.description }}
          </p>
          
          <div class="text-xs text-blue-600 dark:text-gray-500 font-mono pt-4 border-t border-gray-100 dark:border-gray-900 mt-auto">
             Issuer: <span class="text-black dark:text-hacker-green">{{ item.issuer }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const achievements = [
  {
    title: "1st Place CTF Regionals",
    date: "2025-06",
    issuer: "CyberSec Org",
    description: "Won first place in the regional Capture The Flag competition focusing on binary exploitation."
  },
  {
    title: "AWS Certified Solutions Architect",
    date: "2024-12",
    issuer: "Amazon Web Services",
    description: "Validated expertise in designing distributed systems on AWS."
  },
  {
    title: "Best Web Design Award",
    date: "2024-03",
    issuer: "WebDesign Weekly",
    description: "Recognized for outstanding creativity in the 'Neon Future' hackathon submission."
  }
]
</script>
