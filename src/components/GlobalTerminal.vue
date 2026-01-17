<template>
  <div v-if="visible" class="fixed inset-0 bg-paper-white/95 dark:bg-black/95 z-[100] font-mono p-4 md:p-8 text-black dark:text-hacker-green overflow-hidden flex flex-col backdrop-blur-sm transition-all duration-300">
    <!-- CRT Overlay -->
    <div class="pointer-events-none absolute inset-0 z-[110] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
    <div class="pointer-events-none absolute inset-0 z-[110] bg-gradient-to-b from-transparent via-black/5 to-transparent bg-[length:100%_4px] animate-scanlines dark:bg-black/10"></div>
    
    <!-- Close Button -->
    <button @click="toggle" class="absolute top-4 right-4 md:top-8 md:right-8 text-sm md:text-xl font-bold hover:text-red-500 uppercase tracking-widest border border-transparent hover:border-red-500 px-4 py-2 transition-all z-[120]">
      [CLOSE SYSTEM]
    </button>

    <div class="h-full flex flex-col max-w-3xl mx-auto w-full transition-all duration-500 ease-in-out relative z-[115]">
      <!-- Output Area -->
      <div ref="outputRef" class="flex-1 overflow-y-auto mb-4 text-sm space-y-2 font-medium scrollbar-hide font-mono tracking-wide scroll-smooth dark:text-shadow-glow">
        <div v-for="(line, i) in history" :key="i" class="leading-relaxed">
          <span class="opacity-50 mr-4 text-xs select-none font-bold text-gray-500 dark:text-gray-600">[{{ line.time }}]</span>
          <span v-html="line.content"></span>
        </div>
      </div>
      
      <!-- Input Area -->
      <div class="flex items-center text-base md:text-xl border-t-2 border-black dark:border-hacker-green pt-4 transition-colors duration-300 dark:text-shadow-glow">
        <span class="mr-4 font-bold animate-pulse text-black dark:text-hacker-green">root@portfolio:~#</span>
        <input 
          ref="inputRef"
          v-model="command"
          @keydown.enter="execute"
          type="text" 
          class="flex-1 bg-transparent border-none outline-none text-black dark:text-hacker-green placeholder-gray-500 font-bold"
          placeholder="Enter command..."
          autoFocus
        />
      </div>
      <div class="mt-2 text-xs opacity-50">
        Try: <span class="font-bold">help</span>, <span class="font-bold">ls</span>, <span class="font-bold">cat README.md</span>, <span class="font-bold">cd projects</span>
      </div>
    </div>
  </div>
  
  <!-- Launcher (Visible when minimized) -->
  <button 
    v-else 
    @click="toggle" 
    class="fixed bottom-6 right-6 bg-black dark:bg-black text-white dark:text-hacker-green border-2 border-black dark:border-hacker-green px-6 py-3 font-mono text-xs md:text-sm font-bold z-[50] hover:bg-white hover:text-black dark:hover:bg-hacker-green dark:hover:text-black transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.5)] dark:shadow-[0_0_15px_rgba(0,255,0,0.4)]"
  >
    >_ TERMINAL
  </button>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)

const visible = ref(false)
const command = ref('')
const history = ref<{time: string, content: string}[]>([])
const inputRef = ref<HTMLInputElement | null>(null)
const outputRef = ref<HTMLElement | null>(null)

const readmeContent = `
<div class="border-l-4 border-black dark:border-hacker-green pl-4 my-2">
  <h1 class="text-2xl font-bold mb-2">PORTFOLIO SYSTEM v2.0</h1>
  <p class="mb-2">Welcome to the digital workspace of Steven Setiawan.</p>
  <p class="mb-2">This system is designed for efficiency, aesthetics, and interaction.</p>
  
  <h2 class="text-xl font-bold mt-4 mb-1">NAVIGATION</h2>
  <ul class="list-disc list-inside">
    <li>Use <span class="bg-gray-200 dark:bg-gray-800 px-1">cd [page]</span> to jump to sections.</li>
    <li>Use <span class="bg-gray-200 dark:bg-gray-800 px-1">theme [dark/light]</span> to toggle visual modes.</li>
  </ul>
</div>
`

