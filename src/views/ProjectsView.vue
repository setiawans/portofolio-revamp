<template>
  <div class="max-w-6xl mx-auto py-12">
    <h2 class="text-3xl font-mono text-black dark:text-hacker-green mb-12 border-b border-black dark:border-gray-800 pb-2">
      <span class="text-gray-500 dark:text-white mr-2">$</span>ls ./projects
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(project, index) in projects" :key="index" class="group bg-paper-white dark:bg-black border border-black dark:border-gray-800 hover:border-black dark:hover:border-hacker-green transition-all overflow-hidden relative shadow-sm hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[0_0_10px_#0f0]">
        <div class="bg-gray-100 dark:bg-gray-900 relative overflow-hidden border-b border-black dark:border-gray-800">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
          <div v-else class="h-48 flex items-center justify-center text-gray-400 font-mono text-xs">
            [IMG_{{ index }}]
          </div>
          <div class="absolute inset-0 bg-black/0 dark:bg-hacker-green/0 group-hover:bg-black/5 transition-colors"></div>
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
          <a :href="project.link || '#'" :target="project.link ? '_blank' : ''" class="inline-block text-xs font-mono text-black dark:text-hacker-green hover:underline uppercase tracking-wider">
            View Source &gt;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import quickclipImg from '@/assets/projects/quickclip.jpeg'
import pandacareImg from '@/assets/projects/pandacare.jpeg'
import copilotImg from '@/assets/projects/copilot.jpeg'
import writeupImg from '@/assets/projects/writeup.jpeg'
import compfestImg from '@/assets/projects/compfest.jpeg'
import portfolioImg from '@/assets/projects/portfolio.jpeg'

const projects = [
  {
    title: "Portfolio Website",
    description: "The website you are looking at right now. Built with Vue 3, Tailwind CSS, and a touch of cyber magic.",
    tags: ["Vue", "Tailwind", "TypeScript"],
    link: "https://github.com/setiawans/portofolio-revamp",
    image: portfolioImg
  },
  {
    title: "QuickClip",
    description: "SaaS Pastebin and URL shortener. Built with React, Node.js, PostgreSQL, and AWS S3, deployed on Kubernetes.",
    tags: ["React", "Node.js", "Kubernetes", "Database"],
    link: "https://github.com/mir4na/quickclip",
    image: quickclipImg
  },
  {
    title: "Learning Assistant Chatbot",
    description: "AI-powered chatbot for learning assistance, featuring material recommendations and interactive chat.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    link: "https://github.com/setiawans/learning-assistant-chatbot",
    image: copilotImg
  },
  {
    title: "PandaCare",
    description: "Comprehensive healthcare platform featuring doctor consultations and real-time chat.",
    tags: ["Full-Stack", "DevOps", "Microservices"],
    link: "https://github.com/orgs/Adpro-Genap-2024-2025-A05/repositories",
    image: pandacareImg
  },
  {
    title: "COMPFEST 17",
    description: "Created cryptography challenges for the qualification and final round.",
    tags: ["Problemsetting", "CTF", "Cryptography"],
    link: "https://github.com/ctf-compfest-17/quals-challenges",
    image: compfestImg
  },
  {
    title: "CTF Writeups",
    description: "A documentation of my journey through various CTF challenges, focusing on cryptography.",
    tags: ["CTF", "Cryptography"],
    link: "https://tipsen.gitbook.io/notes",
    image: writeupImg
  }
]
</script>
