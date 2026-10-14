<template>
  <!-- Load Swiper CSS via CDN for professional carousel styling -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

  <div class="min-h-screen bg-neutral-950 text-neutral-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-10">
      
      <!-- Header Section -->
      <div class="text-center max-w-5xl mx-auto space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/25">
          <span>📸 Pixabay Gallery</span>
        </div>
        <h1 class="text-3xl font-extrabold tracking-tight text-white">
          Explore High-Resolution Photography
        </h1>
        <p class="text-sm sm:text-base text-neutral-400">
          Search millions of stunning free images powered by the Pixabay API and Vue.
        </p>
      </div>

      <!-- Featured Carousel Section -->
      <div v-if="images.length > 0 && currentPage === 1" class="space-y-4">
        <div class="flex items-center justify-between px-2">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Featured Highlights
          </h2>
          <span class="text-xs text-neutral-400">Swipe or use arrows</span>
        </div>

        <div class="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
          <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :autoplay="{ delay: 4500, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :navigation="{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }"
            class="w-full h-[380px] sm:h-[440px]"
          >
            <swiper-slide v-for="image in images.slice(0, 6)" :key="image.id" class="relative group cursor-pointer" @click="openModal(image)">
              <img 
                :src="image.largeImageURL" 
                :alt="image.tags" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div class="max-w-2xl space-y-2">
                  <div class="flex flex-wrap gap-1.5">
                    <span 
                      v-for="tag in image.tags.split(',').slice(0, 3)" 
                      :key="tag"
                      class="text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium"
                    >
                      #{{ tag.trim() }}
                    </span>
                  </div>
                  <p class="text-lg sm:text-2xl font-bold text-white drop-shadow">
                    Photo by <span class="text-emerald-400">{{ image.user }}</span>
                  </p>
                  <div class="flex items-center gap-4 text-xs text-neutral-300 pt-1">
                    <span>❤️ {{ image.likes }} Likes</span>
                    <span>👁️ {{ image.views }} Views</span>
                    <span>📥 {{ image.downloads }} Downloads</span>
                    <span>💬 {{ image.comments }} Comments</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <button class="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-neutral-950/70 hover:bg-emerald-600 text-white flex items-center justify-center border border-neutral-700/50 backdrop-blur transition shadow-lg">
            ❮
          </button>
          <button class="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-neutral-950/70 hover:bg-emerald-600 text-white flex items-center justify-center border border-neutral-700/50 backdrop-blur transition shadow-lg">
            ❯
          </button>
        </div>
      </div>

      <!-- Search Bar & Controls -->
      <form @submit.prevent="handleSearchSubmit" class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto pt-2">
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

      <!-- Advanced Filtering & Sorting Toolbar -->
      <div class="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mr-2">Type:</span>
          <button 
            v-for="type in imageTypes" 
            :key="type.value"
            @click="selectedType = type.value"
            :class="[
              'px-3.5 py-1.5 rounded-lg text-xs font-medium transition',
              selectedType === type.value 
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700'
            ]"
          >
            {{ type.label }}
          </button>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto justify-end">
          <span class="text-xs font-semibold uppercase tracking-wider text-neutral-400">Sort By:</span>
          <select 
            v-model="sortBy"
            class="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
          >
            <option value="popular">Most Popular (Likes)</option>
            <option value="downloads">Most Downloaded</option>
            <option value="comments">Most Commented</option>
            <option value="views">Most Viewed</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-24">
        <Loader message="Fetching stunning photos..." :full-screen="false" />
      </div>

      <!-- Filtered Image Grid -->
      <div v-else-if="filteredAndSortedImages.length > 0" class="space-y-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="image in filteredAndSortedImages" 
            :key="image.id"
            @click="openModal(image)"
            class="group relative bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-neutral-700 transition-all duration-300 flex flex-col cursor-pointer"
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
                <span class="w-full text-center py-2 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium transition shadow">
                  View Full Size
                </span>
              </div>
            </div>

            <!-- Card Footer (Author & Stats) -->
            <div class="p-4 flex flex-col justify-between flex-1 space-y-3">
              <div class="flex items-center justify-between text-xs text-neutral-400">
                <span class="font-medium text-neutral-300 truncate max-w-[120px]">By {{ image.user }}</span>
                <div class="flex items-center gap-2.5">
                  <span class="flex items-center gap-1">❤️ {{ image.likes }}</span>
                  <span class="flex items-center gap-1">📥 {{ image.downloads }}</span>
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

        <!-- Pagination Controls Bar -->
        <div v-if="totalPages > 1" class="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-4">
          <!-- Page info & Quick Jump Form -->
          <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
            <span class="text-xs text-neutral-400">
              Page <span class="font-bold text-white">{{ currentPage }}</span> of <span class="font-bold text-white">{{ totalPages }}</span>
            </span>

            <form @submit.prevent="jumpToPage" class="flex items-center gap-2">
              <span class="text-xs text-neutral-400">Jump to:</span>
              <input 
                v-model.number="jumpPageInput"
                type="number"
                min="1"
                :max="totalPages"
                placeholder="Page"
                class="w-16 rounded-lg border border-neutral-800 bg-neutral-950 px-2 py-1.5 text-xs text-white text-center outline-none focus:border-emerald-500"
              />
              <button 
                type="submit"
                class="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition"
              >
                Go
              </button>
            </form>
          </div>

          <!-- Pagination Number Buttons & Next/Prev -->
          <div class="flex items-center gap-1.5 flex-wrap justify-center">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-xs font-semibold text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <!-- Page Number Pills (Displays subset around current page) -->
            <template v-for="page in displayedPages" :key="page">
              <button
                v-if="page !== '...'"
                @click="changePage(page)"
                :class="[
                  'w-9 h-9 rounded-xl text-xs font-semibold transition flex items-center justify-center',
                  currentPage === page
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                    : 'bg-neutral-800/60 text-neutral-300 hover:bg-neutral-700'
                ]"
              >
                {{ page }}
              </button>
              <span v-else class="px-2 text-neutral-500 text-xs">...</span>
            </template>

            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-xs font-semibold text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-24 space-y-3">
        <p class="text-neutral-400 text-base">No images match your filter criteria. Try adjusting your search or filters!</p>
      </div>

    </div>

    <!-- Lightbox Modal with Download Feature -->
    <Teleport to="body">
      <div v-if="activeImage" class="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <div class="relative max-w-5xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
            <div>
              <h3 class="text-sm sm:text-base font-bold text-white">Photo by <span class="text-emerald-400">{{ activeImage.user }}</span></h3>
              <p class="text-xs text-neutral-400">ID: {{ activeImage.id }}</p>
            </div>
            <button 
              @click="closeModal"
              class="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>

          <!-- Modal Image Preview -->
          <div class="relative flex-1 bg-neutral-950 flex items-center justify-center p-4 overflow-auto">
            <img 
              :src="activeImage.largeImageURL" 
              :alt="activeImage.tags"
              class="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg"
            />
          </div>

          <!-- Modal Footer with Stats & Download Button -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-neutral-800 bg-neutral-950/50">
            <div class="flex items-center gap-4 text-xs sm:text-sm text-neutral-300">
              <span>❤️ {{ activeImage.likes }} Likes</span>
              <span>👁️ {{ activeImage.views }} Views</span>
              <span>📥 {{ activeImage.downloads }} Downloads</span>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <a 
                :href="activeImage.pageURL" 
                target="_blank"
                class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-neutral-700 hover:border-neutral-600 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition text-center"
              >
                View on Pixabay ↗
              </a>
              <button 
                @click="downloadImage(activeImage)"
                :disabled="downloading"
                class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>📥</span>
                <span>{{ downloading ? 'Downloading...' : 'Download HD' }}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRoute } from 'vue-router';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import httpClient from "../plugins/interceptor.js";