const toggle = () => {
  visible.value = !visible.value
  if (visible.value) {
    nextTick(() => inputRef.value?.focus())
  }
}

const addLog = (content: string) => {
  const time = new Date().toLocaleTimeString('en-US', { hour12: false })
  history.value.push({ time, content })
  nextTick(() => {
    if (outputRef.value) outputRef.value.scrollTop = outputRef.value.scrollHeight
  })
}

const execute = () => {
  const cmd = command.value.trim()
  if (!cmd) return
  
  addLog(`root@portfolio:~# ${cmd}`) 
  
  // Basic parsing
  const args = cmd.split(' ').filter(a => a)
  const main = (args[0] || '').toLowerCase()
  const param = (args[1] || '').toLowerCase()
  
  switch (main) {
    case 'help':
      addLog(`
        Available commands:<br>
        - <b>cd [dir]</b>: Navigate (home, about, projects, contact, etc)<br>
        - <b>ls</b>: List directory<br>
        - <b>cat [file]</b>: Read file content<br>
        - <b>theme [mode]</b>: Switch theme (try 'matrix' or 'ink')<br>
        - <b>clear</b>: Clear output<br>
        - <b>whoami</b>: Check access level
      `.replace(/^\s+/gm, '').replace(/\n/g, '<br>'))
      break
      
    case 'clear':
      history.value = []
      break
      
    case 'ls':
      addLog(`
        <div class="grid grid-cols-2 gap-4 mt-2">
          <span class="text-blue-600 dark:text-blue-400 font-bold">home/</span>
          <span class="text-blue-600 dark:text-blue-400 font-bold">about/</span>
          <span class="text-blue-600 dark:text-blue-400 font-bold">experience/</span>
          <span class="text-blue-600 dark:text-blue-400 font-bold">projects/</span>
          <span class="text-blue-600 dark:text-blue-400 font-bold">achievements/</span>
          <span class="text-blue-600 dark:text-blue-400 font-bold">contact/</span>
          <span class="text-gray-500">README.md</span>
        </div>
      `)
      break
      
    case 'cat':
      if (param === 'readme.md' || param === 'readme') {
        addLog(readmeContent)
      } else {
        addLog(`cat: ${param}: No such file or directory`)
      }
      break
      
    case 'cd':
      if (param) {
        // Sanitize path
        const route = param.replace('/', '')
        const validRoutes = ['home', 'about', 'experience', 'projects', 'achievements', 'contact']
        
        if (validRoutes.includes(route) || route === '' || route === '..') {
            const target = (route === 'home' || route === '' || route === '..') ? '/' : `/${route}`
            addLog(`Translating to ${target}...`)
            
            // Interaction delay for effect
            setTimeout(() => {
                router.push(target)
                visible.value = false // Auto-minimize
            }, 600)
        } else {
            addLog(`cd: no such file or directory: ${param}`)
        }
      } else {
          router.push('/')
          visible.value = false
      }
      break
      
    case 'theme':
      if (param === 'light' || param === 'ink') {
         isDark.value = false
         addLog('Theme switched to [INK / LIGHT]')
      } else if (param === 'dark' || param === 'matrix') {
         isDark.value = true
         addLog('Theme switched to [MATRIX / DARK]')
      } else {
         toggleDark()
         addLog(`Theme toggled.`)
      }
      break
      
    case 'whoami':
        addLog('<span class="text-green-600 dark:text-green-400 font-bold">guest</span> (Access Level: OBSERVER)')
        break
        
    default:
      addLog(`Command not found: ${main}`)
  }
  
  command.value = ''
}

onMounted(() => {
    addLog('System initialized. Type "help" for commands.')
})
</script>

<style scoped>
/* Hide scrollbar for clean look */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.text-shadow-glow {
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3);
}

@keyframes scanlines {
  0% { background-position: 0 0; }
  100% { background-position: 0 4px; }
}
.animate-scanlines {
  animation: scanlines 1s linear infinite;
}
</style>
