<template>
  <div class="max-w-6xl mx-auto py-6 md:py-12">
    <h2 class="text-3xl font-mono text-black dark:text-hacker-green mb-12 border-b border-black dark:border-gray-800 pb-2">
      <span class="text-gray-500 dark:text-white mr-2">$</span>cat achievements.log
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(item, index) in achievements" :key="index" @click="openGallery(item)" class="group bg-paper-white dark:bg-black border border-black dark:border-gray-800 hover:border-black dark:hover:border-hacker-green transition-all shadow-sm hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[0_0_10px_#0f0] flex flex-col justify-between h-full overflow-hidden cursor-pointer">
        
        <!-- Image Placeholder -->
        <div class="h-48 bg-gray-100 dark:bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-black dark:border-gray-800">
          <img v-if="item.image" :src="item.image" :alt="item.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
          <div v-else class="text-gray-400 font-mono text-xs">
            [CERT_{{ index }}]
          </div>
          <div class="absolute inset-0 bg-black/0 dark:bg-hacker-green/0 group-hover:bg-black/5 transition-colors"></div>
          
          <!-- Gallery Indicator -->
          <div v-if="item.gallery && item.gallery.length > 1" class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full font-mono flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            {{ item.gallery.length }}
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-lg font-bold text-black dark:text-white font-mono group-hover:text-black dark:group-hover:text-hacker-green transition-colors leading-tight mb-2">
               {{ item.title }}
          </h3>
          <div class="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 mb-4">
               <Calendar class="w-3 h-3" />
               <span>{{ item.date }}</span>
          </div>

          
          <div class="text-xs text-blue-600 dark:text-gray-500 font-mono pt-4 border-t border-gray-100 dark:border-gray-900 mt-auto">
             Issuer: <span class="text-black dark:text-hacker-green">{{ item.issuer }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <!-- Gallery Modal -->
    <div v-if="selectedAchievement" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm pt-20" @click.self="closeGallery">
      
      <div class="relative w-[95vw] md:w-[80vw] lg:w-[60vw] bg-transparent flex flex-col items-center pointer-events-none">
        
        <!-- Main Image -->
        <div class="relative w-full aspect-video flex items-center justify-center rounded-lg overflow-hidden border border-gray-800 bg-black/20 pointer-events-auto">
           <!-- Loading Spinner -->
           <div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center">
              <div class="w-8 h-8 border-4 border-gray-500 border-t-black dark:border-t-hacker-green rounded-full animate-spin"></div>
           </div>
           
           <img 
               v-if="currentGalleryImage" 
               :src="currentGalleryImage" 
               :alt="selectedAchievement.title" 
               class="w-full h-full object-contain transition-opacity duration-300"
               :class="imageLoading ? 'opacity-0' : 'opacity-100'"
               @load="imageLoading = false"
           />
           
           <!-- Navigation Buttons -->
           <button v-if="hasMultipleImages" @click.stop="prevImage" class="hidden md:block absolute left-4 p-2 rounded-full backdrop-blur-sm border transition-all bg-white/80 text-black border-black/10 hover:bg-black hover:text-white dark:bg-black/50 dark:text-white dark:border-white/10 dark:hover:bg-hacker-green dark:hover:text-black z-20">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
           </button>
           <button v-if="hasMultipleImages" @click.stop="nextImage" class="hidden md:block absolute right-4 p-2 rounded-full backdrop-blur-sm border transition-all bg-white/80 text-black border-black/10 hover:bg-black hover:text-white dark:bg-black/50 dark:text-white dark:border-white/10 dark:hover:bg-hacker-green dark:hover:text-black z-20">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
           </button>
        </div>

        <!-- Thumbnails -->
        <div v-if="hasMultipleImages" class="flex gap-2 mt-4 overflow-x-auto max-w-full p-2 scrollbar-hide pointer-events-auto">
          <button 
            v-for="(img, idx) in selectedAchievement.gallery" 
            :key="idx" 
            @click.stop="currentImageIndex = idx"
            class="w-16 h-16 rounded overflow-hidden border-2 transition-all shrink-0"
            :class="currentImageIndex === idx ? 'border-black opacity-100 dark:border-hacker-green' : 'border-transparent opacity-50 hover:opacity-100'"
          >
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
        
        <div class="text-center mt-4 font-mono pointer-events-auto text-white">
           <h3 class="text-xl font-bold mb-1">{{ selectedAchievement.title }}</h3>
           <p class="text-sm text-gray-400">{{ currentImageIndex + 1 }} / {{ selectedAchievement.gallery?.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Calendar } from 'lucide-vue-next'

import techcomfestImg1 from '@/assets/achievements/techcomfest/1.png'

import ncwImg1 from '@/assets/achievements/ncw/1.png'
import ncwImg2 from '@/assets/achievements/ncw/2.png'
import ncwImg3 from '@/assets/achievements/ncw/3.png'
import ncwImg4 from '@/assets/achievements/ncw/4.png'
import ncwImg5 from '@/assets/achievements/ncw/5.png'
import ncwImg6 from '@/assets/achievements/ncw/6.png'

import schematicsImg1 from '@/assets/achievements/schematics/1.png'
import schematicsImg2 from '@/assets/achievements/schematics/2.png'
import schematicsImg3 from '@/assets/achievements/schematics/3.png'
import schematicsImg4 from '@/assets/achievements/schematics/4.png'
import schematicsImg5 from '@/assets/achievements/schematics/5.png'

import gemastikImg1 from '@/assets/achievements/gemastik/1.png'
import gemastikImg2 from '@/assets/achievements/gemastik/2.png'
import gemastikImg3 from '@/assets/achievements/gemastik/3.png'
import gemastikImg4 from '@/assets/achievements/gemastik/4.png'

import wreckitImg1 from '@/assets/achievements/wreckit/1.png'

import theaceImg1 from '@/assets/achievements/theace/1.png'
import theaceImg2 from '@/assets/achievements/theace/2.png'

import itfestImg1 from '@/assets/achievements/itfest/1.JPG'
import itfestImg2 from '@/assets/achievements/itfest/2.JPG'

import finditImg1 from '@/assets/achievements/findit/1.png'

import slashrootImg1 from '@/assets/achievements/slashroot/1.png'

import hologyImg1 from '@/assets/achievements/hology/1.png'
import hologyImg2 from '@/assets/achievements/hology/2.png'

interface Achievement {
  title: string
  date: string
  issuer: string

  image?: string
  gallery?: string[]
}

const selectedAchievement = ref<Achievement | null>(null)
const currentImageIndex = ref(0)
const imageLoading = ref(true)

const openGallery = (item: Achievement) => {
  if (item.gallery && item.gallery.length > 0) {
    selectedAchievement.value = item
    currentImageIndex.value = 0
    document.body.style.overflow = 'hidden'
  }
}

const closeGallery = () => {
  selectedAchievement.value = null
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (selectedAchievement.value && selectedAchievement.value.gallery) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedAchievement.value.gallery.length
  }
}

const prevImage = () => {
  if (selectedAchievement.value && selectedAchievement.value.gallery) {
    currentImageIndex.value = (currentImageIndex.value - 1 + selectedAchievement.value.gallery.length) % selectedAchievement.value.gallery.length
  }
}

const currentGalleryImage = computed(() => {
  return selectedAchievement.value?.gallery?.[currentImageIndex.value]
})

// watch currentGalleryImage to set loading to true when it changes
import { watch } from 'vue' // Ensure watch is imported
watch(currentGalleryImage, () => {
    imageLoading.value = true
})

const hasMultipleImages = computed(() => {
  return (selectedAchievement.value?.gallery?.length || 0) > 1
})

const achievements: Achievement[] = [
  {
    title: "2nd Place TECHCOMFEST CTF",
    date: "Jan 2026",
    issuer: "Politeknik Negeri Semarang",
    image: techcomfestImg1,
    gallery: [techcomfestImg1]
  },
  {
    title: "1st Place National Cyber Week",
    date: "Dec 2025",
    issuer: "Binus University",
    image: ncwImg1,
    gallery: [ncwImg1, ncwImg2, ncwImg3, ncwImg4, ncwImg5, ncwImg6]
  },
  {
    title: "1st Place Schematics CTF",
    date: "Nov 2025",
    issuer: "Institut Teknologi Sepuluh November",
    image: schematicsImg1,
    gallery: [schematicsImg1, schematicsImg2, schematicsImg3, schematicsImg4, schematicsImg5]
  },
  {
    title: "1st Place GEMASTIK XVIII Cybersecurity",
    date: "Oct 2025",
    issuer: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi",
    image: gemastikImg1,
    gallery: [gemastikImg1, gemastikImg2, gemastikImg3, gemastikImg4]
  },
  {
    title: "1st Place Wreck IT 6.0",
    date: "Oct 2025",
    issuer: "Politeknik Sandi dan Siber Negara",
    image: wreckitImg1,
    gallery: [wreckitImg1]
  },
  {
    title: "2nd Place The ACE CTF",
    date: "Sep 2025",
    issuer: "Universitas Diponegoro",
    image: theaceImg1,
    gallery: [theaceImg1, theaceImg2]
  },
  {
    title: "2nd Place IT Festival CTF",
    date: "Aug 2025",
    issuer: "Institut Pertanian Bogor",
    image: itfestImg2,
    gallery: [itfestImg2, itfestImg1]
  },
  {
    title: "2nd Place Find IT CTF",
    date: "May 2025",
    issuer: "Universitas Gadjah Mada",
    image: finditImg1,
    gallery: [finditImg1]
  },
  {
    title: "2nd Place Slashroot 8.0 CTF",
    date: "Nov 2024",
    issuer: "ITB Stikom Bali",
    image: slashrootImg1,
    gallery: [slashrootImg1]
  },
  {
    title: "3rd Place HOLOGY 7.0 CTF",
    date: "Nov 2024",
    issuer: "Universitas Brawijaya",
    image: hologyImg1,
    gallery: [hologyImg1, hologyImg2]
  }
]
</script>