import Loader from "../components/Loader.vue";

const swiperModules = [Autoplay, Pagination, Navigation];

const images = ref([]);
const loading = ref(false);
const route = useRoute();
const searchQuery = ref(route.query.q || "nature");
const selectedType = ref("all");
const sortBy = ref("popular");
const activeImage = ref(null);
const downloading = ref(false);

// Pagination States
const currentPage = ref(1);
const perPage = 24;
const totalHits = ref(0);
const jumpPageInput = ref("");

const imageTypes = [
  { label: "All Types", value: "all" },
  { label: "Photos", value: "photo" },
  { label: "Illustrations", value: "illustration" },
  { label: "Vectors", value: "vector" },
];

const searchImages = async () => {

  if (!searchQuery.value.trim()) return;

  // Update searchQuery based on URL query parameter if available
  if (route.query.q) {
    searchQuery.value = route.query.q;
  }
  
  try {
    loading.value = true;
    const response = await httpClient.get("", {
      params: {
        q: searchQuery.value,
        safesearch: "true",
        per_page: perPage,
        page: currentPage.value
      }
    });
    
    images.value = response.data.hits || [];
    // Pixabay API caps maximum pagination total hits at 500
    totalHits.value = Math.min(response.data.totalHits || 0, 500);
    
    // Scroll smoothly back to top of gallery on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error("Error fetching images from Pixabay:", error);
  } finally {
    loading.value = false;
  }
};

const handleSearchSubmit = () => {
  currentPage.value = 1;
  searchImages();
};

const totalPages = computed(() => {
  return Math.ceil(totalHits.value / perPage) || 1;
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    searchImages();
  }
};

const jumpToPage = () => {
  const pageNum = parseInt(jumpPageInput.value);
  if (pageNum >= 1 && pageNum <= totalPages.value) {
    changePage(pageNum);
    jumpPageInput.value = "";
  }
};

// Generates smart page number array with ellipses for clean navigation
const displayedPages = computed(() => {
  const current = currentPage.value;
  const total = totalPages.value;
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l;

  range.push(1);
  for (let i = current - delta; i <= current + delta; i++) {
    if (i < total && i > 1) {
      range.push(i);
    }
  }
  if (total > 1) {
    range.push(total);
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
});

const openModal = (image) => {
  activeImage.value = image;
};

const closeModal = () => {
  activeImage.value = null;
};

const downloadImage = async (image) => {
  try {
    downloading.value = true;
    const imageUrl = image.largeImageURL || image.webformatURL;
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `pixabay-${image.id}-${image.user.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed:", error);
    window.open(image.largeImageURL, "_blank");
  } finally {
    downloading.value = false;
  }
};

const filteredAndSortedImages = computed(() => {
  let result = [...images.value];

  if (selectedType.value !== "all") {
    result = result.filter(img => img.type === selectedType.value);
  }

  result.sort((a, b) => {
    if (sortBy.value === "popular") {
      return b.likes - a.likes;
    } else if (sortBy.value === "downloads") {
      return b.downloads - a.downloads;
    } else if (sortBy.value === "latest") {
      return b.id - a.id;
    } else if (sortBy.value === "comments") {
      return b.comments - a.comments;
    } else if (sortBy.value === "views") {
      return b.views - a.views;
    }
    return 0;
  });

  return result;
});

watch(
  () => route.query.q,
  (newQuery) => {
    searchQuery.value = newQuery || "nature";
    searchImages();
  }
);

onMounted(() => {
  searchImages();
});
</script>