<template>
  <div class="max-w-6xl mx-auto py-6 md:py-12 px-4">
    
    <div class="grid lg:grid-cols-2 gap-12 items-start mt-8">
      
      <!-- LEFT COLUMN: Simplified Contact -->
      <div class="space-y-8 flex flex-col justify-center h-full">
        
        <!-- Clean Header -->
        <div class="space-y-4">
           <p class="text-black dark:text-hacker-green font-bold uppercase tracking-widest text-sm font-mono animate-pulse">
             Let's Connect
           </p>
           <h2 class="text-5xl md:text-7xl font-black text-black dark:text-white leading-tight tracking-tight">
             Let's Build <br />
             <span class="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500">Something Great</span>
           </h2>
           <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl mt-4 font-mono">
             Have a project in mind? Reach out and let's discuss.
           </p>
        </div>

        <!-- Pill Buttons Row -->
        <div class="flex flex-wrap gap-4 pt-4">
          <HackerButton 
            text="GitHub" 
            href="https://github.com/setiawans" 
            variant="pill"
          >
            <template #icon>
               <component :is="GithubIcon" class="w-5 h-5" />
            </template>
          </HackerButton>

          <HackerButton 
            text="Email" 
            href="mailto:stevensetiawan1802@gmail.com" 
            variant="pill"
          >
            <template #icon>
              <component :is="MailIcon" class="w-5 h-5" />
            </template>
          </HackerButton>

           <HackerButton 
            text="LinkedIn" 
            href="https://www.linkedin.com/in/stevensetiawan/" 
            variant="pill"
          >
             <template #icon>
               <component :is="LinkedinIcon" class="w-5 h-5" />
             </template>
          </HackerButton>
        </div>

      </div>

      <!-- RIGHT COLUMN: AI Assistant -->
      <div class="relative mt-8 lg:mt-0 group">
         <!-- Simple border frame -->
         <div class="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 dark:dark:border-hacker-green/50 shadow-xl dark:shadow-[0_0_30px_rgba(0,255,0,0.1)] relative z-10 h-[500px] flex flex-col rounded-xl overflow-hidden transition-all duration-500 group-hover:border-black dark:group-hover:border-hacker-green group-hover:shadow-2xl dark:group-hover:shadow-[0_0_50px_rgba(0,255,0,0.2)]">
            <div class="bg-white/90 dark:bg-black/90 border-b border-gray-200 dark:border-gray-800 dark:dark:border-hacker-green/30 p-3 flex items-center justify-between transition-colors duration-500">
               <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-black dark:bg-hacker-green animate-pulse transition-colors duration-500"></div>
                  <span class="font-mono font-bold text-sm text-gray-700 dark:text-gray-300 tracking-wider transition-colors duration-500">AI Assistant</span>
               </div>
            </div>
            
            <div class="flex-1 overflow-hidden bg-white/50 dark:bg-black/50 relative transition-colors duration-500">
               <!-- Scanline overlay specifically for this terminal -->
               <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>
               <div class="relative z-10 h-full">
                  <ChatBot />
               </div>
            </div>
         </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBot from '../components/ChatBot.vue'
import HackerButton from '../components/HackerButton.vue'
import { Github as GithubIcon, Mail as MailIcon, Linkedin as LinkedinIcon } from 'lucide-vue-next'
</script>
