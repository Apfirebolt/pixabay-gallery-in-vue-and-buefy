<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-8">
      
      <!-- Header Section -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
          <span>📸 Pixabay Gallery</span>
        </div>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Explore High-Resolution Photography
        </h1>
        <p class="text-sm sm:text-base text-neutral-400">
          Search millions of stunning free images powered by the Pixabay API and FastAPI/Vue.
        </p>
      </div>

      <!-- Search Bar & Controls -->
      <form @submit.prevent="searchImages" class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
        <div class="relative w-full">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-500">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search high-res photos (e.g., nature, cyberpunk, architecture)..."
            class="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-lg"
          />
        </div>

        <button
          type="submit"
          class="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition shadow-lg shadow-emerald-600/20 shrink-0"
        >
          Search
        </button>
      </form>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-24">
        <Loader message="Fetching stunning photos..." :full-screen="false" />
      </div>

      <!-- Image Grid -->
      <div v-else-if="images.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="image in images" 
          :key="image.id"
          class="group relative bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-neutral-700 transition-all duration-300 flex flex-col"
        >
          <!-- Thumbnail Image -->
          <div class="relative aspect-[4/3] overflow-hidden bg-neutral-950">
            <img 
              :src="image.webformatURL" 
              :alt="image.tags"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <a 
                :href="image.largeImageURL" 
                target="_blank" 
                class="w-full text-center py-2 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium transition shadow"
              >
                View Full Size
              </a>
            </div>
          </div>

          <!-- Card Footer (Author & Stats) -->
          <div class="p-4 flex flex-col justify-between flex-1 space-y-3">
            <div class="flex items-center justify-between text-xs text-neutral-400">
              <span class="font-medium text-neutral-300">By {{ image.user }}</span>
              <div class="flex items-center gap-3">
                <span class="flex items-center gap-1">
                  ❤️ {{ image.likes }}
                </span>
                <span class="flex items-center gap-1">
                  👁️ {{ image.views }}
                </span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1 pt-2 border-t border-neutral-800/60">
              <span 
                v-for="tag in image.tags.split(',').slice(0, 3)" 
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300"
              >
                #{{ tag.trim() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-24 space-y-3">
        <p class="text-neutral-400 text-base">No images found for "{{ searchQuery }}". Try searching for something else!</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import httpClient from "../plugins/interceptor.js";
import Loader from "../components/Loader.vue";

const images = ref([]);
const loading = ref(false);
const searchQuery = ref("nature"); // Default starting query

const searchImages = async () => {
  if (!searchQuery.value.trim()) return;
  
  try {
    loading.value = true;
    const response = await httpClient.get("", {
      params: {
        q: searchQuery.value,
        image_type: "photo",
        safesearch: "true",
        per_page: 20
      }
    });
    images.value = response.data.hits || [];
  } catch (error) {
    console.error("Error fetching images from Pixabay:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  searchImages();
});
</script>