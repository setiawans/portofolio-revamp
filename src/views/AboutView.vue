<script setup lang="ts">
import meImg from '../assets/about/me.jpg'
</script>

<template>
  <div class="max-w-4xl mx-auto py-12">
    <h2 class="text-3xl font-mono text-black dark:text-hacker-green mb-8 border-b border-black dark:border-gray-800 pb-2">
      <span class="text-gray-500 dark:text-white mr-2">$</span>cat about.me
    </h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 space-y-6 text-gray-800 dark:text-gray-300 font-mono text-sm leading-relaxed p-4 border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50">
        <p>
          <span class="text-blue-600 dark:text-blue-400">const</span> <span class="text-yellow-600 dark:text-yellow-400">steven</span> = {<br>
          &nbsp;&nbsp;name: <span class="text-green-600 dark:text-green-400">'Steven Setiawan'</span>,<br>
          &nbsp;&nbsp;role: <span class="text-green-600 dark:text-green-400">'Student'</span>,<br>
          &nbsp;&nbsp;specialties: [<span class="text-green-600 dark:text-green-400">'CTF'</span>, <span class="text-green-600 dark:text-green-400">'Full-Stack'</span>, <span class="text-green-600 dark:text-green-400">'DevOps'</span>]<br>
          };
        </p>
        <p>
          I'm a Computer Science student at Universitas Indonesia with a passion for cybersecurity and software development. As a multiple-time national CTF champion, I bridge the gap between security and development, where i build robust systems while finding ways to break them.
        </p>
        <p>
          When I'm not competing in CTFs or teaching as a TA, I'm exploring new tech, architecting full-stack applications, or diving deep into cryptography and digital forensics.
        </p>
      </div>
      
      <div class="order-1 md:order-2 flex justify-center">
        <!-- Placeholder for profile image -->
        <div class="w-64 h-64 border-2 border-black dark:border-hacker-green/50 rounded-full overflow-hidden relative group">
          <div class="absolute inset-0 bg-black/10 dark:bg-hacker-green/20 group-hover:bg-transparent transition-all"></div>
          <img :src="meImg" alt="Profile" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
          
          <!-- Ring 1: Clockwise -->
          <div class="absolute inset-0 border-[4px] border-t-black dark:border-t-hacker-green border-r-transparent border-b-black dark:border-b-white border-l-transparent rounded-full animate-spin-slow"></div>
          
          <!-- Ring 2: Counter-Clockwise (Offset) -->
          <div class="absolute inset-[-8px] border-[2px] border-t-transparent border-r-black dark:border-r-hacker-green/70 border-b-transparent border-l-black dark:border-l-white/70 rounded-full animate-reverse-spin-slow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
.animate-reverse-spin-slow {
  animation: spin-reverse 12s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
</style>