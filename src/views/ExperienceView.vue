<template>
  <div class="max-w-4xl mx-auto py-6 md:py-12">
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
          <h4 class="text-blue-600 dark:text-blue-400 mb-4 text-sm font-mono">{{ exp.company }} • {{ exp.location }}</h4>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = [
  {
    period: "Jul 2024 - Present",
    role: "Teaching Assistant",
    company: "Universitas Indonesia",
    location: "Depok, Indonesia",
    description: "Coordinating TA programs for Introduction to Digital Systems and Computer Organization, supporting 100+ students per semester. Also, serving as TA for Foundations of Programming 1, Operating Systems, and Numerical Analysis, mentoring students through complex concepts including microprocessors, assembly language, OS principles, and computational mathematics."
  },
  {
    period: "Jul 2025 - Sep 2025",
    role: "Software Engineer Intern",
    company: "Gradient",
    location: "Depok, Indonesia",
    description: "Developed AI-integrated learning feature with GPT-based conversational interface, boosting AI feature usage by 100%. Implemented payment feature using React Native for cross-platform mobile applications and conducted comprehensive security testing to strengthen authentication mechanisms."
  },
  {
    period: "Dec 2024 - Mar 2025",
    role: "Ransomware Prevention R&D Team Member",
    company: "MarkAny GaneshaIT",
    location: "Jakarta, Indonesia",
    description: "Performed feature extraction from I/O Request Packet (IRP) data for LLM-based classification models to distinguish malware from benign processes. Implemented end-to-end integration of ransomware detection pipeline and refactored codebase to improve maintainability for production deployment."
  }
]
</script>