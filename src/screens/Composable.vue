<template>
  <div class="min-h-screen bg-emerald-900 text-neutral-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Hero Section -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
          <span>🌿 Prehistoric Archive</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Explore the Age of Dinosaurs
        </h1>
        <p class="text-base sm:text-lg text-neutral-400 leading-relaxed">
          Journey back millions of years into the Mesozoic era. Browse through magnificent species, uncover evolutionary adaptations, and explore fossil discoveries.
        </p>
      </div>

      <!-- Search & Controls Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
        <div class="relative w-full">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-500">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by dinosaur name or keyword..."
            class="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 backdrop-blur-sm"
          />
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="py-16">
        <Loader message="Excavating dinosaur fossils..." :full-screen="false" />
      </div>

      <!-- Dinosaur Grid -->
      <div v-else-if="filteredDinosaurs.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="dinosaur in filteredDinosaurs"
          :key="dinosaur.Name"
          class="group relative flex flex-col justify-between rounded-2xl border border-neutral-800/80 bg-neutral-900/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-neutral-900/90 hover:shadow-emerald-500/5 hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-2xl">🦖</span>
              <span class="text-[11px] font-mono uppercase bg-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-700/50">
                Species
              </span>
            </div>
            <h2 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {{ dinosaur.Name }}
            </h2>
            <p class="mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-4">
              {{ dinosaur.Description || "No detailed fossil record description available for this specimen." }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-neutral-800/60 text-xs text-neutral-100">
            <p class="font-mono text-center">Mesozoic Era</p>
          </div>
        </div>
      </div>

      <!-- Empty Search State -->
      <div v-else class="text-center py-16">
        <div class="text-4xl mb-3">🦴</div>
        <h3 class="text-base font-semibold text-white">No Dinosaurs Found</h3>
        <p class="text-sm text-neutral-500 mt-1">
          No fossils matched your search query "{{ searchQuery }}".
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Fuse from "fuse.js";
import { useDinosaur } from "../composables/useDinosaur";
import Loader from "../components/Loader.vue";

const { dinosaurs, getDinosaur, loading } = useDinosaur();
const searchQuery = ref("");

// Fuse.js configuration
const fuseOptions = {
  keys: [
    { name: "Name", weight: 0.7 },
    { name: "Description", weight: 0.3 }
  ],
  threshold: 0.35, // Balanced fuzziness (lower = stricter)
  ignoreLocation: true,
  minMatchCharLength: 2,
};

// Reactive Fuse instance that updates when dinosaur list changes
const fuseInstance = computed(() => {
  return new Fuse(dinosaurs.value || [], fuseOptions);
});

// Fuzzy search computation
const filteredDinosaurs = computed(() => {
  const query = searchQuery.value.trim();
  if (!query || query.length < 2) {
    return dinosaurs.value || [];
  }
  const results = fuseInstance.value.search(query);
  return results.map((res) => res.item);
});

onMounted(() => {
  if (!dinosaurs.value || dinosaurs.value.length === 0) {
    getDinosaur();
  }
});
</script>