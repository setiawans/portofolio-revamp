<template>
  <canvas ref="canvas" class="fixed top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animationId: number

interface Petal {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
  opacity: number
}

const petals: Petal[] = []
const PETAL_COUNT = 50

const createPetal = (width: number, height: number): Petal => ({
  x: Math.random() * width,
  y: Math.random() * -height,
  size: Math.random() * 10 + 5,
  speedX: Math.random() * 2 - 1,
  speedY: Math.random() * 1 + 1,
  rotation: Math.random() * 360,
  rotationSpeed: Math.random() * 2 - 1,
  opacity: Math.random() * 0.5 + 0.3,
})

const drawPetal = (ctx: CanvasRenderingContext2D, p: Petal) => {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate((p.rotation * Math.PI) / 180)
  ctx.globalAlpha = p.opacity
  ctx.fillStyle = '#ff2e63' // Neon Pink
  
  // Draw a simple petal shape
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size)
  ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0)
  ctx.fill()
  
  ctx.restore()
}

const animate = () => {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  petals.forEach((p) => {
    p.y += p.speedY
    p.x += p.speedX
    p.rotation += p.rotationSpeed

    if (p.y > canvas.value!.height) {
      p.y = -20
      p.x = Math.random() * canvas.value!.width
    }
    if (p.x > canvas.value!.width) {
      p.x = 0
    } else if (p.x < 0) {
      p.x = canvas.value!.width
    }

    drawPetal(ctx, p)
  })

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    
    for (let i = 0; i < PETAL_COUNT; i++) {
        petals.push(createPetal(canvas.value.width, canvas.value.height))
    }
    
    animate()

    window.addEventListener('resize', () => {
        if(canvas.value) {
            canvas.value.width = window.innerWidth
            canvas.value.height = window.innerHeight
        }
    })
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>
