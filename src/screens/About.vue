<template>
  <div class="min-h-screen bg-emerald-900 text-neutral-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Header Hero -->
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
          <span>🦕 Our Mission</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          About Vue Dinosaurs
        </h1>
        <p class="text-base sm:text-lg text-neutral-400 leading-relaxed">
          Bringing the prehistoric Mesozoic era back to life through modern web performance, open data, and modern Vue 3 architecture.
        </p>
      </div>

      <!-- Main Story Card -->
      <div class="rounded-2xl border border-neutral-800/80 bg-neutral-900/60 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <h2 class="text-2xl font-bold text-white mb-4">
          Preserving Prehistoric History
        </h2>
        <div class="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-300">
          <p>
            Welcome to <span class="font-semibold text-white">Vue Dinosaurs</span>! We are passionate developers and paleontology enthusiasts dedicated to compiling comprehensive, accessible, and structured data on prehistoric life.
          </p>
          <p>
            Whether you are exploring the towering anatomy of a Sauropod or examining the predatory instincts of Theropods, our platform is engineered to deliver fast, reactive, and engaging discovery tools directly in the browser.
          </p>
          <p>
            Thank you for exploring with us. Dive into our catalog, test our custom composables, and join us on this ongoing journey through the deep past!
          </p>
        </div>
      </div>

      <!-- Feature / Value Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
          <div class="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl ring-1 ring-emerald-500/20">
            🌿
          </div>
          <h3 class="text-base font-semibold text-white">Fossil Accuracy</h3>
          <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Curated species records detailing anatomical structure, geographical habitats, and evolutionary timelines.
          </p>
        </div>

        <div class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
          <div class="h-10 w-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center text-xl ring-1 ring-teal-500/20">
            ⚡
          </div>
          <h3 class="text-base font-semibold text-white">Vue 3 Reactivity</h3>
          <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Built using modern Vue 3 Composition API, custom Composables, and Tailwind CSS for instant filtering.
          </p>
        </div>

        <div class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
          <div class="h-10 w-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center text-xl ring-1 ring-sky-500/20">
            🌐
          </div>
          <h3 class="text-base font-semibold text-white">Open Knowledge</h3>
          <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Designed as an open ecosystem for developers and learners to study API integration and modern UI patterns.
          </p>
        </div>
      </div>

      <!-- Quick Action Navigation -->
      <div class="text-center pt-4">
        <router-link
          to="/dinosaur"
          class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors shadow-lg shadow-emerald-500/20"
        >
          <span>Explore Dinosaurs Archive</span>
          <span>→</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useDinosaur } from '../composables/useDinosaur';

const { dinosaurs, getDinosaur } = useDinosaur();

onMounted(() => {
  if (!dinosaurs.value || dinosaurs.value.length === 0) {
    getDinosaur();
  }
});
</script>