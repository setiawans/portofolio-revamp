<template>
  <canvas ref="canvas" class="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20 dark:opacity-30"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const canvas = ref<HTMLCanvasElement | null>(null)
let animationId: number

const CHARACTERS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const fontSize = 16
let columns = 0
let drops: number[] = []

const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  // Trail effect
  ctx.fillStyle = isDark.value ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
  ctx.fillRect(0, 0, width, height)

  // Text Style
  ctx.fillStyle = isDark.value ? '#0F0' : '#000000' 
  ctx.font = `${fontSize}px monospace`

  for (let i = 0; i < drops.length; i++) {
    const text = CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    const x = i * fontSize
    let currentDrop = drops[i] || 1
    const y = currentDrop * fontSize

    ctx.fillText(text, x, y)

    // Slower rain: Reduced probability from 0.975 to 0.99
    if (y * fontSize > height && Math.random() > 0.99) {
      currentDrop = 0
    } else {
        currentDrop++
    }
    drops[i] = currentDrop
  }
}

let lastFrameTime = 0
const targetFPS = 20 // Slow down to 20 FPS

const animate = (time: number) => {
  if (!canvas.value) return
  
  const ctx = canvas.value.getContext('2d')
  if (!ctx) return
  
  animationId = requestAnimationFrame(animate)

  const deltaTime = time - lastFrameTime
  if (deltaTime < 1000 / targetFPS) return

  lastFrameTime = time
  draw(ctx, canvas.value.width, canvas.value.height)
}

let lastWidth = 0

const resize = () => {
  if (!canvas.value) return
  
  const width = window.innerWidth
  const height = window.innerHeight
  
  // Always update dimensions to match viewport
  canvas.value.width = width
  canvas.value.height = height

  // Only reset drops if width changes (e.g. orientation change)
  // This prevents restart on mobile scroll (address bar hide/show)
  if (width !== lastWidth) {
    columns = Math.floor(width / fontSize)
    drops = Array(columns).fill(1)
    lastWidth = width
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  animate(0)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  cancelAnimationFrame(animationId)
})
</script>
