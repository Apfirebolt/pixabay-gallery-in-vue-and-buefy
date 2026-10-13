<template>
  <main class="min-h-screen bg-[var(--color-dark)] text-slate-100 flex items-center justify-center p-4 pt-24">
    <section class="max-w-6xl w-full bg-slate-900/60 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6">
      
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider border border-[var(--color-primary)]/20">
        <span>📸 Softgenie Gallery</span>
      </div>

      <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        Capture and Explore Visual Stories
      </h1>
      
      <p class="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
        Discover millions of high-resolution stock photos, scenic landscapes, and neon cyberpunk aesthetics powered by Pixabay API and Vue 3.
      </p>
      
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <router-link 
          to="/pixabay"
          class="w-full sm:w-auto bg-[var(--color-primary)] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[var(--color-primary)]/25 hover:bg-[var(--color-primary)]/90 transition-all duration-200"
        >
          Explore Gallery
        </router-link>

        <router-link 
          to="/about"
          class="w-full sm:w-auto bg-slate-800 hover:bg-slate-700/80 text-slate-200 font-semibold px-6 py-3.5 rounded-xl border border-slate-700/60 transition-all duration-200"
        >
          Learn More
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineOptions({
  name: 'Homepage'
})

const router = useRouter();

const handleExplore = () => {
  router.push('/pixabay');
};
</script>